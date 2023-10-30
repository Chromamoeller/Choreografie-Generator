<template>
  <div class="content">
    <LeftSideAmount title="Wählen sie die Anzahl der Figuren für die Folge" />
    <RightSide />
  </div>
</template>

<script>
import LeftSideAmount from "./LeftSideAmount.vue";
import RightSide from "./RightSide.vue";

export default {
  name: "ChooseAmount",
  components: { RightSide, LeftSideAmount },
};
</script>

<style scoped>
.content {
  display: flex;
  height: 80vh;
}
</style>
