import { shallowMount } from '@vue/test-utils'
import Fail from '@/components/FormWizard/Fail/Fail.vue'

describe('Fail.vue', () => {
  it('renders fail page', () => {
    const wrapper = shallowMount(Fail)
    expect(wrapper.classes()).toContain('cg-form-fail')
  })
})
