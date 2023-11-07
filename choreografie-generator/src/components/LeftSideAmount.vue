<template>
  <div class="content">
    <div class="myHeader">
      <h2>{{ title }}</h2>
    </div>
    <div class="myContent">
      <q-input
        style="font-size: 2.5rem; margin-top: 3rem"
        placeholder="Bitte Eine Zahl eingeben"
        type="Number"
        v-model="eingegebeneZahl"
      ></q-input>
      <q-btn
        style="margin-top: 2rem; min-width: 8vw; min-height: 6vh"
        @click="$store.commit('createChoreo', eingegebeneZahl)"
        >Summit</q-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSideAmount",
  data() {
    return {
      eingegebeneZahl: null,
    };
  },
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
  align-items: center;
}

.myContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.myHeader {
  width: 90%;
  margin-top: -60px;
  text-align: center;
}
</style>
