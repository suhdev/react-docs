var fs = require('fs');
function Scanner(){

}

Scanner.prototype = {
    scan(){

    }
};


function MakeScanner(){
    var currentIndex = 0; 
    return {
        handleComment:handleComment,
        scan:scan,
    }

    function handleComment(token){

    }

    function scan(file){
        var len = file.length;
        var currentSlice = file;  
        while (currentIndex < len){
            currentSlice = file.substr(currentIndex); 
            var t = currentSlice.match(/^[\s]+/);
            if (t && t.length > 0){
                currentIndex += t[0].length; 
                continue; 
            }
            t = currentSlice.match(/^\/\*\*([\s\S]*?)\*\//);
            if (t && t.length > 0){
                currentIndex += t[0].length; 
                handleComment(t[1].trim());
                continue;  
            }
            t = currentSlice.match(/.*?\n/);
            if (t && t.length > 0){
                currentIndex += t[0].length; 
                continue;
            }
            currentIndex += 1
        }
    }
}