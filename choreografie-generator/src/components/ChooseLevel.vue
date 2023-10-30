<template>
  <div class="content">
    <LeftSideLevel title="Wählen Sie Das Tanzlevel aus" />
    <RightSide />
  </div>
</template>

<script>
import LeftSideLevel from "./LeftSideLevel.vue";
import RightSide from "./RightSide.vue";

export default {
  name: "ChooseLevel",
  components: { RightSide, LeftSideLevel },
};
</script>

<style scoped>
.content {
  display: flex;
  height: 80vh;
}
</style>
