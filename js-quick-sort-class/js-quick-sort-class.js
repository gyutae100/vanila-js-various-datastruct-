
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

 
        var pivotIndex = startIdx;
        var pivotValue = array[pivotIndex];

        var idxLeft = startIdx+1;
        var idxRight = endIdx;

        while( idxLeft  <= idxRight){

            while( array[idxLeft] < pivotValue ){

                idxLeft++;
            }

            while( array[idxRight] > pivotValue ){

                idxRight--;
                
            }
            if( idxLeft <= idxRight) {

                printChangeProcess(idxLeft, idxRight);
                swap(idxLeft, idxRight);
                idxLeft++;
                idxRight--;
            }

        }

        swap(startIdx, idxRight);
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
