<template>
  <div class="container col-md-9 py-5">
      <div class="row mt-5">
          <h3>create Review</h3>
      </div>
      <div class="row mt-4">
          <!-- product photo -->
          <div class="col-1">
              <img :src="'/'+product.photo" width="100%" alt="">
          </div>
          <!-- product title -->
          <div class="col" style="font-size: 18px; font-weight:bold;">{{ product.title }}</div>
      </div>
      <hr>
      <form>
        <div class="row">
            <div class="col" style="font-size: 18px; font-weight:bold;">Overall Rating</div>
        </div>
        <!-- product rating -->
        <div class="row">
            <div class="col pt-2 pb-3">
                <no-ssr>
                    <star-rating  v-model="rating"></star-rating>
                </no-ssr>
            </div>
        </div>
        <div class="row">
            <div class="col" style="font-size: 18px; font-weight:bold;">Add photo or video</div>
        </div>
        <!-- photo str -->
        <div class="row">
            <div class="col-md-8">
                <div class="form-group">
                    <label for="photoStr">Shoppers find images and videos more helpful than text alone.</label>
                    <input v-model="photoStr" type="text" class="form-control" id="photoStr">
                </div>
            </div>
        </div>
        <hr>
        <!-- headline -->
        <div class="row">
            <div class="col-md-8">
                <div class="form-group">
                    <label for="headline" style="font-size: 18px; font-weight:bold;">Add a headline</label>
                    <input v-model="headline" type="text" class="form-control" id="headline" placeholder="What's most  important to know?">
                </div>
            </div>
        </div>
        <!-- body -->
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="reviewBody" style="font-size: 18px; font-weight:bold;">Write you review</label>
                    <textarea v-model="body" type="text" class="form-control" id="reviewBody" placeholder="What do you  like or dislike? What did you see this product for?"></textarea>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-12">
                <p>This is how you'll appear to other customers:</p>
                <div class="form-group row">
                    <label for="comment" class="col-sm-1 col-form-label">
                        <img src="/images/avatar.png" width="100%" />
                    </label>
                    <div class="col-sm-11">
                        <input type="text" class="form-control" id="comment"
                        :value="$auth.$state.user.name">
                    </div>
                </div>
                <p>Don't worry, you always change this on your profile</p>
            </div>
        </div>
        <div class="form-group">
            <button @click="onAddReview" type="button" 
            class="btn custom-btn custom-bg-orange">
            Submit</button>
        </div>
    </form>
  </div>
</template>

<script>
import StarRating from "vue-star-rating"
export default {
    layout: "defaultPage",
    components: {
        StarRating
    },
    async  asyncData({ $axios, params }) {
        try {
            let response = await $axios.$get('/api/products/'+params.id)

            return {
                product: response.product
            }
        } catch (err) {
            console.log(err)
        }
    },
    data() {
        return {
            rating: 0,
            body: "",
            headline: "",
            photoStr: ""
        }
    },
    methods: {
        async onAddReview() {
            try {
                let data = {
                    headline: this.headline,
                    body: this.body,
                    rating: this.rating,
                    photoStr: this.photoStr
                }
                console.log(data)
                let response =  await this.$axios.$post("/api/reviews/"+this.$route.params.id,
                data)
                this.$router.push("/products/"+this.$route.params.id)

                if(response.success) {
                    this.$router.push('/products/'+this.$route.params.id)
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style>

</style>