<template>
  <input type="text" name="" id="" placeholder="hey">
</template>

<script lang="ts">
import { ElementDefinition } from "@/lib/formSchema";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  
})
export default class TextField extends Vue {
  @Prop({required: true}) readonly elementDefinition!: ElementDefinition;
  
}
</script>
