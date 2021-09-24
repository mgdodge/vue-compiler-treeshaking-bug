<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Cat', // vue component name
  props: {
    name: {
      type: String,
      default: 'Spot',
    },
    says: {
      type: String,
      default: 'meow',
    },
  },
});
</script>

<template>
  <div class="cat">
    <p>The cat is named {{ name }}. It says {{ says }}.</p>
  </div>
</template>

<style scoped>
  .cat {
    display: block;
    width: 400px;
    margin: 25px auto;
    border: 1px solid #ccc;
    background: #eaeaea;
    text-align: center;
    padding: 25px;
  }
  .cat p {
    margin: 0 0 1em;
  }
</style>
