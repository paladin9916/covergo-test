
import { ActionTree } from 'vuex';
import { FormState } from './types';
import { RootState } from '../types';


export const actions: ActionTree<FormState, RootState> = {
  goNextPage({ state, commit }): void {
    let step = state.step || 0;

    if (step === 1 && state.age > 100) {
      step = 3;
    } else {
      step = step + 1;
      if (step > 2) {
        step = 0;
        commit('clearFormData');
      }
    }
    commit('setStep', step);
  },
  goPrevPage({ state, commit }): void {
    let step = state.step || 0;
    if (step > 0) {
      step = step - 1;
    }
    commit('setStep', step);
  },
  setFormData({ commit }, payload): void {
    commit('setFormData', payload);
  },
};
