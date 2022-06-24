const image_input = document.querySelector("#image-input");
const image_carousel = document.querySelector("#image-carousel") as HTMLDivElement;

image_input!.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    // Logic needs to go here.
    const uploaded_image = reader.result; // We have image url now

    // 1. Create col div
    const col_div = document.createElement('div') as HTMLDivElement;
    col_div.className = "col-auto mb-3";

    // 2. Create image div
    const image_div = document.createElement('div') as HTMLDivElement;
    image_div.className = "img-thumbnail display-image";

    // 3. Add image to image div
    image_div.style.backgroundImage = `url(${uploaded_image})`;

    // 4. Add image div to col div
    col_div.appendChild(image_div);

    // 5. Add col div to image-carousel row div
    image_carousel.appendChild(col_div);
  });
  reader.readAsDataURL(this.files[0]);
});