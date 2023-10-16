const Stack = (()=>{
    const stack = [];

    const push = (element) => {
        stack.push(element);
    }

    const pop = () => {
        if(isEmpty()){
            return null;
        }
        return stack.pop();
    }

    const top = () => {
        if(isEmpty()){
            return null;
        }

        return stack[stack.length - 1];
    }

    const isEmpty = () => {
        return stack.length === 0;
    }

    const size = () => {
        return stack.length;
    }

    return {
        push,
        pop,
        top,
        isEmpty,
        size
    };
})();

module.exports = Stack;