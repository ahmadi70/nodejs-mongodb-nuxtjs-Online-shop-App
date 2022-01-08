<template>
  <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                
                <button type="button" id="sidebarCollapse" class="navbar-btn" style="background: pink">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-align-justify"></i>
                </button>
                
    
                <div class="collapse navbar-collapse col-md-11" id="navbarSupportedContent">
                    <h4 class="col-md-4 text-light text-uppercase mb-0">Dashboard</h4>
                    
    
                    <ul class="nav navbar-nav ml-auto col-md-6">
                        <form>
                <div class="input-group">
                    <input type="text" class="form-control search-input" placeholder="Search...">
                    <button type="button" class="btn btn-white search-button"><i class="fas fa-search text-danger"></i></button>
                </div>
                </form>
                        
                        <li class="nav-item icon-parent"><a href="#" class="nav-link icon-bullet"><i class="fas fa-comments text-muted fa-lg"></i></a></li>
                        <li class="nav-item icon-parent"><a href="#" class="nav-link icon-bullet"><i class="fas fa-bell text-muted fa-lg"></i></a></li>
                        <li class="nav-item ml-md-auto"><a href="#" class="nav-link" data-toggle="modal" data-target="#sign-out"><i class="fas fa-sign-out-alt text-danger fa-lg"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>