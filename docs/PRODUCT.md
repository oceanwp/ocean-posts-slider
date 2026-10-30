# Ocean Posts Slider - Features Documentation

Complete documentation of all features available in Ocean Posts Slider.

---

## Table of Contents

1. [Plugin Overview](#plugin-overview)
2. [License & Availability](#license--availability)
3. [Posts Sliders](#posts-sliders)
4. [Slider Styles & Front-End Behavior](#slider-styles--front-end-behavior)
5. [Admin Pages](#admin-pages)
6. [Display & Developer API](#display--developer-api)

---

## Plugin Overview

**Ocean Posts Slider** shows your latest posts in a sliding carousel with the featured image, category, title and a read more link, placed anywhere with a shortcode.

| Property | Value |
|----------|-------|
| Version | 2.1.1 |
| Minimum WordPress | 6.8 |
| Minimum PHP | 7.4 (readme.txt) |
| Tested up to | 7.1 |
| Text Domain | `ocean-posts-slider` |
| Main class | `Ocean_Posts_Slider` (singleton, `Ocean_Posts_Slider()`) |
| Requires | OceanWP theme (or a child theme), Ocean Extra (slider settings metabox and custom image sizes) |
| Distribution | Free on WordPress.org |

### Key Capabilities

- Create any number of sliders, each with its own settings
- Two styles: one large image per slide, or three images per slide
- Show posts or any public custom post type
- Filter by category slugs, order by date, title, random and more
- Pick the newest post from each category
- Autoplay with a set delay, looping, arrows and pagination bullets
- Responsive: 1 slide on phones, 2 on tablets, and your number per slide on desktop (three-image style)
- Uses the theme's primary color for hover states

---

## License & Availability

Ocean Posts Slider is free. It registers with Freemius (product ID `3813`) only when Ocean Extra is active, as a free product with no paid plans. All features work without a license.

---

## Posts Sliders

Go to **Posts Slider > Add New**, give the slider a title, and set its options in the OceanWP Settings metabox (provided by Ocean Extra). A **Shortcode** box in the sidebar shows the shortcode to copy, for example `[ocean_posts_slider id="123"]`.

**General**

| Setting | Meta key | Description | Default |
|---------|----------|-------------|---------|
| **Post Type** | `oceanwp_ps_post_type` | Post, or any public custom post type | Post |
| **Style** | `oceanwp_ps_style` | One Image or Three Images | Three Images |
| **Number** | `oceanwp_ps_number` | How many posts to load | 6 |
| **Number Per Slide** | `oceanwp_ps_number_per_slide` | Posts per slide on desktop (Three Images style) | 3 |
| **Size** | `oceanwp_ps_size` | Full or Custom image size | Large (used when nothing is saved) |
| **Image Width / Image Height** | `oceanwp_ps_img_width` / `oceanwp_ps_img_height` | Custom size in pixels. Images are cropped through Ocean Extra | Empty |
| **Read More Text** | `oceanwp_ps_more_text` | Button text | Read More |

**Slide**

| Setting | Meta key | Description | Default |
|---------|----------|-------------|---------|
| **Margin** | `oceanwp_ps_margin` | Space around the slider. Saved, but not used by the output | Empty |
| **Speed** | `oceanwp_ps_speed` | Autoplay delay in milliseconds | 7000 |

**Posts**

| Setting | Meta key | Description | Default |
|---------|----------|-------------|---------|
| **Include Cat** | `oceanwp_ps_include_cat` | Category slugs to include, comma separated | Empty |
| **Exclude Cat** | `oceanwp_ps_exclude_cat` | Category slugs to exclude, comma separated | Empty |
| **Order** | `oceanwp_ps_order` | Ascending or Descending | Descending |
| **Order By** | `oceanwp_ps_orderby` | No Order, ID, Author, Title, Slug, Post Type, Date, Modified, Parent, Random, Comment Count | Date |
| **Limit by categories** | `oceanwp_ps_limit` | All posts, or only the newest post from each category (newest first) | All posts |

Without Ocean Extra the Posts Slider screen still exists, but the settings metabox does not, so every slider uses the defaults above.

---

## Slider Styles & Front-End Behavior

| Style | Each slide shows |
|-------|------------------|
| **One Image** | One full-width image with category, title, date and author, and a read more button. The slider sits inside the theme container |
| **Three Images** | Several images side by side, each with category, title, a 20-word excerpt and a read more button |

Front-end behavior:

- Only posts with a featured image are shown.
- The slider uses Swiper. It autoplays with the **Speed** delay, loops, and has previous/next arrows and pagination bullets.
- Three Images style shows 1 slide below 980px, 2 from 980px, and **Number Per Slide** from 1200px. One Image style always shows 1.
- Right-to-left sites get `dir="rtl"` on the slider.
- Category hover colors, read more backgrounds and borders follow OceanWP's primary color setting.
- The Swiper library, the slider script and its styles are loaded on every front-end page, and also when Elementor registers its front-end scripts.

---

## Admin Pages

| Screen | Location | Purpose |
|--------|----------|---------|
| Posts Slider | **Posts Slider** (admin menu) | List, add and edit sliders |

---

## Display & Developer API

### Shortcode

| Shortcode | Attributes | Description |
|-----------|------------|-------------|
| `[ocean_posts_slider id="X"]` | `id`: an `ocean_posts_slider` post ID | Renders that slider |

The markup is built in PHP (`includes/posts-slider.php`). There are no template files to override.

### Filters

| Hook | Description |
|------|-------------|
| `ocean_posts_slider_args` | Arguments for the `ocean_posts_slider` post type |
| `ops_posts_heading` | HTML tag for slide titles (default `h2`) |

### Data Storage

| Data | Where |
|------|-------|
| Sliders | `ocean_posts_slider` posts (not public, admin only) |
| Slider settings | Post meta `oceanwp_ps_*` on each slider |
| Version | Option `ocean-posts-slider-version` (set on activation) |

### Uninstall

The plugin has no uninstall routine. Deleting it leaves the slider posts, their post meta and the version option in the database.

---

*Ocean Posts Slider - Swiper carousels of your latest posts for OceanWP*
