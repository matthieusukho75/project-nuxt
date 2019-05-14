 <template>
      <form>
          <h1>Formulaire ajout d'article</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Titre du livre</label>
          <input v-model="title" type="text" class="form-control" aria-describedby="emailHelp" placeholder="titre livre">
          <small  class="form-text text-muted">Ajoutez l'article de votre choix</small>
          <label for="exampleInputEmail1">Auteur</label>
          <input v-model="author" type="text" class="form-control" aria-describedby="emailHelp" placeholder="auteur livre">
          <small  class="form-text text-muted">Ajoutez l'auteur de votre livre</small>
        </div>
        <button v-on:click="addBook" type="button" class="btn btn-primary">Ajoutez</button>
         <nuxt-link :to="{name: 'livres-list'}">
        <button type="button" class="btn btn-primary">Voir mes livres</button>
         </nuxt-link>
      </form>
 </template>

<script>
import axios from "~/plugins/axios";
export default {
  data(){
        return {
            title: " ",
            author: " ",
            books: []
        }
    }, 
    methods: {
      async addBook(){
        const res = await axios.post('/livres', { title: this.title,
                                                  author: this.author })
        this.books = [this.books, res.data]
        this.title = ''
        this.author = ''
      },
    }
}
</script>