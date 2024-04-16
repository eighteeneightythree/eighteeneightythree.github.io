/* FUNCTION DEFINITIONS BEGIN */

/* If browser back button was used, flush cache */
(function () {
	window.onpageshow = function(event) {
		if (event.persisted) {
			//window.location.reload();
            $("#container").fadeIn(500);
		}
	};
})();

function camelCaseToSentenceCase(str) {
	// Split the string by capital letters
	const words = str.replace(/([a-z])([A-Z])/g, '$1 $2').split(/(?=[A-Z])/);

	// Capitalize the first letter of each word and join them with spaces
	const sentenceCase = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

	return sentenceCase;
}


/* NAVIGATION FUNCTION */

function navigate(url) {
    //fade out page, then redirect
    $('#container').fadeOut(300, function() {
        window.location.href = url;
    });
}

/* ARCHIVE TABLE FUNTCIONS */

function generateArchiveTable(data) {
    //loop through 'data' objects (JSON)
    for (let i = 0; i < data.length; i++) {
        //(repair on deployment)
        let table= document.getElementById("archiveTable");
        //generate table row from each object in 'data'
        let row = `
        <tr class="archiveTableBody">
			<td><a href="archive_record?item=${data[i].accessionNumber}">${data[i].accessionNumber}</a></td>
			<td>${data[i].description}</td>
			<td>${data[i].media}</td>
			<td>${data[i].archiveTag}</td>
			<td>${data[i].year}</td>
			<td>${data[i].collectionCode}</td>
		</tr>`;

        //console.log(row);

        //add genrated 'row' to 'table'
        //(repair on deployment)
        table.innerHTML += row;
        
        //test code (delete on deployment) 
        //table += row;
        //console.log(table);
        //
    }
	
}

async function displayarchive() {
    //fetch archive.json
    //test fetch url (update on desployment)
    let archiveFetch = await fetch("https://eighteeneightythree.github.io/dev-repo/archive.json");
    //on promise resolution: JSON -> archiveRecords
    let archiveRecords = await archiveFetch.json();
    //console.log(archiveRecords)

    //generate archive table
    generateArchiveTable(archiveRecords);
}

/* INDIVIDUAL ARCHIVE RECORDS FUNCTIONS */

function generateArchiveRecord(data) {
    // Iterate over each key-value pair in the JSON object
	for (const key in data) {
        //(repair on deployment)
		let tableHTML = document.getElementById("itemTable");
		if (data.hasOwnProperty(key)) {
			// Create a table row for each key-value pair
            //(repair on deployment)
			tableHTML.innerHTML += `<tr><th>${camelCaseToSentenceCase(key)}</th><td>${data[key]}</td></tr>`;

            //test code (delete on deployment)
            //tableHTML +=`<tr><th>${camelCaseToSentenceCase(key)}</th><td>${data[key]}</td></tr>`;
		}
	}
}

async function displayArchiveRecord() {
    //(repair on deployment)
	const searchParams = new URLSearchParams(window.location.search);
	let archiveFetch = await fetch("https://eighteeneightythree.github.io/dev-repo/archive.json");
	let archiveRecords = await archiveFetch.json();
	console.log(archiveRecords);
    //console.log(searchParams)

	let recordItem = archiveRecords.find(item => item.accessionNumber === searchParams.get('item'));
	console.log(recordItem);



	//generate complete archive record
    generateArchiveRecord(recordItem);

}


/* FUNCTION DEFINITIONS END */


displayarchive();

displayArchiveRecord();

$(document).ready(function() {
	$("#header").fadeIn(500);
	$("#page_body").fadeIn(1000);
	$("#footer").fadeIn(1000);
});

$(document).ready(function() {
    $("#container").fadeIn(500);
});