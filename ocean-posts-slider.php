<?php
/**
 * Plugin Name:         Ocean Posts Slider
 * Plugin URI:          https://oceanwp.org/extension/ocean-posts-slider/
 * Description:         Display your latest posts in a beautiful slider with different options.
 * Version:             2.0.7
 * Author:              OceanWP
 * Author URI:          https://oceanwp.org/
 * Requires at least:   5.6
 * Tested up to:        6.5.3
 *
 * Text Domain: ocean-posts-slider
 * Domain Path: /languages
 *
 * @package Ocean_Posts_Slider
 * @category Core
 * @author OceanWP
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Returns the main instance of Ocean_Posts_Slider to prevent the need to use globals.
 *
 * @since  1.0.0
 * @return object Ocean_Posts_Slider
 */
function Ocean_Posts_Slider() {
	return Ocean_Posts_Slider::instance();
} // End Ocean_Posts_Slider()

Ocean_Posts_Slider();

/**
 * Main Ocean_Posts_Slider Class
 *
 * @class Ocean_Posts_Slider
 * @version 1.0.0
 * @since 1.0.0
 * @package Ocean_Posts_Slider
 */
final class Ocean_Posts_Slider {
	/**
	 * Ocean_Posts_Slider The single instance of Ocean_Posts_Slider.
	 *
	 * @var     object
	 * @access  private
	 * @since   1.0.0
	 */
	private static $_instance = null;

	/**
	 * The token.
	 *
	 * @var     string
	 * @access  public
	 * @since   1.0.0
	 */
	public $token;

	/**
	 * The version number.
	 *
	 * @var     string
	 * @access  public
	 * @since   1.0.0
	 */
	public $version;

	/**
	 * The plugin url.
	 *
	 * @var     string
	 * @access  public
	 */
	public $plugin_url;

	/**
	 * The plugin path.
	 *
	 * @var     string
	 * @access  public
	 */
	public $plugin_path;

	/**
	 * The plugin data.
	 *
	 * @var     array
	 * @access  public
	 */
	public $plugin_data;

	// Admin - Start
	/**
	 * The admin object.
	 *
	 * @var     object
	 * @access  public
	 * @since   1.0.0
	 */
	public $admin;

	/**
	 * Constructor function.
	 *
	 * @access  public
	 * @since   1.0.0
	 * @return  void
	 */
	public function __construct( $widget_areas = array() ) {
		$this->token       = 'ocean-posts-slider';
		$this->plugin_url  = plugin_dir_url( __FILE__ );
		$this->plugin_path = plugin_dir_path( __FILE__ );
		$this->plugin_data = get_file_data( __FILE__, array( 'Version' => 'Version' ), false );
		$this->version     = $this->plugin_data['Version'];

		register_activation_hook( __FILE__, array( $this, 'install' ) );

		add_action( 'init', array( $this, 'ops_load_plugin_textdomain' ) );

		add_action( 'init', array( $this, 'ops_setup' ) );

		add_action( 'init', array( $this, 'register_post_type' ), 0 );
	}

