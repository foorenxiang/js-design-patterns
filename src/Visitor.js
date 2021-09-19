class Component {
  accept(visitor) {}
}

class ConcreteComponentA extends Component {
  accept(visitor) {
    visitor.visit_concrete_component_a(this);
  }

  exclusive_method_of_concrete_component_a() {
    return 'A';
  }
}

class ConcreteComponentB extends Component {
  accept(visitor) {
    visitor.visit_concrete_component_b(this);
  }

  special_method_of_concrete_component_b() {
    return 'B';
  }
}

class Visitor {
  visit_concrete_component_a(element) {}
  visit_concrete_component_b(element) {}
}

class ConcreteVisitor1 extends Visitor {
  visit_concrete_component_a(element) {
    console.log(`${element.exclusive_method_of_concrete_component_a()} + ConcreteVisitor1`);
  }

  visit_concrete_component_b(element) {
    console.log(`${element.special_method_of_concrete_component_b()} + ConcreteVisitor1`);
  }
}

class ConcreteVisitor2 extends Visitor {
  visit_concrete_component_a(element) {
    console.log(`${element.exclusive_method_of_concrete_component_a()} + ConcreteVisitor2`);
  }

  visit_concrete_component_b(element) {
    console.log(`${element.special_method_of_concrete_component_b()} + ConcreteVisitor2`);
  }
}

const client_code = (components, visitor) => {
  components.forEach((component) => component.accept(visitor));
};

const main = () => {
  const components = [new ConcreteComponentA(), new ConcreteComponentB()];

  console.log('The client code works with all visitors via the base Visitor interface:');
  const visitor1 = new ConcreteVisitor1();
  client_code(components, visitor1);

  console.log('It allows the same client code to work with different types of visitors:');
  const visitor2 = new ConcreteVisitor2();
  client_code(components, visitor2);
};

main();
