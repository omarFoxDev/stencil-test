---
to:  ../../apps/vue/src/components/<%=name%>Demo.vue
unless_exists: true
---
<script setup lang="ts">
import { ref } from 'vue'
import { <%=name%> } from '@placid/vue'

const <%=name%>Ref = ref(null);
const <%=name%>ValidationMessage = ref('') 
</script>

<template>
  <div><McTest ref="<%=name%>Ref" name='test' /></div>
  <div>Validation Message: {{ <%=name%>ValidationMessage }}</div>
  <div>
    <button @click="() => { 
        if (<%=name%>Ref.value && typeof <%=name%>Ref.value.validate === 'function') {
          <%=name%>Ref.value?.validate()
            .then((validation: unknown) => {
              <%=name%>ValidationMessage.value = JSON.stringify(validation) || ''
            })
            .catch((error) => console.error('Validation Error:', error))
          }
        }">
      Validate
    </button>
  </div>
</template>
