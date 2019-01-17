
//키값 충돌 방지에 대한 예외처리가 되있지 않다.
function HashTable(){

    var table = [];

    this.djb2HashCode = function(key){

        var hash = 5381;
        for(var idx = 0 ; idx < key.length; idx++){

            hash = hash * 33 + key.charCodeAt(idx);
        }

        return hash % 1013;
    }

    this.put = function(key, value){

        var hashCode = this.djb2HashCode(key);

        //해쉬 테이블이 충돌이 안 날 경우
        if( undefined == table[hashCode]){
            console.log( key + '-' + hashCode);
            table[hashCode] = value;
        }

        //해쉬 테이블이 충돌이 날 경우
        else{

            console.log( '해쉬 테이블 충돌');
        }
    }

    this.get= function(key){

        var hashCode = this.djb2HashCode(key);
        return table[hashCode];
    }

    this.remove = function(key){

        var hashCode = this.djb2HashCode(key);
        table[hashCode] = undefined;
    }

    this.print = function(){

        for(var idx = 0 ; idx < table.length ; idx++){

            if(table[idx] != undefined){

                console.log(idx + " : "+ table[idx]);
            }
        }
    }
} 

var hashTable = new HashTable();
hashTable.put( 'gyutae', 'gyutae@gmail.com');
hashTable.put( 'gyutae1', 'gyutae1@gmail.com');
hashTable.put( 'gyutae2', 'gyutae2@gmail.com');
hashTable.print();


hashTable.remove('gyutae');
hashTable.put( 'gyutae1', 'gyutae@gmail.com');
hashTable.print();
