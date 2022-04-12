<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
           <h1> UserCrud </h1>
           <v-data-table
              :headers="headers"
              :items="games"
              :search="search"
              sort-by="id"
              class="elavation-1">
           </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios"

export default {
  name: "UserCrud",
  data: () => ({
    search:"",
    headers: [
      { text: "Id", value: "id"},
      { text: "Nome", value: "name"},
      { text: "Preco", value: "price"},
      { text: "Actions", value: "actions", sortable: false}
    ],
    users: []
  }),
  methods: {
    inicializa() {
      axios.get('http://localhost:3000/games')
        .then((response) => {
          this.games = response.data
        })
        .catch((error)=> console.log(error))
    }
  },
  created() {
    this.inicializa()
  }
};
</script>