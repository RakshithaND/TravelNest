// Example of fetching data from the backend
fetch("/api/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const messageDiv = document.getElementById("responseMessage");
    const userList = document.getElementById("userList");

    // Display message
    messageDiv.innerText = data.message;

    // Display data in the user list
    data.data.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
