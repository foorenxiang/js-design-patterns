class Context {
  _state;

  constructor(state) {
    this.transition_to(state);
  }

  transition_to(state) {
    console.log(`Context: Transition to ${typeof state}`);
    this._state = state;
    this._state.context = this;
  }

  request1() {
    this._state.handle1();
  }

  request2() {
    this._state.handle2();
  }
}

class State {
  get context() {
    return this._context;
  }

  set context(context) {
    this._context = context;
  }

  handle1() {}
  handle2() {}
}

class ConcreteStateA extends State {
  handle1() {
    console.log('ConcreteStateA handles request1.');
    console.log('ConcreteStateA wants to change the state of the context.');
    this.context.transition_to(new ConcreteStateB());
  }

  handle2() {
    console.log('ConcreteStateA handles request2.');
    console.log('ConcreteStateB wants to change the state of the context.');
    this.context.transition_to(new ConcreteStateA());
  }
}

class ConcreteStateB extends State {
  handle1() {
    console.log('ConcreteStateB handles request1.');
  }

  handle2() {
    console.log('ConcreteStateB handles request2.');
    console.log('ConcreteStateB wants to change the state of the context.');
    this.context.transition_to(new ConcreteStateA());
  }
}

const client_code = () => {};

const main = () => {
  client_code();

  const context = new Context(new ConcreteStateA());
  context.request1();
  context.request2();
};

main();
