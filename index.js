async function updateViews() {
  try {
    const response = await fetch(
      "https://count.cab/hit/dmkkerl-portfolio"
    );

    const data = await response.json();

    document.getElementById("views").innerText =
      `👁 ${data.count} Portfolio Views`;
  } catch (error) {
    console.log(error);
  }
}

updateViews();