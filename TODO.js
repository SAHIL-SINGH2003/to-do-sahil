const inputBox = document.getElementById("se");
const ListContainer = document.getElementById("List-container");



function addTask(){
    if (inputBox.value === "") {
        alert("Please write something to add");
    }
    else{
        let list= document.createElement("li");
        list.innerHTML=inputBox.value;
        ListContainer.appendChild(list);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        list.appendChild(span);

    }
    inputBox.value = '';
    saveData()
} 

ListContainer.addEventListener('click',function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data",ListContainer.innerHTML);
}

function showData(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
showData()
