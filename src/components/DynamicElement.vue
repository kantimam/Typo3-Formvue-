<template>
  <component :is="elementDefinition.type" v-bind="elementDefinition"/>
</template>

<script lang="ts">
import { ElementDefinition } from "@/lib/formSchema";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  
})
export default class SingleStepForm extends Vue {
  @Prop({required: true}) readonly elementDefinition!: ElementDefinition;
  
}
</script>
