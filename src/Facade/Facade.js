class Subsystem1 {
  operation1() {
    return "Subsystem1: Ready!";
  }

  operation_n() {
    return "Subsystem1: Go!";
  }
}

class Subsystem2 {
  operation1() {
    return "Subsystem2: Get ready!";
  }

  operation_z() {
    return "Subsystem2: Fire!";
  }
}

class Facade {
  constructor(subsystem1, subsystem2) {
    this._subsystem1 = subsystem1 ?? new Subsystem1();
    this._subsystem2 = subsystem2 ?? new Subsystem2();
  }

  operation() {
    const results = [];
    results.push("Facacde initializes subsystems:");
    results.push(this._subsystem1.operation1());
    results.push(this._subsystem2.operation1());
    results.push("Facade orders subsystems to perform the action:");
    results.push(this._subsystem1.operation_n());
    results.push(this._subsystem2.operation_z());
    return results.join("\n");
  }
}

const client_code = (facade) => {
  console.log(facade.operation());
};

const main = () => {
  const subsystem1 = new Subsystem1();
  const subsystem2 = new Subsystem2();
  const facade = new Facade(subsystem1, subsystem2);
  client_code(facade);
};

main();
