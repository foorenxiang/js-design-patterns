class Abstraction {
  constructor(implementation) {
    this.implementation = implementation;
  }

  operation = () =>
    `Abstraction: Base operation with:
${this.implementation.operation_implementation()}`;
}

class ExtendedAbstraction extends Abstraction {
  operation = () => `ExtendedAbstraction: Extended operation with:    
${this.implementation.operation_implementation()}`;
}

class Implementation {
  operation_implementation = () => {};
}

class ConcreteImplementationA extends Implementation {
  operation_implementation = () =>
    "ConcreteImplementationA: Here's the result on the platform A.";
}

class ConcreteImplementationB extends Implementation {
  operation_implementation = () =>
    "ConcreteImplementationB: Here's the result on the platform B.";
}

const client_code = (abstraction) => console.log(abstraction.operation());

const main = () => {
  implementation = new ConcreteImplementationA();
  abstraction = new Abstraction(implementation);
  client_code(abstraction);

  console.log("");

  implementation = new ConcreteImplementationB();
  abstraction = new ExtendedAbstraction(implementation);
  client_code(abstraction);
};

main();
