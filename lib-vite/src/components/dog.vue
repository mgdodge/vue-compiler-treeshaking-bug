<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Dog', // vue component name
  props: {
    name: {
      type: String,
      default: 'Rover',
    },
    says: {
      type: String,
      default: 'woof',
    },
  },
});
</script>

<template>
  <div class="dog">
    <p>The dog is named {{ name }}. It says {{ says }}.</p>
  </div>
</template>

<style scoped>
  .dog {
    display: block;
    width: 400px;
    margin: 25px auto;
    border: 1px solid #ccc;
    background: #eaeaea;
    text-align: center;
    padding: 25px;
  }
  .dog p {
    margin: 0 0 1em;
  }
</style>
