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

//test code

var queue = new queue();

//Enqueue test
for(var i = 0 ; i <= 10 ; i++){
    
    queue.Enqueue(i);
    queue.print();
}

//front test
console.log( 'Front = ' + queue.Front() );

//Dequeue test
for(var i = 0 ; i <= 10 ; i++){
    
    console.log( 'Dequeue = ' + queue.Dequeue());
    queue.print();
}

//front test
console.log( 'Front = ' + queue.Front() );


