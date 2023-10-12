<template>
  <div>
    <Header/>
    <Items/>
    <slides />
    <foot />
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Items from '@/components/items.vue';
import slides from '@/components/slides.vue';
import foot from '@/components/foot.vue';
export default {
  name: 'Voicenter Test',
  components: {
    Header,
    Items,
    slides,
    foot
  }
}
</script>
