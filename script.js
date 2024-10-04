function calcusd(){
    let euro = eurField.value.replace(',', '.');
    let result1 = euro / 0.9
    usdField.value = result1.toFixed(2).replace('.', ',')
}

function calceur(){
    let usd = usdField.value.replace(',', '.');
    let result2 = usd * 0.9
    eurField.value = result2.toFixed(2).replace('.', ',')
}