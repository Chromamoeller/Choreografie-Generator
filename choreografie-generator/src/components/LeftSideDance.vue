<template>
  <div class="myContent">
    <q-card flat style="height: 100%">
      <q-card-section class="myCardHeader">
        <div class="myFont text-center">{{ title }}</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section
        v-if="$store.state.userState.choosenStyle == 'Standard'"
        class="myCardMain"
      >
        <q-btn class="myBTN STBG" style="font-size: 2rem"
          >Langsamer Walzer</q-btn
        >
        <q-btn class="myBTN STBG" style="font-size: 2rem">Wiener Walzer </q-btn>
        <q-btn class="myBTN STBG" style="font-size: 2rem">Quickstep </q-btn>
        <q-btn class="myBTN STBG" style="font-size: 2rem">Slowfox </q-btn>
        <q-btn class="myBTN STBG" style="font-size: 2rem">Tango </q-btn>
      </q-card-section>
      <q-card-section
        v-if="$store.state.userState.choosenStyle == 'Latein'"
        class="myCardMain"
      >
        <q-btn class="myBTN LTBG" style="font-size: 2rem">Chachacha </q-btn>
        <q-btn class="myBTN LTBG" style="font-size: 2rem">Rumba </q-btn>
        <q-btn class="myBTN LTBG" style="font-size: 2rem">Jive </q-btn>
        <q-btn class="myBTN LTBG" style="font-size: 2rem">Samba </q-btn>
        <q-btn class="myBTN LTBG" style="font-size: 2rem">Paso Doble </q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "LeftSideDance",
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
.myCardMain {
  height: 60%;
  padding-top: 10vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
}
.myFont {
  font-family: "Roboto";
  font-size: 3vw;
  text-shadow: 1px 1px 10px rgb(129, 129, 129);
}
.myCardHeader {
  height: 20%;
}
.myBTN {
  min-width: 10vw;
  min-height: 10vh;
}

.LTBG {
  background-color: rgba(226, 43, 116, 0.628);
}
.STBG {
  background-color: rgba(0, 255, 255, 0.507);
}
</style>
