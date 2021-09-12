class Handler {
  set_next = (handler) => undefined;
  handle = (request) => undefined;
}

class AbstractHandler extends Handler {
  _next_handler;

  set_next(handler) {
    this._next_handler = handler;
    return handler;
  }

  handle(request) {
    if (this._next_handler) {
      return this._next_handler.handle(request);
    }
  }
}

class MonkeyHandler extends AbstractHandler {
  static handle(request) {
    if (request == "Banana") {
      return `Monkey: I'll eat the ${request}`;
    }

    return super.handle(request);
  }
}

class SquirrelHandler extends AbstractHandler {
  static handle(request) {
    if (request == "Nut") {
      return `Squirrel: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}

class DogHandler extends AbstractHandler {
  static handle(request) {
    if (request === "MeatBall") {
      return `Dog: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}

const client_code = (handler) => {
  for (const food in ["Nut", "Banana", "Cup of coffee"]) {
    console.log(`Client: Who wants a ${food}?`);
    const result = handler.handle(food);
    if (result) {
      console.log(result);
      return;
    }
    console.log(`${food} was left untouched`);
  }
};

const main = () => {
  const monkey = new MonkeyHandler();
  const squirrel = new SquirrelHandler();
  const dog = new DogHandler();
  console.log(monkey);
  console.log(squirrel);
  console.log(dog);
  monkey.set_next(squirrel).set_next(dog);
  console.log("Chain: Monkey > Squirrel > Dog");
  client_code(monkey);
  console.log("");
  print("Subchain: Squirrel > Dog");
  client_code(squirrel);
};

main();
