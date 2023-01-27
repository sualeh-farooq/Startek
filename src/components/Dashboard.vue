<template>
    <v-app id="inspire">
      <!-- Top Bar / Header-->
      <v-app-bar app absolute color="white" class="top_nav">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn @click="show" icon>
          <v-icon>mdi-bell-ring-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-view-dashboard</v-icon>
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
              large
              v-on="on"
              class="adminIcon"
            >
              <v-avatar size="32" >
                <!-- <span class="white--text text-h7">UI</span> -->
                <img :src="admin" alt="Admin image">
              </v-avatar>
            </v-btn>
          </template>

                <!--List Menu after open -->
          <v-card>
            <v-list-item-content>
              <div>
                <v-btn  class="acc-btn" disabled>Account</v-btn>
               <br />  
               
                <v-btn class="menu-btn" text > <v-icon v-text="bell" small class="mr-3">  </v-icon>  Updates   </v-btn>
                 <br />                
                 <v-btn class="menu-btn" text > <v-icon v-text="inboxOutline" small class="mr-3">  </v-icon>  Messages   </v-btn>
                <br />  
                <v-btn class="menu-btn" text > <v-icon v-text="task" small class="mr-3">  </v-icon>  Tasks   </v-btn>
                <br />  
                <v-btn class="menu-btn" text > <v-icon v-text="accountOutline" small class="mr-3">  </v-icon>  Profile   </v-btn>
                <br />  
                <v-btn class="menu-btn" text > <v-icon v-text="logout" small class="mr-3">  </v-icon>  Logout   </v-btn>
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
               <router-link to="/dashboard">  <v-list-item-title>  Dashboard</v-list-item-title> </router-link>
              </v-list-item-content>
            </v-list-item>
            <!-- Navigation list Option-->
            <v-list-item>
              <v-list-item-icon>
                <v-icon class="icon" v-text="form"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <router-link to="/forms">    <v-list-item-title>  Forms</v-list-item-title> </router-link>
              </v-list-item-content>
            </v-list-item>
            <!-- Navigation list Option-->
            <v-list-item>
              <v-list-item-icon>
                <v-icon class="icon" v-text="kanban"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <router-link to="/kanban">    <v-list-item-title>  Kanban Board</v-list-item-title> </router-link>
              </v-list-item-content>
            </v-list-item>
            <!-- Navigation list Option-->
            <v-list-item>
              <v-list-item-icon>
                <v-icon class="icon" v-text="tableIcon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <router-link to="/tables">    <v-list-item-title>  Data Table</v-list-item-title> </router-link>
              </v-list-item-content>
            </v-list-item>
            <!-- Navigation list Option-->
            <v-list-item>
              <v-list-item-icon>
                <v-icon class="icon" v-text="chart"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <router-link to="/charts">  <v-list-item-title>  Charts</v-list-item-title> </router-link>
              </v-list-item-content>
            </v-list-item>
            <!-- Navigation list Option-->
            <v-list-item>
              <v-list-item-icon>
                <v-icon class="icon" v-text="calender"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <router-link to="/calendar">  <v-list-item-title>  Calender</v-list-item-title> </router-link>
              </v-list-item-content>
            </v-list-item>
            <!-- Navigation list Option-->
            <v-list-item>
              <v-list-item-icon>
                <v-icon class="icon" v-text="inbox"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <router-link to="/inbox">  <v-list-item-title>  Inbox</v-list-item-title> </router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <!-- Navigation list in side drawer End-->

      </v-navigation-drawer>
    
    </v-app>
  </template>
  
  <script>
  import logo from "../assets/comp_logo.png";
  import adminPic from '../assets/avatar.jpg'
  // import InboxVue from "./Inbox.vue";
  
  export default {
    name : 'DashboardVue',
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
      admin : adminPic ,
      bell : "mdi-bell-alert-outline",
      inboxOutline : 'mdi-message-outline' ,
      task : 'mdi-file-document-edit-outline',
      accountOutline : 'mdi-shield-account-outline',
      logout : 'mdi-logout',
      kanban :  'mdi-bulletin-board'
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
    components : {
      // InboxVue
    },
    props : ['Hello']
  };
  </script>
  
  <style lang="scss" scoped>
  @import "../styles/dashboard.css";
  </style>
  