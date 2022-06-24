import { GetterTree } from 'vuex';
import { FormState } from './types';
import { RootState } from '../types';
import { Package, Location, SelectItem, rateAndCurrency, additionalPercentage } from "@/types";

export const getters: GetterTree<FormState, RootState> = {
  premiumPrice(state: FormState): string {
    const { age, location, plan } = state;
    const price = age * 10 * rateAndCurrency[location].rate * (1 + additionalPercentage[plan] / 100);
    return price.toFixed(2);
  },
  selectedCurrency(state: FormState): string {
    const { location } = state;
    return rateAndCurrency[location].currency;
  },
  plans(state: FormState): Array<SelectItem> {
    const { age, location } = state;
    const currency = rateAndCurrency[location].currency;
    const basePrice = age * 10 * rateAndCurrency[location].rate;

    return [{
      value: Package.STANDARD,
      label: Package.STANDARD,
    }, {
      value: Package.SAFE,
      label: `${Package.SAFE} (+${basePrice * additionalPercentage[Package.SAFE] / 100}${currency}, ${additionalPercentage[Package.SAFE]}%)`,
    }, {
      value: Package.SUPER_SAFE,
      label: `${Package.SUPER_SAFE} (+${basePrice * additionalPercentage[Package.SUPER_SAFE] / 100}${currency}, ${additionalPercentage[Package.SUPER_SAFE]}%)`,
    }];
  },
  locations(state: FormState): Array<any> {
    return [{
      value: Location.HONG_KONG,
      label: Location.HONG_KONG,
    }, {
      value: Location.UNITED_STATES,
      label: Location.UNITED_STATES,
    }, {
      value: Location.AUSTRALIA,
      label: Location.AUSTRALIA,
    }]
  },
  currentStep(state: FormState): number {
    return state.step || 0;
  },
};
