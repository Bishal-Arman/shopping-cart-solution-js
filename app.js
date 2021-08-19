function inputAll(inputId,isIncreasing,isAdd){
  const caseInput=document.getElementById(inputId);
let caseNumber=caseInput.value;
  
  if(isIncreasing==true){
    caseNumber=parseInt(caseNumber)+1;
  }
  else if(caseNumber>0){
    caseNumber=parseInt(caseNumber)-1;
  }
  caseInput.value=caseNumber;

 if(isAdd==true){
  const caseTotal=document.getElementById('case-total');
  caseTotal.innerText=caseNumber*59;

 }
 else if(isAdd==false){
  const phoneTotal=document.getElementById('phone-total');
  phoneTotal.innerText=caseNumber*1219;
 }

}
// for subtotal and tax and final total
function getInputProduct(product){
  const productInput=document.getElementById(product+'-number');
  const productNumber=productInput.value;
  return productNumber;
}
function calculateTotal(){
  const phoneTotal=getInputProduct('phone')*1219;
  const caseTotal=getInputProduct('case')*59;
  const subtotal=phoneTotal+caseTotal;
  const taxTotal=subtotal/10;
  const finalTotal=subtotal+taxTotal;
  document.getElementById('sub-total').innerText=subtotal;
  document.getElementById('tax-ammount').innerText=taxTotal;
  document.getElementById('total-price').innerText=finalTotal;

}

//handle increase decrease event
document.getElementById('case-plus').addEventListener('click',function(){
 inputAll("case-number",true,true);
 calculateTotal();

})
document.getElementById('case-minus').addEventListener('click',function(){

  inputAll("case-number",false,true);
  calculateTotal();
})
//handle increase decrease event for phone
document.getElementById('phone-plus').addEventListener('click',function(){

 inputAll("phone-number",true,false);
 calculateTotal();

})
document.getElementById('phone-minus').addEventListener('click',function(){

  inputAll("phone-number",false,false);
  calculateTotal();

})