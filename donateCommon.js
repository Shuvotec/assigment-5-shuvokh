 function getDonateAll(noakhaliAmount,noakhaliCountAll,mainCountAll,jaygaName,modeltdicci){
    
    if (isNaN(noakhaliAmount)|| noakhaliAmount <= 0 || noakhaliAmount === "" || noakhaliAmount === null ||noakhaliAmount === undefined) {
      
      
        
        // add dialog
const div = document.createElement("div");
   div.classList.add("modal-box");
   div.innerHTML = `
    <h3 class="text-2xl text-center font-bold"><span class="text-4xl text-red-600">X</span> <br> Not Successful.please try again</h3>
                                     <p class="py-4 text-center">! Pleade ammount add</p>
                                     <h3 class="text-xl text-center font-bold">NOT Successfully</h3>
                                     <div class="modal-action">
                                       <form method="dialog">
                                        
                                         <button class="btn">Close</button>
                                       </form>
                                     </div>
   `;
   modeltdicci.appendChild(div);
   return ; 
   }
   
 else{

     if(noakhaliAmount < mainCountAll){
       const totalAmount = mainCountAll - noakhaliAmount;
       document.getElementById("main-ammount").innerText = totalAmount;
      
   }    
   else{
             
        // add dialog
const div = document.createElement("div");
div.classList.add("modal-box");
div.innerHTML = `
 <h3 class="text-2xl text-center font-bold"><span class="text-4xl text-red-600">O Vai</span> <br>Amount E Taka Nai</h3>
                                  <p class="py-4 text-center">! Pleade Taka Dukan</p>
                                  <h3 class="text-xl text-center font-bold">NOT Successfully</h3>
                                  <div class="modal-action">
                                    <form method="dialog">
                                     
                                      <button class="btn">Close</button>
                                    </form>
                                  </div>
`;
modeltdicci.appendChild(div);
return ; 
   }
   const noakhaliTotal = noakhaliAmount + noakhaliCountAll;
   document.getElementById("noakhali-subAm").innerText = noakhaliTotal;
   document.getElementById("noakhali-amount").value = "";
  
   // add dialog

   const div = document.createElement("div");
   div.classList.add("modal-box");
   div.innerHTML = `
    <h3 class="text-4xl text-center font-bold">Congrates!</h3>
                                     <img class="mx-auto pt-5" src="./assets/coin.png" alt="">
                                     <p class="py-4 text-center">You Have Donated for Humankind</p>
                                     <h3 class="text-xl text-center font-bold">Successfully</h3>
                                     <div class="modal-action">
                                       <form method="dialog">
                                        
                                         <button class="btn">Close</button>
                                       </form>
                                     </div>
   `;
   modeltdicci.appendChild(div);
// full code for


   // add transaction Open
        const p = document.createElement("p");
        p.innerHTML = `<div class="text-center border-2 border-gray-200 rounded-xl mt-10 mx-10 md:mx-20 p-5">
        <h4 class="text-2xl font-bold">${noakhaliAmount} Taka is ${jaygaName}, Bangladesh</h4>
        <p class="pt-5">Date : <span class="text-gray-600">${new Date().toString()}</span></p>
        </div>
        `;
    // shuld be a common function
        document.getElementById("TranSation-container").appendChild(p);
   // add transaction Close
 }
 
 

 }


 function showSectionById(id) {
    // hide all sections
    document.getElementById('all-donate').classList.add('hidden');
       document.getElementById('all-history').classList.add('hidden');
       // show the selected section
       document.getElementById(id).classList.remove('hidden');
}