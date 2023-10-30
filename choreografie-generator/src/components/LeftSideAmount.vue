<template>
  <div class="content">
    <div class="myHeader">
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSideAmount",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.content {
  height: 100%;
  padding-top: 50px;
  width: 60%;
}

.myHeader {
  width: 90%;
  margin-top: -60px;
  text-align: center;
}
</style>
