function multiply()
{
    var commission;
    var totaltradevalue = document.getElementById('totaltradevalue').nodeValue;
    var tradevalue = document.getElementById('tradevalue').nodeValue;

    if(totaltradevalue < 5000)
        commission = tradevalue * .2;
    else if(totaltradevalue < 10000)
        commission = tradevalue * .5;
    else if(totaltradevalue < 20000)  
        commission = tradevalue * .7;
    else
        commission = tradevalue * .10;
        
    document.getElementById('totalcommission').value = commission;    
}