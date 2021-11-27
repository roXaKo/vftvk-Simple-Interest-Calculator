
for (let i = 1; i <= 50; i++) {
    let opt  = document.createElement("option")
    opt.text =i;
    opt.value =i;    
    document.getElementById("years").appendChild(opt)  
}


let allowed = /[0-9.]+/
document.querySelector("#rate").addEventListener ("input", function(){applyRate()})
document.querySelector("#calc").addEventListener ("click", function(){compute()})
document.querySelector("#rateOut").addEventListener ("input", function(){applyRateBack()})
document.querySelector("#rateOut").addEventListener ("keypress", keyreg =>{
    if(!allowed.test(keyreg.key)){
        keyreg.preventDefault()
        alert("Please only use Numbers 0-9 or \".\"")
    }
})
document.querySelector("#principal").addEventListener ("keypress", keyreg =>{
    if(!allowed.test(keyreg.key)){
        keyreg.preventDefault()
        alert("Please only use Numbers 0-9 or \".\"")
    }
})
function applyRateBack(){
    if (document.getElementById("rateOut").value>20){
        document.getElementById("rateOut").value="20"
        document.getElementById("rate").value=20
        console.log(document.getElementById("rate").value)
    }
    if (document.getElementById("rateOut").value<1){
        document.getElementById("rateOut").value="1"
        document.getElementById("rate").value=1
    }
    document.getElementById("rate").value = document.getElementById("rateOut").value
    
}
function applyRate(){
    document.getElementById("rateOut").value = document.getElementById("rate").value
};

function compute(){
    let amount = document.getElementById("principal").value
    console.log(amount)
    if(amount=="0"|amount==""){
        alert("Please enter a Number larger than 0")
        document.getElementById("principal").focus()
        return
    }

    document.getElementById("amount").textContent = amount
    amount = parseInt(amount)

    let rate = document.getElementById("rate").value
    document.getElementById("rateEnd").textContent = rate+"%"
    console.log (rate)
    rate = parseFloat(rate)
    console.log (rate)

    let d = new Date
    let year= d.getFullYear()
    year = parseInt(year)
    let inpyear = document.getElementById("years").value 
    inpyear = parseInt(inpyear)
    document.getElementById("time").textContent = (inpyear+year)

    let res = (rate*inpyear)/100*amount
    document.getElementById("result").textContent = res.toString()
    document.getElementById("endwrap").style.display = "block"

};