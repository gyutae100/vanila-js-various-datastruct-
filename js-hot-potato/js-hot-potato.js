function queue() {

    var elements= [];

    this.Enqueue = function(insertElement){

        elements.push(insertElement);
    }

    this.Dequeue = function(){

        return elements.shift();
    }

    this.GetSize = function(){

        return elements.length;
    }

    this.IsEmpty = function(){

        return 0 == elements.length;
    }

    this.Clear = function(){

        elements = [];
    }

    this.Front = function(){

        if(true == this.IsEmpty()){

            return undefined;
        }
        else{

        return elements[0];
        }
    }

    this.print = function(){

        console.log( 'Queue elements ' + elements.toString() );
    }
}

var queue = new queue();
var nameList = ['1', '2' , '3', '4']; 

function HotPotatoGame(nameList, randNum){

    //nameList 모든 요소를 Enqueue
    for(var idx = 0 ; idx < nameList.length ; idx++){

        queue.Enqueue(nameList[idx]);
    }

    //핫 포테이토 게임 탈락자를 매 턴 마다 한명씩 선정한다.
    var totalTurn = nameList.length;
    for(var curTurn = 1 ; curTurn < totalTurn  ; curTurn++ ){

        for(var idx = 0; idx< randNum ; idx++){

            var tmp = queue.Dequeue();
            queue.Enqueue(tmp);
        }
        var loserAtThisTurn = queue.Dequeue();
        console.log( curTurn + '턴의 탈락자는 ' + loserAtThisTurn );
    }

    //최종 생존자를 선정한다.
    var winner = queue.Dequeue();
    console.log( '최종 생존자는 ' + winner );
}

HotPotatoGame(nameList, 4);


