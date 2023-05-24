// $(window).scroll(function(){
//     if ($(this).scrollTop() > 50) {
//        $('#dynamic').addClass('newClass');
//     } else {
//        $('#dynamic').removeClass('newClass');
//     }
// });




window.addEventListener('scroll', function() {
    let scroll = this.scrollY;
    if(scroll > 100) {
        document.querySelector(".navbar").classList.add("navbg");
    } else {
        document.querySelector(".navbar").classList.remove("navbg");
    }
    
})