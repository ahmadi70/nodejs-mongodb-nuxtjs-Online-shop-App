<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top" id="banner">
      <div class="container-fluid">
      <!-- Brand -->
      <nuxt-link class="navbar-brand" to="/"><span>Logo</span> Here</nuxt-link>

      <!-- Toggler/collapsibe Button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav ml-auto col-md-6">
          <li class="nav-item col-md-12">
            <span class="oi" data-glyph="magnifying-glass"></span>
            <input placeholder="Search..." type="text" class="custom-search-box">
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Order</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cart</a>
          </li> 
          <li class="nav-item">
            <nuxt-link v-if="$auth.$state.loggedIn" class="nav-link" to="/profile">{{ $auth.$state.user.name }}</nuxt-link>
            <nuxt-link v-else class="nav-link" to="/login">LogIn</nuxt-link>
          </li> 
          <li class="nav-item" v-if="$auth.$state.loggedIn">
            <a class="nav-link" href="#" @click="onLogout">Logout</a>
          </li> 
        
        </ul>
      </div>
      </div>
    </nav>

    <div class="banner">
      <div class="container">
      <div class="banner-text">
      <div class="banner-heading">
      Glad to see you here !
      </div>
      <div class="banner-sub-heading">
      Here goes the secondary heading on hero banner
      </div>
      <button type="button" class="btn btn-warning text-dark btn-banner">Get started</button>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    async onLogout() {
      await this.$auth.logout()
    }
  }
}
</script>

<style>
</style>