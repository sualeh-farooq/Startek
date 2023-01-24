<template>
<v-main >
      <v-container>
        <v-row>
          <v-col
            v-for="n in 20"
            :key="n"
            cols="4" >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
export default {
    name : 'CardsVue'
}
</script>


<style> 
.v-main__wrap {
    flex-wrap: wrap !important;
}
</style>