

function BinarySearchTree(){

    var Node = function(key, value){

        this._key = key;
        this._valeu = value;
        this._left = null;
        this._right = null;
    };

    var _root = null;

    this.delete = function(key){

        var deleteNode = _root;
        var parentOfDeleteNode = _root;

        var findDeleteNode = false;
        var isLeftDelete = false;
        var isRightDelete = false;

        //삭제 키값의 노드를 찾는다.
        while(null !== deleteNode){

            if( key == deleteNode._key){

                findDeleteNode = true;
                break;
            }

            if( key < deleteNode._key){

                parentOfDeleteNode = deleteNode;
                deleteNode = deleteNode._left;
                isLeftDelete = true;
                isRightDelete = false;
            }

            else if( key > deleteNode._key){

                parentOfDeleteNode = deleteNode;
                deleteNode = deleteNode._right;
                isLeftDelete = false;
                isRightDelete = true;
            }
        }

        //삭제 할 노드의 자식이 존재하지 않는 경우
        if( false === findDeleteNode){

            return false;
        }

        //삭제 할 노드가 자식이 없는 경우(단말 노드인 경우)
        if( deleteNode._left === null && deleteNode._right === null ){

           //삭제 할 노드가 루트 노드인 경우
           if( _root === deleteNode ){

                _root = null;

            }

            else if( true === isLeftDelete ){

                parentOfDeleteNode._left = null;
            }

            else if( true === isRightDelete ){

                parentOfDeleteNode._left = null;
            }

            return true;
        }

        //삭제 할 노드가 자식이 한개인 경우
        if( deleteNode._left !== null && deleteNode._right === null ||
            deleteNode._left === null && deleteNode._right !== null  ){

                //삭제 노드가 부모 노드의 왼쪽 자식인 경우
                if(true === isLeftDelete ){

                    if(null !== deleteNode._left){

                        parentOfDeleteNode._left = deleteNode._left;
                    }
                    else if( null === deleteNode._right){

                        parentOfDeleteNode._left = deleteNode._right;
                    }
                }

                //삭제 노드가 부모 노드의 오른쪽 자식인 경우
                else if( true === isRightDelete){

                    if(null !== deleteNode._left){

                        parentOfDeleteNode._right = deleteNode._left;
                    }
                    else if( null === deleteNode._right){

                        parentOfDeleteNode._right = deleteNode._right;
                    }
                }

                //삭제 노드가 root인 경우
                else if( _root === deleteNode){

                    if(null !== deleteNode._left){

                        _root = deleteNode._left;
                    }
                    else if( null === deleteNode._right){

                        _root = deleteNode._right;
                    }
                }
                
                return true;
            }

            
            //삭제 대상 노드의 자식이 두개인 경우
            else if(deleteNode._left!==null || deleteNode._right !==null){


                //삭제 대상 노드의 대체 노드를 찾는다.
                var parentOfReplaceNode = deleteNode;
                var replaceNode= deleteNode._left;
                while( null !== replaceNode._right ){

                    parentOfReplaceNode = replaceNode;
                    replaceNode = replaceNode._right; 
                }

                //대체 노드를 대체 노드의 부모노드에서 끊는다.
                if( parentOfReplaceNode._left === replaceNode){

                    parentOfReplaceNode._left = null;
                }

                else if( parentOfReplaceNode._right === replaceNode){

                    parentOfReplaceNode._right = null;
                }

                //삭제 노드를 대체 노드로 변경한다.
                replaceNode._left = deleteNode._left;
                replaceNode._right = deleteNode._right;

                if( true === isLeftDelete){

                    parentOfDeleteNode._left = replaceNode;
                }
                else if( true === isRightDelete){

                    parentOfDeleteNode._right = replaceNode;
                }

                //삭제 노드가 루트노드인 경우
                if( _root === deleteNode){
                    _root = replaceNode;
                }

                return true;
            }

    }

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

            inOrderTraverseNode(visitNode._left, callback);
            callback(visitNode._key);
            inOrderTraverseNode(visitNode._right, callback);
        }
    };
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

console.log( '루트 노드 삭제 ' + binarySearchTree.delete(11) );
binarySearchTree.inOrderTraverse( printNode);

