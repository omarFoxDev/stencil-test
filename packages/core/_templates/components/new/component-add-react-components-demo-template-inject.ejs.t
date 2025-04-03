---
inject: true
to: "../../apps/react/src/App.tsx"
before: "// hygen:new:component_demo:template:react"
---
    {
      name: '<%=name%>',
      component: () => (<<%=name%>Demo />)
    },<% -%>