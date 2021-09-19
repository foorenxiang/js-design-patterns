class Handler {
  set_next(handler) {}
  handle(request) {}
}

class AbstractHandler extends Handler {
  _next_handler;

  set_next(handler) {
    this._next_handler = handler;
    return handler;
  }

  handle(request) {
    if (!!this._next_handler) {
      return this._next_handler.handle(request);
    }
  }
}

class MonkeyHandler extends AbstractHandler {
  handle(request) {
    return request === 'Banana'
      ? `Monkey: I'll eat the ${request}`
      : new AbstractHandler().handle(request);
  }
}

class SquirrelHandler extends AbstractHandler {
  handle(request) {
    return request === 'Nut'
      ? `Squirrel: I'll eat the ${request}`
      : new AbstractHandler().handle(request);
  }
}

class DogHandler extends AbstractHandler {
  handle(request) {
    return request === 'MeatBall'
      ? `Dog: I'll eat the ${request}`
      : new AbstractHandler().handle(request);
  }
}

const client_code = (handler) => {
  ['Nut', 'Banana', 'Cup of coffee'].forEach((food) => {
    console.log(`\nClient: Who wants a ${food}?`);
    const result = handler.handle(food);
    result ? console.log(`  ${result}`) : console.log(`  ${food} was left untouched.`);
  });
};

const main = () => {
  const monkey = new MonkeyHandler();
  const squirrel = new SquirrelHandler();
  const dog = new DogHandler();

  monkey.set_next(squirrel).set_next(dog);

  console.log('Chain: Monkey > Squirrel > Dog');
  client_code(monkey);
  console.log('\n');

  console.log('Subchain: Squirrel > Dog');
  client_code(squirrel);
};

main();
