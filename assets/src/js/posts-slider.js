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
            this.initFlickity();
        }
    }

    initFlickity() {
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
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
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
            });
        });
    }

    hasPostsSlider() {
        return !document.body.classList.contains("no-carousel");
    }
}

("use script");
new OW_PostsSlider();
