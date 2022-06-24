<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <FormWizard/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormWizard from "@/components/FormWizard/FormWizard.vue"; // @ is an alias to /src

@Component({
  components: {
    FormWizard,
  },
})
export default class HomeView extends Vue {}
</script>
