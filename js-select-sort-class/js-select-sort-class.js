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


    this.selectSort = function(){


        //오름차순 정렬
        for( var cnt = 0; cnt < array.length-1 ; cnt++){

            var maxIndex = cnt;
            for( var idx = cnt+1 ; idx< array.length; idx++){

                if(array[maxIndex] < array[idx]){

                    maxIndex = idx;
                }
            }

            swap(cnt, maxIndex);
            printChangeProcess(cnt, maxIndex);
        }

    }
}


var array = new ArrayList();
array.insert(1);
array.insert(2);
array.insert(3);
array.insert(4);
array.insert(5);
array.selectSort();
console.log( array.toString() );
