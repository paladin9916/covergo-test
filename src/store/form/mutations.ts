import { Location, Package } from '@/types';
import { MutationTree } from 'vuex';
import { FormState } from './types';

export const mutations: MutationTree<FormState> = {
  setFormData(state, payload: FormState) {
    state.name = payload.name;
    state.age = payload.age;
    state.location = payload.location;
    state.plan = payload.plan;
  },
  setStep(state, payload: number) {
    state.step = payload;
  },
  clearFormData(state) {
    state.name = "";
    state.age = 0;
    state.location = Location.HONG_KONG;
    state.plan = Package.STANDARD;
  }
};
