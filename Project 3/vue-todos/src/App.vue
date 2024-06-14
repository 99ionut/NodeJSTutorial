<script setup>
import { RouterView } from "vue-router";
import TodoHeader from "./components/TodoHeader.vue";
</script>

<template>
  <div id="bg" class="bg-neutral min-h-screen flex flex-col">
    <TodoHeader />
    <RouterView />
  </div>
</template>

<style lang="scss">


#bg{
  
 background-size: 40px 40px;
  background-image: linear-gradient(#e5e9ed 1.6px, transparent 1.6px), linear-gradient(to right, #e5e9ed 1.6px, #f3f3f3 1.6px);
}
</style>