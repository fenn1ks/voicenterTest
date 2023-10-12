<template>
<section class="items">
   <div class="container">
      <h3 class="title">section Title</h3>
      <div class="items__wrapper">
         <div class="items__nav">
         <div class="items__nav-title">Nav</div>
         <ul class="items__nav-links">
            <li class="items__nav-item">
               <nuxt-link :to="{path: '/', hash: '#item1'}" active-class="active" class="items__nav-link">
                  item 1
               </nuxt-link>
            </li>
            <li class="items__nav-item">
               <NuxtLink :to="{path: '/', hash: '#item1'}"  class="items__nav-link" >
                  item 2
               </NuxtLink>
            </li>
            <li class="items__nav-item">
               <NuxtLink to="#item1" class="items__nav-link" >
                  item 3
               </NuxtLink>
               <NuxtLink to="#top3">
                  <button>To top with NuxtLink to="#top3"</button>
               </NuxtLink>
            </li>
         </ul>
         </div>
         <div class="items__elements">
         <div class="items__element">
            <img src="../assets/Rectangle 4.png" class="items__element-img">
            <div class="items__element-descr">
               <div class="items__element-title" id="top">Item 1</div>
               <div class="items__element-subtitle">
               Lorem Ipsum is simply dummy text of the printing and
               typesetting industry. Lorem Ipsum has been the i
               </div>
               <div class="items__element-text">
               Lorem Ipsum is simply dummy text of the printing and
               typesetting industry. Lorem Ipsum has been the industry's
               standard dummy text ever since the 1500s, when an unknown
               printer took a galley of type and scrambled it to make a type
               specimen book. It has survived not only five centuries, but
               also the leap into electronic typesetting, remaining
               essentially unchanged. It was popularised in the 1960s with
               the release of Letraset sheets
               </div>
               <div class="btn items__btn">Read More</div>
            </div>
         </div>
         <div class="items__element">
            <div class="items__element-descr">
               <div class="items__element-title" id="top3">Item 1</div>
               <div class="items__element-subtitle">
               Lorem Ipsum is simply dummy text of the printing and
               typesetting industry. Lorem Ipsum has been the i
               </div>
               <div class="items__element-text">
               Lorem Ipsum is simply dummy text of the printing and
               typesetting industry. Lorem Ipsum has been the industry's
               standard dummy text ever since the 1500s, when an unknown
               printer took a galley of type and scrambled it to make a type
               specimen book. It has survived not only five centuries, but
               also the leap into electronic typesetting, remaining
               essentially unchanged. It was popularised in the 1960s with
               the release of Letraset sheets
               </div>
               <div class="btn items__btn">Read More</div>
            </div>
            <img src="../assets/Rectangle 4.png" class="items__element-img">
         </div>
         <div class="items__element">
            <img src="../assets/Rectangle 4.png" class="items__element-img">
            <div class="items__element-descr">
               <div class="items__element-title">Item 1</div>
               <div class="items__element-subtitle">
               Lorem Ipsum is simply dummy text of the printing and
               typesetting industry. Lorem Ipsum has been the i
               </div>
               <div class="items__element-text">
               Lorem Ipsum is simply dummy text of the printing and
               typesetting industry. Lorem Ipsum has been the industry's
               standard dummy text ever since the 1500s, when an unknown
               printer took a galley of type and scrambled it to make a type
               specimen book. It has survived not only five centuries, but
               also the leap into electronic typesetting, remaining
               essentially unchanged. It was popularised in the 1960s with
               the release of Letraset sheets
               </div>
               <div class="btn items__btn">Read More</div>
            </div>
         </div>
         </div>
      </div>
   </div>
</section>
</template>
<script>
export default {
   name: 'Items'
}

</script>
<style lang="">
   
</style>