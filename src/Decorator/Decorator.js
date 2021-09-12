class Component {
  operation() {}
}

class ConcreteComponent extends Component {
  operation() {
    return "ConcreteComponent";
  }
}

class Decorator extends Component {
  _component;

  constructor(component) {
    super();
    this._component = component;
  }

  get component() {
    return this._component;
  }

  operation() {
    return this._component.operation();
  }
}

class ConcreteDecoratorA extends Decorator {
  operation() {
    return `ConcreteDecoratorA(${this.component.operation()})`;
  }
}

class ConcreteDecoratorB extends Decorator {
  operation() {
    return `ConcreteDecoratorB(${this.component.operation()})`;
  }
}

const client_code = (component) =>
  console.log(`RESULT: ${component.operation()}`);

const main = () => {
  const simple = new ConcreteComponent();
  console.log("Client: I've got a simple component:");
  client_code(simple);
  console.log("");

  const decorator1 = new ConcreteDecoratorA(simple);
  const decorator2 = new ConcreteDecoratorB(decorator1);

  console.log("Client: Now I've got a decorated component:");
  client_code(decorator2);
};

main();
