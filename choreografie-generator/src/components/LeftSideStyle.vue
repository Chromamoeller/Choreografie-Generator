<template>
  <div class="myContent">
    <q-card flat style="height: 100%">
      <q-card-section class="myCardHeader">
        <div class="myFont text-center">{{ title }}</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="myCardMain">
        <q-btn
          @click="$store.commit('updateStyle', 'Standard')"
          class="myBTN"
          style="background-color: rgba(17, 70, 117, 0.799)"
          flat
          >Standard</q-btn
        >
        <q-btn
          @click="$store.commit('updateStyle', 'Latein')"
          class="myBTN"
          style="background-color: rgba(176, 23, 59, 0.799); margin-top: -10vh"
          flat
          >Latein</q-btn
        >
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "LeftSide",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.myContent {
  height: 100%;
  width: 60%;
}
.myCardHeader {
  height: 20%;
}
.myCardMain {
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
.myCardFooter {
  height: 20%;
  display: flex;
  align-items: end;
}
.myFont {
  font-family: "Roboto";
  font-size: 3vw;
  text-shadow: 1px 1px 10px rgb(129, 129, 129);
}

.myBTN {
  font-size: 1vw;
  margin-left: 8vw;
  width: 25vh;
  height: 10vh;
}
.myBTN:active {
  box-shadow: 0 0 10px red;
}
</style>
