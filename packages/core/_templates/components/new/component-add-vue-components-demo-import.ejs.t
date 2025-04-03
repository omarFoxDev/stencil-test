---
inject: true
to: "../../apps/vue/src/main.ts"
before: "// hygen:new:component_demo:import:vue"
skip_if: '<%=name%>'
---
import <%=name%>Demo from './components/<%=name%>Demo'<% -%>