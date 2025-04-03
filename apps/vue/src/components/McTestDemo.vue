<script setup lang="ts">
import { ref } from 'vue'
import { McTest } from '@placid/vue'

const McTestRef = ref(null);
const McTestValidationMessage = ref('') 

</script>

<template>
  <div>
    <McTest
      ref="McTestRef"
      name='test' 
      />
  </div>
  <div>Validation Message: {{ McTestValidationMessage }}</div>
  <div>
    <button @click="() => { 
      console.log(McTestRef.value?.validate)
        if (McTestRef.value && typeof McTestRef.value.validate === 'function') {
          McTestRef.value?.validate()
            .then((validation: unknown) => {
              console.log(validation)
              McTestValidationMessage.value = JSON.stringify(validation) || ''
            })
            .catch((error) => console.error('Validation Error:', error))
          }
        }">
      Validate
    </button>
  </div>
</template>