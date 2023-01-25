<template>
  <v-main>
    <v-container>
      <div class="main_div">
        <v-row class="chart_upper_row">
          <v-col v-for="n in 1" :key="n">
            <v-card class="mx auto" max-width="d344" outline
              ><apexchart
                type="line"
                height="100%"
                width="100%"
                :options="chartOptionssecond"
                :series="seriessecond"
              ></apexchart
            ></v-card>
            <v-card class="mx auto" max-width="344" outlined
              ><apexchart
                type="area"
                height="100%"
                width="100%"
                :options="chartOptions"
                :series="series"
              ></apexchart
            ></v-card>
            <v-card class="mx auto" max-width="344" outlined
              ><apexchart
                type="bar"
                height="100%"
                width="100%"
                :options="chartOptionssecond"
                :series="seriessecond"
              ></apexchart
            ></v-card>
          </v-col>
        </v-row>
        <!-- Second Portion of Front Dashboard-->
        <v-row class="chart_second_row">
          <v-col>
            <v-card class="mx auto" max-width="100%" height="100%" outlined
              ><apexchart
                type="area"
                height="100%"
                width="100%"
                :options="chartOptionssecond"
                :series="seriessecond"
              ></apexchart
            ></v-card>
          </v-col>
        </v-row>
        <v-row class="chart_third_row">
          <v-col>
            <DataTable class="db_table" />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import DataTable from '@/components/DataTable'
// import Calendar from '@/components/Calendar'
export default {
  name: "CompChrts",
  components : {
    DataTable,
    // Calendar
  },
  data: () => ({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    chartOptions: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },

    seriessecond: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chartOptionssecond: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },

    seriesthird: [
      {
        name: "Inflation",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
    ],
    chartOptionsthird: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  }),
};
</script>

<style>
@import "../styles/cards.css";
</style>
