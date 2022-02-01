<?php
/**
 * Posts Slider Shortcode
 */

if ( ! class_exists( 'OceanWP_Posts_Slider_Shortcode' ) ) {

	class OceanWP_Posts_Slider_Shortcode {

		/**
		 * Start things up
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			add_shortcode( 'ocean_posts_slider', array( $this, 'posts_slider_shortcode' ) );
		}

		/**
		 * Build the front end
		 *
		 * @since 1.0.0
		 */
		public function posts_slider_display( $id ) {

			// Vars
			$post_type    = get_post_meta( $id, 'oceanwp_ps_post_type', true );
			$post_type    = $post_type ? $post_type : 'post';
			$style        = get_post_meta( $id, 'oceanwp_ps_style', true );
			$style        = $style ? $style : 'two';
			$number       = get_post_meta( $id, 'oceanwp_ps_number', true );
			$number       = $number ? $number : '6';
			$per_slide    = get_post_meta( $id, 'oceanwp_ps_number_per_slide', true );
			$per_slide    = $per_slide ? $per_slide : '';
			$include_cat  = get_post_meta( $id, 'oceanwp_ps_include_cat', true );
			$include_cat  = $include_cat ? $include_cat : '';
			$exclude_cat  = get_post_meta( $id, 'oceanwp_ps_exclude_cat', true );
			$exclude_cat  = $exclude_cat ? $exclude_cat : '';
			$spaceBetween = get_post_meta( $id, 'oceanwp_ps_space_between', true );
			$size         = get_post_meta( $id, 'oceanwp_ps_size', true );
			$size         = $size ? $size : 'large';
			$img_width    = get_post_meta( $id, 'oceanwp_ps_img_width', true );
			$img_width    = $img_width ? $img_width : '';
			$img_height   = get_post_meta( $id, 'oceanwp_ps_img_height', true );
			$img_height   = $img_height ? $img_height : '';
			$speed        = get_post_meta( $id, 'oceanwp_ps_speed', true );
			$speed        = $speed ? $speed : '7000';
			$order        = get_post_meta( $id, 'oceanwp_ps_order', true );
			$order        = $order ? $order : 'DESC';
			$orderby      = get_post_meta( $id, 'oceanwp_ps_orderby', true );
			$orderby      = $orderby ? $orderby : 'date';
			$more_text    = get_post_meta( $id, 'oceanwp_ps_more_text', true );
			$more_text    = $more_text ? $more_text : esc_html__( 'Read More', 'ocean-posts-slider' );
			$limit        = get_post_meta( $id, 'oceanwp_ps_limit', true );
			$limit        = $limit ? true : false;

			// Heading tag
			$heading = apply_filters( 'ops_posts_heading', 'h2' );

			// Add classes
			$classes   = array( 'oceanwp-post-list', 'clr', 'oceanwp-swiper-container' );
			$classes[] = $style;
			if ( 'one' == $style ) {
				$classes[] = 'container';
			}
			$classes = implode( ' ', $classes );

			// If has margin
			$add_style = '';

			// Number of posts per slide for the style two
			if ( 'two' == $style
				&& '' == $per_slide ) {
				$per_slide = '3';
			}

			// Query args
			$args = array(
				'post_type'      => $post_type,
				'posts_per_page' => $number,
				'order'          => $order,
				'orderby'        => $orderby,
				'no_found_rows'  => true,
				'tax_query'      => array(
					'relation' => 'AND',
				),
			);

			/* Query for limit by category */
			if ( $limit == true ) {
				$only_post         = array();
				$cat_ID_list       = array();
				$only_post_ordered = array();
				$categories        = get_terms( 'category', array( 'hide_empty' => 1 ) );

				// get all categories term_id
				foreach ( $categories as $category ) {
					array_push( $cat_ID_list, $category->term_id );
				}

				// get last post of each categories
				foreach ( $cat_ID_list as $category ) {
					$args   = array(
						'numberposts' => 1,
						'category'    => $category,
						'post_status' => 'publish',
						'orderby'     => 'post_date',
					);
					$recent = wp_get_recent_posts( $args );
					array_push( $only_post, $recent[0]['ID'] );
				}
				$args = array( 'post__in' => $only_post );

				// ordering post by date
				foreach ( $args['post__in'] as $posts ) {
					$temp[ get_the_date( 'Y-m-d H:i:s', $posts ) ] = $posts;
				}
				krsort( $temp );
				foreach ( $temp as $time => $post ) {
					array_push( $only_post_ordered, $post );
				}

				// return args for query
				$args = array(
					'post__in' => $only_post_ordered,
				);
			}

			// Include category
			if ( ! empty( $include_cat ) ) {

				// Sanitize category and convert to array
				$include_cat = str_replace( ', ', ',', $include_cat );
				$include_cat = explode( ',', $include_cat );

				// Add to query arg
				$args['tax_query'][] = array(
					'taxonomy' => 'category',
					'field'    => 'slug',
					'terms'    => $include_cat,
					'operator' => 'IN',
				);

			}

			// Exclude category
			if ( ! empty( $exclude_cat ) ) {

				// Sanitize category and convert to array
				$exclude_cat = str_replace( ', ', ',', $exclude_cat );
				$exclude_cat = explode( ',', $exclude_cat );

				// Add to query arg
				$args['tax_query'][] = array(
					'taxonomy' => 'category',
					'field'    => 'slug',
					'terms'    => $exclude_cat,
					'operator' => 'NOT IN',
				);

			}

			$oceanwp_query = new WP_Query( $args );

			// Output posts
			if ( $oceanwp_query->have_posts() ) : ?>

				<div <?php echo is_rtl() ? 'dir="rtl"' : ''; ?> class="<?php echo esc_attr( $classes ); ?>"<?php echo $add_style; ?> data-slideshow="<?php echo esc_attr( $speed ); ?>" data-number="<?php echo esc_attr( $per_slide ); ?>" data-space-between="<?php echo esc_attr( $spaceBetween ); ?>">

					<div class="posts-slider clr oceanwp-swiper-wrapper">

						<?php
						// Start loop
						while ( $oceanwp_query->have_posts() ) :
							$oceanwp_query->the_post();

							if ( has_post_thumbnail() ) {
								?>

								<article id="post-<?php the_ID(); ?>" <?php post_class( 'clr oceanwp-swiper-slide' ); ?>>

									<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">

										<?php
										// If Ocean Extra is active
										if ( class_exists( 'Ocean_Extra' ) ) {

											// Images attr
											$img_id   = get_post_thumbnail_id( get_the_ID(), 'full' );
											$img_url  = wp_get_attachment_image_src( $img_id, 'full', true );
											$img_atts = ocean_extra_image_attributes( $img_url[1], $img_url[2], $img_width, $img_height );

											// Display post thumbnail
											if ( 'custom' == $size
												&& ! empty( $img_atts ) ) {
												?>
												<img src="<?php echo ocean_extra_resize( $img_url[0], $img_atts['width'], $img_atts['height'], $img_atts['crop'], true, $img_atts['upscale'] ); ?>" alt="<?php esc_attr( the_title() ); ?>" width="<?php echo esc_attr( $img_width ); ?>" height="<?php echo esc_attr( $img_height ); ?>"<?php oceanwp_schema_markup( 'image' ); ?> />
												<?php
											} else {
												the_post_thumbnail(
													$size,
													array(
														'alt' => get_the_title(),
														'itemprop' => 'image',
													)
												);
											}
										}
										?>

									</a>

									<div class="slide-overlay-wrap">

										<div class="slide-overlay">

											<div class="oceanwp-post-category"><?php the_category( ' / ', get_the_ID() ); ?></div>

											<?php
											if ( 'one' == $style ) {
												?>
												<div class="line"></div>
											<?php } ?>

											<<?php echo esc_attr( $heading ); ?>><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></<?php echo esc_attr( $heading ); ?>>

											<?php
											if ( 'one' == $style ) {
												?>

												<div class="line"></div>

												<div class="oceanwp-post-date"><?php echo get_the_date(); ?> <?php _e( 'by', 'ocean-extra' ); ?> <?php the_author_posts_link(); ?></div>
												<a href="<?php the_permalink(); ?>" class="readmore"><?php echo esc_attr( $more_text ); ?></a>

												<?php
											} elseif ( 'two' == $style ) {
												?>

												<div class="oceanwp-post-excerpt">
													<p><?php ops_excerpt( 20 ); ?></p>
													<a href="<?php the_permalink(); ?>" class="readmore"><?php echo esc_attr( $more_text ); ?></a>
												</div>

											<?php } ?>

										</div>

									</div>

								</article>

								<?php
							}

							// End entry loop
						endwhile;

						// Reset the post data to prevent conflicts with WP globals
						wp_reset_postdata();
						?>

					</div>

					<!-- If we need pagination -->
					<div class="oceanwp-swiper-pagination"></div>

					<!-- If we need navigation buttons -->
					<div class="oceanwp-swiper-button-prev oceanwp-swiper-button-white"></div>
					<div class="oceanwp-swiper-button-next oceanwp-swiper-button-white"></div>

					<!-- If we need scrollbar -->
					<div class="oceanwp-swiper-scrollbar"></div>
				</div>

				<?php
				// End post check
			endif;

		}

		/**
		 * Registers the function as a shortcode
		 *
		 * @since 1.0.0
		 */
		public function posts_slider_shortcode( $atts, $content = null ) {

			// Attributes
			$atts = shortcode_atts(
				array(
					'id' => '',
				),
				$atts,
				'ocean_posts_slider'
			);

			ob_start();

			if ( $atts['id'] ) {
				$this->posts_slider_display( $atts['id'] );
			}

			return ob_get_clean();

		}

	}

}
new OceanWP_Posts_Slider_Shortcode();
