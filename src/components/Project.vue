<template>
    <div class="container mt-12 flex flex-row justify-center mx-auto" id="project">
        <h1 class="font-normal text-gray-100 text-lg
                    sm:text-2xl py-3 my-2 mx-auto">
                    Some of my projects
        </h1>
    </div>
    <!-- swiper -->
    <swiper
        :spaceBetween="30"
        :effect="'fade'"
        :navigation="true"
        :pagination="{
            clickable: true,
        }"
        :modules="modules" class="mySwiper mb-24">
        <!-- all slides -->
        <swiper-slide>
            <a href="https://www.areacrewmonfalcone.it" class="transition-all">
                <img src="/AreaCrew.jpg" loading="lazy" width="780" height="390"/>
            </a>
        </swiper-slide>
        <swiper-slide>
            <a href="https://www.cssreset.tk">
                <img src="/CssReset.jpg" loading="lazy" width="780" height="390"/>
            </a>
        </swiper-slide>
        <swiper-slide>
            <a href="https://pcs-configurator.netlify.app/">
                <img src="/PcConfig.jpg" loading="lazy" width="780" height="390"/>
            </a>
        </swiper-slide>
        <swiper-slide>
            <a href="https://typer-racer.netlify.app/">
                <img src="/Typer.jpg" loading="lazy" width="780" height="390"/>
            </a>
        </swiper-slide>
    </swiper>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/effect-fade";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  //the style
  import '../style.css'
  // import required modules
  import { EffectFade, Navigation, Pagination } from "swiper";
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectFade, Navigation, Pagination],
      };
    },
  };
</script>