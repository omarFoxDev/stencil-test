---
inject: true
to: "../vue/src/index.ts"
before: "// hygen:new:component:vue"
skip_if: '<%=name%>'
---
  <%=name%>,<% -%>