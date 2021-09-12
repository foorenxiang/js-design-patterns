class Component {
  _parent;
  get parent() {
    this._parent;
  }

  set parent(parent) {
    this._parent = parent;
  }

  add(component) {}
  remove(component) {}
  is_composite() {
    return false;
  }
  operation() {}
}

class Leaf extends Component {
  operation = () => "Leaf";
}

class Composite extends Component {
  _children;

  constructor() {
    super();
    this._children = [];
  }

  add(component) {
    this._children.push(component);
    component.parent = this;
  }

  remove(component) {
    this._children.remove(component);
    component.parent = null;
  }

  operation() {
    const results = [];
    this._children.forEach((child) => results.push(child.operation()));
    return `Branch(${results.join("+")})`;
  }
}

const client_code = (component) =>
  console.log(`RESULT: ${component.operation()}`);

const client_code2 = (component1, component2) => {
  if (component1.is_composite()) {
    component1.add(component2);
  }

  console.log(`RESULT: ${component1.operation()}`);
};

const main = () => {
  const simple = new Leaf();
  console.log("Client: I've got a simple component:");
  client_code(simple);
  console.log("");

  const tree = new Composite();

  const branch1 = new Composite();
  branch1.add(new Leaf());
  branch1.add(new Leaf());

  const branch2 = new Composite();
  branch2.add(new Leaf());

  tree.add(branch1);
  tree.add(branch2);

  console.log("Client: Now I've got a composite tree:");
  client_code(tree);
  console.log("");

  console.log(
    "Client: I don't need to check the components classes even when managing the tree:"
  );
  client_code2(tree, simple);
};

main();
