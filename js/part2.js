const userList = document.getElementById("user-list");

document.addEventListener("DOMContentLoaded", async () => {
    // This function should GET the first page of users from reqres.in.
    // The users should be displayed in the user-list element.
    // Each user should be in a new <div> with the user's first name, last name, and profile image.
    // The format should follow the example user in the HTML file.

    // TODO

    const url = "https://randomuser.me/api?results=20";

    let Response = await fetch(url);
    let data = await Response.json();

    data.results.forEach(user => {
        let name = `${user.name.title} ${user.name.first} ${user.name.last}`;
        let imgSrc = user.picture.thumnail;

        let newCard = document.createElement("div");
        newCard.classList.add("card");

        newCard.innerHTML = `<h2>${fullname}</h2>
        <img src="${imgSrc}" alt="${fullname}">`

        userList.appendChild(newCard);
    });

});
