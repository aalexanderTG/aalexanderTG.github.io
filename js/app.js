var image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function () {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
        var uploaded_image = reader.result;
        var elm = document.querySelector("#display-image");
        elm.style.backgroundImage = "url(".concat(uploaded_image, ")");
    });
    reader.readAsDataURL(this.files[0]);
});
