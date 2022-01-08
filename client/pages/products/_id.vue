<template>
  <main>
      <!-- breadcrumb -->
      <nav>
        <ol class="breadcrumb custom-breadcrumb">
            <li class="breadcrumb-item custom-breadcrumb-item my-5"><a class="custom-default-color custom-link-hover" href="#">Category</a></li>
            <li class="breadcrumb-item custom-breadcrumb-item my-5">{{ product.title }}</li>
        </ol>
    </nav>
    <!-- main section -->
    <div class="container-fluid mb-5">
        <div class="row">
            <!-- product -->
            <div class="col-md-9">
                <!-- product item -->
                <div class="row">
                    <div class="col-md-2">
                        <img width="100%" :src="'/'+product.photo" alt="">
                    </div>
                    <div class="col-md-10 pl-md-5">
                        <div class="row">
                             <div class="col"><b style="font-size: 23px;">{{product.title}} </b><span>Paperback</span></div>
                             
                        </div>
                       <div>by <a href="#" class="custom-link-color">{{product.owner.name}}</a> (Author)</div>
                       <no-ssr>
                           <StarRating
                            :rating="product.averageRating"
                            :read-only="true"
                            :star-size="18"
                            >
                            </StarRating>
                       </no-ssr>
                       <hr>
                       <div class="p-2">
                            <a href="#" class="custom-link-color">> See all 18 formats and edition</a>
                            <div class="row pt-3">
                                <div class="col-4 col-md-2">
                                    <div class="card p-2" style="font-size: 12px">
                                        <span>cApp</span>
                                        <span> - </span>
                                    </div>
                                    <div style="font-size: 11px">
                                        <a class="custom-link-color" href="#">Read with Our</a>
                                        Free App
                                    </div>
                                </div>
                                <div class="col-4 col-md-2">
                                    <div class="card p-2" style="font-size: 12px">
                                        <span>Audio</span>
                                        <span> - </span>
                                    </div>
                                    <div style="font-size: 11px">
                                        Free App 
                                        <a class="custom-link-color" href="#">with your Audio Trial</a>
                                    </div>
                                </div>
                                <div class="col-4 col-md-2">
                                    <div class="card p-2" style="font-size: 12px">
                                        <span>Paperback</span>
                                        <span> - </span>
                                    </div>
                                </div>
                            </div>
                            <p>description - {{product.description}}</p>
                       </div>
                       <hr>
                       <div>
                           Length: 
                           <a class="custom-link-color" href="#">360 pages <i class="fa fa-angle-down"></i></a>
                       </div>
                    </div>
                </div>
                <!-- product author -->
                <div class="row">
                    <div class="col-md-5 px-md-5 py-md-5">
                        <hr>
                        <div class="row">
                            <div class="col">
                                <p>Follow the Author</p>
                                <div class="row">
                                    <div class="col-md mb-5 mb-md-1">
                                        <div class="row">
                                            <div class="col-7">
                                                <div class="row">
                                                    <div class="col-4" width="60px" height="60px" style="overflow:hidden;">
                                                        <img style="border-radius:100%;" width="50px" height="50px" src="/images/harry.jpg" alt="">
                                                    </div>
                                                    <div class="col-8">{{product.owner.name}}</div>
                                                </div>
                                            </div>
                                            <div class="col-5">
                                                <button class="custom-bg-orange py-2 px-4 custom-btn"> + Follow</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- cart sidebar -->
            <div class="col-md-3">
                <div class="card">
                    <!-- Form -->
                    <div class="row">
                        <div class="px-4 py-2">
                            <form>
                                <div class="form-group row">
                                    <div class="col-sm-1">
                                    <input type="radio" class="mt-2">
                                    </div>
                                    <label for="buy-top" class="col-sm col-form-label col-form-label-sm">Buy Now</label>
                                    <label class="col-sm-3 text-right col-form-label col-form-label-sm">${{product.price}}</label>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-2">
                                        <select name="" id="">
                                            <option value="">Qty: 1</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm">
                                        <span><b>In Stock</b></span><br/>
                                        <span>Ships from and sold by CTI-Market</span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm">
                                        <button class="form-control">
                                            <span class="pull-left" id="basic-addon1">@</span>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm">
                                        <button class="form-control">
                                            <span class="pull-left" id="basic-addon1">@</span>Buy Now
                                        </button>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm" style="font-size: 14px">
                                        This item shipts to California Get it by Monday. <br>
                                        Sept 23 - Monday, Sept.30 Choose this data at checkout
                                    </div>
                                </div>
                                <hr>
                                <a class="custom-link-color" href="#">Deliver to California</a>
                                <hr>
                                <div class="form-group row">
                                    <div class="col-sm-1">
                                    <input type="radio" class="mt-2">
                                    </div>
                                    <label for="buy-bottom" class="col-sm col-form-label col-form-label-sm">Buy Now</label>
                                    <label class="col-sm-3 text-right col-form-label col-form-label-sm">${{product.price}}</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <!-- more info about author -->
        <div class="row">
            <div class="col-12">
                <p>More about the author</p>
            </div>
            <div class="col col-md-3">
                <div class="row">
                    <div class="col-5 align-items-center">
                        <div class="pl-2 pl-md-5" width="60px" height="60px" style="overflow: hidden;">
                            <img width="60px" height="60px" src="/images/harry.jpg" alt="">
                        </div>
                    </div>
                    <div class="co-6">
                        <span><b>Biograaphy</b></span><br>
                        <span>{{product.owner.about}}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4 pl-2 pl-md-5 align-items-center">
                        <button class="custom-bg-orange px-4 py-1 mt-1 custom-btn">Follow</button>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <!-- Review Section -->
        <ReviewSectionVue :product="product" :reviews="reviews"/>
    </div>
  </main>
</template>

<script>
import ReviewSectionVue from '../../components/ReviewSection.vue'
import StarRating from "vue-star-rating"

export default {
    components: {
        ReviewSectionVue,
        StarRating
    },
    layout: "defaultPage",
    
    async asyncData({$axios, params}) {
        const productResponse = await $axios.$get('/api/products/'+ params.id)
        const reviewsResponse = await $axios.$get('/api/reviews/'+ params.id)

        return {
            product: productResponse.product,
            reviews: reviewsResponse.reviews
        }
    }
}
</script>

<style>

</style>