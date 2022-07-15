const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");
var currPlanet= "mercury";

draggableElements.forEach(elem => {
   elem.addEventListener("dragstart", dragStart);
   // elem.addEventListener("drag", drag);
   // elem.addEventListener("dragend", dragEnd);
})

droppableElements.forEach(elem => {
   elem.addEventListener("dragenter", dragEnter);
   elem.addEventListener("dragover", dragOver);
   elem.addEventListener("dragleave", dragLeave);
   elem.addEventListener("drop", drop);
})

const planets = document.querySelectorAll('.planet')
const p_radii = [127,112,97,84,60,50,35,25]

const p_orbits = document.querySelectorAll('.orbit')

p_orbits.forEach((p_orbit, index)=>{
  p_orbit.style.height = `${p_radii[index]}vmin`
  p_orbit.style.width = `${p_radii[index]}vmin`
})

planets.forEach((planet, index) =>{
   if(index == 4 || index == 6){
      planet.style.top= `${0.5*p_radii[index]}vmin`;
      planet.style.left = `${0.5*p_radii[index]}vmin`}
   else if(index == 1){
      planet.style.top = `${0.5*p_radii[index]}vmin`;
      planet.style.left = `${-0.5*p_radii[index]}vmin`
   }
   else if(index == 7){
      planet.style.top = `${0.5*p_radii[index]}vmin`;
      planet.style.left = `${-0.45*p_radii[index]}vmin`
   }
   else if(index == 2 || index == 0){
      planet.style.top = `${0.5*p_radii[index]}vmin`;
      planet.style.left = `${0.5*p_radii[index]}vmin`
   }
   else if(index == 3){
      planet.style.top = `${0.5*p_radii[index]}vmin`;
      planet.style.left = `${-0.5*p_radii[index]}vmin`
   }
   else if(index == 5){
      planet.style.top = `${0.5*p_radii[index]}vmin`;
      planet.style.left = `${-0.5*p_radii[index]}vmin`
   }
})

// Drag and drop functions

function dragStart(event) {
   switch(currPlanet){
      case "mercury":
         if (event.target.id === "mercury") {
            event.dataTransfer.setData("text", event.target.id);
            var firstPos = "It is closest to the sun!";
            document.getElementById("instruct").innerHTML = '<div>' + firstPos + '</div>'
            currPlanet="venus";
         }
         else {
            document.getElementById("instruct").innerHTML = '<div>Going wrong somewhere?Need a Closer picture?</div>'
            document.getElementById("button").innerHTML = 'YES'
            currPlanet="mercury";
         }
         break

      case "venus":
         if (event.target.id === "venus") {
            event.dataTransfer.setData("text", event.target.id);
            var secondPos = "It is the hottest planet but placed after Mercury!";
            document.getElementById("instruct").innerHTML = '<div>' + secondPos + '</div>'
            currPlanet="earth"
         }
         else {
            document.getElementById("instruct").innerHTML = '<div>Going wrong somewhere?Need a Closer picture?</div>'
            document.getElementById("button").innerHTML = 'YES'
            currPlanet="venus"
         }
         break

      case "earth":
         if (event.target.id === "earth") {
            event.dataTransfer.setData("text", event.target.id);
            var thirdPos = "The planets before the Milky way are Terrestrial Planets. It is the second-last Terrestrial planet.";
            document.getElementById("instruct").innerHTML = '<div>' + thirdPos + '</div>'
            currPlanet="mars"
         }
         else {
            document.getElementById("instruct").innerHTML = '<div>Going wrong somewhere?Need a Closer picture?</div>'
            document.getElementById("button").innerHTML = 'YES'
            currPlanet="earth"
         }
         break

      case "mars":
         if (event.target.id === "mars") {
            event.dataTransfer.setData("text", event.target.id);
            var fourthPos = "It comes right before the milky way.";
            document.getElementById("instruct").innerHTML = '<div>' + fourthPos + '</div>'
            currPlanet="jupiter"
         }
         else {
            document.getElementById("instruct").innerHTML = '<div>Going wrong somewhere?Need a Closer picture?</div>'
            document.getElementById("button").innerHTML = 'YES'
            currPlanet="mars"
         }
         break

      case "jupiter":
         if (event.target.id === "jupiter") {
            event.dataTransfer.setData("text", event.target.id);
            var fifthPos = "It comes right after the milky way.";
            document.getElementById("instruct").innerHTML = '<div>' + fifthPos + '</div>'
            currPlanet="saturn"
         }
         else {
            document.getElementById("instruct").innerHTML = '<div>Going wrong somewhere?Need a Closer picture?</div>'
            document.getElementById("button").innerHTML = 'YES'
            currPlanet="jupiter"
         }
         break

      case "saturn":
         if (event.target.id === "saturn") {
            event.dataTransfer.setData("text", event.target.id);
            var sixthPos = "It comes after the largest planet in the Solar System. One year of Saturn equals 29 Earth years!";
            document.getElementById("instruct").innerHTML = '<div>' + sixthPos + '</div>'
            currPlanet="uranus"
         }
         else {
            document.getElementById("instruct").innerHTML = '<div>Going wrong somewhere?Need a Closer picture?</div>'
            document.getElementById("button").innerHTML = 'YES'
            currPlanet="saturn"
         }
         break

      case "uranus":
         if (event.target.id === "uranus") {
            event.dataTransfer.setData("text", event.target.id);
            var seventhPos = "It is the second-last planet in the solar system and is a neighbour of Saturn!";
            document.getElementById("instruct").innerHTML = '<div>' + seventhPos + '</div>'
            currPlanet="neptune"
         }
         else {
            document.getElementById("instruct").innerHTML = '<div>Going wrong somewhere?Need a Closer picture?</div>'
            document.getElementById("button").innerHTML = 'YES'
            currPlanet="uranus"
         }
         break

      case "neptune":
         if (event.target.id === "neptune") {
            event.dataTransfer.setData("text", event.target.id);
            var eighthPos = "It is the last planet in the solar system.";
            document.getElementById("instruct").innerHTML = '<div>' + eighthPos + '</div>'
            currPlanet=null
         }
         else {
            document.getElementById("instruct").innerHTML = '<div>Going wrong somewhere?Need a Closer picture?</div>'
            document.getElementById("button").innerHTML = 'YES'
            currPlanet="neptune"
         }
         break

      case null:
         alert("YOU HAVE SUCCESSFULLY RECREATED THE SOLAR SYSTEM!")
   }
}

