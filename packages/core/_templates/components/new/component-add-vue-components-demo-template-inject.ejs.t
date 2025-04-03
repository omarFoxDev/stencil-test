---
inject: true
to: "../../apps/vue/src/App.vue"
before: "// hygen:new:component_demo:template:vue"
---
    {
      name: '<%=name%>',
      component: '<%=componentDomName%>-demo'
    },<% -%>