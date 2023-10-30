<template>
  <div class="content">
    <LeftSideDance title="Wählen Sie einen Tanz" />
    <RightSide />
  </div>
</template>

<script>
import LeftSideDance from "./LeftSideDance.vue";
import RightSide from "./RightSide.vue";

export default {
  name: "ChooseDance",
  components: { RightSide, LeftSideDance },
};
</script>

<style scoped>
.content {
  display: flex;
  height: 80vh;
}
</style>
