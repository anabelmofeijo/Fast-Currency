document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});
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
    fetch('https://exchange-api-8mcm.onrender.com/get_bai_rates/') 
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

    fetch ('https://exchange-api-8mcm.onrender.com/get_bic_rates/')
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
    fetch('https://exchange-api-8mcm.onrender.com/get_standard_rates/')
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

function bai_conversion(){
   
    const amount_input = document.getElementById('amount');
    const amount = amount_input.value;
    const target_currency_label = document.getElementById('to');
    const target_currency = target_currency_label.value;
    const source_currency_label = document.getElementById('from');
    const source_currency = source_currency_label.value;
    

    bai_convert_now(source_currency, target_currency, amount);
     
}

function bai_convert_now(source_currency, target_currency, amount){
    fetch (`https://exchange-api-8mcm.onrender.com/bai/convert/?source_currency=${source_currency}&target_currency=${target_currency}&amount=${amount}`)
        .then (response => response.json())
        .then (data => {
            console.log(data);
            console.log(data.converted_amount);

            
            const coin_simbol = document.getElementById('to');
            const coin = coin_simbol.value;

            if (data.converted_amount){
                document.querySelector('#result').textContent = `${data.converted_amount} ${coin}`;
            }
            else {
                document.querySelector('#result').textContent = "Try Again, Please!";

            }
                
        })
}

function bic_convert_now(source_currency, target_currency, amount){
    fetch (`https://exchange-api-8mcm.onrender.com/bic/convert/?source_currency=${source_currency}&target_currency=${target_currency}&amount=${amount}`)
        .then (response => response.json())
        .then (data => {
            console.log(data);
            console.log(data.converted_amount);

            
            const coin_simbol = document.getElementById('to');
            const coin = coin_simbol.value;

            if (data.converted_amount){
                document.querySelector('#result').textContent = `${data.converted_amount} ${coin}`;
            }
            else {
                document.querySelector('#result').textContent = "Try Again, Please!";

            }
                
        })
}

function bic_conversion(){

    const amount_input = document.getElementById('amount');
    const amount = amount_input.value;
    const target_currency_label = document.getElementById('to');
    const target_currency = target_currency_label.value;
    const source_currency_label = document.getElementById('from');
    const source_currency = source_currency_label.value;
    
    bic_convert_now(source_currency, target_currency, amount)
}


function std_convert_now(source_currency, target_currency, amount){
    fetch (`https://exchange-api-8mcm.onrender.com/standard/convert/?source_currency=${source_currency}&target_currency=${target_currency}&amount=${amount}`)
        .then (response => response.json())
        .then (data => {
            console.log(data);
            console.log(data.converted_amount);

            const coin_simbol = document.getElementById('to');
            const coin = coin_simbol.value;

            if (data.converted_amount){
                document.querySelector('#result').textContent =  `${data.converted_amount} ${coin}`;
            }
            else {
                document.querySelector('#result').textContent = "Try Again, Please!";

            }
                
        })
}

function std_conversion(){
    const amount_input = document.getElementById('amount');
    const amount = amount_input.value;
    const target_currency_label = document.getElementById('to');
    const target_currency = target_currency_label.value;
    const source_currency_label = document.getElementById('from');
    const source_currency = source_currency_label.value;
        

    std_convert_now(source_currency, target_currency, amount);
      
}


function conversion(){
    const bank_option = document.getElementById('bank-option')
    const button = document.getElementById('convert-now')

    button.addEventListener("click", () => {
        event.preventDefault();

        const bank = bank_option.value;

        if (bank == "BAI"){
            bai_conversion();
        }
        else if (bank == "BIC"){
            bic_conversion();
        }
        else if (bank == "STD"){
            std_conversion();
        }
        else{
            console.log("Error");
        }
    });
    
}

conversion();
