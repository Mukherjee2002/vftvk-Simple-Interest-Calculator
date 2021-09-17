function updatevalue(){
    var x= document.getElementById('rate').value;
    document.getElementById('rate_val').innerHTML = x + "%";
}
function compute(){
    var principal = document.getElementById("principal").value;
    if(principal<=0){
        alert('Enter a positive input');
        return document.getElementById('principal').focus();
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount=(principal*rate*years)/100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById('result').innerHTML="If you deposit "+"<mark>"+principal+"</mark>"+",\<br>at an interest rate of "+"<mark>"+rate+"%"+"</mark>"+"\<br>You will receive an amount of "+"<mark>"+amount+"</mark>"+",\<br>in the year "+"<mark>"+year+"<mark>"+"\<br>"
}        
