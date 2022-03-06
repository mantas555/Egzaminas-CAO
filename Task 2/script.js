/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
var count = 0;
var countButton = document.getElementById("btn__element");
var displayCount = document.getElementById("btn__state");
countButton.onclick = function(){
  count++;
  displayCount.innerHTML = count;
}
