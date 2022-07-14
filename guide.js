function OKbutton(){
    var currGuide="mercury";
    var firstPos = "It is closest to the sun!";
    var secondPos = "It is the hottest planet but placed after Mercury!";
    var thirdPos = "The planets before the Milky way are Terrestrial Planets. It is the second-last Terrestrial planet.";

    if(currGuide==="mercury"){
        if(document.getElementById("button").innerHTML==='OKAY'){
            var firstText = "Drag the dark grey planet that has wrinkles on it!";
            document.getElementById("instruct").innerHTML = '<div>'+ firstText + '</div>'
        }
    
        if(document.getElementById("button").innerHTML==='YES'){
            document.getElementById("instruct").innerHTML='<img src="images/Mercury-sun.jpg" style="height:10rem; width:10rem;"></img>'
        }
        // if (document.getElementById("instruct").innerHTML === firstPos){
        //     currGuide="venus";
        // }
        currGuide="venus";
    }

    if(currGuide==="venus"){
        if(document.getElementById("button").innerHTML==='NEXT'){
            var secondText = "Drag the yellowish-white planet with few brownish-red spots. These spots signify the volcanic rocks!";
            document.getElementById("instruct").innerHTML = '<div>'+ secondText + '</div>'
        }
    
        if(document.getElementById("button").innerHTML==='YES'){
            document.getElementById("instruct").innerHTML='<img src="images/Mercury-sun.jpg" style="height:10rem; width:10rem;"></img>'
        }

        // if (document.getElementById("instruct").innerHTML === secondPos){
        //     currGuide="earth";
        // }
        currGuide="earth";
    }

    if(currGuide==="earth"){
        if(document.getElementById("button").innerHTML==='LETS MOVE AHEAD!'){
            var thirdText = "Next is our home! A combination of water and land! It is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons and plains.";
            document.getElementById("instruct").innerHTML = '<div>'+ thirdText + '</div>'
        }
    
        if(document.getElementById("button").innerHTML==='YES'){
            document.getElementById("instruct").innerHTML='<img src="images/Mercury-sun.jpg" style="height:10rem; width:10rem;"></img>'
        }
        // if (document.getElementById("instruct").innerHTML === thirdPos){
        //     currGuide="mars";
        // }
        currGuide="mars";
    }

    if(currGuide==="mars"){
        if(document.getElementById("button").innerHTML==='NEXT PLANET'){
            var fourthText = "Coming to the red planet! It got its colour red because of the rusty iron on its surface.";
            document.getElementById("instruct").innerHTML = '<div>'+ fourthText + '</div>'
        }
    
        if(document.getElementById("button").innerHTML==='YES'){
            document.getElementById("instruct").innerHTML='<img src="images/Mercury-sun.jpg" style="height:10rem; width:10rem;"></img>'
        }
        currGuide="jupiter"
    }

    if(currGuide==="jupiter"){
        if(document.getElementById("button").innerHTML==='LETS GO!'){
            var fifthText = "Next comes the largest planet in the solar system! It is a gas giant and its colour changes with storms and wind. Here, drag the planet yellowish-brown in colour!";
            document.getElementById("instruct").innerHTML = '<div>'+ fifthText + '</div>'
        }
    
        if(document.getElementById("button").innerHTML==='YES'){
            document.getElementById("instruct").innerHTML='<img src="images/Mercury-sun.jpg" style="height:10rem; width:10rem;"></img>'
        }
        currGuide="saturn"
    }

    if(currGuide==="saturn"){
        if(document.getElementById("button").innerHTML==='THIS IS FUN!'){
            var sixthText = "Coming to the planet with rings! It has a set of 7 main rings with spaces between them.";
            document.getElementById("instruct").innerHTML = '<div>'+ sixthText + '</div>'
        }
    
        if(document.getElementById("button").innerHTML==='YES'){
            document.getElementById("instruct").innerHTML='<img src="images/Mercury-sun.jpg" style="height:10rem; width:10rem;"></img>'
        }
        currGuide="uranus"
    }

    if(currGuide==="uranus"){
        if(document.getElementById("button").innerHTML==='GO AHEAD!'){
            var seventhText = "Next is a planet which is blue in colour and has faint rings.";
            document.getElementById("instruct").innerHTML = '<div>'+ seventhText + '</div>'
        }
    
        if(document.getElementById("button").innerHTML==='YES'){
            document.getElementById("instruct").innerHTML='<img src="images/Mercury-sun.jpg" style="height:10rem; width:10rem;"></img>'
        }
        currGuide="neptune"
    }

    if(currGuide==="neptune"){
        if(document.getElementById("button").innerHTML==='LAST PLANET'){
            var eighthText = "The last one is a dark, cold and windy planet! ";
            document.getElementById("instruct").innerHTML = '<div>'+ eighthText + '</div>'
        }
    
        if(document.getElementById("button").innerHTML==='YES'){
            document.getElementById("instruct").innerHTML='<img src="images/Mercury-sun.jpg" style="height:10rem; width:10rem;"></img>'
        }
        currGuide=null
    }

    // switch(currGuide){
    //     case "mercury":
    //         if(document.getElementById("button").innerHTML==='OKAY'){
    //             var firstText = "Drag the dark grey planet that has wrinkles on it!";
    //             document.getElementById("instruct").innerHTML = '<div>'+ firstText + '</div>'
    //         }
        
    //         if(document.getElementById("button").innerHTML==='YES'){
    //             document.getElementById("instruct").innerHTML='<img src="images/Mercury-sun.jpg" style="height:10rem; width:10rem;"></img>'
    //         }
    //         currGuide="venus"
    //         break
        
    //     case "venus":
    //         if(document.getElementById("button").innerHTML==='NEXT'){
    //             var secondText = "Drag the yellowish-white planet with few brownish-red spots. These spots signify the volcanic rocks!";
    //             document.getElementById("instruct").innerHTML = '<div>'+ secondText + '</div>'
    //         }
        
    //         if(document.getElementById("button").innerHTML==='YES'){
    //             document.getElementById("instruct").innerHTML='<img src="images/Mercury-sun.jpg" style="height:10rem; width:10rem;"></img>'
    //         }
    //         currGuide="earth"
    //         break

    //     case "earth":
    //         if(document.getElementById("button").innerHTML==='NEXT'){
    //             var thirdText = "Next is our home! A combination of water and land! It is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons and plains.";
    //             document.getElementById("instruct").innerHTML = '<div>'+ thirdText + '</div>'
    //         }
        
    //         if(document.getElementById("button").innerHTML==='YES'){
    //             document.getElementById("instruct").innerHTML='<img src="images/Mercury-sun.jpg" style="height:10rem; width:10rem;"></img>'
    //         }
    //         currGuide="mars"
    //         break

    //     case "mars":
    //         if(document.getElementById("button").innerHTML==='NEXT'){
    //             var fourthText = "Coming to the red planet! It got its colour red because of the rusty iron on its surface.";
    //             document.getElementById("instruct").innerHTML = '<div>'+ fourthText + '</div>'
    //         }
        
    //         if(document.getElementById("button").innerHTML==='YES'){
    //             document.getElementById("instruct").innerHTML='<img src="images/Mercury-sun.jpg" style="height:10rem; width:10rem;"></img>'
    //         }
    //         currGuide="jupiter"
    //         break
    // }
}
