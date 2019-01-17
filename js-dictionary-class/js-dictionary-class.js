


function Dictionary(){

    var items = {};

    this.Has = function(key){

        //items.hasOwnProperty(key);
        return key in items;
    }

    this.Set = function(key, value){

        if( ! this.Has(key)){

            items[key] = value;
            return true;
        }
        
        return false;
    }

    this.Remove = function(key){

        if(this.Has(key)){

            delete items[key]; 
            return true;
        }

        return false;
    }

    this.Get = function(key){

        if( this.Has(key)){

            return items[key];
        }
        else{

            return undefined;
        }
    }

    this.Value = function(key){

        var arr = [];
        for(key in items){

            if( this.Has(key)){
                arr.push(items[key]);
            }
        }
        return arr;
    }

    this.GetItems = function(){

        return items;
    }

    this.Clear = function(){

        items = {};
        return true;
    }

    this.Size = function(){

        return Object.keys(items).length;
    }
}

var Dictionary = new Dictionary();
Dictionary.Set(3,3);
Dictionary.Set(4,4);
Dictionary.Set(5,5);
Dictionary.Set(6,6);
Dictionary.Set(6,6);

Dictionary.Set('a',3);
Dictionary.Set('b',4);
Dictionary.Set('c',5);
Dictionary.Set('d',6);
Dictionary.Set('e',7);


// console.log( Dictionary.Get(3));
// console.log( Dictionary.Get(4));
// console.log( Dictionary.Get(5));
// console.log( Dictionary.Get(6));


console.log( Dictionary.Get('a'));
console.log( Dictionary.Get('b'));
console.log( Dictionary.Get('c'));
console.log( Dictionary.Get('d'));
console.log( Dictionary.Get('e'));

Dictionary.Remove('e');

console.log( Dictionary.Value());
