//더블 링크드 리스트 클래스
var doublyLinkedList = function(){


    //노드 클래스
    var node = function(element, prev, next){

        var _element;

        var _next;
        var _prev;

        this._element = element;
        this._prev = prev;
        this._next =next;
    }

    var _frontNode = null;
    var _rearNode = null;
    var _length = 0;

    //더미 노드 생성 및 초기화
    var dummyNode = new node(undefined, null, null);
    _frontNode = dummyNode;
    _rearNode = dummyNode;

    this.GetHead = function(){

        return _frontNode._next;
    }

    this.Append = function(insertElement){

        //노드가 한개도 존재하지 않는 경우
        if( 0 === _length ){

            var newNode = new node(insertElement, _frontNode, null);
            _frontNode._next = newNode;
            _rearNode = newNode;
        }

        //노드가 존재하는 경우
        else{

            var newNode = new node(insertElement, _rearNode, _rearNode._next);
            _rearNode._next = newNode;
            _rearNode = newNode;
        }

        _length++;
        return true;
    }

    this.Insert= function(position, insertElement){

        //position 범위 체크
        if( 0 > position || _length < position){

            return false;
        }

        //노드가 한개도 존재하지 않는 경우
        if( 0 === _length ){

            var newNode = new node(insertElement, _frontNode, null);
            _frontNode._next = newNode;
            _rearNode = newNode;
        }

        //노드가 존재하는 경우
        else{

            var curNode = _frontNode;

            for(var idx = 0 ; idx < position ; idx++){

                curNode =  curNode._next;
            }

            var newNode = new node(insertElement, curNode, curNode._next);

            if( null !== curNode._next ){
             
                curNode._next._prev = newNode;
            }
            curNode._next = newNode;
        }


        _length++;
    }

    this.RemoveAt= function(position){

        var curNode = _frontNode;

        for( idx = 0 ; idx < position ; idx++){

            curNode = curNode._next;
        }

        var deleteNode= curNode._next;
        curNode._next._next._prev = curNode;
        curNode._next = curNode._next._next;

        return deleteNode;
    }

    
    //링크드 리스트의 모든 노드를 출력한다.
    this.Print = function(){

        var curNode = _frontNode._next;
        var output = '';
        while( null !== curNode ){

            output += curNode._element +' ';
            curNode= curNode._next;
        }

        console.log(output);
        return true;
    }

    //링크드 리스트가 빈 여부를 체크
    this.IsEmpty= function(){

        if( 0 === _length ){

            return true;
        }

        return false;
    }

    this.Size= function(){

        return _length;
    }

    //해당 원소의 인덱스를 반환해준다. 존재하지 않을 경우 결과 값은 -1이다.
    this.IndexOf= function(element){

        var curNode = _frontNode._next;
        var curIdx = 0;

        while( null !==curNode){

            if(curNode._element === element){

                return curIdx;
            }

            curNode= curNode._next;
            curIdx++;
            
        }

        //못 찾은 경우
        return -1;

    }

    this.Size= function(){

        return _length;
    }
}

var doublyLinkedList = new doublyLinkedList();
doublyLinkedList.Append(0);
doublyLinkedList.Append(1);
doublyLinkedList.Append(2);
doublyLinkedList.Append(3);
doublyLinkedList.Print();

doublyLinkedList.Insert(4,4);
doublyLinkedList.Print();

doublyLinkedList.RemoveAt(2);
doublyLinkedList.Print();

console.log( 'IndexOf(1) = '+doublyLinkedList.IndexOf(1) ) ;