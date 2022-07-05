let stack1 = [];
let stack2 = [];


function push(element) {
    stack1.push(element);
    console.log("Stack-1 elements are enqueue: ", stack1);
}


function pop() {
    if (stack2.length === 0) {
        if (stack1.length === 0) {
            console.log(
        "pop not possible because queue is empty..");
        }
        while (stack1.length > 0) {
            stack2.push(stack1.pop());
        }
    }
    console.log("Element after pop: " + stack2.pop());
}

push("a");
push("b");
push("c");
pop();
pop();
