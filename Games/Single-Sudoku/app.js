var $input = document.getElementById("sudoku").getElementsByTagName("input");

for(let i = 0; i < 81; i++){
    $input[i].classList.add("form-control");
} 

//////////////////////////////////////////////////////////////////////////////////////

function empty_same(first, second){
    for(let i = 0; i < 81; i++){
        if($input[i].value == ''){
            $input[i].value = false;
            $input[i].classList.replace("form-control" ,"border-purple");
            break;
        }
    }

    if($input[first].value == $input[second].value && $input[first].value != false && $input[second].value != false && $input[first] != $input[second]){

        $input[first].classList.replace("form-control" ,"border-red");
        $input[first].classList.replace("border-purple", "border-red");
        $input[first].classList.replace("border-yellow", "border-red");

        $input[second].classList.replace("form-control" ,"border-red");
        $input[second].classList.replace("border-purple", "border-red");
        $input[second].classList.replace("border-yellow", "border-red");
        
        
    } 
}

//////////////////////////////////////////////////////////////////////////////////////


function general_errors(){

    for(let i = 0; i < 81; i++){

        if($input[i].value > 9){
            $input[i].classList.replace("form-control" ,"border-yellow");
            $input[i].classList.replace("border-purple" ,"border-yellow");
            break;
        }

        if($input[i].value < 0 ){
            $input[i].classList.replace("form-control" ,"border-yellow");
            $input[i].classList.replace("border-purple" ,"border-yellow");
            break;
        }
       
        if($input[i].value === "0"){
            $input[i].classList.replace("form-control" ,"border-yellow");
            $input[i].classList.replace("border-purple" ,"border-yellow");
            break;
        }  
        
    }
}

//////////////////////////////////////////////////////////////////////////////////////

function vertical() {

    function check_vertical(first_box, last_box){
        for(let i = first_box; i <= last_box; i = i + 9){
            for(let j = i + 9; j <= last_box; j = j + 9){
                empty_same(i, j)
            }
        }  
    }

    check_vertical(0,72);
    check_vertical(1,73);
    check_vertical(2,74);
    check_vertical(3,75);
    check_vertical(4,76);
    check_vertical(5,77);
    check_vertical(6,78);
    check_vertical(7,79);
    check_vertical(8,80);

}

//////////////////////////////////////////////////////////////////////////////////////

function horizantal(){

    function check_horizantal(first_box, last_box){
        for(let i = first_box; i <= last_box; i++){
            for(let j = i+1; j <= last_box; j++){
                empty_same(i, j)
            }
        }
    }

    check_horizantal(0,8);
    check_horizantal(9,17);
    check_horizantal(18,26);
    check_horizantal(27,35);
    check_horizantal(36,44);
    check_horizantal(45,53);
    check_horizantal(54,62);
    check_horizantal(63,71);
    check_horizantal(72,80);

}

//////////////////////////////////////////////////////////////////////////////////////

document.getElementById("btn").onclick = function(){

    for(let i = 0; i < 81; i++){
        $input[i].classList.add("form-control");
    } 

    general_errors();

    vertical();
    horizantal();
   
}

//////////////////////////////////////////////////////////////////////////////////////
