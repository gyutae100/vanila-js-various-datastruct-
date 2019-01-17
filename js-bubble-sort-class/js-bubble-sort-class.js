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

    this.bubbleSort = function(){

        console.log('버블 소트 소팅 과정 출력');
        for( var cnt = 1 ; cnt < array.length ; cnt++){

            for( var idx = 0 ; idx < array.length - cnt  ; idx++){

                //오름 차순인 경우
                if( array[idx] > array[idx+1] ){

                    swap(idx, idx+1);
                    printChangeProcess(idx , idx+1);
                }
            }
            console.log( cnt +'번 결과:' + array.toString());
        }

        console.log( '최종 소팅 결과 : ' +array.toString() );
    }
}


var array = new ArrayList();
array.insert(5);
array.insert(4);
array.insert(3);
array.insert(2);
array.insert(1);
array.bubbleSort();
