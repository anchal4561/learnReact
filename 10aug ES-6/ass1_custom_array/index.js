class newStack {
    constructor() {
        this.length = 0;
        this.stack = [];
    }

    push(...el) {
        el.forEach((element) => {
            this.stack.push(element);
            this.length++;
        })
        return this.stack;
    }

    pop() {
        this.stack.pop();
        this.length--;

        return this.stack;
    }
}

let stack1 = new newStack();

stack1.push(1, 2, 3, 4, 5);
stack1.pop()

console.log(stack1)