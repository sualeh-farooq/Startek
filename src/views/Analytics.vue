<template>
  <div>
 <Dashboard />
 <InboxVue />
 <!-- <h1>Analytics Page goes here</h1> -->
</div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue';
import InboxVue from '@/components/Inbox.vue';
  export default {
    data : ()=>({
        Hello : 'Hello World',
    }),
    name: 'AnalyticsVue',
    components : {
      Dashboard,
      InboxVue,
    }
  } 
</script>
