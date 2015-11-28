/**
 * @author Arvind Suresh
 */

//Function to dynamically adjust widths of elements
function init() {
	var width = document.getElementById("header").offsetWidth; //Get width of parent div
	width = Number(width);
	width -= (2 * 180) + 45; //Subtract width of Twitter and Blogs containers to get width of middle elements
	
	if (width < 640) {
		//Collapse Twitter and Blogs widget if width is too small
		document.getElementById("twitterBox").style.display = "none";
		document.getElementById("blogs").style.display = "none";
		width = "98%"; //Use percentage width without widgets
	} else {
		//Re-enable Twitter and Blogs widget if width is big enough
		document.getElementById("twitterBox").style.display = "inline";
		document.getElementById("blogs").style.display = "inline";
		width = width.toString() + "px";
	}
	
	paraWidth = (440.0/900) * 100; //Use ratio to calculate percentage for paragraph width
	paraWidth = paraWidth.toString() + "%";
	//Set inner element widths
	document.getElementById("firstLine").style.width = width;
	document.getElementById("navigation").style.width = width;
	document.getElementById("landingPageContent").style.width = width;
	document.getElementById("paragraphLeft").style.width = paraWidth;
	document.getElementById("paragraphRight").style.width = paraWidth;
	document.getElementById("lastLine").style.width = width;
}
