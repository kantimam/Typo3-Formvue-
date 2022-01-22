<template>
  <div id="app">
    <form-vue :formConfiguration="formDefinition" :formElementsMap="componentsMap"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormVue from './components/FormVue.vue';
import {formDefinitionExample, FormDefinitionTypo3} from './lib/formSchema';
import TextField from './components/elements/TextField.vue';

@Component({
  components: {
    FormVue,
    TextField
  },
})
export default class App extends Vue {
  readonly formDefinition: FormDefinitionTypo3=formDefinitionExample;
  readonly componentsMap={'Text': TextField}
}
</script>
