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
    }
]  

var html=""

function show_movie_preview(){

    for (var i = 0; i<movie_title.length; i++){
        html+=`<div class="catalog">`;
        html+=`<span class="movietitle">${movie_title[i].title}</span><br>`;
        html+=`<img class="picture" src="${movie_title[i].picture_url}"><br>`;
        html+=`<button id = "${movie_title[i].id}" class="button" onclick="show_movie_detail()">View Detail</button>`;
        html+=`</div>`;
    }

    document.getElementById("catalog").innerHTML = html;
    

}

show_movie_preview();

function show_movie_detail(){
    window.print();
}