// // // var modal = document.getElementById('myModal');

// // // var img = document.getElementById('myImg');
// // // var modalImg = document.getElementById("img01");
// // // var captionText = document.getElementById("caption");
// // // img.onclick = function () {
// // //     modal.style.display = "block";
// // //     modalImg.src = this.src;
// // //     captionText.innerHTML = this.alt;
// // // }

var modal = document.getElementsByClassName('modal')

var image = document.getElementsByClassName('modal-image');
var modalImage = document.getElementsByClassName('modal-content');
var captionText = document.getElementsByClassName('caption');
image.onclick = function() {
    modal.style.display = "block";
    modalImage.src = this.src;
    // captionText. = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}