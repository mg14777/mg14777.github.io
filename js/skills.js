function displayContent(type) {
                if(type == 0)
                    $(".skill-values").css("opacity", "0");
                else {
                    var HTML = "";
                    if(type == 1) {
                        //HTML = "Java<br>C++<br>C<br>Python<br>Haskell";
                        //$("#tech").append(HTML);
                        //$("#lowerSkills").css({"background":"gold","text-align":"center","color":"black"});
                        $("#tech-skills").css("opacity", "1");
                    }
                    else if(type == 2) {
                        $("#web-skills").css("opacity", "1");
                    }
                    else if(type == 3) {
                        //HTML = "HTML<br>CSS<br>Javascript<br>PHP<br>JQuery";
                        //$("#lowerSkills").css({"background":"firebrick","text-align":"center","color":"white"});
                        $("#special-skills").css("opacity", "1");
                    }
                    //document.getElementById("tech").innerHTML = HTML
                    
                    $("#lowerSkills").css("display", "block");
                }
}
