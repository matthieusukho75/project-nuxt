 <template>
      <form>
          <h1>Formulaire modification d'article</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Titre du livre</label>
          <input v-model="currentBook.title" type="text" class="form-control" aria-describedby="emailHelp" >
          <small  class="form-text text-muted">modifiez l'article</small>
          <label for="exampleInputEmail1">Auteur</label>
          <input v-model="currentBook.author" type="text" class="form-control" aria-describedby="emailHelp"  >
          <small  class="form-text text-muted">modifiez l'auteur</small>
        </div>
        <button v-on:click="editBook(params)" type="button" class="btn btn-primary">Modifiez</button>
         <nuxt-link :to="{name: 'livres-list'}">
        <button type="button" class="btn btn-primary">Voir mes livres</button>
         </nuxt-link>
      </form>
 </template>


 <script>
import axios from "~/plugins/axios";
export default {
  async asyncData({ params }) {
    const { data } = await axios.get(`/livres/${params.id}`);
    return {
      currentBook: data
    };
  },
    data() {
    return {
      currentBook: null
    };
  },
    methods: {
      async editBook(params){
        const res = await axios.put(`/livres/${this.currentBook.id}`, { title: this.currentBook.title,
                                                  author: this.currentBook.author })
        this.books = [this.books, res.data]
        this.title = ''
        this.author = ''
      },
    }
}
</script>