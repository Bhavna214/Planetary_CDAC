const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);
    // elem.addEventListener("drag", drag);
    // elem.addEventListener("dragend", dragEnd);
})

droppableElements.forEach(elem=>{
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", drop);
})

// Drag and drop functions

 function dragStart(event){
    event.dataTransfer.setData("text", event.target.id);
 }

 function dragEnter(event){
    if(!event.target.classList.contains("dropped")){
        event.target.classList.add("droppable-hover");
    }
 }

 function dragOver(event){
    event.preventDefault();
 }

 function dragLeave(event){
    event.target.classList.remove("droppable-hover");
 }

 function drop(event){
    event.target.classList.remove("droppable-hover");
    event.preventDefault();
    const draggableElementData = event.dataTransfer.getData("text");
    const droppableElementData = event.target.getAttribute("data-draggable-id")
    if(draggableElementData === droppableElementData){

        event.target.classList.add("dropped");
        const draggableElement = document.getElementById(draggableElementData);
        draggableElement.classList.add("dragged");
        draggableElement.setAttribute("draggable", "false");
        // event.target.insertAdjacentHTML("afterbegin", `<img id="${draggableElementData}"></img>`);
        e.target.appendChild(document.getElementById(draggableElementData));
        document.getElementById(draggableElementData).style="width:100%;";
    }
 }