let select_np = document.getElementById("select_np");

    for( i= 0; i< locationsArray.length; i++){
        let np =locationsArray[i];
            const option = document.createElement("option");
            option.innerHTML = np;
            option.value = np;
            select_np.appendChild(option);
    };

let select_pt = document.getElementById("select_pt");

    for( i= 0; i< parkTypesArray.length; i++){
        let pt =parkTypesArray[i];
            const option = document.createElement("option");
            option.innerHTML = pt;
            option.value = pt;
            select_pt.appendChild(option);
    };


let tbody = document.querySelector("#list tbody");

function parkdisplay(park){
    let row = tbody.insertRow(-1);
    let cellLocation = row.insertCell(0)
    cellLocation.innerHTML = park.LocationName

    let cellAddress = row.insertCell(1)
    cellAddress.innerHTML = park.Address

    let cellCity = row.insertCell(2)
    cellCity.innerHTML = park.City
    
}
nationalParksArray.forEach(parkdisplay)
function filterdata(){
    let selectedLocation = select_np.selectedOptions[0].value;
    let selectedParkType = select_pt.selectedOptions[0].value;

    let parks = nationalParksArray.filter(park => selectedLocation === "any" || park.State === selectedLocation)// filtering the national park array table || is or 
    let displaylist = parks.filter(p => p.LocationName.indexOf(selectedParkType) != -1 || selectedParkType === "any")
    tbody.innerHTML = "";
   displaylist.forEach(parkdisplay);
}
select_np.addEventListener("change",filterdata)
select_pt.addEventListener("change",filterdata)
