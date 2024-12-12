document.getElementById("noakhali-donotebtn").addEventListener("click", function (event) {
    event.preventDefault();
    const noakhaliName = document.getElementById("noakhaliName").innerText;
    const noakhalidonate = document.getElementById("noakhali-amount").value;
    noakhalidonate.value = '';
    const noakhaliAmounta = parseFloat(noakhalidonate);
    const noakhaliSubCount = document.getElementById("noakhali-subAm").innerText;
    const noakhaliCountAlla = parseFloat(noakhaliSubCount);
    const mainAmount = document.getElementById("main-ammount").innerText;
    const mainCountAlla = parseFloat(mainAmount);
    const modelnoakhali = document.getElementById("my_modal_1");
    

     getDonateAll(noakhaliAmounta,noakhaliCountAlla,mainCountAlla,noakhaliName,modelnoakhali);
});



// part of Feni Open
document.getElementById("feni-donotebtn").addEventListener("click", function (event) {
  event.preventDefault();
  const feniName = document.getElementById("feniName").innerText;
  const fenidonate = document.getElementById("feni-amount").value;
  fenidonate.value = '';
  const feniAmounta = parseFloat(fenidonate);
  const feniSubCount = document.getElementById("feni-subAm").innerText;
  const feniCountAlla = parseFloat(feniSubCount);
  const mainAmount = document.getElementById("main-ammount").innerText;
  const mainCountAlla = parseFloat(mainAmount);
  const modelfeni = document.getElementById("my_modal_2");
  

   getDonateAll(feniAmounta,feniCountAlla,mainCountAlla,feniName,modelfeni);
});
// part of Feni Close

// part of Injured Open
document.getElementById("Injured-donotebtn").addEventListener("click", function (event) {
  event.preventDefault();
  const InjuredName = document.getElementById("InjuredName").innerText;
  const Injureddonate = document.getElementById("Injured-amount").value;
  Injureddonate.value = '';
  const InjuredAmounta = parseFloat(Injureddonate);
  const InjuredSubCount = document.getElementById("Injured-subAm").innerText;
  const InjuredCountAlla = parseFloat(InjuredSubCount);
  const mainAmount = document.getElementById("main-ammount").innerText;
  const mainCountAlla = parseFloat(mainAmount);
  const Injurednoakhali = document.getElementById("my_modal_3");
  

   getDonateAll(InjuredAmounta,InjuredCountAlla,mainCountAlla,InjuredName,Injurednoakhali);
});
// part of Feni Close



document.getElementById("donate-btn").addEventListener("click", function () {
  showSectionById('all-donate')
})

// Trangation part

document.getElementById("history-btn").addEventListener("click", function () {
             showSectionById('all-history')
})
