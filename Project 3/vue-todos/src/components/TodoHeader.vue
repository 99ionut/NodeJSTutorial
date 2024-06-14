<script setup>
import {RouterLink} from "vue-router";
</script>
<template lang="">
    <div class="bg-accent flex text-primary justify-center shadow-lg">
        <div class="flex p-2 items-center w-10/12">
            <div class="branding">
                <h1 class="font-bold">NodeJs+Vue app</h1>
            </div>
            <ul class="nav-routes">
                <RouterLink class="text-white hover:text-black" to="/">Home</RouterLink>
                <RouterLink to="/about">about</RouterLink>
            </ul>
          </div>
        </div>
</template>


<style lang="scss" scoped>
div {
  div {

    .branding {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        max-width: 50px;
      }

      h1 {
        font-size: 24px;
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>
