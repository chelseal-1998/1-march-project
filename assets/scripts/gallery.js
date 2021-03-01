//fetching data from heroku

function getPosts(item) {
  let list = document.getElementById("para");
  list.innerHTML = item;
}

fetch("http://127.0.0.1:5000/show-data/")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((dance, index) => {
      // let blog = new Blog(dance);
      // console.log(blog);
      console.log(index);
      let item = createItem(dance);
      let list = document.getElementsByClassName("para")[index];
      console.log(list);
      list.innerHTML = item;
    });
    // let blog = new Blog(data);

    // getPosts(item);
    // console.log(blog);
  });

// function Blog(item) {
//   return {
//     id: item[0],
//     header: item[1],
//     title: item[2],
//     description: item[3],
//     body: item[4],
//   };
// }

function createItem(blog) {
  const listItem = `
    <img src="${blog.image}" class="image"/>
    <h2>${blog.title}</h2>
    <p>${blog.description}</p>
    
    <button><a href="./waltz.html?blogID=${blog.id}">See More</a></button>`;
  return listItem;
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
