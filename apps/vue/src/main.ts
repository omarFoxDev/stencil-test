import { createApp } from 'vue'
import App from './App.vue'

import '@placid/core/loader';
import McTestDemo from './components/McTestDemo.vue'
// hygen:new:component_demo:import:vue

const app = createApp(App)

app.component('mc-test-demo', McTestDemo)
// hygen:new:component_demo:define:vue

app.mount('#app')
