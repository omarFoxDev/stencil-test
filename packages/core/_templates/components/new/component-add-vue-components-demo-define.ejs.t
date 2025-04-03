---
inject: true
to: "../../apps/vue/src/main.ts"
before: "// hygen:new:component_demo:define:vue"
skip_if: '<%=name%>'
---
app.component('<%=componentDomName%>-demo', <%=name%>Demo)<% -%>