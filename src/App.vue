<template>
  <v-app id="inspire">
    <!-- Top Bar / Header-->
    <v-app-bar app absolute color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn @click="show" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
    <!-- Profile Picture Avatar with Dropdown Menu-->
      <v-menu
        bottom
        min-width="100px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar size="32" >
              <!-- <span class="white--text text-h7">UI</span> -->
              <img :src="admin" alt="Admin image">
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="brown"
              >
                <span class="white--text text-h5">UI</span>
              </v-avatar>
              <h3>User Initials</h3>
              <p class="text-caption mt-1">
                User Initials
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Disconnect
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
  
    <!-- Profile Picture Avatar with Dropdown Menu End-->
      </v-btn>
    </v-app-bar>
    <!-- Top Bar / Header End-->




   
    <v-navigation-drawer v-model="drawer" app>  <!-- Top box in drawer with logo-->
      <v-sheet color="#303c54" class="pa-4">
        <img class="logo" :src="companyLogo" alt="" />
      </v-sheet>
      <v-divider></v-divider><!-- Top box in drawer with logo End-->
      


      <v-list>      <!-- Navigation list in side drawer-->
        <v-list-item-group >
         
          <v-list-item active-class="active"> <!-- Navigation list Option-->
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
import adminPic from './assets/avatar.jpg'

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
    admin : adminPic
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
