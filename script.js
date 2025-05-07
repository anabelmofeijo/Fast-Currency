

console.log("Running aplication...");

function live_exchange(){
    const btn = document.getElementById('btn-live');

    btn.addEventListener("click", () =>{
        const textlabel = document.getElementById('bank-live');
        const text = textlabel.value;


        if (text == "BAI"){
            bai();
        }
        else if(text == "BIC") {
            bic();
        }
        else if(text == "STD") {
            std();
        }
        else{
            console.log("Failed!!");
        }
    } );

    
}

live_exchange();
bai();

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

function bic(){

    fetch ('https://exchange-api-9mmx.onrender.com/get_bic_rates/')
        .then (response => response.json())
        .then (data => {
            console.log(data);

           
            document.querySelector('#coin1').textContent = data[1].coin
            document.querySelector('#buy1').textContent = data[1].buy
            document.querySelector('#sell1').textContent = data[1].sell

            
            document.querySelector('#coin2').textContent = data[5].coin
            document.querySelector('#buy2').textContent = data[5].buy
            document.querySelector('#sell2').textContent = data[5].sell

            
            document.querySelector('#coin3').textContent = data[6].coin
            document.querySelector('#buy3').textContent = data[6].buy
            document.querySelector('#sell3').textContent = data[6].sell

            document.querySelector('#coin4').textContent = data[7].coin
            document.querySelector('#buy4').textContent = data[7].buy
            document.querySelector('#sell4').textContent = data[7].sell
        })
}


function std(){
    fetch('https://exchange-api-9mmx.onrender.com/get_standard_rates/')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.querySelector('#coin1').textContent = data[11].coin
            document.querySelector('#buy1').textContent = data[11].buy
            document.querySelector('#sell1').textContent = data[11].sell

            
            document.querySelector('#coin2').textContent = data[17].coin
            document.querySelector('#buy2').textContent = data[17].buy
            document.querySelector('#sell2').textContent = data[17].sell

            
            document.querySelector('#coin3').textContent = data[2].coin
            document.querySelector('#buy3').textContent = data[2].buy
            document.querySelector('#sell3').textContent = data[2].sell

            document.querySelector('#coin4').textContent = data[19].coin
            document.querySelector('#buy4').textContent = data[19].buy
            document.querySelector('#sell4').textContent = data[19].sell
        })
}