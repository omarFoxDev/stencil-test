---
to:  ../../apps/react/src/components/<%=name%>Demo.tsx
unless_exists: true
---
<script setup lang="ts">
import { <%=name%> } from '@placid/vue'

const <%=name%>Ref = ref(null);
const <%=name%>ValidationMessage = ref('') 
</script>

<template>
  <div><<%=name%> name='test' /></div>
  <div>Validation Message: {{ <%=name%>ValidationMessage }}</div>
  <div>
    <button @click="() => { 
        <%=name%>Ref.current?.validate()
          .then((validation: unknown) => {
            <%=name%>ValidationMessage.value = validation
          })
          .catch((error) => console.error('Validation Error:', error))
        }">
      Validate
    </button>
  </div>
</template>












import { useRef, useState } from 'react';
import { <%=name%> } from '@placid/react'

type UIComponentType = {
  validate: () => Promise<unknown>
} 

function <%=name%>Demo() {
  const <%=name%>Ref = useRef<UIComponentType | null>(null);
  const [<%=name%>ValidationMessage, set<%=name%>ValidationMessage] = useState<unknown>() 

  return (
    <>
      <div><<%=name%> name='<%=name%>' ref={ <%=name%>Ref } /></div>
      <div>Validation Message: { JSON.stringify(<%=name%>ValidationMessage) || '' } </div>
      <div>
        <button onClick={() => { 
            <%=name%>Ref.current?.validate()
            .then((validation: unknown) => {
              set<%=name%>ValidationMessage(validation)
            })
            .catch((error) => console.error('Validation Error:', error))
            }}>
          Validate
        </button>
      </div>
    </>
  )
}

export default <%=name%>Demo
