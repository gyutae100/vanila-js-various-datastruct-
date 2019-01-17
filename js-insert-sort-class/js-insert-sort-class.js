function ArrayList(){

    var array = [];

    this.insert = function(item){

        array.push(item);
    }

    this.toString = function(){

        return array.join();
    };

    var swap = function(idx1, idx2){

        var tmp = array[idx1];
        array[idx1] = array[idx2];
        array[idx2] = tmp;
    }

    var printChangeProcess = function(idx1, idx2){
        
        var outString = '   ';

        for( var idx = 0 ; idx < array.length ; idx++){
            
            if(idx === idx1 || idx === idx2){

                outString = outString + '['+array[idx]+']';
            }
            else{

                outString = outString + ' '+ array[idx]+ ' ';
            }

            if( idx!== array.length-1){

                outString = outString +',';
            }
        }

        console.log( outString);
    }


    //내림차순
    this.insertSort = function(){

        console.log( this.toString());

        for(var cnt = 1 ; cnt < array.length; cnt++){

            var tmp = array[cnt];
            var idx = cnt;
            for(    ; 0 < idx ; idx--){

                if( tmp > array[idx-1] ){

                    printChangeProcess(idx, idx-1);
                    array[idx] = array[idx-1];
                }
                else if( tmp <= array[idx-1] ){

                    break;
                }
            }
            array[idx]= tmp;
            console.log( this.toString());
        }
    }
}


var array = new ArrayList();
array.insert(1);
array.insert(2);
array.insert(3);
array.insert(4);
array.insert(5);
array.insertSort();
