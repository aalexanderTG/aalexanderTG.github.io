var image_input = document.querySelector("#image-input");
var image_carousel = document.querySelector("#image-carousel");
image_input.addEventListener("change", function () {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
        // Logic needs to go here.
        var uploaded_image = reader.result; // We have image url now
        // 1. Create col div
        var col_div = document.createElement('div');
        col_div.className = "col-auto mb-3";
        // 2. Create image div
        var image_div = document.createElement('div');
        image_div.className = "img-thumbnail display-image";
        // 3. Add image to image div
        image_div.style.backgroundImage = "url(".concat(uploaded_image, ")");
        // 4. Add image div to col div
        col_div.appendChild(image_div);
        // 5. Add col div to image-carousel row div
        image_carousel.appendChild(col_div);
    });
    reader.readAsDataURL(this.files[0]);
});
