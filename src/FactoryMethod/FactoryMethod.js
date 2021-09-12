class Creator {
  factory_method() {}
  some_operation() {
    const product = this.factory_method();
    const result = `Creator: The same creator's code has just worked with ${product.operation()}`;
    return result;
  }
}

class ConcreteCreator1 extends Creator {
  factory_method() {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  factory_method() {
    return new ConcreteProduct2();
  }
}

class Product {
  operation() {}
}

class ConcreteProduct1 extends Product {
  operation() {
    return "{Result of the ConcreteProduct1}";
  }
}

class ConcreteProduct2 extends Product {
  operation() {
    return "{Result of the ConcreteProduct2}";
  }
}

const client_code = (creator) =>
  console.log(
    `Client: I'm not aware of the creator's class, but it still works.

${creator.some_operation()}`
  );

const main = () => {
  console.log("App: Launched with the ConcreteCreator1.");
  client_code(new ConcreteCreator1());
  console.log("");

  console.log("App: Launched with the ConcreteCreator2.");
  client_code(new ConcreteCreator2());
};

main();
