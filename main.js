let playing= [];
let player=1;
let x='X';
let o='O';
function displayChar(event){
    
    if(player==1){
        $(event.target).html('<strong class="XandO">'+x+'</strong>');
        $(event.target).off("click");
        let index = $("div").index( this );
        playing[index]=x;
           
    }else if(player==2){
        $(event.target).html('<strong class="XandO">'+o+'</strong>');
        $(event.target).off("click");
        let index = $("div").index( this );
        playing[index]=o;
    
        console.log("plll "+player);
    }
    
    player++;
    if(player>2){
        player=1;
    }
    console.log(playing);
    console.log('pp '+playing)
    console.log('ddddddddddddddddddddddddddd')

    for (let i = 0; i < playing.length; i++) {
        console.log(' '+playing[i]+"  "+i)
        if(i==0 || i==3 || i==6 || i==1 || i==2){
        
        if(playing[i]==playing[(i+1)]&& playing[i]==playing[i+2]&& playing[i]!=null){
            
            console.log('wwwwwwwwwwwwwwwwwwwwwwww')
            $('div').off("click");

        }else if(playing[i]==playing[(i+3)]&& playing[i]==playing[i+6]&& playing[i]!=null){

            console.log('i      '+i);
            console.log('wwwwwwwwwwwwwwwwwwwwwwww')
            $('div').off("click");
        }
        }
    }
    if(playing[0]==playing[4]&& playing[0]==playing[8] && playing[0]!=null){

console.log('wwwwwwwwwwwwwwww')
$('div').off("click");

    }else if(playing[2]==playing[4]&& playing[0]==playing[6]&& playing[2]!=null){
        console.log('wwwwwwwwwwwwwwwwww')
        $('div').off("click");

    }

//     if(playing[0]==playing[0+1]&&playing[0+1]==playing[0+2]&&playing[0]!=null){
// console.log('wwwwwwwwwwwwwwwwwwwwwwwwwwwww')
//     }
// if($('#1').text() == $('#2').text() && $('#2').text()==$('#3').text()){
//     console.log('firstCase')
//     console.log($(event.target).text()+' isWinner') 
// }
// else if($('#4').text() == $('#5').text() && $('#5').text()==$('#6').text()){
//     console.log('secCase')
//     console.log($(event.target).text()+' isWinner') 
// }
// else if($('#7').text() == $('#8').text() && $('#8').text()==$('#9').text()){
//     console.log($(event.target).text()+' isWinner') 
// }else if($('#1').text() == $('#4').text() && $('#4').text()==$('#7').text()){
//     console.log($(event.target).text()+' isWinner') 
// }else if($('#2').text() == $('#5').text() && $('#5').text()==$('#8').text()){
//     console.log($(event.target).text()+' isWinner') 
// }else if($('#3').text() == $('#6').text() && $('#6').text()==$('#9').text()){
//     console.log($(event.target).text()+' isWinner') 
// }else if($('#1').text() == $('#5').text() && $('#5').text()==$('#9').text()){
//     console.log($(event.target).text()+' isWinner') 
// }else if($('#3').text() == $('#5').text() && $('#5').text()==$('#7').text()){
//     console.log($(event.target).text()+' isWinner') 
// }
}
function restGame(){
//     $('div').html('');
// playing=null;
// $(event.targer).on('click',displayChar)
location.reload();

}

$('button').on('click',restGame);
$('.box').on('click',displayChar)
