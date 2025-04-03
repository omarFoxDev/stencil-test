import { useState } from 'react';
import McTestDemo from './components/McTestDemo'
// hygen:new:component_demo:import:react


function App() {
  
  const [templates] = useState([
    {
      name: 'McTest',
      component: () => (<McTestDemo />)
    },
    // hygen:new:component_demo:template:react
  ])

  

  return (
    <>
      <div>
        <h1>React: Component Listing</h1>
        {templates.map((template, index) => (
          <div key={index}>
            <h2>{template.name}</h2>
            <template.component />
            <hr />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
