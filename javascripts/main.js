var nextPlanet= "jupiter";
var currPlanet;

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

// Drag and drop functions

function dragStart(event) {
   switch(nextPlanet){
      case "jupiter":
         if (event.target.id === "jupiter") {
            event.dataTransfer.setData("text", event.target.id);
            document.getElementById("instruct").innerHTML = "That's right.<br>JUPITER!<br>It comes right after the milky way."
         }
         else {
            document.getElementById("instruct").innerHTML='Going wrong somewhere...<br>Look at this closer picture a Closer picture<img src="closeup-images/Jupiter.jpg" style="height:100%; width:100%;"></img>'
            document.getElementById("button").style.display = 'none';
         }
         currPlanet="jupiter";
         break

      case "venus":
         if (event.target.id === "venus") {
            event.dataTransfer.setData("text", event.target.id);
            document.getElementById("instruct").innerHTML = "It is the hottest planet but placed after Mercury!";
         }
         else {
            document.getElementById("instruct").innerHTML='Going wrong somewhere...<br>Look at this closer picture a Closer picture<img src="closeup-images/Venus.jpg" style="height:100%; width:100%;"></img>'
            document.getElementById("button").style.display = 'none';
         }
         currPlanet="venus"
         break

      case "mars":
         if (event.target.id === "mars") {
            event.dataTransfer.setData("text", event.target.id);
            var thirdPos = "It comes right before the milky way.";
            document.getElementById("instruct").innerHTML = '<div>' + thirdPos + '</div>'
         }
         else {
            document.getElementById("instruct").innerHTML='Going wrong somewhere...<br>Look at this closer picture a Closer picture<img src="closeup-images/Mars.jpg" style="height:100%; width:100%;"></img>'
            document.getElementById("button").style.display = 'none';
         }
         currPlanet="mars"
         break

      case "uranus":
         if (event.target.id === "uranus") {
            event.dataTransfer.setData("text", event.target.id);
            var fourthPos = "It is the second-last planet in the solar system and is a neighbour of Saturn!";
            document.getElementById("instruct").innerHTML = '<div>' + fourthPos + '</div>'
         }
         else {
            document.getElementById("instruct").innerHTML='Going wrong somewhere...<br>Look at this closer picture a Closer picture<img src="closeup-images/Uranus.jpg" style="height:100%; width:100%;"></img>'
            document.getElementById("button").style.display = 'none';
         }
         currPlanet="uranus"
         break

      case "earth":
         if (event.target.id === "earth") {
            event.dataTransfer.setData("text", event.target.id);
            var fifthPos = "The planets before the Milky way are Terrestrial Planets. It is the second-last Terrestrial planet. ";
            document.getElementById("instruct").innerHTML = '<div>' + fifthPos + '</div>'
         }
         else {
            document.getElementById("instruct").innerHTML='Going wrong somewhere...<br>Look at this closer picture a Closer picture<img src="closeup-images/Earth.jpg" style="height:100%; width:100%;"></img>'
            document.getElementById("button").style.display = 'none';
         }
         currPlanet="earth"
         break

      case "mercury":
         if (event.target.id === "mercury") {
            event.dataTransfer.setData("text", event.target.id);
            var sixthPos = "It is closest to the sun!";
            document.getElementById("instruct").innerHTML = '<div>' + sixthPos + '</div>'
         }
         else {
            document.getElementById("instruct").innerHTML='Going wrong somewhere...<br>Look at this closer picture a Closer picture<img src="closeup-images/Mercury.jpg" style="height:100%; width:100%;"></img>'
            document.getElementById("button").style.display = 'none';
         }
         currPlanet="mercury"
         break

      case "neptune":
         if (event.target.id === "neptune") {
            event.dataTransfer.setData("text", event.target.id);
            var seventhPos = "It is the last planet in the solar system.";
            document.getElementById("instruct").innerHTML = '<div>' + seventhPos + '</div>'
         }
         else {
            document.getElementById("instruct").innerHTML='Going wrong somewhere...<br>Look at this closer picture a Closer picture<img src="closeup-images/Neptune.jpg" style="height:100%; width:100%;"></img>'
            document.getElementById("button").style.display = 'none';
         }
         currPlanet="neptune"
         break

      case "saturn":
         if (event.target.id === "saturn") {
            event.dataTransfer.setData("text", event.target.id);
            var eighthPos = "It comes after the largest planet in the Solar System. One year of Saturn equals 29 Earth years!";
            document.getElementById("instruct").innerHTML = '<div>' + eighthPos + '</div>'
         }
         else {
            document.getElementById("instruct").innerHTML='Going wrong somewhere...<br>Look at this closer picture a Closer picture<img src="closeup-images/Saturn.jpg" style="height:100%; width:100%;"></img>'
            document.getElementById("button").style.display = 'none';
         }
         currPlanet="saturn"
         break
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
      if(currPlanet==="jupiter"){
         document.getElementById("jupiter1").className = "jupiter-revolve";
         document.getElementById("button").style.display = 'flex';
         document.getElementById("button").innerHTML = 'NEXT';
         nextPlanet="venus"
      }
      if(currPlanet==="venus"){
         document.getElementById("venus1").className = "venus-revolve";
         document.getElementById("button").style.display = 'flex';
         document.getElementById("button").innerHTML = 'LETS MOVE AHEAD!';
         nextPlanet="mars";
      }
      if(currPlanet==="mars"){
         document.getElementById("mars1").className = "mars-revolve";
         document.getElementById("button").style.display = 'flex';
         document.getElementById("button").innerHTML = 'NEXT PLANET';
         nextPlanet="uranus";
      }
      if(currPlanet==="uranus"){
         document.getElementById("uranus1").className = "uranus-revolve";
         document.getElementById("button").style.display = 'flex';
         document.getElementById("button").innerHTML = 'LETS GO!';
         nextPlanet="earth";
      }
      if(currPlanet==="earth"){
         document.getElementById("earth1").className = "earth-revolve";
         document.getElementById("button").style.display = 'flex';
         document.getElementById("button").innerHTML = 'THIS IS FUN!';
         nextPlanet="mercury";
      }
      if(currPlanet==="mercury"){
         document.getElementById("mercury1").className = "mercury-revolve";
         document.getElementById("button").style.display = 'flex';
         document.getElementById("button").innerHTML = 'GO AHEAD!'
         nextPlanet="neptune";
      }
      if(currPlanet==="neptune"){
         document.getElementById("neptune1").className = "neptune-revolve";
         document.getElementById("button").style.display = 'flex';
         document.getElementById("button").innerHTML = 'LAST PLANET'
         nextPlanet="saturn";
      }
      if(currPlanet==="saturn"){
         document.getElementById("saturn1").className = "saturn-revolve";
         document.getElementById("draggable-elements").className = "complete-ss";
         document.getElementById("guide").className = "complete-ss";
      }
      event.target.classList.add("dropped");

      const draggableElement = document.getElementById(draggableElementData);
      draggableElement.classList.add("dragged");
      draggableElement.setAttribute("draggable", "false");
      event.target.appendChild(document.getElementById(draggableElementData));
   }
}
