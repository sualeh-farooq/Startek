<template>
<v-main >
      <v-container >
        <div >
        <v-row class="chart_upper_row"  >
          <v-col
            v-for="n in 1"
            :key="n"
            cols="4" >
            <v-card height="auto" width="auto"> <apexchart width="100%" height="100%" type="bar" :options="chartOptions" :series="series"></apexchart></v-card>
             </v-col>
            </v-row>
          </div>
      </v-container>
    </v-main>
</template>

<script>
export default {
    name : 'CompChrts',
    data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }]
      }
    },
}
</script>


<style> 
@import '../styles/cards.scss';
</style>