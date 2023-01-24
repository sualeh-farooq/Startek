<template>
  <div>
 <Dashboard />
 <!-- <InboxVue /> -->
 <CardsVue />
</div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue';
// import InboxVue from '@/components/Inbox.vue';
import CardsVue from '@/components/Cards.vue';
  export default {
    data : ()=>({
        Hello : 'Hello World',
    }),
    name: 'AnalyticsVue',
    components : {
      Dashboard,
      // InboxVue,
      CardsVue
    }
  } 
</script>
