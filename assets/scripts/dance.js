//get data from url
const params = new URLSearchParams(window.location.search);

// get elemts to change
const blogPost = document.getElementById("dance");

if (params.has("blogID")) {
  fetch(`http://127.0.0.1:5000/show-blog-item/${params.get("blogID")}`)
    .then((response) => response.json())
    .then((blog) => {
      console.log(blog);
      blogPost.innerHTML = `
      <h1 class="b-title">${blog.title} </h1>
            <iframe class="video" width="560" height="315" src="${blog.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h2 class="b-head">${blog.header}</h2>
      <div><p class="b-para">${blog.description}</p></div>
      <p class="b-body">${blog.body}</p>
      
      `;
    });
} else {
  window.location.href = "./404.html";
}
