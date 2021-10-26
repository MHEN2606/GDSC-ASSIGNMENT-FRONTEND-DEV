var movie_title = [
    {
        id : '1',
        title : 'Avengers: Endgame',
        picture_url : './img/avengersendgame.jpg',
        detail : 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.'
    },
    {
        id : '2',
        title : 'Avengers: Infinity Wars',
        picture_url : './img/avengerinfinitywar.jpg',
        detail : 'The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.'
    },
    {
        id : '3',
        title : 'Venom 2: Let There Be Carnage',
        picture_url : './img/lettherebecarnage.jpg',
        detail : 'Eddie Brock is still struggling to coexist with the shape-shifting extraterrestrial Venom. When deranged serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must put aside their differences to stop his reign of terror.'
    },
    {
        id : '4',
        title : 'John Wick',
        picture_url : './img/johnwick.jpg',
        detail : `After the sudden death of his beloved wife, John Wick receives one last gift from her, a beagle puppy named Daisy, and a note imploring him not to forget how to love. But John's mourning is interrupted when his 1969 Boss Mustang catches the eye of sadistic thug Iosef Tarasov who breaks into his house and steals it, beating John unconscious and leaving Daisy dead. Unwittingly, they have just reawakened one of the most brutal assassins the underworld has ever seen.`
    }
]  



function show_movie_preview(){
    var html="";

    for (var i = 0; i<movie_title.length; i++){
        html+=`<div class="catalog">`;
        html+=`<span class="movietitle">${movie_title[i].title}</span><br>`;
        html+=`<img class="picture" src="${movie_title[i].picture_url}"><br>`;
        html+=`<a href="detail.html?id=${movie_title[i].id}"><button class="button">View Detail</button></a>`;
        html+=`</div>`;
    }

    document.getElementById("catalog").innerHTML = html;
    

}

function show_movie_detail(){

    const urlString = window.location.search;
    const urlParams = new URLSearchParams(urlString);
    const id = urlParams.get('id');

    console.log(id);
    
    document.getElementById("movietitle").innerHTML = movie_title[id-1].title;
    document.getElementById("moviedetail").innerHTML = "Sinopsis: "+movie_title[id-1].detail;
    document.getElementById("movieimage").src = movie_title[id-1].picture_url;
    
}