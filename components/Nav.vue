<template>
   <nav class="nav">
      <div class="container">
        <div class="nav__wrapper">
          <div class="nav__logo">LOGO</div>
          <ul class="nav__links">
            <li class="nav__item">
              <NuxtLink active-class="active" class="nav__link" to="/">
                nav 1
              </NuxtLink>
            </li>
            <li class="nav__item">
              <NuxtLink  class="nav__link" to="/">
                nav 2
              </NuxtLink>
            </li>
            <li class="nav__item">
              <NuxtLink class="nav__link" to="/">
                nav 3
              </NuxtLink>
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