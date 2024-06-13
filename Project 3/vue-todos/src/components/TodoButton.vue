<script setup>


</script>

<template>
    <button>
        <slot>
            <!--fallback if we dont add anything-->
            Create
        </slot>
    </button>
</template>

<style lang="scss" scoped>
    
  button {
    padding: 8px 16px;
    border: none;
  }
</style>