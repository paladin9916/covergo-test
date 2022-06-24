import { FormState } from "@/store/form/types";
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

const form = namespace('form');

@Component({})
export default class Step3 extends Vue {
  @form.State("name") name!: string;
  @form.State("age") age!: number;
  @form.State("location") location!: string;
  @form.State("plan") plan!: string;
  @form.Getter("premiumPrice") premiumPrice!: string;
  @form.Getter("selectedCurrency") currency!: string;
}
