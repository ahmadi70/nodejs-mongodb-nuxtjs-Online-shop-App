<template>
  <div class="wrapper">
    <!-- Sidebar -->     
    <SidebarVue/>
    <!-- Page Content -->
    <div id="content">
        <!-- top navbar -->
        <NavbarVue/>
        <!-- main section -->
        <Nuxt />
    </div>  
    </div>
</template>

<script>
import SidebarVue from '../components/Sidebar.vue'
import NavbarVue from '../components/Navbar.vue'

export default {
  components: {
    SidebarVue,
    NavbarVue
  }
}
</script>

<style>
</style>
