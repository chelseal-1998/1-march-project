function createDancePost() {
  const inputs = document.getElementsByTagName("input");

  fetch("https://infinite-sierra-94687.herokuapp.com/show-data/", {
    method: "POST",
    body: JSON.stringify({
      header: inputs[0].value,
      title: inputs[1].value,
      description: inputs[2].value,
      body: inputs[3].value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("Dance Blog has been created");
      document.getElementById("create-form").reset();
    });
}
