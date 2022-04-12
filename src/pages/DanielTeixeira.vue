<template>
    <div class="container">


      <form @submit.prevent="salvar">

          <label>Nome: </label>
          <input type="text" placeholder="Nome" v-model="produto.name" >
          <label>Price: </label>
          <input type="number" placeholder="price" v-model="produto.price" >

          <v-btn color="blue darken-1" text @click="salvar"> Save </v-btn>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>Price</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="produto of produtos" :key="produto.id">

            <td>{{ produto.nome }}</td>
            <td>{{ produto.price }}</td>
            <td>    
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

</template>

<script>

import Produto from '../services/produtos'

export default {
  name: 'app',
  data () {
    return {
      produto:{
        id: '',
        name: '',
        price: ''
      },
      produtos: []
    }
  },

  mounted(){
    this.listar()
  },

  methods:{
    
    listar(){
      Produto.listar().then(resposta => {
        this.produtos = resposta.data
      }).catch(e => {
        console.log(e)
      })
    },

    salvar() {
      const req = this.produto.id ? Produto.atualizar : Produto.salvar;
      req(this.produto).then(resp => {
          console.log(resp)
        this.produto = {};
        this.listar();
      })

  }

}
}
</script>

<style>



</style>
