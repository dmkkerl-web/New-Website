

fetch("https://api.countapi.xyz/hit/Dennis-M-Portfolio/views")
  .then(response => response.json())
  .then(data => {
    document.getElementById("views").innerText =
      `👁 ${data.value}  Views`;
  })
  .catch(error => {
    console.log(error);
  });