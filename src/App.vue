<template>
  <v-app id="inspire">
    <!-- Top Bar / Header-->
    <v-app-bar app absolute color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="show" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- Top Bar / Header End-->

    <!-- Top box in drawer with logo-->

    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="#303c54" class="pa-4">
        <img class="logo" :src="companyLogo" alt="" />
      </v-sheet>
      <v-divider></v-divider>
      <!-- Top box in drawer with logo End-->

      <!-- Navigation list in side drawer-->
      <v-list>
        <v-list-item-group >
          <!-- Navigation list Option-->
          <v-list-item active-class="active">
            <v-list-item-icon>
              <v-icon class="icon" v-text="dashboard"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- Navigation list Option-->
          <v-list-item>
            <v-list-item-icon>
              <v-icon class="icon" v-text="form"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Form</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- Navigation list Option-->
          <v-list-item>
            <v-list-item-icon>
              <v-icon class="icon" v-text="tableIcon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Data Table</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- Navigation list Option-->
          <v-list-item>
            <v-list-item-icon>
              <v-icon class="icon" v-text="chart"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Charts</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- Navigation list Option-->
          <v-list-item>
            <v-list-item-icon>
              <v-icon class="icon" v-text="calender"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Calender</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- Navigation list Option-->
          <v-list-item>
            <v-list-item-icon>
              <v-icon class="icon" v-text="inbox"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Inbox</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <!-- Navigation list in side drawer End-->
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import logo from "./assets/comp_logo.png";

export default {
  //  Data
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
    clock: "mdi-clock",
    account: "mdi-account",
    flag: "mdi-flag",
    dashboard: "mdi-view-dashboard-edit",
    form: "mdi-form-select",
    tableIcon: "mdi-table-large",
    chart: "mdi-chart-bar",
    inbox: "mdi-message",
    calender: "mdi-calendar-clock",
    companyLogo: logo,
  }),
  // Functions and Methods
  methods: {
    show() {
      this.$swal.fire(
        "The Internet?",
        "That thing is still around?",
        "warning"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/dashboard.css";
</style>
