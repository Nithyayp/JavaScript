function display_image(src, width, height, alt) {
    var a = document.createElement("img");
  a.style.marginLeft = "20px";
  a.src = src;
  a.width = width;
  a.height = height;
  a.alt = alt;
  document.body.append(a);
  
}

display_image(
  "https://cdn.pixabay.com/photo/2022/09/21/02/35/white-faced-heron-7469269__340.jpg",
  400,
  300,
  "JavaScriptImage"
);
display_image(
  "https://cdn.pixabay.com/photo/2022/09/13/13/47/animal-7451968__340.jpg",
  400,
  300,
  "JavaScriptImage"
);
display_image(
  "https://cdn.pixabay.com/photo/2019/06/05/08/37/dog-4253238__340.jpg",
  400,
  300,
  "JavaScriptImage"
);
// display_image(
//   "https://cdn.pixabay.com/photo/2022/09/16/18/09/bird-7459335__340.jpg",
//   400,
//   300,
//   "JavaScriptImage"
// );
