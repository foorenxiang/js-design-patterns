class AbstractClass {
  template_method() {
    this.base_operation1();
    this.required_operations1();
    this.base_operation2();
    this.hook1();
    this.required_operations2();
    this.base_operation3();
    this.hook2();
  }

  base_operation1() {
    console.log('AbstractClass says: I am doing the bulk of the work');
  }

  base_operation2() {
    console.log('AbstractClass says: But I let subclasses override some operations');
  }

  base_operation3() {
    console.log('AbstractClass says: But I am doing the bulk of the work anyway');
  }

  required_operations1() {}
  required_operations2() {}

  hook1() {}
  hook2() {}
}

class ConcreteClass1 extends AbstractClass {
  required_operations1() {
    console.log('ConcreteClass1 says: Implemented Operation1');
  }

  required_operations2() {
    console.log('ConcreteClass1 says: Implemented Operation2');
  }
}

class ConcreteClass2 extends AbstractClass {
  required_operations1() {
    console.log('ConcreteClass2 says: Implemented Operation1');
  }

  required_operations2() {
    console.log('ConcreteClass2 says: Implemented Operation2');
  }

  hook1() {
    console.log('ConcreteClass2 says: Overridden Hook1');
  }
}

const client_code = (abstract_class) => {
  abstract_class.template_method();
};

const main = () => {
  console.log('Same client code can work with different subclasses:');
  client_code(new ConcreteClass1());
  console.log('');

  console.log('Same client code can work with different subclasses:');
  client_code(new ConcreteClass2());
};

main();
