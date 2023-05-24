<template>
  <div>
    <button @click="toAutorization">ok</button>
  </div>
</template>
<script>
export default {
  name: 'Main',
  methods: {
    toAutorization() {
      this.$router.push("/sign-in");
    },
  },
};
</script>
