// LINKED LIST

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }

// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }
// }

////////////////////////////////////////////////////////////////////////////////////



class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add a node to the end of the list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Insert a node at a specific position
    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            return "Invalid index";
        }

        const newNode = new Node(value);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let count = 0;
            let previous = null;

            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            newNode.next = current;
            previous.next = newNode;
        }

        this.size++;
    }

    // Remove a node at a specific position
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return "Invalid index";
        }

        let current = this.head;
        let count = 0;
        let previous = null;

        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            previous.next = current.next;
        }

        this.size--;
        return current.value;
    }

    // Find the index of a value in the list
    indexOf(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }

        return -1; // Value not found
    }

    // Check if the list is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the list
    getSize() {
        return this.size;
    }

    // Display the linked list elements
    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage:
const myLinkedList = new LinkedList();
myLinkedList.append(5);
myLinkedList.append(10);
myLinkedList.append(15);

console.log("Original Linked List:");
myLinkedList.display();

console.log("\nInserting 12 at index 1:");
myLinkedList.insertAt(12, 1);
myLinkedList.display();

console.log("\nRemoving element at index 2:");
myLinkedList.removeFrom(2);
myLinkedList.display();

console.log("\nIndex of value 10:", myLinkedList.indexOf(10));
console.log("Is the list empty?", myLinkedList.isEmpty() ? "Yes" : "No");
console.log("Size of the list:", myLinkedList.getSize());
