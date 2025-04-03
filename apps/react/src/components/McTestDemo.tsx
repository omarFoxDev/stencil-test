import { useRef, useState } from 'react';
import { McTest } from '@placid/react'

type UIComponentType = {
  validate: () => Promise<unknown>
} 

function McTestDemo() {
  const McTestRef = useRef<UIComponentType>();
  const [McTestValidationMessage, setMcTestValidationMessage] = useState('') 

  return (
    <>
      <div><McTest name='test' ref={ McTestRef } /></div>
      <div>Validation Message: { McTestValidationMessage } </div>
      <div>
        <button onClick={() => { 
            McTestRef.current?.validate()
              .then((validation: unknown) => {
                setMcTestValidationMessage(JSON.stringify(validation) || '')
              })
              .catch((error) => console.error('Validation Error:', error))
            }}>
          Validate
        </button>
      </div>
    </>
  )
}

export default McTestDemo
