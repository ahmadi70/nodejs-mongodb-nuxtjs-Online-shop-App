<template>
  <div class="container">
    <div class="row">
      <!-- main section -->
      <div class="col-md-12">
        <!-- Feature product -->
        <FeatureProductVue/>
        <h4 class="mt-5 d-inline-block px-3 py-1 rounded custom-bg-orange">Best Seller</h4>
        <div class="row">
          <div class="col-md-4 pb-4" v-for="product in products" :key="product._id">
            <div class="card">
              <nuxt-link :to="'/products/'+product._id">
                <div class="card-img-top" style="height:300px; overflow: hidden">
                  <img width="100%" :src="'/'+product.photo" alt="Card image cap">
                </div>
              </nuxt-link>
              <div class="card-body">
                <div class="row">
                  <h5 class="card-title col"><nuxt-link :to="'/products/'+product._id" class="pr-3">{{product.title}}</nuxt-link></h5>
                  <span class="col-4 custom-date" style="font-size: 12px;">Aug 23, 2020</span>
                </div>
                <no-ssr>
                  <StarRating
                   :rating="product.averageRating"
                   :read-only="true"
                   :star-size="18"
                  >
                  </StarRating>
                </no-ssr>
                <p class="custom-author">by <a href="#">{{product.owner.name}}</a></p>
                <div class="row">
                  <p class="custom-price col">${{product.price}}</p>
                  <a href="#" class="col-2 btn custom-bg-orange">cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeatureProductVue from '../components/FeatureProduct.vue'
import StarRating from "vue-star-rating"

export default {
  components: {
    FeatureProductVue,
    StarRating
  },
  async asyncData({$axios}) {
    const productResponse = await $axios.$get("/api/products")
    return {
      products: productResponse.products
    }
  }
}
</script>

<style>
</style>
