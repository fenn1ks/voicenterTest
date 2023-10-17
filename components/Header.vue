<template>
    <section class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__descr">
                    <h1 class="header__title">{{ headerComponentData.title }}</h1>
                    <h3 class="header__subtitle">
                        {{ headerComponentData.headerSubtitle }}
                    </h3>
                    <div class="header__text" v-html="headerComponentData.headerText">
                    </div>
                    <button class="btn btn-danger header__btn">Read More</button>
                </div>
                <img :src="headerComponentData.headerImage" :alt="headerComponentData.imageAltText" class="header__img" />
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        headerComponentData: Object,
    },
    name: 'Header'
}
</script>
