<template>
  <form>
    <div>single step</div>
    <component
        v-for="elementDefinition in formConfiguration.elements"
        :is="formElementsMap[elementDefinition.type] || 'div'" 
        :key="elementDefinition.name" 
        :elementDefinition="elementDefinition"
        v-bind="elementDefinition"
    />
  </form>
</template>

<script lang="ts">
import { FormDefinitionTypo3 } from "@/lib/formSchema";
import { Component, Vue, Prop, Provide } from "vue-property-decorator";
import DynamicElement from './DynamicElement.vue';

@Component({
  components: {
      DynamicElement
  },
})
export default class SingleStepForm extends Vue {
  @Prop({required: true}) readonly formConfiguration!: FormDefinitionTypo3;
  @Prop({required: true}) readonly formElementsMap!: Record<string, unknown>;
  //@Prop({required: false}) readonly onSubmit!: (formData: SubmitEvent)=>Promise<any>;

  formValuesModel: Record<string, string>={

  }
  formErrorsModel: Record<string, string>={

  }

  @Provide('formValuesModel')  providedFormValuesModel: Record<string, string>=this.formValuesModel;
  @Provide('formErrorsModel') providedFormErrorsModel: Record<string, string>=this.formErrorsModel;

}
</script>
