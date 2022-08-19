class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(vals=[]){
        this.head = null;
        this.tail = null;
        this.length = 0;

        for(let val of vals) this.push(val);
    }
    //add new value to end
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        } this.length++;
    }
    //add new value to start
    unshift(val){
        const newNode = new Node(val);
        if(this.head === null) this.head = newNode; //if there is no head, set it to newNode
        newNode.next = this.head; //next becomes previous head
        this.head = newNode; //head is now newly created node

        if(this.length === 0) this.tail = this.head;
        this.length++;
    }
    //return and remove last item
    pop(){
        if(this.length === 0) throw new Error("Linked List has no values!");
        
        let prev = this._get(this.length -1);
        let val = this.tail.val;
        this.tail.next = null;
        this.tail = prev;
        return val;
    }
    //return and remove first item
    shift(){
        //use removeAt to remove and return head
        if(this.length === 0) throw new Error("Linked List has no values!");
        if(this.head){
            //if there is a head, set new head to head.next, decrement length, return og head
            let val = this.head.val;
            this.head = this.head.next;
            this.length--;
            if(this.length < 2) this.tail = this.head;
            return val;
        }
    }
    //get val at idx
    getAt(idx){
        if(idx > this.length || idx < 0) throw new Error("Index not found in Linked List!");
        return this._get(idx).val;
    }
    //set val at idx to val
    setAt(idx,val){
        if(idx > this.length || idx < 0) throw new Error("Index not found in Linked List!");
        let curr = this._get(idx);
        curr.val = val;
    }
    //add node w/ val before idx
    insertAt(idx,val){
        if(idx > this.length || idx < 0) throw new Error("Index not found in Linked List!");

        if (idx === 0) return this.unshift(val); //case for first
        if(idx === this.length) return this.push(val); //case for last

        let prev = this._get(idx -1); //retrieve val before

        let newNode = new Node(val); //create new node
        newNode.next = prev.next; //set next of new to next of previous
        prev.next = newNode; //set next of previous to newly created node
        this.length++; //update length
    }
    //return and remove item at idx
    removeAt(idx){
        if(idx > this.length || idx < 0) throw new Error("Index not found in Linked List!");

        if(idx === 0) this.shift(); //case for first
        if(idx === this.length -1) this.pop(); //case for last

        let prev = this._get(idx-1); //retrieve val before

        let val = prev.next.val; //set val to after previous
        prev.next = prev.next.next; // next of previous is set to val after next
        this.length--; //update length
        return val;
    }
    //return avg of all values in list
    average(){
        if(this.length === 0) return 0;
        let curr = this.head;
        let count = 0;

        while(curr){
            count += curr.val;
            curr = curr.next;
        } return (count/this.length);
    }
    

    _get(idx){
        let curr = this.head;
        let count = 0;

        while(curr != null && count != idx){
            count++
            curr = curr.next;
        } return curr;
    }
}


let bugs = new LinkedList(["ant", "bee", "caterpillar", "worm"]);
let num = new LinkedList([1,2,3,4,5,6,7,8,9,11]);