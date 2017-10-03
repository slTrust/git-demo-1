window.onload = function(){
   var count = 5 ;
   var oBox = document.getElementById('box');
   timer = setInterval(show(count,oBox),1000);

}

function show(count,ele){
    //oBox.innerHTML =  count;
    return function(){
        ele.innerHTML = count;
        
        if(count<=0) {
            clearInterval(timer);
            timer = null;
            ele.innerHTML = '';
            document.getElementById('info').style.display = 'block';
        }
        count--;   
    }
}