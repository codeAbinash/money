import{u as r,j as a,a as e}from"./index-b107ad7e.js";import{N as i}from"./NavigationBar-35c43795.js";import"./icons-a0fd2d01.js";function m(){const t=r();return a("div",{id:"more",children:[e("div",{className:"container",children:e("div",{className:"btn",children:e("button",{className:"btn60",style:{paddingInline:"4em"},onClick:n,children:"Reset Everything"})})}),e(i,{active:"more"})]});function n(){confirm("Reset Everything")&&(localStorage.clear(),t("/",{replace:!0}))}}export{m as default};