fetch("http://127.0.0.1:5000/show-data/")
  .then((res) => res.json())
  .then((data) => console.table(data));

function updateDancePost() {
  const inputs = document.getElementsByTagName("input");
  const text = document.getElementsByTagName("textarea");

  fetch(`http://127.0.0.1:5000/edit-data/${inputs[0].value}`, {
    method: "PUT",
    body: JSON.stringify({
      header: inputs[1].value,
      title: inputs[2].value,
      description: text[0].value,
      body: text[1].value,

      image: text[2].value,
      category: text[3].value,
      video: text[4].value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert(json);
      document.getElementById("update-form").reset();
    });
}
