<template>
  <form>
    
  </form>
</template>

<script lang="ts">
import { FormDefinitionTypo3 } from "@/lib/formSchema";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {
  },
})
export default class FormStep extends Vue {
  @Prop({required: true}) readonly formConfiguration!: FormDefinitionTypo3;
  @Prop({required: true}) readonly onSubmit!: (formData: SubmitEvent)=>Promise<any>;
}
</script>
