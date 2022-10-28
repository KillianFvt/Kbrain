

//function on pointer down
function changeBgColDown(button) {
    //get active color variables 
    const gradCol1 = getComputedStyle(button).getPropertyValue('--gradCol1Active');
    const gradCol2 = getComputedStyle(button).getPropertyValue('--gradCol2Active');
    const gradOpacity = getComputedStyle(button).getPropertyValue('--gradOpacityActive');
    console.log(gradCol1,gradCol2);
    
    //change colors
    const buttonStyle = button.style;
    buttonStyle.setProperty("--gradCol1Computed", gradCol1);
    buttonStyle.setProperty("--gradCol2Computed", gradCol2);
    buttonStyle.setProperty("--gradOpacityComputed", gradOpacity);

    console.log("HEY C'EST MOI !\n");
}

//function on pointer up
function changeBgColUp(button) {
    //get active color variables 
    const gradCol1 = getComputedStyle(button).getPropertyValue('--gradCol1Off');
    const gradCol2 = getComputedStyle(button).getPropertyValue('--gradCol2Off');
    const gradOpacity = getComputedStyle(button).getPropertyValue('--gradOpacityOff');
    console.log(gradCol1,gradCol2);
    
    //change colors
    const buttonStyle = button.style;
    buttonStyle.setProperty("--gradCol1Computed", gradCol1);
    buttonStyle.setProperty("--gradCol2Computed", gradCol2);
    buttonStyle.setProperty("--gradOpacityComputed", gradOpacity);

    console.log("NON NE PARS PAS !\n");
}


const button3Collection = document.getElementsByClassName("exButt3-div");
console.log(button3Collection);

for (button of button3Collection) {
    button.addEventListener("pointerdown", function(){
        changeBgColDown(this);
    });
    button.addEventListener("pointerup", function(){
        changeBgColUp(this);
    });
    button.addEventListener("pointerout", function(){
        changeBgColUp(this);
    });
}


