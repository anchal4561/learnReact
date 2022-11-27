class customQueue{

    constructor(){
        this.length=0;
        this.queue=[];
    }

    enQueue(el){
        this.queue.push(el)
        this.length++;
        return this.queue;
    }

    deQueue(){
        this.queue.shift();
        this.length--;
        return this.queue
    }

    enQueueThree(...el){
        el.forEach((element)=>
        {
            this.queue.push(element)
            this.length++;
        })
        return this.queue;
    }

    deQueueThree(){
        if(this.queue.length>0){
            let i=0;
            while(this.queue.length>=1 && i<3) {
                this.queue.shift();
                this.length--;
                i++;
            }          
        }
        else{
            console.log("error")
        }
        return this.queue;
    }
}

let queue1=new customQueue();
queue1.enQueue(3);
queue1.enQueue(4);
queue1.deQueue();
queue1.deQueue();
queue1.enQueueThree(1,2,4,4)
queue1.deQueueThree();
queue1.deQueueThree();
console.log("queue1: ",queue1)