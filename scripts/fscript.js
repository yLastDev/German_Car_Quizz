window.onload=function(){

//atributes
var index=0;
var correct=0;
var wrong=0;
var increm=0;


    //div selectors
    var qimg=document.getElementById('qimg');
    var que =document.getElementById('que');
    var answ1=document.getElementById('answ1');
    var answ2=document.getElementById('answ2');
    var answ3=document.getElementById('answ3');
    var corrediv=document.getElementById('correct');



    appe(0);//load first item to be used


    //change question when div is clicked
    document.querySelectorAll('.answer').forEach(buttons=>{

        buttons.addEventListener('click',function(){
        
            if(buttons.id===items[increm].right){
                correct++;
            }
            else{
                wrong++;
            }

        increm++;
            //taking action at finishg the quizz
            if(increm<items.length){
                    
                appe(increm);
                removechilds();
            }
            else{
                    // alert("Congratulations!\nYou done:\n"+correct+ " Correct answers\n"+wrong+" Wrong answers\nPress OK to start again");//old version
                    alert(`Congratulations!\nYoud done\n ${correct} Correct answers\n ${wrong} Wrong answers\nPress OK to start again`);//new feature from ES
                    increm=0;
                    correct=0;
                    wrong=0;
                }
                
        });
    });

        //create elements from item object
        function appe(index){
        
        // corrediv.innerHTML="Correct: "+correct+"\nWrong: "+wrong;
        corrediv.innerHTML=`Correct ${correct} \nWrong: ${wrong}`;   


        //appending image to html div
        var image=document.createElement("IMG");
        image.setAttribute('src',items[index].img);
        qimg.appendChild(image);


        //appending question to html div
        var qtxt=document.createElement("P");
        var node=document.createTextNode(items[index].quest);
        qtxt.appendChild(node);
        que.appendChild(qtxt);

        //appending ans1 to html div
        var atxt=document.createElement("P");
        var node2=document.createTextNode(items[index].answ1);
        atxt.appendChild(node2);
        answ1.appendChild(atxt);

        //appending ans2 to html div
        var a2txt=document.createElement("P");
        var node3=document.createTextNode(items[index].answ2);
        a2txt.appendChild(node3);
        answ2.appendChild(a2txt);

        //appending ans3 to html div
        var a3txt=document.createElement("P");
        var node4=document.createTextNode(items[index].answ3);
        a3txt.appendChild(node4);
        answ3.appendChild(a3txt);

        }


    //remove prevision item loaded
        const removechilds=()=>{
            var list1 =document.getElementById('que').firstElementChild;
            var list2=document.getElementById('qimg').firstElementChild;
            var list3=document.getElementById('answ1').firstElementChild;
            var list4=document.getElementById('answ2').firstElementChild;
            var list5=document.getElementById('answ3').firstElementChild;
        
        list1.remove();
        list2.remove();
        list3.remove();
        list4.remove();
        list5.remove();

        }









}