function dragEnter(event) {
   if (!event.target.classList.contains("dropped")) {
      event.target.classList.add("droppable-hover");
   }
}

function dragOver(event) {
   event.preventDefault();
}

function dragLeave(event) {
   event.target.classList.remove("droppable-hover");
}

function drop(event) {
   event.target.classList.remove("droppable-hover");
   event.preventDefault();
   const draggableElementData = event.dataTransfer.getData("text");
   const droppableElementData = event.target.getAttribute("data-draggable-id")
   if (draggableElementData === droppableElementData) {
      if(currPlanet==="venus"){
         document.getElementById("mercury1").className = "revolve";
         document.getElementById("button").innerHTML = 'NEXT';
      }
      if(currPlanet==="earth"){
         document.getElementById("venus1").className = "revolve";
         document.getElementById("button").innerHTML = 'LETS MOVE AHEAD!';
      }
      if(currPlanet==="mars"){
         document.getElementById("earth1").className = "revolve";
         document.getElementById("button").innerHTML = 'NEXT PLANET';
      }
      if(currPlanet==="jupiter"){
         document.getElementById("mars1").className = "revolve";
         document.getElementById("button").innerHTML = 'LETS GO!'
      }
      if(currPlanet==="saturn"){
         document.getElementById("jupiter1").className = "revolve";
         document.getElementById("button").innerHTML = 'THIS IS FUN!'
      }
      if(currPlanet==="uranus"){
         document.getElementById("saturn1").className = "revolve";
         document.getElementById("button").innerHTML = 'GO AHEAD!'
      }
      if(currPlanet==="neptune"){
         document.getElementById("uranus1").className = "revolve";
         document.getElementById("button").innerHTML = 'LAST PLANET'
      }
      if(currPlanet==="null"){
         document.getElementById("neptune1").className = "revolve";
         alert("YOU HAVE SUCCESSFULLY RECREATED THE SOLAR SYSTEM!")
      }
      event.target.classList.add("dropped");

      const draggableElement = document.getElementById(draggableElementData);
      draggableElement.classList.add("dragged");
      draggableElement.setAttribute("draggable", "false");
      event.target.appendChild(document.getElementById(draggableElementData));
   }
}
