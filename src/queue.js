const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.value = null;
    this.next = 0;
  }

  getUnderlyingList() {
    return this.value;
  }

  enqueue(value) {
    const newParam = new ListNode(value);

    if(this.value == undefined){
      this.value = newParam;
    }else{
      let actualParam = this.value;
      while(actualParam.value){
        if(actualParam.next == undefined){
          actualParam.next = newParam;
          return;
        }

        actualParam = actualParam.next;
      }
    }
  }

  dequeue(value) {
    if(this.value !== undefined){
      let cutHead = this.value;

      this.value = cutHead.next;
      return cutHead.value;
    }
  }
}



  

module.exports = {
  Queue
};
