class Context {
  constructor(strategy) {
    this._strategy = strategy;
  }

  get strategy() {
    return this._strategy;
  }

  set strategy(strategy) {
    this._strategy = strategy;
  }

  do_some_business_logic() {
    console.log("Context: Sorting data using the strategy (not sure how it'll do it)");
    const result = this._strategy.do_algorithm(['c', 'b', 'a', 'd', 'e']);
    console.log(result.join(','));
  }
}

class Strategy {
  do_algorithm(data) {}
}

class ConcreteStrategyA extends Strategy {
  sorted(data) {
    const sorted = [...data];
    sorted.sort();
    return sorted;
  }

  do_algorithm(data) {
    return this.sorted(data);
  }
}

class ConcreteStrategyB extends Strategy {
  reverse_sort(data) {
    const sorted = [...data];
    sorted.sort();
    sorted.reverse();
    return sorted;
  }

  do_algorithm(data) {
    return this.reverse_sort(data);
  }
}

const main = () => {
  const context = new Context(new ConcreteStrategyA());
  console.log('Client: Strategy is set to normal sorting.');
  context.do_some_business_logic();
  console.log('');

  console.log('Client: Strategy is set to reverse sorting.');
  context.strategy = new ConcreteStrategyB();
  context.do_some_business_logic();
};

main();
