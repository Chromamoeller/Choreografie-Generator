<template>
  <div class="content">
    <LeftSideStyle title="Wählen Sie eine Tanzart aus" />
    <RightSide />
  </div>
</template>

<script>
import LeftSideStyle from "./LeftSideStyle.vue";
import RightSide from "./RightSide.vue";

export default {
  name: "ChooseStyle",
  components: { LeftSideStyle, RightSide },
};
</script>

<style scoped>
.content {
  display: flex;
  height: 80vh;
}
</style>
