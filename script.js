// Fetch random user data from API
fetch("https://randomuser.me/api/")
  .then(response => response.json()) // Convert response to JSON
  .then(data => {
    console.log(data); // Log data to check the structure
    const user = data.results[0]; // Get first user
    document.body.innerHTML += `
      <h2>${user.name.first} ${user.name.last}</h2>
      <img src="${user.picture.large}" alt="User Picture">
    `;
  })
  .catch(error => console.error("Error fetching data:", error));
