let select_mountains = document.getElementById("select_mountains");

function looparray(){
    for(i=0; i< mountainsArray.length; i++){
        let mountains = mountainsArray[i].name;
        const option = document.createElement("option");
        option.innerHTML = mountains;
        option.value = mountains;
        select_mountains.appendChild(option);
    }// looping through array and adding it to the select option on mountains.html
}

looparray();

select_mountains.addEventListener("change", ()=>{
    selected=select_mountains.selectedOptions[0].value
    for(i=0; i<mountainsArray.length; i++){
        let mountain = mountainsArray[i]
        if( selected === mountain.name){
            output.innerHTML = mountain.elevation + "<br>" + mountain.desc;

        }
    }

});