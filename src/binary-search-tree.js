const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(data){
    this.basis = null;
  }

  root() {
    return this.basis;
  }

  add(data) {
    this.basis = putInside(this.basis, data);

    function putInside(param, data){
      if(param == undefined){
        return new Node(data);
      }

      if(param.data === data){
        return param;
      }

      if(data < param.data){
        param.left = putInside(param.left, data);
      }else{
        param.right = putInside(param.right, data);
      }

      return param;
    }

  }

  has(data) {
    return putInside(this.basis, data);

    function putInside(param,data){
      if(param == undefined){
        return false;
      }

      if(param.data === data){
        return true;
      }

      return data < param.data ?
        putInside(param.left, data):
        putInside(param.right,data);
    }

  }

  find(data) {
    return findParamNode(this.basis, data);

    function findParamNode(param,data){
      if(param == undefined){
        return null;
      }

      if(data < param.data){
        return findParamNode(param.left, data);
      }

      if(data > param.data){
        return findParamNode(param.right, data);
      }

      return param;
      
    }
  }

  remove(data) {
    this.basis = removeParam(this.basis,data);

    function removeParam(param,data){
      if(param == undefined){
        return null;
      }

      if(data < param.data){
        param.left = removeParam(param.left,data);
        return param;
      }else if(param.data < data){
        param.right = removeParam(param.right,data);
        return param;
      }else{
        if(param.left == undefined && param.right == undefined){
          return null;
        }

        if(param.left == undefined){
          param = param.right;
          return param;
        }

        if(param.right == undefined){
          param = param.left;
          return param;
        }

        let minFromRight = param.right;
        while(minFromRight.left){
          minFromRight = minFromRight.left;
        }

        param.data = minFromRight.data;

        param.right = removeParam(param.right,minFromRight.data);

        return param;
      }
    }
    
  }

  min() {
    if(this.basis == undefined){
      return;
    }

    let param = this.basis;
    while(param.left){
      param = param.left;
    }

    return param.data;
  }

  max() {
    if(this.basis == undefined){
      return;
    }

    let param = this.basis;
    while(param.right){
      param = param.right;
    }

    return param.data;
  }
}

module.exports = {
  BinarySearchTree
};

