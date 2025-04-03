---
inject: true
to: "../../apps/react/src/App.tsx"
before: "// hygen:new:component_demo:import:react"
skip_if: '<%=name%>'
---
import <%=name%>Demo from './components/<%=name%>Demo'<% -%>