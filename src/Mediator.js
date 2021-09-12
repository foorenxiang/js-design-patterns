class Mediator {
  notify() {}
}

class ConcreteMediator extends Mediator {
  constructor(component1, component2) {
    super();
    this._component1 = component1;
    this._component1.mediator = this;
    this._component2 = component2;
    this._component2.mediator = this;
  }

  notify(sender, event) {
    if (event === 'A') {
      console.log('Mediator reacts on A and triggers following operations:');
      this._component2.do_c();
    } else if (event === 'D') {
      console.log('Mediator reacts on D and triggers following operations:');
      this._component1.do_b();
      this._component2.do_c();
    }
  }
}

class BaseComponent {
  constructor(mediator) {
    this._mediator = mediator;
  }

  get mediator() {
    return this._mediator;
  }

  set mediator(mediator) {
    this._mediator = mediator;
  }
}

class Component1 extends BaseComponent {
  do_a() {
    console.log('Component 1 does A.');
    this.mediator.notify(this, 'A');
  }

  do_b() {
    console.log('Component 1 does B.');
    this.mediator.notify(this, 'B');
  }
}

class Component2 extends BaseComponent {
  do_c() {
    console.log('Component 2 does C.');
    this.mediator.notify(this, 'C');
  }

  do_d() {
    console.log('Component 2 does D.');
    this.mediator.notify(this, 'D');
  }
}

const main = () => {
  const c1 = new Component1();
  const c2 = new Component2();

  new ConcreteMediator(c1, c2);
  c1.do_a();

  console.log('');

  console.log('Client triggers operation D.');
  c2.do_d();
};

main();
