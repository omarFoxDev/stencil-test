<script setup lang="ts">
  import { ref } from 'vue'

  const templates = ref([
    {
      name: 'McTest',
      component: 'mc-test-demo'
    },
    // hygen:new:component_demo:template:vue
  ])
</script>

<template>
  <div>
    <h1>Vue: Component Listing</h1>
    <template v-for="(template, index) in templates" :key="index">
      <div>
        <h2>{{ template.name }}</h2>
        <component :is="template.component" />
        <hr />
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>
