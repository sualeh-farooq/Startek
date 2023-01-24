<template>
    <div>
   <Dashboard />
   <InboxVue />
  </div>
  </template>
  
  <script>
  import Dashboard from '@/components/Dashboard.vue';
  import InboxVue from '@/components/Inbox.vue';
    export default {
      data : ()=>({
          Hello : 'Hello World',
      }),
      name: 'TablesView',
      components : {
        Dashboard,
        InboxVue
      }
    } 
  </script>
  