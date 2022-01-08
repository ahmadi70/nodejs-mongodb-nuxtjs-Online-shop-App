<template>
  <div class="row">
        <div class="col-md-3">
            <p><b>{{ product.reviews.length }} customer reviews</b></p>
            <p style="font-size:9px;"><b>4.5 out of 5 starst &#x25BC;</b></p>
            
            <div class="row">
                <div class="col-3">
                    5 star
                </div>
                <div class="col-8 mt-1">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-warning" 
                        role="progressbar" style="width: 85%" aria-valuenow="85"
                         aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-1">
                    85%
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    4 star
                </div>
                <div class="col-8 mt-1">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-1">
                    75%
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    3 star
                </div>
                <div class="col-8 mt-1">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-1">
                    55%
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    2 star
                </div>
                <div class="col-8 mt-1">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-1">
                    15%
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    1 star
                </div>
                <div class="col-8 mt-1">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-warning" 
                        role="progressbar" style="width: 5%" aria-valuenow="5" aria-valuemin="0"
                         aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-1">
                    5%
                </div>
            </div>

            <hr>
            <p><b>Review this product</b></p>
            <p>Share your thoughts with other customers</p>
            <!-- Link to another Review page -->
            <nuxt-link 
            class="btn custom-btn custom-bg-orange"
            :to="`/reviews/${product._id}`">Write a customer review</nuxt-link>
            <hr>
        </div>
        <!-- Reviews -->
        <div class="col-md-5 offset-2">
            <!-- <p><b>Customer images</b></p> -->
            <!-- Review Images -->
            <!-- <div>
                <img
                 v-for="review  in reviews" :key="review._id"
                 class="m-1"
                 src="/images/harry.jpg" width="22.5%" alt="">
            </div>
            <p><b><a href="" class="custom-link-color"> See all customer images</a></b></p> -->
            <p><b>Read reviews that mention</b></p>
            <div>
                <button class="btn custom-btn custom-bg-green m-1">must read</button>
                <button class="btn custom-btn custom-bg-green m-1">great book</button>
                <button class="btn custom-btn custom-bg-green m-1">long term</button>
                <button class="btn custom-btn custom-bg-green m-1">well written</button>
                <button class="btn custom-btn custom-bg-green m-1">great read</button>
                <button class="btn custom-btn custom-bg-green m-1">everything store</button>
                <button class="btn custom-btn custom-bg-green m-1">brad store</button>
                <button class="btn custom-btn custom-bg-green m-1">steve jobs</button>

            </div>

            <p class="mt-3"><b>Showing <span v-if="product.reviews.length>8"> 1-8 of </span>
            {{ product.reviews.length }} reviews</b></p>
            <select name="reviewOption" id="">
                <option value="">Top Reviews</option>
            </select>

            <div class="py-3" v-for="review in reviews" :key="review._id">
                <div class="row my-3">
                    <div class="col-2">
                        <img src="/images/avatar.png" width="100%" />
                    </div>
                    <!-- Review Owner -->
                    <div class="col-9">{{ review.user.name }}</div>
                </div>
                
                <p>
                    <!-- Review Star -->
                    <a href="#">
                        <i class="fa fa-star" 
                        style="color: #ffc107; text-shadow:0px 0px 1px #000; font-size: 15px;"
                        v-for="i in review.rating" :key="i"></i>
                    </a>
                    <!-- Review Headline -->
                    <b><a href="">{{ review.headline }}</a></b>
                </p>
                <p>Sep 10,2020</p>
                <p>Format: Hardcover | 
                    <span><a href="" class="custom-link-color">Verified Purchase</a></span></p>
                <!-- Rview Body -->
                <p><b>{{ review.body }}</b></p>
                <p>60 people found this helpful</p>
                <input type="button" value="Helpful" 
                class="btn custom-btn custom-bg-orange" id="reviewBtn">

            </div>
            <!-- Link to another Review page -->
            <div class="mt-2">
                <nuxt-link 
                class="btn custom-btn custom-bg-orange"
                :to="`/reviews/${product._id}`">Write a customer review</nuxt-link>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: ["product", "reviews"]
}
</script>

<style>

</style>