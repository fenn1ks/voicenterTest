<template>
  <div>
    <Header :headerComponentData ="headerComponentData" />
    <Items :itemsComponentData="itemsComponentData" :itemsBlockData="itemsBlockData" />
    <Slides :slidesComponentData="slidesComponentData" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Items from '@/components/Items.vue';
import Slides from '@/components/Slides.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'Voicenter Test',
  components: {
    Header,
    Items,
    Slides,
    Footer
  },
  data() {
    return {
      itemsComponentData: [],
      itemsBlockData: {},
      headerComponentData: {},
      slidesComponentData: [],
    };
  },
  created() {
    this.getContentData();
  },
  methods: {
    getContentData() {
      return fetch('https://voicenter-test-api.voicenter-ltd.workers.dev/api/site-data')
        .then((data) => {
          return data.json();
        })
        .then((collectedData) => {
          const serializedData = collectedData.data.siteData.testTaskTemplate_30_15673;
          this.itemsComponentData = JSON.parse(serializedData.testTaskSecondDescriptiveBlockItems);
          this.itemsBlockData = {
            title: serializedData.testTaskSecondBlockTitle,
            navTitle: serializedData.testTaskSecondBlockSideNavigationTitle
          };
          this.headerComponentData = {
            title: serializedData.testTaskHeaderTitle,
            imageAltText: serializedData.testTaskHeaderImageAltText,
            headerSubtitle: serializedData.testTaskHeaderSubtitle,
            headerText: serializedData.testTaskHeaderText,
            headerImage: serializedData.testTaskHeaderImage,
          };
          this.slidesComponentData = JSON.parse(serializedData.testTaskSlidesBlockSlides);
        })
    }
  }
}
</script>
