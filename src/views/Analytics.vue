<template>
  <div>
 <Dashboard />
 <CardsVue />
</div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue';


import CardsVue from '@/components/Cards.vue';
  export default {
    data : ()=>({
        Hello : 'Hello World',
    }),
    name: 'AnalyticsVue',
    components : {
      Dashboard,
      CardsVue,
    
    }
  } 
</script>
