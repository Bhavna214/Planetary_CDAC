function OKbutton(){
    var currGuide="jupiter";

    if(currGuide==="jupiter"){
        if(document.getElementById("button").innerHTML==='OKAY'){
            var firstText = "Drag the largest planet in the solar system! It is a gas giant and its colour changes with storms and wind in the planet's atmosphere. Here, drag the planet yellowish-brown in colour!";
            document.getElementById("instruct").innerHTML = '<div>'+ firstText + '</div>'    
            document.getElementById("button").style.display = 'none';        
        }
        currGuide="venus";  
        
    }

    if(currGuide==="venus"){
        if(document.getElementById("button").innerHTML==='NEXT'){
            var secondText = "Drag the yellowish-white planet with few brownish-red spots. These spots signify the volcanic rocks!";
            document.getElementById("instruct").innerHTML = '<div>'+ secondText + '</div>'
            document.getElementById("button").style.display = 'none';
        }
        currGuide="mars";
    }

    if(currGuide==="mars"){
        if(document.getElementById("button").innerHTML==='LETS MOVE AHEAD!'){
            var thirdText = "Coming to the red planet! It got its colour red because of the rusty iron on its surface.";
            document.getElementById("instruct").innerHTML = '<div>'+ thirdText + '</div>'
            document.getElementById("button").style.display = 'none';
        }
        currGuide="uranus"
    }

    if(currGuide==="uranus"){
        if(document.getElementById("button").innerHTML==='NEXT PLANET'){
            var fourthText = "Drag the planet which is blue in colour and has faint rings.";
            document.getElementById("instruct").innerHTML = '<div>'+ fourthText + '</div>'
            document.getElementById("button").style.display = 'none';
        }
        currGuide="earth";
    }

    if(currGuide==="earth"){
        if(document.getElementById("button").innerHTML==='LETS GO!'){
            var fifthText = "Next is our home! A combination of water and land! It is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons and plains.";
            document.getElementById("instruct").innerHTML = '<div>'+ fifthText + '</div>'
            document.getElementById("button").style.display = 'none';
        }
        currGuide="mercury";
    }

    if(currGuide==="mercury"){
        if(document.getElementById("button").innerHTML==='THIS IS FUN!'){
            var sixthText = "Drag the dark grey planet that has wrinkles on it!";
            document.getElementById("instruct").innerHTML = '<div>'+ sixthText + '</div>'
            document.getElementById("button").style.display = 'none';
        }
        currGuide="neptune";
    }

    if(currGuide==="neptune"){
        if(document.getElementById("button").innerHTML==='GO AHEAD!'){
            var seventhText = "The last one is a dark, cold and windy planet! ";
            document.getElementById("instruct").innerHTML = '<div>'+ seventhText + '</div>'
            document.getElementById("button").style.display = 'none';
        }
        currGuide="saturn";
    }

    if(currGuide==="saturn"){
        if(document.getElementById("button").innerHTML==='LAST PLANET'){
            var eighthText = "Drag the planet with rings! It has a set of 7 main rings with spaces between them.";
            document.getElementById("instruct").innerHTML = '<div>'+ eighthText + '</div>'
            document.getElementById("button").style.display = 'none';
        }
        currGuide=null;
    }
}
