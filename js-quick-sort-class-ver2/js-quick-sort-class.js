
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

    this.QuickSort = function(){

        Partition(0, array.length-1);
    }


    //오름차순
    var Partition = function(startIdx, endIdx){


        //예외 조건
        if( startIdx <0 || endIdx < 0 || startIdx > endIdx){

            return;
        }

        //두 개 숫자 비교 시
        if( ( endIdx - startIdx == 1) ){

            if( array[startIdx] > array[endIdx]){

                swap(startIdx , endIdx);
            }
            return;
        }

        var pivotIndex = startIdx;
        var pivotValue = array[pivotIndex];

        var idxLeft = startIdx+1;
        var idxRight = endIdx;

        while( idxLeft  <= idxRight){

            if( array[idxLeft] < pivotValue ){

                idxLeft++;
            }

            else if( array[idxRight] > pivotValue ){

                idxRight--;
                
            }
            else {

                console.log('중간 교환');
                printChangeProcess(idxLeft, idxRight);
                swap(idxLeft, idxRight);
                idxLeft++;
                idxRight--;
            }

        }

        swap(startIdx, idxRight);
        console.log('바로 다음 라인은 피봇 교환');
        printChangeProcess(startIdx, idxRight);

        Partition(startIdx, idxRight-1);
        Partition(idxRight + 1, endIdx);
    }
}


var array = new ArrayList();
array.insert(1);
array.insert(8);
array.insert(3);
array.insert(6);
array.insert(5);
array.insert(4);
array.insert(7);
array.insert(2);
array.insert(9);
array.QuickSort();
console.log('정렬 후 = ' + array.toString());
