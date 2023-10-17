<template>
    <section class="slides">
        <div class="container">
            <div class="title">slides Section</div>
            <Carousel :wrap-around="true">
                <Slide v-for="(item, index) in slidesComponentData" :key="index">
                    <div class="carousel__item">
                        <div class="slides__element">
                            <div class="slides__element-descr">
                                <div class="slides__element-title">
                                    {{ item.title }}</div>
                                <div class="slides__element-subtitle">
                                    {{ item.subtitle }}
                                </div>
                                <div class="slides__element-text" v-html="cutText(item.description)">
                                </div>
                                <div class="btn btn-danger slides__btn">{{ item.buttonText }}</div>
                            </div>
                            <img :src="item.image" :alt="item.imageAlt" class="slides__element-img">
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation>
                        <template #next>
                            <div class="control-next-icon"></div>
                        </template>
                        <template #prev>
                            <div class="control-prev-icon"></div>
                        </template>
                    </Navigation>
                    <Pagination />
                </template>
            </Carousel>
        </div>
    </section>
</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    props: {
        slidesComponentData: Array,
    },
    updated() {
        this.$nextTick(function () {
            this.consol();
        })
    },
    methods: {
        consol() {
            console.log(this.slidesComponentData);
        },
        cutText(text) {
            if (text.length > 355) {
                return text.slice(0, 355) + '...';
            }

            return text;
        },
    },
    name: "Slides",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
})
</script>
  
<style></style>