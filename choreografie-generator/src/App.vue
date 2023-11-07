<template>
  <div>
    <q-stepper
      flat
      header-nav=""
      class="full-with q-py-5"
      v-model="step"
      ref="stepper"
      color="primary"
      animated
      :transition-duration="700"
      done-icon="auto_awesome"
      active-icon="brush"
    >
      <q-step
        :name="1"
        title="Stil"
        icon="settings"
        caption="Wählen Sie einen Tanzstil"
        :done="step > 1"
      >
        <ChooseStyle />
      </q-step>
      <q-step
        :name="2"
        title="Tanz"
        icon="settings"
        caption="Wählen Sie einen Tanz"
        :done="step > 2"
      >
        <ChooseDance />
      </q-step>
      <q-step
        :name="3"
        title="Level"
        icon="settings"
        caption="Wählen Sie das Level"
        :done="step > 3"
      >
        <ChooseLevel />
      </q-step>
      <q-step
        :name="4"
        title="Anzahl"
        icon="settings"
        caption="Wählen Sie die gewünschte Anzahl der Figuren"
        :done="step > 4"
      >
        <ChooseAmount />
      </q-step>
      <q-step
        :name="5"
        title="Liste"
        icon="filter_none"
        caption="Fertige Liste"
        :done="step > 5"
      >
        <ChoreoList />
      </q-step>
      <template #navigation>
        <q-stepper-navigation class="row">
          <q-btn
            class="q-pa-md"
            color="cyan-7"
            :label="step === 4 ? 'Fertig' : 'Zurück'"
            @click="$refs.stepper.previous()"
          ></q-btn>
          <q-btn
            class="q-pa-md"
            style="margin-left: 40vw"
            color="primary"
            :label="step === 4 ? 'Fertig' : 'Weiter'"
            @click="$refs.stepper.next()"
          ></q-btn>
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from "vue";
import ChooseStyle from "./components/ChooseStyle.vue";
import ChooseDance from "./components/ChooseDance.vue";
import ChooseLevel from "./components/ChooseLevel.vue";
import ChooseAmount from "./components/ChooseAmount.vue";
import ChoreoList from "./components/ChoreoList.vue";

export default {
  name: "App",
  data() {
    return {
      step: ref(1),
    };
  },
  components: {
    ChooseStyle,
    ChooseDance,
    ChooseLevel,
    ChooseAmount,
    ChoreoList,
  },
};
</script>

<style>
#app {
  height: 100vh;
}
</style>
