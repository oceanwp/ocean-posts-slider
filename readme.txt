=== Ocean Posts Slider ===
Contributors: oceanwp, apprimit, wpfleek
Tags: slider, posts slider, oceanwp
Requires at least: 5.6
Tested up to: 6.5.3
Stable tag: 2.0.7
Requires PHP: 7.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

== Description ==

Display your latest posts in a beautiful slider with different options.
This plugin requires the [OceanWP](https://oceanwp.org/) theme to be installed.

== Installation ==

1. Upload `ocean-posts-slider` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Done!

== Frequently Asked Questions ==

= I installed the plugin but it does not work =

This plugin will only work with the [OceanWP](https://oceanwp.org/) theme.

== Screenshots ==

1. The options of the slider.
2. One Image Style.
3. Three Images Style.

== Changelog ==

= 2.0.7 - MAY 20 2024 =
- Updated: Compatibility: WordPress version number.

= 2.0.6 - SEP 6 2023 =
- Updated: Compatibility: WordPress version number.

= 2.0.5 - MAY 23 2023 =
- Added: Compatibility: SiteOrigin: Custom templates support.
- Added: Compatibility: PHP 8.2.6: Creation of dynamic property Ocean_Posts_Slider::$plugin_path and Ocean_Posts_Slider::$plugin_url is deprecated.

= 2.0.4 - FEB 28 2023 =
- Added: Prevent Elementor swiper scripts (3.11+ version) impacting the slider script.

= 2.0.3 =
- Updated: WordPress version number for compatibility.

= 2.0.2 =
- Fixed: Navigation: arrows.
- Fixed: Compatibility: Elementor Swiper JS causing duplicate navigation arrows.
- Fixed: Compatibility: JetPack causing duplicate navigation arrows.

= 2.0.1 =
- Fixed: Conflict swiper js plugin with elementor swiper.

= 2.0.0 =
- Added: Vanilla JS.

= 1.1.1 =
- Added: Version updated for WordPress 5.7.

= 1.1.0 =
- Added: Version updated for WordPress 5.4.

= 1.0.13 =
- Added: Codes for the Freemius switch.

= 1.0.12 =
- Added: Filter for the post heading tags.

= 1.0.11 =
- Added: Polish translation, thanks to Fin Fafarafiel.
- Tweak: e.preventDefault(); used instead of return false; for the modal script so you can add additional events.
- Tweak: Better approch for calling the metabox scripts.

= 1.0.10 =
- Added: New setting to only display the first post of each categories, thank you to Stéphane Legrand.

= 1.0.9 =
- Added: Spanish language, thank you to Angel Julian Mena.
- Deleted: Admin notice if OceanWP is not the theme used.

= 1.0.8 =
- Fixed: Capabilities issue in the metabox.

= 1.0.7 =
- Tweak: Changed the select2 script to avoid plugins conflicts.

= 1.0.6 =
- Tweak: Some code improvements for the metabox.

= 1.0.5.2 =
- Added: New select field to choose your post type to display in the slider, default is post.
- Tweak: JS script, if the carousel script is disabled, there will be no error in the console.
- Fixed: Issue with the primary color arrays.
- Deleted: Image resizer, directly incorporated into Ocean Extra.

= 1.0.5.1 =
- Fixed: Issue with style.

= 1.0.5 =
- Fixed: Issue with the slide transition on mobile.

= 1.0.4 =
- Added: New field "Include Cat" to only show some categories on the slider.

= 1.0.3.1 =
- Tweak: Admin script loaded only when necessary.

= 1.0.3 =
- Added: New option "Number Per Slide" to add your custom number of posts per slide.
- Added: New options "Image Width" and "Image Height" to add your own images sizes.

= 1.0.2 =
- Fixed: Small issue with variables.

= 1.0.1 =
- Fixed: Conflict with Ocean Product Sharing.

= 1.0.0 =
- Initial release.