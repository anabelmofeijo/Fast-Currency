

console.log("Running aplication...");

function live_exchange(){
    bai();
}

live_exchange();

function bai(){
    fetch('https://exchange-api-9mmx.onrender.com/get_bai_rates/') 
        .then (response => response.json())
        .then (data => {
            console.log(data);

            // coin = EURO
            document.querySelector('#coin1').textContent = data[5].coin
            document.querySelector('#buy1').textContent = data[5].buy
            document.querySelector('#sell1').textContent = data[5].sell

            // coin = USD
            document.querySelector('#coin2').textContent = data[6].coin
            document.querySelector('#buy2').textContent = data[6].buy
            document.querySelector('#sell2').textContent = data[6].sell

            // coin = GBP
            document.querySelector('#coin3').textContent = data[12].coin
            document.querySelector('#buy3').textContent = data[12].buy
            document.querySelector('#sell3').textContent = data[12].sell

            document.querySelector('#coin4').textContent = data[14].coin
            document.querySelector('#buy4').textContent = data[14].buy
            document.querySelector('#sell4').textContent = data[14].sell

        })
}