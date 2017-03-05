
// getting the names of players
var player1 = prompt("Name of player 1?");
var player2 = prompt("Name of player 2?");

if(!player1){
    player1 = "Player 1";
}

if(!player2){
    player2 = "Player 2";
}

$(".name1").html("Cards of " + player1);
$(".name2").html("Cards of " + player2);

//setting up the 52 cards
var images = [
    {"img/2_of_clubs.png": 2},
    {"img/3_of_clubs.png": 3},
    {"img/4_of_clubs.png": 4},
    {"img/5_of_clubs.png": 5},
    {"img/6_of_clubs.png": 6},
    {"img/7_of_clubs.png": 7},
    {"img/8_of_clubs.png": 8},
    {"img/9_of_clubs.png": 9},
    {"img/10_of_clubs.png": 10},
    {"img/jack_of_clubs.png": 11},
    {"img/queen_of_clubs.png": 12},
    {"img/king_of_clubs.png": 13},
    {"img/ace_of_clubs.png": 14},
    {"img/2_of_diamonds.png": 2},
    {"img/3_of_diamonds.png": 3},
    {"img/4_of_diamonds.png": 4},
    {"img/5_of_diamonds.png": 5},
    {"img/6_of_diamonds.png": 6},
    {"img/7_of_diamonds.png": 7},
    {"img/8_of_diamonds.png": 8},
    {"img/9_of_diamonds.png": 9},
    {"img/10_of_diamonds.png": 10},
    {"img/jack_of_diamonds.png": 11},
    {"img/queen_of_diamonds.png": 12},
    {"img/king_of_diamonds.png": 13},
    {"img/ace_of_diamonds.png": 14},
    {"img/2_of_hearts.png": 2},
    {"img/3_of_hearts.png": 3},
    {"img/4_of_hearts.png": 4},
    {"img/5_of_hearts.png": 5},
    {"img/6_of_hearts.png": 6},
    {"img/7_of_hearts.png": 7},
    {"img/8_of_hearts.png": 8},
    {"img/9_of_hearts.png": 9},
    {"img/10_of_hearts.png": 10},
    {"img/jack_of_hearts.png": 11},
    {"img/queen_of_hearts.png": 12},
    {"img/king_of_hearts.png": 13},
    {"img/ace_of_hearts.png": 14},
    {"img/2_of_spades.png": 2},
    {"img/3_of_spades.png": 3},
    {"img/4_of_spades.png": 4},
    {"img/5_of_spades.png": 5},
    {"img/6_of_spades.png": 6},
    {"img/7_of_spades.png": 7},
    {"img/8_of_spades.png": 8},
    {"img/9_of_spades.png": 9},
    {"img/10_of_spades.png": 10},
    {"img/jack_of_spades.png": 11},
    {"img/queen_of_spades.png": 12},
    {"img/king_of_spades.png": 13},
    {"img/ace_of_spades.png": 14}
];


//function for shuffling
function shuffle(a) {
    "use strict";
    var i, t, j;
    for (i = a.length - 1; i > 0; i -= 1) {
        t = a[i];
        j = Math.floor(Math.random() * (i + 1));
        a[i] = a[j];
        a[j] = t;
    }
    return a;
}

shuffle(images);

// get the two decks
var half_length = Math.ceil(images.length / 2);    

var deck1 = images.splice(0,half_length);
var deck2 = images;
// variables for using the values globally
var value1;
var value2;

var played_deck1 = [];
var played_deck2 = [];

function dealing(){
    // getting the first cards of the first player
    card1 = deck1[0];
    card1_2 = deck1[1];
    card1_3 = deck1[2];
    //put them into an array
    played_deck1.push(card1);
    played_deck1.push(card1_2);
    played_deck1.push(card1_3);
    
    // go through the array
    var text1 = "";
    for (var order in played_deck1){
        for (var key in played_deck1[order]){
            text1 += "<img src='" + key + "'>";
            value1 = played_deck1[order][key];  
        }
    }
    
    // show the card
    $(".card_plyr1").html(text1);
    
    //do the same with the first cards of the second player
    card2 = deck2[0];
    card2_2 = deck2[1];
    card2_3 = deck2[2];
    played_deck2.push(card2);
    played_deck2.push(card2_2);
    played_deck2.push(card2_3);
    var text2 = "<ul>";
    for (var order in played_deck2){
        for (var key in played_deck2[order]){       
            text2 += "<img src='" + key + "'>";
            value2 = played_deck2[order][key];
        }
    }
    $(".card_plyr2").html(text2);
}

function draw_card(){
    //hide unnecessary messages
    $(".draw").addClass("hidden");
    $(".win1").addClass("hidden");
    $(".win2").addClass("hidden");
    $(".ply1_2nd_card").addClass("hidden");
    $(".ply2_2nd_card").addClass("hidden");
    $(".new_game").addClass("hidden");
    
    dealing();
    
    // check who won the round
     
    if(value1 > value2){
        $(".win1").removeClass("hidden");
        $(".win1").html(player1 + " wins this round");
        $(".win1").addClass("won");
        deck1.splice(0, 3);
        deck2.splice(0, 3);
        deck1 = deck1.concat(played_deck1).concat(played_deck2);
        played_deck1 = [];
        played_deck2 = [];
    
        
    }else if (value2 > value1){
        $(".win2").removeClass("hidden");
        $(".win2").html(player2 + " wins this round");
        $(".win2").addClass("won");
        deck1.splice(0, 3);
        deck2.splice(0, 3);
        deck2 = deck2.concat(played_deck1).concat(played_deck2);
        played_deck1 = [];
        played_deck2 = [];
    
        
    }else if (value1 == value2){
        $(".draw").removeClass("hidden");
        $(".add_card").removeClass("hidden");
        $(".new_card").addClass("hidden");
        deck1.splice(0, 3);
        deck2.splice(0, 3);        
    }

// show the number of cards in each hand
$(".no_cards_player1").html("Number of cards of " + player1 + " is " + deck1.length);
$(".no_cards_player2").html("Number of cards of " + player2 + " is " + deck2.length);

// check if someone wins
if(deck1.length == 0){
    $(".winner").html(player2 + " wins the game!");
    $(".new_game").removeClass("hidden");
} else if(deck2.length == 0){
    $(".winner").html(player1 + " wins the game!");
    $(".new_game").removeClass("hidden");
}
}; 

// call the play function
$(".new_card").click(draw_card);

// in case of draw
$(".add_card").click(function(){
    $(".draw").addClass("hidden");
    $(".add_card").addClass("hidden");
    $(".new_card").removeClass("hidden");
     
    dealing();
    deck1.splice(0, 3);
    deck2.splice(0, 3); 
});

// start new game
$(".new_game").click(function(){
   location.reload(); 
});