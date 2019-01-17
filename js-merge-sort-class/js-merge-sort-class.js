//미완성
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

    this.MergeSort = function(){

        array = mergeSortRec(array);
    }

    var mergeSortRec = function(array){

        var length =array.length;

        if(length === 1){

            return array;
        }
        var mid = Math.floor(length / 2);
        var left =array.slice(0,mid);
        var right = array.slice(mid, length);

        return merge(mergeSortRec(left), mergeSortRec(right));
    }

    var merge = function(left, right){

        var result = [];
        var il = 0;
        var ir = 0;

        while(il <left.length && ir <right.length){

            if(left[il] <right[ir]){

                result.push(left[il++]);
            }
            else{

                result.push(right[ir++]);
            }
        }

        while( il < left.length){

            result.push(left[il++]);
        }

        while(ir.length){

            result.push(right[ir++]);
        }

        return result;

    }
}


var array = new ArrayList();
array.insert(4);
array.insert(3);
array.insert(2);
array.insert(1);
array.MergeSort();
console.log( array.toString() );
