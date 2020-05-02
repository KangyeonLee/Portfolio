window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(document.documentElement.scrollTop)
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 1) {

    document.getElementById("topArea").style.height = "80px";
  } else {
    document.getElementById("topArea").style.height = "200px";
  }
}

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (currentScrollPos <= 0) {
//         //$(".header").removeClass("active")
//         console.log("A")
//     } else if (prevScrollpos < currentScrollPos) {
//         //$(".header").addClass("active")
//         console.log("B")
//     } else {
//         //$(".header").removeClass("active")
//         console.log("C")
//     }
//     prevScrollpos = currentScrollPos;
// }