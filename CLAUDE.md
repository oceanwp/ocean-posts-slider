# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Ocean Posts Slider is a free OceanWP add-on (on WordPress.org) that shows posts in a Swiper slider through a shortcode. It only works with the OceanWP theme (or a child theme of it).

## Commands

```bash
npx grunt                # bundle JS (browserify + babel), minify JS, compile/prefix SCSS, csscomb
npx grunt watch          # rebuild SCSS and assets/src JS on change
npx grunt build          # copy a release into build/ocean-posts-slider/
npx grunt package        # zip build/ocean-posts-slider/ into build/ocean-posts-slider.zip
composer make-pot        # regenerate languages/ocean-posts-slider.pot
```

package.json has no npm scripts. Unlike the other Ocean add-ons there is no `phpcs.xml.dist` and no composer lint script (composer only installs phpcs + WPCS). There are no tests.

## Architecture

- `ocean-posts-slider.php` holds the `Ocean_Posts_Slider` singleton. It always registers the `ocean_posts_slider` post type (admin only, title support only). `ops_setup()` on `init` does the rest only if the theme is OceanWP or its child. Nothing is gated by a license. The Freemius block runs only when Ocean Extra is active, with `is_premium` and `has_paid_plans` false.
- Each slider is an `ocean_posts_slider` post. Its settings are post meta `oceanwp_ps_*` (post type, style, number, categories, image size, speed, order, etc.), edited through Ocean Extra's Butterbean metabox (`metabox()` on `butterbean_register`). Without Ocean Extra there is no settings UI.
- Output is the shortcode `[ocean_posts_slider id="X"]` (class in `includes/posts-slider.php`). The markup is built inline there; there are no overridable templates. Custom image sizes use Ocean Extra's `ocean_extra_resize()` when Ocean Extra is active.
- The `ocean_primary_texts`, `ocean_primary_backgrounds` and `ocean_primary_borders` filters add slider selectors to OceanWP's primary color CSS.
- Front-end assets are enqueued on every page (`wp_enqueue_scripts` and Elementor's `after_register_scripts`). `is_swiper_required()` exists but is not called. Swiper JS is loaded from `assets/vendors/swiper/8.4.5/`, the Swiper CSS from `assets/vendors/swiper/` (unversioned folder). If Elementor's `e_swiper_latest` experiment and Ocean Elementor Widgets are both active, the existing `swiper` handle is deregistered first.
- `includes/image-resizer.php` (`OPS_Resize`, `ops_resize()`) is not included anywhere.

## Assets

- `assets/src/js/posts-slider.js` (ES module, imports `base/base.js`) is bundled to `assets/js/posts-slider.js` and minified to `posts-slider.min.js` (enqueued).
- `assets/js/metabox.js` is edited directly and minified to `metabox.min.js`.
- `assets/css/style.scss` compiles to `style.css` and `style.min.css` (enqueued). `assets/css/metabox.css` / `metabox.min.css` have no SCSS source and are not enqueued by any PHP file.
- All built files are committed, so any source edit needs a rebuild. The default Grunt task runs `csscomb` with `.csscomb.json`, which is not in the repo.

## Version headers

The version and "Requires/Tested" fields live in three places: the `ocean-posts-slider.php` header, `readme.txt` and `README.md`. They currently disagree: the header and readme.txt say "Requires at least: 6.8" (readme.txt also "Requires PHP: 7.4"), README.md says WordPress 5.6.