	/**
	 * Main Ocean_Posts_Slider Instance
	 *
	 * Ensures only one instance of Ocean_Posts_Slider is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @static
	 * @see Ocean_Posts_Slider()
	 * @return Main Ocean_Posts_Slider instance
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;
	} // End instance()

	/**
	 * Load the localisation file.
	 *
	 * @access  public
	 * @since   1.0.0
	 * @return  void
	 */
	public function ops_load_plugin_textdomain() {
		load_plugin_textdomain( 'ocean-posts-slider', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
	}

	/**
	 * Cloning is forbidden.
	 *
	 * @since 1.0.0
	 */
	public function __clone() {
		_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?' ), '1.0.0' );
	}

	/**
	 * Unserializing instances of this class is forbidden.
	 *
	 * @since 1.0.0
	 */
	public function __wakeup() {
		_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?' ), '1.0.0' );
	}

	/**
	 * Installation.
	 * Runs on activation. Logs the version number and assigns a notice message to a WordPress option.
	 *
	 * @access  public
	 * @since   1.0.0
	 * @return  void
	 */
	public function install() {
		$this->_log_version_number();
	}

	/**
	 * Log the plugin version number.
	 *
	 * @access  private
	 * @since   1.0.0
	 * @return  void
	 */
	private function _log_version_number() {
		// Log the version number.
		update_option( $this->token . '-version', $this->version );
	}

	/**
	 * Setup all the things.
	 * Only executes if OceanWP or a child theme using OceanWP as a parent is active and the extension specific filter returns true.
	 *
	 * @return void
	 */
	public function ops_setup() {
		$theme = wp_get_theme();

		if ( 'OceanWP' == $theme->name || 'oceanwp' == $theme->template ) {
			// Capabilities
			$capabilities = apply_filters( 'ocean_main_metaboxes_capabilities', 'manage_options' );

			require_once $this->plugin_path . '/includes/helpers.php';
			require_once $this->plugin_path . '/includes/posts-slider.php';
			add_action( 'wp_enqueue_scripts', array( $this, 'ops_scripts' ), 999 );
			add_action( 'admin_enqueue_scripts', array( $this, 'metabox_scripts' ) );
			if ( current_user_can( $capabilities ) ) {
				add_action( 'butterbean_register', array( $this, 'metabox' ), 10, 2 );
			}
			add_action( 'add_meta_boxes_ocean_posts_slider', array( $this, 'add_meta_box' ) );
			add_filter( 'ocean_metaboxes_post_types_scripts', array( $this, 'post_type' ) );
			add_filter( 'ocean_primary_texts', array( $this, 'primary_texts' ) );
			add_filter( 'ocean_primary_backgrounds', array( $this, 'primary_backgrounds' ) );
			add_filter( 'ocean_primary_borders', array( $this, 'primary_borders' ) );
		}
	}

	/**
	 * Enqueue scripts
	 *
	 * @since  1.0.0
	 */
	public function ops_scripts() {
		// Load vendors scripts.
		wp_enqueue_script( 'swiper', plugins_url( '/assets/vendors/swiper/swiper-bundle.min.js', __FILE__ ), array(), '6.7.1', true );
		wp_enqueue_style( 'ops-swiper', plugins_url( '/assets/vendors/swiper/swiper-bundle.min.css', __FILE__ ) );

		// Load main stylesheet
		wp_enqueue_style( 'ops-styles', plugins_url( '/assets/css/style.min.css', __FILE__ ) );
		// Load custom js methods.
		wp_enqueue_script( 'ops-js-scripts', plugins_url( '/assets/js/posts-slider.min.js', __FILE__ ), array( 'oceanwp-main', 'swiper' ), null, true );
	}

	/**
	 * Register custom post type
	 *
	 * @since  1.0.0
	 */
	public static function register_post_type() {
		register_post_type(
			'ocean_posts_slider',
			apply_filters(
				'ocean_posts_slider_args',
				array(
					'labels'              => array(
						'name'               => esc_html__( 'Posts Slider', 'ocean-posts-slider' ),
						'singular_name'      => esc_html__( 'Posts Slider Item', 'ocean-posts-slider' ),
						'add_new'            => esc_html__( 'Add New', 'ocean-posts-slider' ),
						'add_new_item'       => esc_html__( 'Add New Item', 'ocean-posts-slider' ),
						'edit_item'          => esc_html__( 'Edit Item', 'ocean-posts-slider' ),
						'new_item'           => esc_html__( 'Add New Item', 'ocean-posts-slider' ),
						'view_item'          => esc_html__( 'View Item', 'ocean-posts-slider' ),
						'search_items'       => esc_html__( 'Search Items', 'ocean-posts-slider' ),
						'not_found'          => esc_html__( 'No Items Found', 'ocean-posts-slider' ),
						'not_found_in_trash' => esc_html__( 'No Items Found In Trash', 'ocean-posts-slider' ),
					),
					'public'              => false,
					'has_archive'         => false,
					'hierarchical'        => false,
					'show_ui'             => true,
					'show_in_menu'        => true,
					'show_in_admin_bar'   => false,
					'show_in_nav_menus'   => false,
					'can_export'          => true,
					'has_archive'         => false,
					'exclude_from_search' => true,
					'publicly_queryable'  => false,
					'capability_type'     => 'page',
					'menu_icon'           => 'dashicons-format-gallery',
					'menu_position'       => 20,
					'supports'            => array( 'title' ),
				)
			)
		);
	}

	/**
	 * Add post type
	 *
	 * @since 1.0.0
	 */
	public function post_type( $post_type ) {
		$post_type[] = 'ocean_posts_slider';
		return $post_type;
	}

	/**
	 * Load metabox scripts and styles
	 *
	 * @since 1.0.0
	 */
	public function metabox_scripts( $hook ) {

		// Only needed on these admin screens
		if ( $hook != 'edit.php' && $hook != 'post.php' && $hook != 'post-new.php' ) {
			return;
		}

		// Get global post
		global $post;

		// Return if post is not object
		if ( ! is_object( $post ) ) {
			return;
		}

		// Return if wrong post type
		if ( 'ocean_posts_slider' != $post->post_type ) {
			return;
		}

		// Enqueue scripts
		wp_enqueue_script( 'oceanwp-ps-metabox-script', plugins_url( '/assets/js/metabox.min.js', __FILE__ ), array( 'jquery' ), $this->version, true );

	}

	/**
	 * Register metabox
	 *
	 * @since  1.0.0
	 */
	public function metabox( $butterbean, $post_type ) {

		if ( 'ocean_posts_slider' !== $post_type ) {
			return;
		}

		// Register managers, sections, controls, and settings here.
		$butterbean->register_manager(
			'oceanwp_ps_settings',
			array(
				'label'     => esc_html__( 'Posts Slider Settings', 'ocean-posts-slider' ),
				'post_type' => 'ocean_posts_slider',
				'context'   => 'normal',
				'priority'  => 'high',
			)
		);

		$manager = $butterbean->get_manager( 'oceanwp_ps_settings' );

		$manager->register_section(
			'oceanwp_ps_general',
			array(
				'label' => esc_html__( 'General', 'ocean-posts-slider' ),
				'icon'  => 'dashicons-admin-tools',
			)
		);

		$manager->register_control(
			'oceanwp_ps_post_type', // Same as setting name.
			array(
				'section'     => 'oceanwp_ps_general',
				'type'        => 'select',
				'label'       => esc_html__( 'Post Type', 'ocean-posts-slider' ),
				'description' => esc_html__( 'Select your post type to display in the slider.', 'ocean-posts-slider' ),
				'choices'     => $this->helpers( 'post_type' ),
			)
		);

		$manager->register_setting(
			'oceanwp_ps_post_type', // Same as control name.
			array(
				'sanitize_callback' => 'sanitize_key',
			)
		);
		$manager->register_control(
			'oceanwp_ps_limit', // Same as setting name.
			array(
				'section'     => 'oceanwp_ps_posts',
				'type'        => 'select',
				'label'       => esc_html__( 'Limit by categories', 'ocean-posts-slider' ),
				'description' => esc_html__( 'Limit number of post by category.', 'ocean-posts-slider' ),
				'choices'     => array(
					true  => esc_html__( 'Only First post by categories', 'ocean-posts-slider' ),
					false => esc_html__( 'All post', 'ocean-posts-slider' ),
				),
			)
		);
		$manager->register_setting(
			'oceanwp_ps_limit', // Same as control name.
			array(
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => false,
			)
		);

		$manager->register_control(
			'oceanwp_ps_style', // Same as setting name.
			array(
				'section'     => 'oceanwp_ps_general',
				'type'        => 'select',
				'label'       => esc_html__( 'Style', 'ocean-posts-slider' ),
				'description' => esc_html__( 'Select the slider style.', 'ocean-posts-slider' ),
				'choices'     => array(
					'one' => esc_html__( 'One Image', 'ocean-posts-slider' ),
					'two' => esc_html__( 'Three Images', 'ocean-posts-slider' ),
				),
			)
		);

		$manager->register_setting(
			'oceanwp_ps_style', // Same as control name.
			array(
				'sanitize_callback' => 'sanitize_key',
			)
		);

		$manager->register_control(
			'oceanwp_ps_number', // Same as setting name.
			array(
				'section'     => 'oceanwp_ps_general',
				'type'        => 'number',
				'label'       => esc_html__( 'Number', 'ocean-posts-slider' ),
				'description' => esc_html__( 'Enter the number of posts to display.', 'ocean-posts-slider' ),
				'attr'        => array(
					'min'  => '0',
					'step' => '1',
				),
			)
		);

		$manager->register_setting(
			'oceanwp_ps_number', // Same as control name.
			array(
				'sanitize_callback' => array( $this, 'sanitize_absint' ),
			)
		);

		$manager->register_control(
			'oceanwp_ps_number_per_slide', // Same as setting name.
			array(
				'section'     => 'oceanwp_ps_general',
				'type'        => 'number',
				'label'       => esc_html__( 'Number Per Slide', 'ocean-posts-slider' ),
				'description' => esc_html__( 'Enter the number of posts to display per slide.', 'ocean-posts-slider' ),
				'attr'        => array(
					'min'  => '0',
					'step' => '1',
				),
			)
		);

		$manager->register_setting(
			'oceanwp_ps_number_per_slide', // Same as control name.
			array(
				'sanitize_callback' => array( $this, 'sanitize_absint' ),
			)
		);

		$manager->register_control(
			'oceanwp_ps_size', // Same as setting name.
			array(
				'section'     => 'oceanwp_ps_general',
				'type'        => 'select',
				'label'       => esc_html__( 'Size', 'ocean-posts-slider' ),
				'description' => esc_html__( 'Select the size of your images.', 'ocean-posts-slider' ),
				'choices'     => $this->helpers( 'img_sizes' ),
			)
		);

		$manager->register_setting(
			'oceanwp_ps_size', // Same as control name.
			array(
				'sanitize_callback' => 'sanitize_key',
			)
		);

		$manager->register_control(
			'oceanwp_ps_img_width', // Same as setting name.
			array(
				'section'     => 'oceanwp_ps_general',
				'type'        => 'number',
				'label'       => esc_html__( 'Image Width', 'ocean-posts-slider' ),
				'description' => esc_html__( 'Enter your custom image width.', 'ocean-posts-slider' ),
				'attr'        => array(
					'min'  => '0',
					'step' => '1',
				),
			)
		);

		$manager->register_setting(
			'oceanwp_ps_img_width', // Same as control name.
			array(
				'sanitize_callback' => array( $this, 'sanitize_absint' ),
			)
		);

		$manager->register_control(
			'oceanwp_ps_img_height', // Same as setting name.
			array(
				'section'     => 'oceanwp_ps_general',
				'type'        => 'number',
				'label'       => esc_html__( 'Image Height', 'ocean-posts-slider' ),
				'description' => esc_html__( 'Enter your custom image height.', 'ocean-posts-slider' ),
				'attr'        => array(
					'min'  => '0',
					'step' => '1',
				),
			)
		);

		$manager->register_setting(
			'oceanwp_ps_img_height', // Same as control name.
			array(
				'sanitize_callback' => array( $this, 'sanitize_absint' ),
			)
		);

		$manager->register_control(
			'oceanwp_ps_more_text', // Same as setting name.
			array(
				'section'     => 'oceanwp_ps_general',
				'type'        => 'text',
				'label'       => esc_html__( 'Read More Text', 'ocean-posts-slider' ),
				'description' => esc_html__( 'Enter your custom text for the read more button.', 'ocean-posts-slider' ),
			)
		);

		$manager->register_setting(
			'oceanwp_ps_more_text', // Same as control name.
			array(
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => esc_html__( 'Read More', 'ocean-posts-slider' ),
			)
		);

		$manager->register_section(
			'oceanwp_ps_slide',
			array(
				'label' => esc_html__( 'Slide', 'ocean-posts-slider' ),
				'icon'  => 'dashicons-images-alt2',
			)
		);

		$manager->register_control(
			'oceanwp_ps_margin', // Same as setting name.
			array(
				'section'     => 'oceanwp_ps_slide',
				'type'        => 'text',
				'label'       => esc_html__( 'Margin', 'ocean-posts-slider' ),
				'description' => esc_html__( 'Add a space between the slider and your content. eg 0 0 20px 0 (top right bottom left).', 'ocean-posts-slider' ),
			)
		);

		$manager->register_setting(
			'oceanwp_ps_margin', // Same as control name.
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);

		$manager->register_control(
			'oceanwp_ps_speed', // Same as setting name.
			array(
				'section'     => 'oceanwp_ps_slide',
				'type'        => 'number',
				'label'       => esc_html__( 'Speed', 'ocean-posts-slider' ),
				'description' => esc_html__( 'Enter the transition speed of the slides.', 'ocean-posts-slider' ),
				'attr'        => array(
					'min'  => '0',
					'step' => '1',
				),
			)
		);

		$manager->register_setting(
			'oceanwp_ps_speed', // Same as control name.
			array(
				'sanitize_callback' => array( $this, 'sanitize_absint' ),
				'default'           => '7000',
			)
		);

		$manager->register_section(
			'oceanwp_ps_posts',
			array(
				'label' => esc_html__( 'Posts', 'ocean-posts-slider' ),
				'icon'  => 'dashicons-admin-post',
			)
		);

		$manager->register_control(
			'oceanwp_ps_include_cat', // Same as setting name.
			array(
				'section'     => 'oceanwp_ps_posts',
				'type'        => 'text',
				'label'       => esc_html__( 'Include Cat', 'ocean-posts-slider' ),
				'description' => esc_html__( 'Enter the slug of your category to include, separate cat by commas.', 'ocean-posts-slider' ),
			)
		);

		$manager->register_setting(
			'oceanwp_ps_include_cat', // Same as control name.
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);

		$manager->register_control(
			'oceanwp_ps_exclude_cat', // Same as setting name.
			array(
				'section'     => 'oceanwp_ps_posts',
				'type'        => 'text',
				'label'       => esc_html__( 'Exclude Cat', 'ocean-posts-slider' ),
				'description' => esc_html__( 'Enter the slug of your category to exclude, separate cat by commas.', 'ocean-posts-slider' ),
			)
		);

		$manager->register_setting(
			'oceanwp_ps_exclude_cat', // Same as control name.
			array(
				'sanitize_callback' => 'sanitize_text_field',
			)
		);

		$manager->register_control(
			'oceanwp_ps_order', // Same as setting name.
			array(
				'section'     => 'oceanwp_ps_posts',
				'type'        => 'select',
				'label'       => esc_html__( 'Order', 'ocean-posts-slider' ),
				'description' => esc_html__( 'Designates the ascending or descending order.', 'ocean-posts-slider' ),
				'choices'     => array(
					'ASC'  => esc_html__( 'Ascending Order', 'ocean-posts-slider' ),
					'DESC' => esc_html__( 'Descending Order', 'ocean-posts-slider' ),
				),
			)
		);

		$manager->register_setting(
			'oceanwp_ps_order', // Same as control name.
			array(
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => 'DESC',
			)
		);

		$manager->register_control(
			'oceanwp_ps_orderby', // Same as setting name.
			array(
				'section'     => 'oceanwp_ps_posts',
				'type'        => 'select',
				'label'       => esc_html__( 'Order By', 'ocean-posts-slider' ),
				'description' => esc_html__( 'Sort retrieved posts by parameter.', 'ocean-posts-slider' ),
				'choices'     => array(
					'none'          => esc_html__( 'No Order', 'ocean-posts-slider' ),
					'ID'            => esc_html__( 'ID', 'ocean-posts-slider' ),
					'author'        => esc_html__( 'Author', 'ocean-posts-slider' ),
					'title'         => esc_html__( 'Title', 'ocean-posts-slider' ),
					'name'          => esc_html__( 'Slug', 'ocean-posts-slider' ),
					'type'          => esc_html__( 'Post Type', 'ocean-posts-slider' ),
					'date'          => esc_html__( 'Date', 'ocean-posts-slider' ),
					'modified'      => esc_html__( 'Modified', 'ocean-posts-slider' ),
					'parent'        => esc_html__( 'Parent', 'ocean-posts-slider' ),
					'rand'          => esc_html__( 'Random', 'ocean-posts-slider' ),
					'comment_count' => esc_html__( 'Comment Count', 'ocean-posts-slider' ),
				),
			)
		);

		$manager->register_setting(
			'oceanwp_ps_orderby', // Same as control name.
			array(
				'sanitize_callback' => 'sanitize_text_field',
				'default'           => 'date',
			)
		);

	}

	/**
	 * Sanitize function for integers
	 *
	 * @since  1.0.0
	 */
	public function sanitize_absint( $value ) {
		return $value && is_numeric( $value ) ? absint( $value ) : '';
	}

	/**
	 * Helpers
	 *
	 * @since  1.0.0
	 */
	public static function helpers( $return = null ) {

		// Return post types array
		if ( 'post_type' == $return ) {
			$post_types     = array( esc_html__( 'Post', 'ocean-posts-slider' ) );
			$get_post_types = get_post_types(
				array(
					'public'   => true,
					'_builtin' => false,
				),
				'objects',
				'and'
			);

			foreach ( $get_post_types as $key => $val ) {
				if ( $key != 'post' ) {
					$post_types[ $key ] = $val->labels->name;
				}
			}

			return $post_types;
		}

		// Return registered image sizes
		elseif ( 'img_sizes' == $return ) {
			global $_wp_additional_image_sizes;

			$sizes                        = array();
			$get_intermediate_image_sizes = get_intermediate_image_sizes();

			// Create the full array with sizes and crop info
			foreach ( $get_intermediate_image_sizes as $_size ) {
				if ( in_array( $_size, array( 'thumbnail', 'medium', 'medium_large', 'large' ) ) ) {
					$sizes[ $_size ]['width']  = get_option( $_size . '_size_w' );
					$sizes[ $_size ]['height'] = get_option( $_size . '_size_h' );
					$sizes[ $_size ]['crop']   = (bool) get_option( $_size . '_crop' );
				} elseif ( isset( $_wp_additional_image_sizes[ $_size ] ) ) {
					$sizes[ $_size ] = array(
						'width'  => $_wp_additional_image_sizes[ $_size ]['width'],
						'height' => $_wp_additional_image_sizes[ $_size ]['height'],
						'crop'   => $_wp_additional_image_sizes[ $_size ]['crop'],
					);
				}
			}

			$image_sizes = array();

			foreach ( $sizes as $size_key => $size_attributes ) {
				$image_sizes[ $size_key ] = ucwords( str_replace( '_', ' ', $size_key ) ) . sprintf( ' - %d x %d', $size_attributes['width'], $size_attributes['height'] );
			}

			$image_sizes['full']   = _x( 'Full', 'Image Size Control', 'ocean-posts-slider' );
			$image_sizes['custom'] = _x( 'Custom', 'Image Size Control', 'ocean-posts-slider' );

			return $image_sizes;

		}

	}

	/**
	 * Add shorcode metabox
	 *
	 * @since  1.0.0
	 */
	public function add_meta_box( $post ) {

		add_meta_box(
			'oceanwp-ps-shortcode-metabox',
			esc_html__( 'Shortcode', 'ocean-posts-slider' ),
			array( $this, 'display_meta_box' ),
			'ocean_posts_slider',
			'side',
			'low'
		);

	}

	/**
	 * Add shorcode metabox
	 *
	 * @since  1.0.0
	 */
	public function display_meta_box( $post ) { ?>

		<input type="text" class="widefat" value='[ocean_posts_slider id="<?php echo $post->ID; ?>"]' readonly />

		<?php
	}

	/**
	 * Add primary texts style
	 *
	 * @since  1.0.0
	 */
	public function primary_texts( $texts ) {

		$texts[] = '.oceanwp-post-list.one .oceanwp-post-category:hover,.oceanwp-post-list.one .oceanwp-post-category:hover a,.oceanwp-post-list.two .slick-arrow:hover,.oceanwp-post-list.two article:hover .oceanwp-post-category,.oceanwp-post-list.two article:hover .oceanwp-post-category a';

		return $texts;

	}

	/**
	 * Add primary backgrounds style
	 *
	 * @since  1.0.0
	 */
	public function primary_backgrounds( $backgrounds ) {

		$backgrounds[] = '.oceanwp-post-list.one .readmore:hover,.oceanwp-post-list.one .oceanwp-post-category,.oceanwp-post-list.two .oceanwp-post-category,.oceanwp-post-list.two article:hover .slide-overlay-wrap';

		return $backgrounds;

	}

	/**
	 * Add primary borders style
	 *
	 * @since  1.0.0
	 */
	public function primary_borders( $borders ) {

		$borders[] = '.oceanwp-post-list.one .readmore:hover';

		return $borders;

	}

} // End Class

// --------------------------------------------------------------------------------
// region Freemius
// --------------------------------------------------------------------------------

if ( ! function_exists( 'ocean_posts_slider_fs' ) ) {
	// Create a helper function for easy SDK access.
	function ocean_posts_slider_fs() {
		global $ocean_posts_slider_fs;

		if ( ! isset( $ocean_posts_slider_fs ) ) {
			$ocean_posts_slider_fs = OceanWP_EDD_Addon_Migration::instance( 'ocean_posts_slider_fs' )->init_sdk(
				array(
					'id'              => '3813',
					'slug'            => 'ocean-posts-slider',
					'public_key'      => 'pk_eae1ef26c136dd8af5ef7a6cf7557',
					'is_premium'      => false,
					'is_premium_only' => false,
					'has_paid_plans'  => false,
				)
			);
		}

		return $ocean_posts_slider_fs;
	}

	function ocean_posts_slider_fs_addon_init() {
		if ( class_exists( 'Ocean_Extra' ) ) {
			OceanWP_EDD_Addon_Migration::instance( 'ocean_posts_slider_fs' )->init();
		}
	}

	if ( 0 == did_action( 'owp_fs_loaded' ) ) {
		// Init add-on only after parent theme was loaded.
		add_action( 'owp_fs_loaded', 'ocean_posts_slider_fs_addon_init', 15 );
	} else {
		if ( class_exists( 'Ocean_Extra' ) ) {
			/**
			 * This makes sure that if the theme was already loaded
			 * before the plugin, it will run Freemius right away.
			 *
			 * This is crucial for the plugin's activation hook.
			 */
			ocean_posts_slider_fs_addon_init();
		}
	}
}

// endregion
