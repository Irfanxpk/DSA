// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Linked {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }



//     prepend(value){
//         const node = new Node(value)
//         node.next = this.head
//         this.head = node
//         this.size++
        
//     }

//     print(){
//         if(this.size===0){
//             console.log("your linked list empty");
//         }else{
//             let curr = this.head
//             let Lvalue = ''
//             while(curr){
//                 Lvalue += `${curr.value}, `
//                 curr = curr.next
//             }
//             console.log(Lvalue)
//         }
//     }


//     appent(value){
//         const node = new Node(value)
//         if(this.size===0){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//             this.size++
//         }
//     }


//     delete(value){
//         if(this.head === null ){
//             return
//         }

//         if (this.head.value === value){
//             this.head = this.head.next 
//             return;
//         }

//         let current = this.head;
//         let prev = null
//         while(current.value !== value &&current){
//             prev = current
//             current = current.next

//         }

//         if(!current){
//             return;
//         }

//         if(current.next == null){
//             prev.next=null
//         this.size--
//             return
//         }
//         prev.next == current.next
//         this.size--

//     }

//     reverse(){
        
//     }

// }




// const Ll = new Linked()
// Ll.print()
// Ll.prepend(12)
// // Ll.appent(10)
// Ll.print()
// // Ll.appent(21)
// Ll.prepend(23)
// // Ll.appent(25)
// Ll.print()

// Ll.delete(12)
// Ll.print()


// const Ll2 = new Linked()

// Ll2.print()
// Ll2.prepend(58)
// Ll2.appent(188)
// Ll2.print()
// Ll2.appent(289)
// Ll2.prepend(28)
// Ll2.appent(54)
// Ll2.print()



class Node {
    constructor(value){
        this.value = value
        this.next = null 
    }

}


class LL {
    constructor(){
        this.head = null
        this.size = 0
    }

 prepent(value){
    const node = new Node(value)
    node.next = this.head
    this.head = node
    this.size ++
}
  

append(value){
    const node = new Node(value)
    if(this.size === 0 ){
        this.head = node
    }else{
        let prev = this.head
        while(prev.next){
            prev = prev.next
        }
        prev.next = node
        this.size++
    }

}

print(){
    if(this.size === 0){
        return -1
    }

    let curr = this.head
    let printable = ''
    while(curr){
        printable += `${curr.value} , `
        curr = curr.next
    }
    console.log(printable)
}

remove(value){

    if(this.size===0){
        return 
    }
     
    if(this.head.value === value){
        this.head = this.head.next
        return ;
    }
    let prev = null
    let curr = this.head

    while(curr.value!=value&curr){
        prev = curr
        curr = curr.next 
    }

    if(!curr){
        return 
    }

    if(curr.next === null ){
        prev.next=null
        this.size--
        return
    }

    prev.next = curr.next
    this.size--




}

}

let ll = new LL
ll.prepent(10)
ll.append(12)
ll.print()
ll.remove(12)
ll.print()