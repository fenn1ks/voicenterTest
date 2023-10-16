<template>
    <section class="slides">
        <div class="container">
            <div class="title">slides Section</div>
            <div id="carousel" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carousel" :data-bs-slide-to="index"
                        :class="{ 'active': activeImgIndex === index }" @click="setActiveImgIndex(index)"
                        aria-current="true" :aria-label="item.title" v-for="(item, index) in slidesComponentData">
                    </button>
                </div>
                <div class="carousel-inner">
                    <div :class="{ 'carousel-item': true, 'active': activeImgIndex === index }"
                        v-for="(item, index) in slidesComponentData">
                        <div class="slides__element">
                            <div class="slides__element-descr">
                                <div class="slides__element-title">{{ item.title }}</div>
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
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev"
                    @click="setActiveImgIndex(activeImgIndex - 1)">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next"
                    @click="setActiveImgIndex(activeImgIndex + 1)">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        slidesComponentData: Array,
    },
    data() {
        return {
            activeImgIndex: 0,
        };
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
            if (text.length > 365) {
                return text.slice(0, 365) + '...';
            } else {
                return text;
            }
        },
        setActiveImgIndex(index) {
            console.log(index);
            this.activeImgIndex = index;
        },
    },
    name: "Slides"
}
</script>
<style lang="">
   
</style>