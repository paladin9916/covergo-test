import { Component, Watch, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { SelectItem, Location, Package } from "@/types";
import { FormState } from "@/store/form/types";

const form = namespace('form');

@Component({})
export default class Step2 extends Vue {
  @form.State("name") name!: string;
  @form.State("age") age!: number;
  @form.State("location") location!: Location;
  @form.State("plan") plan!: Package;

  @form.Getter("plans") plans!: Array<SelectItem>;
  @form.Getter("locations") locations!: Array<SelectItem>;
  @form.Getter("premiumPrice") premiumPrice!: string;
  @form.Getter("selectedCurrency") currency!: string;
  @form.Action setFormData!: (payload: FormState) => void;

  formData = {
    name: '',
    age: 0,
    location: Location.HONG_KONG,
    plan: Package.STANDARD,
  };

  @Watch('formData', {deep: true})
  onFormChange (value: any, oldValue: any) {
    this.setFormData(value);
  }

  mounted() {
    this.formData = {
      name: this.name,
      age: this.age,
      location: this.location,
      plan: this.plan,
    }
  }
}
