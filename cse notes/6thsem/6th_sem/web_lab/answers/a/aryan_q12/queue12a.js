const { isEmpty } = require("./stack12a");

const Queue = (()=>{
    const queue = [];

    const enqueue = (element) => {
        queue.push(element);
    }

    const dequeue = () => {
        if(isEmpty()){
            return null;
        }

        return queue.shift();
    }

    const front = () => {
        if(isEmpty()){
            return null;
        }
        return queue[0];
    }

    const isEmpty = () => {
        return queue.length===0;
    }

    const size = () => {
        return queue.length;
    }

    return {
        enqueue,
        dequeue,
        front,
        isEmpty,
        size,
    };
})();

module.exports = Queue;