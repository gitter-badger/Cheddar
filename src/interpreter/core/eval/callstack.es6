import CheddarScope from '../env/scope';

export default class CheddarCallStack {
    constructor(exec_instruct, scope = new CheddarScope()) {
        this.InStack = exec_instruct._Tokens;
        this.CallStack = [];
        this.Scope = scope;
    }

    get stack() { return this.CallStack }

    put(n) {
        return this.CallStack.unshift(n);
    }

    shift() {
        return this.CallStack.shift();
    }

    next() {
        return this.InStack.shift();
    }

    close() {
        return this.CallStack[this.CallStack.length - 1];
    }
}