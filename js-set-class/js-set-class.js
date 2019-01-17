function Set(){

    var items = {};

    this.Has = function(value){

        //return value in items;
        return items.hasOwnProperty(value);
    }

    this.Add = function(value){

        if( ! this.Has(value)){
            
            items[value] = value;
            return true;
        }

        return false;
    }

    this.Remove = function(value){

        if(this.Has(value)){

            delete items[value]; 
            return true;
        }

        return false;
    }

    this.Clear = function(){

        items = {};
    }

    this.Size = function(){

        return Object.keys(items).length;
    
    }

    this.Value = function(){

        return Object.keys(items);
    }

    this.Union = function(otherSet){

        var unionSet = new Set;

        var setA = this.Value();
        for( var idx = 0; idx < setA.length ; idx++){

            unionSet.Add( setA[idx]);
        }

        var setB = otherSet.Value();
        for( var idx = 0; idx < setB.length ; idx++){

            unionSet.Add( setB[idx]);
        }

        return unionSet;

    }

    this.InterSection = function(otherSet){

        intersection = new Set();

        setA = this.Value();
        setB = otherSet.Value();

        var smallArr = ( setA.length > setB.length)? setB : setA;

        for( var idx = 0 ; idx < smallArr.length ; idx++ ){

            curValue = smallArr[idx];
            if( this.Has( curValue ) && otherSet.Has( curValue) ){ 
            
                intersection.Add(curValue);
            }
            
        }
        
        return intersection;
    }

    this.Difference = function(otherSet){

        var difference = new Set();

        setA = this.Value();

        for( var idx = 0 ; idx < setA.length ; idx++ ){

            curValue = setA[idx];
            if( !otherSet.Has( curValue) ){ 
            
                difference.Add(curValue);
            }
        }
        
        return difference;
    }

    this.Subset = function(otherSet){

        if( this.Size() > otherSet.Size() ){

            return false;
        }

        var setA = this.Value();
        for( var idx = 0 ; idx < setA.length ; idx++){

            if( ! otherSet.Has( setA[idx])){

                return false;
            }
        }

        return true;
    }
}


//합집합 테스트
var setA =new Set();
setA.Add(1);
setA.Add(2);
setA.Add(3);


var setB =new Set();
setB.Add(3);
setB.Add(4);
setB.Add(5);

var unionAB = setA.Union(setB);
console.log(unionAB.Value());


//교집합 테스트
var setA =new Set();
setA.Add(1);
setA.Add(2);
setA.Add(3);
setA.Add(4);
setA.Add(5);


var setB =new Set();
setB.Add(3);
setB.Add(4);
setB.Add(6);

var intersectionAB = setA.InterSection(setB);
console.log(intersectionAB.Value());


//차집합 테스트
var setA =new Set();
setA.Add(1);
setA.Add(2);
setA.Add(3);
setA.Add(4);
setA.Add(5);


var setB =new Set();
setB.Add(3);
setB.Add(4);
setB.Add(6);

var differenceAB = setA.Difference(setB);
console.log(differenceAB.Value());


//부분집합 테스트 1
var setA =new Set();
setA.Add(1);
setA.Add(2);
setA.Add(3);
setA.Add(4);
setA.Add(5);


var setB =new Set();
setB.Add(3);
setB.Add(4);
setB.Add(6);

console.log( '부분 집합 여부 = ' + setA.Subset(setB));

//부분집합 테스트 2
var setA =new Set();
setA.Add(3);
setA.Add(4);

var setB =new Set();
setB.Add(1);
setB.Add(2);
setB.Add(3);
setB.Add(4);
setB.Add(5);
setB.Add(6);

console.log( '부분 집합 여부 = ' + setA.Subset(setB));