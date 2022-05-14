function init() {
    setInterval("changeImg()", 3000);
}
var i = 0;
function changeImg() {
    i++;
    document.getElementById("img1").src = i + ".jpg";
    if (i == 2) {
        i = 0;
    }
}

$(function () {
  $(".navMenu").mouseover(function () {
    $(this).children('ul').show()
  })
  $(".navMenu").mouseout(function () {
    $(this).children('ul').hide()
  })
})