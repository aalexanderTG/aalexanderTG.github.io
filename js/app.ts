const image_input = document.querySelector("#image-input");

image_input!.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    var elm: HTMLElement = document.querySelector("#display-image")!;
    elm.style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});