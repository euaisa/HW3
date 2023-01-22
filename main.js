let origArray = [2,3,4];

document.addEventListener("DOMContentLoaded", function(){
    for(let i = 0; i < origArray.length; i++){
        document.getElementById("textbox" + (i+1)).value = origArray[i];
    }

    document.getElementById("button2").addEventListener("click", function(){
        let newArray = origArray.map(function(val){
            return val*val*val;
        });
        for(let i = 0; i < newArray.length; i++){
            document.getElementById("textbox" + (i+1)).value = newArray[i];
        }
    });

    document.getElementById("button3").addEventListener("click", fourthPower);
});


function squareFunction() {
    let newArray = origArray.map(function(val){
        return val*val;
    });
    for(let i = 0; i < newArray.length; i++){
        document.getElementById("textbox" + (i+1)).value = newArray[i];
    }
}

function fourthPower(){
    let newArray = origArray.map(function(val){
        return val*val*val*val;
    });
    for(let i = 0; i < newArray.length; i++){
        document.getElementById("textbox" + (i+1)).value = newArray[i];
    }
}
