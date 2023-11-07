<template>
  <div class="content">
    <div class="myHeader">
      <h2>{{ title }}</h2>
    </div>
    <div class="myContent">
      <q-btn
        style="background: linear-gradient(135deg, #bd6610, #ffffff)"
        class="myBTN"
        @click="$store.commit('updateLevel', 'D')"
        >D</q-btn
      >
      <q-btn
        @click="$store.commit('updateLevel', 'C')"
        style="background: linear-gradient(135deg, #ccebff, #ffffff)"
        class="myBTN"
        >C</q-btn
      >
      <q-btn
        style="background: linear-gradient(135deg, #e1d602, #ffffff)"
        class="myBTN"
        @click="$store.commit('updateLevel', 'B')"
        >B</q-btn
      >
      <q-btn
        style="background: linear-gradient(135deg, #50db34, #ffffff)"
        class="myBTN"
        @click="$store.commit('updateLevel', 'A')"
        >A</q-btn
      >
      <q-btn
        style="background: linear-gradient(135deg, #e900f1, #ffffff)"
        class="myBTN"
        @click="$store.commit('updateLevel', 'S')"
        >S</q-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSideLevel",
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
  display: flex;
  flex-direction: column;
}

.myContent {
  min-height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.myBTN {
  min-height: 10vh;
  min-width: 5vw;
  border-radius: 50%;
  background: linear-gradient(135deg, #3498db, #ffffff);
}

.myHeader {
  width: 90%;
  margin-top: -60px;
  text-align: center;
}
</style>
