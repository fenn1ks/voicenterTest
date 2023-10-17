<template>
    <section class="items">
        <div class="container">
            <h3 class="title">{{ itemsBlockData.title }}</h3>
            <div class="items__wrapper">
                <div class="items__nav">
                    <div class="items__nav-title">{{ itemsBlockData.navTitle }}</div>
                    <ul class="items__nav-links">
                        <li class="items__nav-item" v-for="item in itemsComponentData">
                            <a :href="computedHref(item.key)" class="items__nav-link">
                                {{ item.title }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="items__elements">
                    <div class="items__element" v-for="item in itemsComponentData" :key="item.key" :id="item.key">
                        <img :src="item.image" class="items__element-img" :alt="item.imageAltAtr">
                        <div class="items__element-descr">
                            <div class="items__element-title" :id="item.key">{{ item.title }}</div>
                            <div class="items__element-subtitle">
                                {{ item.subtitle }}
                            </div>
                            <div class="items__element-text" v-html="item.text">

                            </div>
                            <button class="btn btn-danger items__btn">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        itemsComponentData: Array,
        itemsBlockData: Object,
    },
    methods: {
        computedHref(key) {
            return '#' + key;
        },
    },
    name: 'Items'
}
</script>
<style lang="">
   
</style>