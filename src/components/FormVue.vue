<template>
  <div class="formvue">
    <single-step-form v-if="isSingleStepForm" :formConfiguration="formConfiguration" :formElementsMap="formElementsMap"/>
    <div v-else>
      implement multistep
    </div>
  </div>
</template>

<script lang="ts">
import { FormDefinitionTypo3 } from "@/lib/formSchema";
import { VNode } from "vue";
import { Component, Vue, Prop, Provide } from "vue-property-decorator";
import SingleStepForm from "./SingleStepForm.vue";

@Component({
  components: {
    SingleStepForm
  },
  
})
export default class FormVue extends Vue {
  @Prop({required: true}) readonly formConfiguration!: FormDefinitionTypo3;
  @Prop({required: true}) readonly formElementsMap!: Record<string, VNode>;

  @Provide('formElementsMap') readonly provideValue: Record<string, VNode>=this.formElementsMap;


  get isSingleStepForm(): boolean {
    return this.formConfiguration.api.page.current===this.formConfiguration.api.page.pages;
  }
}
</script>
