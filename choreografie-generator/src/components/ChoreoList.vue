<template>
  <div class="card-container">
    <q-card
      style="margin: 50px"
      v-for="(element, index) in $store.state.userState.choreoList"
      :key="index"
      ><q-card-section
        style="
          position: relative;
          top: 40%;
          min-width: 400px;
          min-height: 400px;
          font-size: 1.8rem;
          text-align: center;
        "
      >
        {{ element.name }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
