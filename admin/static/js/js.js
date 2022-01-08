$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.openViewModal').click(function() { 
        var $modal = $("#viewModal");
        var winW = $(window).width();

        positionTop = $(window).scrollTop();
        //  console.log(positionTop)

         $modal.css({
            position:"fixed",
            left: ((winW - $modal.outerWidth())/2 + $(document).scrollLeft()),
            top: positionTop + "px"
        }).show();
    });

    $('.openEditModal').click(function() { 
        var $modal = $("#editModal");
        var winW = $(window).width();

        positionTop = $(window).scrollTop();
        //  console.log(positionTop)

         $modal.css({
            position:"fixed",
            left: ((winW - $modal.outerWidth())/2 + $(document).scrollLeft()),
            top: positionTop + "px"
        }).show();
    });
});

