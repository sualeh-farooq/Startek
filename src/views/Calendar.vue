<template>
    <div>
   <Dashboard />
   <v-col>
    <v-row>
      <Calendar />
    </v-row>
   </v-col>
  </div>
  </template>
  
  <script>
  import Dashboard from '@/components/Dashboard.vue';
  import Calendar from '@/components/Calendar.vue';
    export default {
      data : ()=>({
          Hello : 'Hello World',
      }),
      name: 'CalendarVue',
      components : {
        Dashboard,
        Calendar
      }
    } 
  </script>
  