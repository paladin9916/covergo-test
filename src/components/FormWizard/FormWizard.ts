import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import Button from "@/components/Button/Button.vue";
import Step1 from "./Step1/Step1.vue";
import Step2 from "./Step2/Step2.vue";
import Step3 from "./Step3/Step3.vue";
import Fail from "./Fail/Fail.vue";

const namespace = "form";

@Component({
  components: {
    Step1,
    Step2,
    Step3,
    Fail,
    Button,
  },
})
export default class FormWizard extends Vue {
  @Action('goNextPage', { namespace }) goNextPage: any;
  @Action('goPrevPage', { namespace }) goPrevpage: any;
  @Getter("currentStep", { namespace }) currentStep!: number;

  get nextButtonText (): string {
    switch (this.currentStep) {
      case 0:
        return "Start";
      case 1:
        return "Next";
      case 2:
        return "Buy";
      default:
        return "Ok :(";
    }
  }

  get backButtonVisible (): boolean {
    if (this.currentStep === 0 || this.currentStep === 3) {
      return false;
    }
    return true;
  }
}
