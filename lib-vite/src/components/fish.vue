<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Fish', // vue component name
  props: {
    name: {
      type: String,
      default: 'Nemo',
    },
    says: {
      type: String,
      default: 'nothing',
    },
  },
});
</script>

<template>
  <div class="fish">
    <p>The fish is named {{ name }}. It says {{ says }}.</p>
  </div>
</template>

<style scoped>
  .fish {
    display: block;
    width: 400px;
    margin: 25px auto;
    border: 1px solid #ccc;
    background: #eaeaea;
    text-align: center;
    padding: 25px;
  }
  .fish p {
    margin: 0 0 1em;
  }
</style>
