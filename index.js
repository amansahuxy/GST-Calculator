const input=document.getElementById("inpNum");
const gstRate=document.getElementById("gstRate");
const Calculate=document.getElementById("calculate");
const GST=document.getElementById("gst");
const Final=document.getElementById("final");


Calculate.addEventListener("click",()=>{
    const amount=Number(input.value);
const rate=Number(gstRate.value);
const gstAmount=(amount*rate)/100;
const finalAmount=amount+gstAmount;
GST.innerText=`GST Amount: ₹${gstAmount}`;
Final.innerText=`Total Amount: ₹${finalAmount}`;

})