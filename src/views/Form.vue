<template>
    <div>
   <Dashboard />
  </div>
  </template>
  
  <script>
  import Dashboard from '@/components/Dashboard.vue';
    export default {
      data : ()=>({
          Hello : 'Hello World',
      }),
      name: 'FormVue',
      components : {
        Dashboard,
      }
    } 
  </script>
  