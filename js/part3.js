const output1 = document.getElementById('output-1');
const output2 = document.getElementById('output-2');

document.getElementById('api-1-btn').addEventListener('click', async () => {
    // Make a request to your first API here. Put the response's data in output-1.
    // If your response has no body, put the status code in output-1.

    // TODO
    const inputElement = document.getElementById('input-place');
    const searchTerm = inputElement.value
   
    const key = CONFIG.API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(searchTerm)}&inputtype=textquery&fields=name,rating,place_id&key=${key}`;


        try {
            const response = await fetch(url); 
            
            if (!response.ok) {
            output1.textContent = "Status Code: " + response.status;
            return;
        }
            const data = await response.json();

            output1.textContent = JSON.stringify(data, null, 2);

        } catch (error) {
            output1.textContent = "Error: " + error.message;
        }
    });
// document.getElementById('api-2-btn').addEventListener('click', async () => {
//     // Make a request to your second API here. Put the response's data in output-2.
//     // If your response has no body, put the status code in output-2.
    
//     // TODO
// });

//partners should have done the map api already
