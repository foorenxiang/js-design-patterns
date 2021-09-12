class FlyWeight {
  constructor(shared_state) {
    this._shared_state = shared_state;
  }

  operation(unique_state) {
    const s = JSON.stringify(this._shared_state);
    const u = JSON.stringify(unique_state);
    console.log(`Flyweight: Displaying shared(${s}) and unique (${u}) state.`);
  }
}

class FlyweightFactory {
  constructor(initial_flyweights) {
    this._flyweights = {};
    for (const state in initial_flyweights) {
      console.log('Printing state', state);
      this._flyweights[this.get_key(state)] = new FlyWeight(state);
    }
  }

  get_key(state) {
    return [...state].sort((a, b) => a.localeCompare(b)).join('_');
  }

  get_flyweight(shared_state) {
    const key = this.get_key(shared_state);
    if (!this._flyweights.hasOwnProperty(key)) {
      console.log("FlyweightFactory: Can't find a flyweight, creating a new one.");
      this._flyweights[key] = new FlyWeight(shared_state);
    } else {
      console.log('FlyweightFactory: Reusing existing flyweight.');
    }

    return this._flyweights[key];
  }

  list_flyweights() {
    const count = Object.keys(this._flyweights).length;
    console.log(`FlyweightFactory: I have ${count} flyweights:`);
    console.log(Object.keys(this._flyweights).join('\n'));
  }
}

const add_car_to_police_database = (factory, plates, owner, brand, model, color) => {
  console.log('\n\nClient: Adding a car to database.');
  const flyweight = factory.get_flyweight([brand, model, color]);
  flyweight.operation([plates, owner]);
};

const main = () => {
  const factory = new FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red'],
    ['BMW', 'M5', 'red'],
    ['BMW', 'X6', 'white'],
  ]);

  factory.list_flyweights();

  add_car_to_police_database(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');
  add_car_to_police_database(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');

  console.log('');

  factory.list_flyweights();
};

main();
