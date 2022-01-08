<template>
  <div class="container">
      <div class="row mt-5 mb-3">
          <div class="col-md-4 mx-auto pl-4"><h3><nuxt-link to="/">Logo</nuxt-link></h3></div>
      </div>
      <div class="row">
          <div class="col-md-4 mx-auto">
            <div class="card">
                <div class="card-body">
                    <form>
                        <h3>Create account</h3>
                        <div class="form-group">
                            <label for="name">Your name</label>
                            <input type="text" class="form-control form-control-sm" id="name" v-model="name">
                        </div>
                        <div class="form-group">
                            <label for="name">Email</label>
                            <input type="email" class="form-control form-control-sm" id="email" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control form-control-sm" id="password" v-model="password">
                            <small id="emailHelp" class="form-text text-muted">
                                Password must be at least 6 characters</small>
                        </div>
                        <div class="form-group">
                            <button @click="onSignup" type="button" 
                            class="form-control form-control-sm btn custom-btn custom-bg-orange">
                            Create an Account</button>
                        </div>
                        <hr>
                        Already have an account? <nuxt-link to="/login" class="custom-link-color">Sign In</nuxt-link>
                    </form>
                </div>
            </div>
                    
          </div>
      </div>
  </div>
</template>

<script>
export default {
    middleware: "auth",
    auth: "guest",
    layout: "none",
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async onSignup() {
            try {
                let data = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }

                let response = await this.$axios.$post("/api/auth/signup", data)
                
                console.log(response)

                if(response.success) {
                    this.$auth.loginWith("local", {
                        data: {
                            email: this.email,
                            password: this.password
                        }
                    })

                    this.$router.push("/")
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