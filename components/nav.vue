<template>
   <nav class="nav">
      <div class="container">
        <div class="nav__wrapper">
          <div class="nav__logo">LOGO</div>
          <ul class="nav__links">
            <li class="nav__item">
              <nuxt-link active-class="active" class="nav__link" to="/">
                nav 1
              </nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link  class="nav__link" to="/">
                nav 2
              </nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link class="nav__link" to="#item1">
                nav 3
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
   </nav>
</template>

<script>
export default {
   name: 'Nav'
}
</script>