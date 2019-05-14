<template>
    <div class="container">
        <h2>{{title}}</h2>
        <ul>
            <li v-for="livre in livres" :key="livre.id">
                <nuxt-link :to="{name: 'livres-id', params: {id: livre.id}}">
                {{livre.title }}
                </nuxt-link>
                 <button v-on:click="deleteBook(livre.id)" type="button" class="btn btn-primary">Supprimer le livre</button>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "~/plugins/axios";
export default {
    async asyncData(){
        const { data } = await axios.get('/livres');
        return {
            livres: data
        }
    },
    data(){
        return {
            title: "Mes livres",
            livres: []
        }
    }, 
    methods: {
        async deleteBook(id){
        const res = await axios.delete(`/livres/${id}`,{id: id});
        return {
           res
        }
      }
    }
}
</script>

<style>
    .container{
        width: 980px;
        margin: 0px;
    }
</style>
