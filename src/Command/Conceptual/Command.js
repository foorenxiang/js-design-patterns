class Command {
  execute = () => undefined;
}

class SimpleCommand extends Command {
  constructor(payload) {
    super();
    this._payload = payload;
  }

  execute() {
    console.log(`SimpleCommand: See, I can do simple things like printing
${this._payload}`);
  }
}

class ComplexCommand extends Command {
  constructor(receiver, a, b) {
    super();
    this._receiver = receiver;
    this._a = a;
    this._b = b;
  }

  execute() {
    console.log(
      "ComplexCommand: Complex stuff should be done by a receiver object"
    );
    this._receiver.do_something(this._a);
    this._receiver.do_something_else(this._b);
  }
}

class Receiver {
  do_something = (a) => console.log(`Receiver: Working on ${a}.`);

  do_something_else = (b) => `Receiver: Also working on ${b}.`;
}

class Invoker {
  _on_start;
  _on_finish;

  set_on_start(command) {
    this._on_start = command;
  }

  set_on_finish(command) {
    this._on_finish = command;
  }

  do_something_important() {
    console.log("Invoker: Does anybody want something done before I begin?");
    if (this._on_start instanceof Command) {
      this._on_start.execute();
    }
    console.log("Invoker: ...doing something really important...");
    console.log("Invoker: Does anybody want something done after I finish?");
    if (this._on_finish instanceof Command) {
      this._on_finish.execute();
    }
  }
}

const main = () => {
  const invoker = new Invoker();
  invoker.set_on_start(new SimpleCommand("Say Hi!"));
  const receiver = new Receiver();
  invoker.set_on_finish(
    new ComplexCommand(receiver, "Send email", "Save report")
  );
  invoker.do_something_important();
};

main();
