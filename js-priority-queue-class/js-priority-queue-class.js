

priorityQueue = function(){

    var elements= [];

    //디폴트 내림차순
    var isDescendingOrder = true;  ///<내림차순 옵션
    var isAscendingOrder = false;   ///<오름차순 옵션

    //내림차순 설정 옵션
    this.SetOptionDescendingOrder = function(){

        isDescendingOrder = true;
        isAscendingOrder = false;
    }

    //오름차순 설정 옵션
    this.SetOptionAscendingOrder = function(){

        isDescendingOrder = false;
        isAscendingOrder = true;
    }

    
    this.Enqueue = function(insertElement){

        for(var idx = 0 ; idx < elements.length ; idx++ ){

            var cur_value = elements[idx];

            //내림차순 정렬인 경우
            if( cur_value < insertElement && true == isDescendingOrder ){

                elements.splice(idx, 0, insertElement);
                return;
            }

            //오름차순 정렬인 경우
            if( cur_value > insertElement && true == isAscendingOrder ){

                elements.splice(idx, 0, insertElement);
                return;
            }
        }

        //삽입 요소가 마지막에 삽입되는 경우
         elements.push(insertElement);
    }

    this.Dequeue = function(){

        return elements.shift();
    }

    this.print = function(){

        console.log( elements.toString() );
    }

    this.Clear = function(){

        elements = [];
    }

    this.GetSize = function(){

        return elements.length;
    }
}

var priorityQueue = new priorityQueue();


//오름차순 테스트
priorityQueue.SetOptionAscendingOrder();
priorityQueue.Enqueue(1);
priorityQueue.Enqueue(3);
priorityQueue.Enqueue(5);
priorityQueue.Enqueue(8);
priorityQueue.Enqueue(2);
priorityQueue.print();

//clear 테스트
priorityQueue.Clear();

//내림차순 테스트
priorityQueue.SetOptionDescendingOrder();
priorityQueue.Enqueue(1);
priorityQueue.Enqueue(3);
priorityQueue.Enqueue(5);
priorityQueue.Enqueue(8);
priorityQueue.Enqueue(2);
priorityQueue.print();


//Dequeu 테스트
var size = priorityQueue.GetSize();
for(var idx = 0; idx < size ; idx++ ){

    console.log('Dequeue = ' + priorityQueue.Dequeue());
}

