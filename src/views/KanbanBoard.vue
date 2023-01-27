<template>
    <div>
      <Dashboard />
      <v-main>
        <v-container>
          <div class="main_div">
            <v-row class="chart_upper_row">
              <v-col v-for="n in 1" :key="n">
                
                
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-main>
    </div>
  </template>
  
  <script>
  import Dashboard from "@/components/Dashboard.vue";
  export default {
    data: () => ({
      Hello: "KanbanView",
    }),
    name: "KanbanView",
    components: {
      Dashboard,
    },
  };
  </script>
  