"use strict";



function timer(){
	let datez = new Date();
	let hourz = datez.getHours();
	if(hourz < 10)hourz = "0" + hourz;
	let minz = datez.getMinutes();
	if(minz < 10)minz = "0" + minz;
	let secz = datez.getSeconds();
	if(secz < 10)secz = "0" + secz;

	let day = datez.getDate();
	let month = datez.getMonth() + 1;
	let year = datez.getFullYear();

	//document.getElementById("date").innerHTML = day + "/" + month + "/" + year;
	//document.getElementById("clock").innerHTML = hourz + ":" + minz + ":" + secz;

	setTimeout("timer()", 1000);
}

function chck(){

	let area = document.getElementById("chck_pole").value;
	let area_pf = parseFloat(area);
	let width = document.getElementById("chck_width").value;
	let width_pf = parseFloat(width);
	let material_val = parseFloat(document.getElementById("material").value);
	if(material_val != 0){
		let cust = document.getElementById("cust");
		cust.disabled = true;
	}
	else{
		let cust = document.getElementById("cust");
		cust.disabled = false;
		material_val = parseFloat(document.getElementById("cust").value);
	}

	if(isNaN(area_pf) || isNaN(width_pf) || isNaN(material_val)){
		document.getElementById("outpt").innerHTML = "Enter all data properly";
	}
	else{
		let mass = Math.round(area * (width / 1000) * material_val * 100)/100;
		document.getElementById("outpt").innerHTML = mass + " kg";
	}
}

let ch = document.getElementsByClassName("changes");

for(let i = 0; i < ch.length; i++){
	ch[i].oninput = chck;
}


