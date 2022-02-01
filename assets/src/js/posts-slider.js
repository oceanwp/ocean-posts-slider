import OW_Base from "./base/base";

class OW_PostsSlider extends OW_Base {
    getDefaultSettings() {
        return {
            selectors: {
                postsLists: ".oceanwp-post-list",
            },
        };
    }

    getDefaultElements() {
        const selectors = this.getSettings("selectors");

        return {
            postsLists: document.querySelectorAll(selectors.postsLists),
        };
    }

    onInit() {
        super.onInit();

        if (this.hasPostsSlider()) {
            this.initSwiper();
        }
    }

    initSwiper() {
        this.elements.postsLists.forEach((postsList) => {
            const typeTwo = postsList.classList.contains("two");

            const swiper = new Swiper(postsList, {
                spaceBetween: postsList.dataset.spaceBetween ? Number.parseInt(postsList.dataset.spaceBetween) : 0,
                speed: 500,
                autoplay: {
                    delay: Number.parseInt(postsList.dataset.slideshow),
                },
                loop: true,
                loopFillGroupWithBlank: true,
                preloadImages: true,
                breakpoints: {
                    480: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    980: {
                        slidesPerView: typeTwo ? 2 : 1,
                        slidesPerGroup: typeTwo ? 2 : 1,
                    },
                    1200: {
                        slidesPerView: typeTwo ? postsList.dataset.number : 1,
                        slidesPerGroup: typeTwo ? postsList.dataset.number : 1,
                    },
                },

                // Prevent confilict with other plugins
                noSwipingClass: "oceanwp-swiper-no-swiping",
                containerModifierClass: "oceanwp-swiper-container-",
                slideClass: "oceanwp-swiper-slide",
                slideBlankClass: "oceanwp-swiper-slide-invisible-blank",
                slideActiveClass: "oceanwp-swiper-slide-active",
                slideDuplicateActiveClass: "oceanwp-swiper-slide-duplicate-active",
                slideVisibleClass: "oceanwp-swiper-slide-visible",
                slideDuplicateClass: "oceanwp-swiper-slide-duplicate",
                slideNextClass: "oceanwp-swiper-slide-next",
                slideDuplicateNextClass: "oceanwp-swiper-slide-duplicate-next",
                slidePrevClass: "oceanwp-swiper-slide-prev",
                slideDuplicatePrevClass: "oceanwp-swiper-slide-duplicate-prev",
                wrapperClass: "oceanwp-swiper-wrapper",
                navigation: {
                    nextEl: ".oceanwp-swiper-button-next",
                    prevEl: ".oceanwp-swiper-button-prev",
                    hideOnClick: false,
                    disabledClass: "oceanwp-swiper-button-disabled",
                    hiddenClass: "oceanwp-swiper-button-hidden",
                    lockClass: "oceanwp-swiper-button-lock",
                },
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    // 'bullets' or 'progressbar' or 'fraction' or 'custom'
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    bulletClass: "oceanwp-swiper-pagination-bullet",
                    bulletActiveClass: "oceanwp-swiper-pagination-bullet-active",
                    modifierClass: "oceanwp-swiper-pagination-",
                    // NEW
                    currentClass: "oceanwp-swiper-pagination-current",
                    totalClass: "oceanwp-swiper-pagination-total",
                    hiddenClass: "oceanwp-swiper-pagination-hidden",
                    progressbarFillClass: "oceanwp-swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "oceanwp-swiper-pagination-progressbar-opposite",
                    clickableClass: "oceanwp-swiper-pagination-clickable",
                    // NEW
                    lockClass: "oceanwp-swiper-pagination-lock",
                },
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: false,
                    draggable: false,
                    snapOnRelease: true,
                    lockClass: "oceanwp-swiper-scrollbar-lock",
                    dragClass: "oceanwp-swiper-scrollbar-drag",
                },
                lazy: {
                    checkInView: false,
                    enabled: false,
                    loadPrevNext: false,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: false,
                    scrollingElement: "",
                    elementClass: "oceanwp-swiper-lazy",
                    loadingClass: "oceanwp-swiper-lazy-loading",
                    loadedClass: "oceanwp-swiper-lazy-loaded",
                    preloaderClass: "oceanwp-swiper-lazy-preloader",
                },
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: true,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "oceanwp-swiper-slide-thumb-active",
                    thumbsContainerClass: "oceanwp-swiper-container-thumbs",
                },
                zoom: {
                    enabled: false,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: true,
                    containerClass: "oceanwp-swiper-zoom-container",
                    zoomedSlideClass: "oceanwp-swiper-slide-zoomed",
                },
                a11y: {
                    enabled: true,
                    notificationClass: "oceanwp-swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group",
                },
            });
        });
    }

    hasPostsSlider() {
        return !document.body.classList.contains("no-carousel");
    }
}

("use script");
new OW_PostsSlider();
