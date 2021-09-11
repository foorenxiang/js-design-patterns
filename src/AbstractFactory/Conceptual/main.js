class AbstractFactory {
  create_product_a = () => {
    throw "this should be an abstract method";
  };
  create_product_b = () => {
    throw "this should be an abstract method";
  };
}

class ConcreteFactory1 extends AbstractFactory {
  create_product_a = () => new ConcreteProductA1();
  create_product_b = () => new ConcreteProductB1();
}

class ConcreteFactory2 extends AbstractFactory {
  create_product_a = () => new ConcreteProductA2();
  create_product_b = () => new ConcreteProductB2();
}

class AbstractProductA {
  useful_function_a = () => {
    throw "this should be an abstract method";
  };
}

class ConcreteProductA1 extends AbstractProductA {
  useful_function_a = () => "The result of the product A1.";
}

class ConcreteProductA2 extends AbstractProductA {
  useful_function_a = () => "The result of the product A2.";
}

class AbstractProductB {
  useful_function_b = () => {
    throw "this should be an abstract method";
  };
  another_useful_function_b = () => {
    throw "this should be an abstract method";
  };
}

class ConcreteProductB1 extends AbstractProductB {
  useful_function_b = () => "The result of the product B1.";
  another_useful_function_b = (collaborator) => {
    const result = collaborator.useful_function_a();
    return `The result of the product B1 collaborating with the ${result}.`;
  };
}

class ConcreteProductB2 extends AbstractProductB {
  useful_function_b = () => "The result of the product B2.";
  another_useful_function_b = (collaborator) => {
    const result = collaborator.useful_function_a();
    return `The result of the B2 collaborating with the ${result}`;
  };
}

const client_code = (factory) => {
  const product_a = factory.create_product_a();
  const product_b = factory.create_product_b();

  console.log(product_b.useful_function_b());
  console.log(product_b.another_useful_function_b(product_a));
  console.log("");
};

console.log("Client: Testing client code with the first factory type:");
client_code(new ConcreteFactory1());
console.log("\n");

console.log(
  "Client: Testing the same client code with the second factory type:"
);
client_code(new ConcreteFactory2());
