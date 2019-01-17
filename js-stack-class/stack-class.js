function stack() {

    var elements=[];

    this.Push = function(insertElement){

        elements.push(insertElement);
    }

    this.Pop = function(){

        return elements.pop();
    }

    this.GetSize = function(){

        return elements.length;
    }

    this.Peek = function(){

        return elements[elements.length-1];
    }

    this.IsEmpty = function(){

        return 0 === elements.length;
    }

    this.Clear = function(){

        elements=[];
    }
}


// test code

//stack 객체 생성한다.
var stack = new stack();

//empty 테스트한다.
console.log( 'is Empty =' + stack.IsEmpty());

//stack에 element를 푸시하면서 peek값을 테스트한다.
for(var i = 1 ; i <= 10 ; i ++){

    stack.Push(i);
    console.log( 'peek = ' + stack.Peek());
}
console.log( 'is Empty = ' + stack.IsEmpty());
console.log( 'stack Size = ' + stack.GetSize());

//stack을 클리어한다.
stack.Clear();
console.log( 'is Empty = ' + stack.IsEmpty());
console.log( 'stack Size = ' + stack.GetSize());


