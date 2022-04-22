var $output = document.getElementById('output');
var $input = document.getElementById('input');
var $results = document.getElementById('the-result');



$output.onclick = function() {

    var items = ['rock', 'paper', 'scissors'];
    
    var random = Math.floor(Math.random() * 3);
    
    var computer_Side = items[random];
    
    var client_Side = $input.value;
    
    var indexOfClient = items.indexOf(client_Side.toLowerCase());

    
    // THE GAME SENARIOS
    var html;
    
    // if client enters something else

    if(indexOfClient === -1){
        client_Side = alert("Choose one only among 'Rock', 'Paper', 'Scissors'");
        return client_Side;
    }    
        
    // if both sides were the same
        

    if(indexOfClient === random){
        html = `<i class="las la-equals h1" style="color: blueviolet;" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                </i>
                <h3> Oooops! It's equal </h3> 
                <p> The computer had  ${items[random]} too. </p>`;
    }
        
    //  if client lose
        
    if(indexOfClient === 0 && random === 1 || indexOfClient === 1 && random === 2 || indexOfClient === 2 && random === 0){
        html = `<img src="./assets/images/lose.jpg" alt="" width="40%" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">

                <h3> Sorry :( </h3> 
                <p> The computer had  ${items[random]} </p>`;
    }
    
    
    // if client wins

    if(indexOfClient === 0 && random === 2 || indexOfClient === 1 && random === 0 || indexOfClient === 2 && random === 1){
        html = `<img src="./assets/images/win.jpg" alt="" width="50%" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">

                <h3> CONGRATULATIONS ! </h3> 
                <p> The computer had " ${items[random]} "</p>`; 
        
    }                 
        
    $results.innerHTML = html;
    
}





