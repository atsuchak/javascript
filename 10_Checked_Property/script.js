const subscribe = document.getElementById("myCheckBox");
const visa = document.getElementById("myVisa");
const master = document.getElementById("myMaster");
const paypal = document.getElementById("myPayPal");

const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");

const submit = document.getElementById("button");

submit.onclick = function() {
    if(subscribe.checked) {
        label1.textContent = `User has subscribed`, console.log(`User has subscribe`);
        if(visa.checked) label2.textContent = `User choose visa card for payment`, console.log(`User choose visa card for payment`);
        else if(master.checked) label2.textContent = `User choose master card for payment`, console.log(`User choose master card for payment`);
        else if(paypal.checked) label2.textContent = `User choose paypal for payment`, console.log(`User choose paypal for payment`);
        else label2.textContent = `User didn't choose any payment method`, console.log(`User didn't choose any payment method`);
    }else { 
        label1.textContent = `User is unsubcribed`, console.log(`User is unsubcribed`);
        label2.textContent = `Unable to choose payment method`, console.log(`Unable to choose payment method`);
    }
}