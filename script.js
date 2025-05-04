

console.log("Loading....");
fetch('https://exchange-api-9mmx.onrender.com/get_bai_rates/')
    .then (response => {
        if (response.ok){
            return response.json()
        }
        else{
            throw new Error('Network response was not ok'); 
        }
    }
    )
    .then (data => console.log(data))
    .catch (error => console.error('There was a problem with the fetch operation:', error));
