

function BinarySearchTree(){

    var Node = function(key, value){

        this._key = key;
        this._valeu = value;
        this._left = null;
        this._right = null;
    };

    var _root = null;

    //삽입
    this.insert = function(key, value){

        var newNode = new Node(key, value)

        if(null === _root){

            _root = newNode;
            return true;
        }

        insertNode(_root, newNode);
    }

    var insertNode = function(visitNode, newNode){

        if( visitNode._key > newNode._key ){
            
            if( null !== visitNode._left){
                
                insertNode( visitNode._left, newNode );
            }
            else{

                visitNode._left = newNode;
                return true;
            }
        }

        if( visitNode._key < newNode._key ){
            
            if( null !== visitNode._right){
                
                insertNode( visitNode._right, newNode );
            }
            else{

                visitNode._right = newNode;
                return true;
            }
        }
    }


    //중위 순회 재귀 방식
    this.inOrderTraverse = function (callback){

        inOrderTraverseNode(_root, callback);
    }

    var inOrderTraverseNode = function (visitNode, callback){
       
        if(visitNode !== null ){

            var leftNode = visitNode._left;
            var rightNode = visitNode._right;

            inOrderTraverseNode(leftNode, callback);
            callback(visitNode._key);
            inOrderTraverseNode(rightNode, callback);
        }
    };

    //최솟값 찾기
    this.searchMinNode = function(){

        return minNode(_root);
    };

    var minNode = function(node){
        if(node){
            while(node && node._left !== null){
                node = node._left;
            }

            return node._key;
        }
        return null;
    }

    //최댓값 찾기
    this.searchMaxNode = function(){

        return maxNode(_root);
    };

    var maxNode = function (node){

        if(node){

            while( node && node._right !==null){

                node = node._right;
            }

            return node._key;
        }
        return null;
    }

    //특정 값 찾기
    this.search = function(key){
        return searchNode(_root, key);
    }

    var searchNode = function(node, key){

        if(node === null){

            return false;
        }
        if( key <node.key){

            return searchNode(node._left, key);
        }
        else if(key > node._key){

            return searchNode(node._right, key);
        }
        else{
            return true;
        }
    };

    this.remove = function(key){

        _root = removeNode(_root, key);
    };

    var removeNode = function(node, key){

        if( null === node){

            return null;
        }

        else if( node._key > key){

            node._left = removeNode(node._left, key)
            return node;
        }

        else if( node._key < key){

            node._right = removeNode(node._right, key)
            return node;
        }

        //node._key === key
        
        if( node._left === null && node._right ===null){

            node = null;
            return null;   
        }

        else if ( node._left === null && node._right !== null ||
                node._left !== null && node._right === null ){

                    if(node._left === null){

                        return node._right;
                    }
                    else{

                        return node._left;
                    }
                }

        else{
            var tmp = minNode(node._right);
            node._key = tmp;
            removeNode(node._right, tmp);

            return node;

        }
    }
}


function printNode(value){

    console.log(value);
}

var binarySearchTree = new BinarySearchTree();

// //중위 순회 출력 테스트
// binarySearchTree.insert(3, 3);
// binarySearchTree.insert(2, 2);
// binarySearchTree.insert(1, 1); 


// //단말 노드 삭제 테스트
// console.log( binarySearchTree.delete(4) );
// console.log( binarySearchTree.delete(1) );
// binarySearchTree.inOrderTraverse( printNode);

// //루트 노드 단말 노드 삭제 테스트
// console.log( binarySearchTree.delete(2) );
// console.log( binarySearchTree.delete(3) );
// binarySearchTree.inOrderTraverse( printNode);

// //자식이 하나인 노드 삭제 테스트
// binarySearchTree.insert(3, 3);
// binarySearchTree.insert(2, 2);
// binarySearchTree.insert(1, 1); 
// console.log( binarySearchTree.delete(2) );
// binarySearchTree.inOrderTraverse( printNode);

// //자식이 하나인 노드가 단말 노드인 경우 삭제 테스트
// console.log( binarySearchTree.delete(3) );
// binarySearchTree.inOrderTraverse( printNode);
// console.log( binarySearchTree.delete(1) );
// binarySearchTree.inOrderTraverse( printNode);

// //자식이 두개인 노드 삭제 테스트
// //단말노드의 부모를 삭제하는 경우 테스트
// binarySearchTree.insert(11, 11);
// binarySearchTree.insert(6, 6);
// binarySearchTree.insert(15, 15);
// binarySearchTree.insert(3, 3);
// binarySearchTree.insert(9, 9);
// binarySearchTree.insert(8, 8);
// binarySearchTree.insert(10, 10);
// binarySearchTree.insert(13, 13);
// binarySearchTree.insert(12, 12);
// binarySearchTree.insert(14, 14);
// binarySearchTree.insert(20, 20);
// binarySearchTree.insert(18, 18);
// binarySearchTree.insert(25, 25);
// binarySearchTree.inOrderTraverse( printNode);

// console.log( binarySearchTree.delete(20) );
// binarySearchTree.inOrderTraverse( printNode);


// //자식이 두개인 노드 삭제 테스트
// //중간 노드를 삭제하는 경우 테스트
// console.log( binarySearchTree.delete(15) );
// binarySearchTree.inOrderTraverse( printNode);


//자식이 두개인 노드 삭제 테스트
//루트 노드를 삭제하는 경우 테스트
binarySearchTree.insert(11, 11);
binarySearchTree.insert(6, 6);
binarySearchTree.insert(15, 15);
binarySearchTree.insert(3, 3);
binarySearchTree.insert(9, 9);
binarySearchTree.insert(8, 8);

// //자식 두개인 루트 노드 삭제
// console.log( '루트 노드 삭제 ' + binarySearchTree.remove(11) );
// binarySearchTree.inOrderTraverse( printNode);

// //자식 두개인 중간 레벨 노드 삭제
// console.log( '루트 노드 삭제 ' + binarySearchTree.remove(6) );
// binarySearchTree.inOrderTraverse( printNode);

//자식 없는 단말 노드 삭제 
// console.log( '루트 노드 삭제 ' + binarySearchTree.remove(15) );
// binarySearchTree.inOrderTraverse( printNode);

//자식 한개 있는 노드 삭제 
console.log( '루트 노드 삭제 ' + binarySearchTree.remove(6) );
binarySearchTree.inOrderTraverse( printNode);

