var board = new Array(4);
var let = true;
var fi,se;
function press(i,j,id){
    if(board[i][j] == 0){
	    var si = (let == true) ? "X" : "O";
		var va = (let == true) ? 1 : 10;
		board[i][j] = va;
		$("#cell_"+id).html(si);
		let = (let == true) ? false : true;
		winner();
	}
}
function restart(){
    for(var i = 0 ; i < 3 ; i++)
	    for(var j = 0 ; j < 3 ; j++)
		    board[i][j] = 0;
    for(var i = 1 ; i < 10 ; i++)
        $('#cell_' + i).html("");
}
function check(){
    var sum = 0;
	for(var i = 0 ; i < 3 ; i++){
	    for(var j = 0 ; j < 3 ; j++){
		    sum = board[0][i] + board[1][i] + board[2][i];
			if(sum == 3) return 1;
			if(sum == 30) return 2;
		}
	}
	for(var i = 0 ; i < 3 ; i++){
	    for(var j = 0 ; j < 3 ; j++){
		    sum = board[i][0] + board[i][1] + board[i][2];
			if(sum == 3) return 1;
			if(sum == 30) return 2;
		}
	}
	sum = board[0][0] + board[1][1] + board[2][2];
	if(sum == 3) return 1;
	if(sum == 30) return 2;
	sum = board[2][0] + board[1][1] + board[0][2];
	if(sum == 3) return 1;
	if(sum == 30) return 2;
	var free = true;
	for(var i = 0 ; i < 3 ; i++){
	    for(var j = 0 ; j < 3 ; j++){
		    if(board[i][j] == 0) free = false;
		}
	}
	if(free == true) return 0;
	return -1;
}
function winner(){
    var answer = check();
	var time;
	switch(answer){
	    case 0:
		    $("#score").html("Score X - " + fi + " | O - " + se + " | Draw!");
		    time = setInterval(function () {restart();clearTimeout(time);}, 1000);
		break;
		case 1:
		    fi++;
			$("#score").html("Score X - " + fi + " | O - " + se + " | X win!");
		    time = setInterval(function () {restart();clearTimeout(time);}, 1000);
		break;
		case 2:
		    se++;
			$("#score").html("Score X - " + fi + " | O - " + se + " | O win!");
		    time = setInterval(function () {restart();clearTimeout(time);}, 1000);
		break;
	}
}
function init_game(){
    for(var i = 0 ; i < 4 ; i++)
	    board[i] = new Array(4);
    for(var i = 0 ; i < 3 ; i++)
	    for(var j = 0 ; j < 3 ; j++)
		    board[i][j] = 0;
    for(var i = 1 ; i < 10 ; i++)
        $('#cell_' + i).html("");	
	fi = 0;
	se = 0;
}
$(document).ready(function() {
    init_game();
});
$(".restart").click(function(){
    restart();
});