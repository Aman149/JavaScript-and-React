class Node {
    constructor() {
        this.data = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(data) {
        const newNode = new Node(data);

        //LL is empty
        if(!this.head) {
            this.head = newNode;
            this.data = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
    }

}