var lis = document.getElementsByTagName("li");
lis[0].onclick = function() {

	document.getElementById("leftfirst").className = "inline";
	document.getElementById("leftsecond").className = "hidden";
	lis[0].style.borderBottom = "2px solid #5FD5F3";
	lis[1].style.borderBottom = "0";
}

lis[1].onclick = function() {

	document.getElementById("leftsecond").className = "inline";
	document.getElementById("leftfirst").className = "hidden";
	lis[1].style.borderBottom = "2px solid #5FD5F3";
	lis[0].style.borderBottom = "0";
}
lis[2].onclick = function() {

	document.getElementById("rightfirst").className = "inline";
	document.getElementById("rightsecond").className = "hidden";
	lis[2].style.borderBottom = "2px solid #5FD5F3";
	lis[3].style.borderBottom = "0";
}
lis[3].onclick = function() {

	document.getElementById("rightsecond").className = "inline";
	document.getElementById("rightfirst").className = "hidden";
	lis[3].style.borderBottom = "2px solid #5FD5F3";
	lis[2].style.borderBottom = "0";
}
