$(window).on("load",function(){
    $(".page-loader").fadeOut(4000);
});
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.sidenav');
var instances = M.Sidenav.init(elems,{edge:'right'});
});
