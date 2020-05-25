//main.js

async function onChange(inputEl){
	try {
		let imgURI = await getdataURIFromBlob(inputEl);
		updateResults(imgURI);
	} catch(err) {
		console.log(err);
	}
	
}



function updateResults(imgURI){
	updatePreview(imgURI);
	fillResult(imgURI);
}



function updatePreview(imgURI){
	document.querySelector("#imgTag").src = imgURI;
}



function fillResult(imgURI){
	document.querySelector("#resultTag").value = '<img src="'+imgURI+'">';
}



function getdataURIFromBlob(fileEl){
	return new Promise((resolve, reject) => {
		let fileReader = new FileReader();

		fileReader.onload = (e) => {
			resolve(e.target.result);
		};

		fileReader.onerror = reject;

		fileReader.readAsDataURL(fileEl);
	});
}



document.addEventListener("paste", (ev) =>{
	// console.log("paste");
	let pastedItems = ev.clipboardData.items;
	for(let i = 0; i < pastedItems.length; i++){
		if(pastedItems[i].type.indexOf("image") == -1) continue;
		let blob = pastedItems[i].getAsFile();
		onChange(blob);
	}
});