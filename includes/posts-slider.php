<?php
/**
 * Posts Slider Shortcode
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

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
			$meta_display = get_post_meta( $id, 'oceanwp_ps_meta_display', true );
			if ( ! in_array( $meta_display, array( 'date_author', 'date_only', 'author_only', 'none' ), true ) ) {
				$meta_display = 'one' === $style ? 'date_author' : 'none';
			}
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

			// Optional CSS custom properties are scoped to this slider instance.
			// Invalid or unset values cannot reach the HTML style attribute.
			$meta_css_vars = array();
			$meta_color = get_post_meta( $id, 'oceanwp_ps_meta_color', true );
			$meta_color = is_string( $meta_color ) ? sanitize_hex_color( $meta_color ) : '';
			if ( $meta_color ) {
				$meta_css_vars[] = '--ops-meta-color:' . $meta_color;
				$classes .= ' ops-meta-has-color';
			}

			$meta_size = get_post_meta( $id, 'oceanwp_ps_meta_font_size', true );
			if ( is_scalar( $meta_size ) && preg_match( '/^\d+$/', (string) $meta_size ) && (int) $meta_size >= 8 && (int) $meta_size <= 48 ) {
				$meta_css_vars[] = '--ops-meta-font-size:' . (int) $meta_size . 'px';
				$classes .= ' ops-meta-has-size';
			}

			$meta_spacing = get_post_meta( $id, 'oceanwp_ps_meta_spacing', true );
			if ( is_scalar( $meta_spacing ) && preg_match( '/^\d+$/', (string) $meta_spacing ) && (int) $meta_spacing >= 0 && (int) $meta_spacing <= 80 ) {
				$meta_css_vars[] = '--ops-meta-spacing:' . (int) $meta_spacing . 'px';
				$classes .= ' ops-meta-has-spacing';
			}
			$add_style = $meta_css_vars ? ' style="' . esc_attr( implode( ';', $meta_css_vars ) ) . '"' : '';

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
			if ( true === $limit ) {
				$only_post         = array();
				$cat_ID_list       = array();
				$only_post_ordered = array();
				$categories        = get_terms(
					array(
						'taxonomy'   => 'category',
						'hide_empty' => true,
					)
				);

				if ( is_wp_error( $categories ) ) {
					$categories = array();
				}

				// get all categories term_id
				foreach ( $categories as $category ) {
					$cat_ID_list[] = absint( $category->term_id );
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

												<?php $this->render_post_meta( $meta_display ); ?>
												<a href="<?php the_permalink(); ?>" class="readmore"><?php echo esc_attr( $more_text ); ?></a>

												<?php
											} elseif ( 'two' == $style ) {
												?>

												<?php $this->render_post_meta( $meta_display ); ?>
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
		 * Render accessible, individually selectable post date and author metadata.
		 * Keep the existing CSS hook for custom styles and child themes.
		 *
		 * @since 2.1.2
		 * @param string $meta_display Metadata choice.
		 * @return void
		 */
		private function render_post_meta( $meta_display ) {
			if ( 'none' === $meta_display ) {
				return;
			}

			$show_date   = in_array( $meta_display, array( 'date_author', 'date_only' ), true );
			$show_author = in_array( $meta_display, array( 'date_author', 'author_only' ), true );
			?>
			<div class="oceanwp-post-date">
				<?php if ( $show_date ) : ?>
					<time class="oceanwp-post-meta-date" datetime="<?php echo esc_attr( get_the_date( DATE_W3C ) ); ?>"><?php echo esc_html( get_the_date() ); ?></time>
				<?php endif; ?>
				<?php if ( $show_author ) : ?>
					<?php
					// Use this plugin's translation when available, while preserving
					// existing Ocean Extra translations for upgraded installations.
					$by_label = __( 'by', 'ocean-posts-slider' );
					if ( 'by' === $by_label ) {
						$by_label = __( 'by', 'ocean-extra' );
					}
					?>
					<?php echo esc_html( $by_label ); ?> <?php the_author_posts_link(); ?>
				<?php endif; ?>
			</div>
			<?php
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
