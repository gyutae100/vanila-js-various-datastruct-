linkedList = function(){

    //노드 클라스
    var node = function(element, next){
        
        var _element;
        var _next;

        this._element = element;
        this._next = next;
    }    

    var _length = 0;
    var _frontNode = null;
    var _rearNode = null;

    //더미 노드 생성한다.
    var dummyNode = new node(undefined, null);
    _frontNode = _rearNode = dummyNode;


    this.GetHead = function(){

        return _frontNode._next;
    }

    this.Insert= function(position, insertElement){

        //삽입 불가 조건 체크
        if( position < 0 || position > _length){

            return false;
        }

        //노드가 존재하지 않는 경우
        if( 0 === _length){

            var newNode = new node(insertElement, null);
            _frontNode._next = newNode;
            _rearNode = newNode;
        }

        //노드가 존재하는 경우
        else{

            var newNode = new node(insertElement, null);

            var curNode = _frontNode;
            for( var idx = 0 ; idx < position ; idx++ ){

                curNode = curNode._next;
            }

            newNode._next = curNode._next;
            curNode._next = newNode;
        }

        _length++;
        return true;
    }

    //리스트의 맨 끝에 원소를 추가한다.
    this.Append = function(insertElement){

        //노드가 존재하지 않는 경우
        if( 0 === _length ){

            var newNode = new node(insertElement, null);
            _frontNode._next = newNode;
            _rearNode = newNode;
        }

        //노드가 존재하는 경우
        else{
            
            var newNode = new node(insertElement, null);
            _rearNode._next = newNode;
            _rearNode = newNode;
        }

        _length++;
        return true;
    }

    //특정 인덱스 노드를 삭제한다.
    this.RemoveAt= function(position){

        //삭제 불가 조건 체크
        if( 0 > position || position > _length ){

            return false;
        }

        var curNode = _frontNode;
        for(var idx = 0 ; idx < position ; idx++ ){

            curNode = curNode._next;
        }

        var deleteNode = curNode._next;
        curNode._next = curNode._next._next;

        return deleteNode._element;
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
    
}

var linkedList = new linkedList();
linkedList.Append(1);
linkedList.Append(2);
linkedList.Append(4);
linkedList.Append(5);
linkedList.Insert(0,0);
linkedList.Insert(5,6);
linkedList.Insert(3,3);
linkedList.Print();

console.log('삭제 값 = ' + linkedList.RemoveAt(3));
linkedList.Print();

console.log('IndexOf( 4 ) = ' + linkedList.IndexOf(4) );
