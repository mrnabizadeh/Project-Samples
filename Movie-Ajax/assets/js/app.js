document.getElementById("btn-profile").innerText = `Welcome, Name`;

/////////////////////////////////////////////////////// DOM

let searchInput = document.getElementById("search");

let $movie_name = document.getElementById("movie_name");
let $cover = document.getElementById("cover");
let $genres = document.getElementById("genres");
let $rating = document.getElementById("rating");
let $network = document.getElementById("network");
let $country = document.getElementById("country");
let $language = document.getElementById("language");
let $status = document.getElementById("status");
let $summary = document.getElementById("summary");

let $error = document.getElementById("error");
let $success = document.getElementById("success");


/////////////////////////////////////////////////////// Ajax

async function loadJson(symbol){


    let res = await fetch (`https://api.tvmaze.com/search/shows?q=${symbol}`);
    let resJson = await res.json();
    let resResualt = await resJson;


    for(i in resResualt){
        var finalResualt = resResualt[i];
        break;
    }

    return finalResualt;
    

}


/////////////////////////////////////////////////////// Put the data on the page

async function parsedata(){


    let finalResualt = await loadJson(searchInput.value);

    if(finalResualt == undefined){
        $success.classList.add("invisible");
        $error.classList.remove("invisible");
        return;
    }

    $success.classList.remove("invisible");
    $error.classList.add("invisible");


    let show = finalResualt.show;


    let genres = [show.genres[0], show.genres[1], show.genres[2]];
    for(i in genres){
        if(!genres[i]){
            genres.splice(i,2)
        }
    }
    genres = genres.join(", ");
    $genres.innerText = genres;
    
    
    $movie_name.innerText = show.name;
    $cover.innerHTML = `<img src="${show.image.original}" alt="" width="200">`;
    $rating.innerText = show.rating.average;
    $network.innerText = show.network.name;
    $country.innerText = show.network.country.name;
    $language.innerText = show.language;
    $status.innerText = show.status;
    $summary.innerHTML = show.summary;
}

/////////////////////////////////////////////////////// Execute

document.getElementById("searchBtn").onclick = () =>{

    $summary.innerHTML = "";

    parsedata();

    searchInput.value = "";

}