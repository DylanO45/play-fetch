const output = document.getElementById("output");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

document.getElementById("get-btn").addEventListener("click", async () => {
    // This function should send a GET request to the echo endpoint and output the result
    // The two input fields should be included in the request URL as **query parameters**
    // TODO
    const url = `https://echo.zuplo.io/api?name=${nameInput.value}&age=${ageInput.value}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        output.textContent = JSON.stringify(data, null, 2);
    } catch {
        output.textContent = "Error" + error.message;
        
    }
    
});

document.getElementById("post-json-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as JSON
    // The two input fields should be included in the request body as **JSON data**

    // TODO
    const url = "https://echo.zuplo.io/api";

    let dataBody = {
        name: nameInput.value,
        age: ageInput.value
    };

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataBody)
    };
    try {
        let Response = await fetch(url, options);
        let data = await Response.json();

        output.textContent = JSON.stringify(data, null, 2);
    } catch {
        output.textContent = "Error" + error.message;
    }

});

document.getElementById("post-form-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as form data
    // The two input fields should be included in the request body as **url-encoded data**

    // TODO
    const url = "https://echo.zuplo.io/api";

    let dataBody = {
        name: nameInput.value,
        age: ageInput.value
    };

    let options = {
        method: "POST",
        body: new URLSearchParams(dataBody)
    };

    try {
        let Response = await fetch(url, options);
        let data = await Response.json();

        output.textContent = JSON.stringify(data, null, 2);
    } catch {
        output.textContent = "Error" + error.message;
    }

});
