
//키값 충돌 방지에 대한 예외처리가 되있지 않다.
function ChainingHashTable(){

    var table = [];

    //링크드 리스트 내부 엘레먼트.
    //체이닝 충돌 시 링크드 리스트 내부의 key값을 이용해 값을 추적한다.
    var ValuePair = function(key, value){

        this._key = key;
        this._value = value;

        this.toString = function(){

            return '['+key+' - ' + value +']';
        }
    }

    this.djb2HashCode = function(key){

        var hash = 5381;
        for(var idx = 0 ; idx < key.length; idx++){

            hash = hash * 33 + key.charCodeAt(idx);
        }

        return hash % 1013;
    }

    this.put = function(key, value){

        var hashCode = this.djb2HashCode(key);

        //해쉬 테이블이 충돌이 안 날 경우 체이닝용 링크드 리스트를 생성해준다.
        if( undefined == table[hashCode]){
            console.log( key + '-' + hashCode);
            table[hashCode] = new linkedList();
        }

        //기존 키 값과 같은 키값이 해쉬 테이블에 존재하는지 검사한다.
        var linkedHead =table[hashCode].GetHead();
        while ( null !== linkedHead){

            if( key === linkedHead._element._key ){

                return false;
            }
        }
        
        var tmp = new ValuePair(key, value);
        table[hashCode].Append( tmp );
    }

    this.get = function(key){

        var hashCode = this.djb2HashCode(key);

        var linkedHead = table[hashCode].GetHead();

        while( null !== linkedHead ){

            if(linkedHead._element._key === key){

                return linkedHead._element._value;
            }

            linkedHead = linkedHead._next;
        }

        return false;
    }

    this.remove = function(key){

        var hashCode = this.djb2HashCode(key);
        
        if( undefined !== table[hashCode] ){

            var linkedHead = table[hashCode].GetHead();

            var idx = 0;
            while( linkedHead !== null){

                if(linkedHead._element._key === key){

                    table[hashCode].RemoveAt(idx);
                    return true;
                }

                idx++;
                linkedHead = linkedHead._next;
            }

            return false;
        }

        return false;
    }

    this.print = function(){

        for(var idx = 0 ; idx < table.length ; idx++){

            if(table[idx] != undefined){

                table[idx].Print();
            }
        }
    }
} 


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


var chainingHashTable = new ChainingHashTable();
chainingHashTable.put( 'gyutae', 'gyutae@gmail.com');
chainingHashTable.put( 'gyutae', 'gyutae@gmail.com');
chainingHashTable.put( 'gyutae1', 'gyutae1@gmail.com');
chainingHashTable.put( 'gyutae2', 'gyutae2@gmail.com');

chainingHashTable.remove( 'gyutae2');
chainingHashTable.print();

console.log( chainingHashTable.get('gyutae') );




