<template>
  <div>category form
     <!-- Form -->
    <div class="row px-md-5">
      <div class="col px-5">
        <form class="px-md-5">

         


          <!-- Type input -->
          <div class="form-group row">
            <label for="type" class="col-sm-3 col-form-label col-form-label-sm">Type</label>
            <div class="col-sm-9">
              <input v-model="category" name="type" type="text" class="form-control form-control-sm" id="title">
            </div>
          </div>

         

         

          
          

          <hr>

          <button @click="onAddcategory" type="button" class="btn custom-btn-color px-3">Save</button>
        </form>


      </div>
    </div>

     <!-- table -->
    <div class="row">
      <div class="col px-5 pt-5">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">type</th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="(category, index) in categories" :key="category._id">
              <th scope="row">{{ index+1 }}</th>
              <td>{{ category.type }}</td>
             
                
            </tr> 
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
category:null
    }

},
  async asyncData({$axios}){
      const respons=await $axios.$get(
           'http://localhost:3000/api/categories'
      )
      //console.log(respons. categories)
      return{
          categories:respons.categories
      }
  },
  
methods:{
   async onAddcategory(){
    try{
        const data={
            type:this.category
        }
    await this.$axios.$post(
        'http://localhost:3000/api/categories',
        data
    )
    

    }catch(err){
            console.log(err)
    }


    
}
}

}
</script>

<style>

</style>