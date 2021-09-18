const getRandomIndexes = (length, size) => {
  const indexes = [];
  const created = {};

  while (indexes.length < size) {
    const random = Math.floor(Math.random() * length);
    if (!created[random]) {
      indexes.push(random);
      created[random] = true;
    }
  }
  return indexes;
};

const sample = (data_array, sample_size) =>
  getRandomIndexes(data_array.length, sample_size).map((i) => data_array[i]);

const dateTimeNow = () => {
  const isoString = new Date().toISOString();
  const dateTimeString = `${isoString.slice(0, 10)} ${isoString.slice(11, 19)}`;
  return dateTimeString;
};

class Originator {
  constructor(state) {
    this._state = state;
    console.log(`Originator: My initial state is: ${this._state}`);
  }

  do_something() {
    console.log("Originator: I'm doing something important.");
    this._state = this._generate_random_string(30);
    console.log(`Originator: and my state has changed to ${this._state}`);
  }

  _generate_random_string(length = 10) {
    const ascii_letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return sample(ascii_letters, length).join('');
  }

  save() {
    return new ConcreteMemento(this._state);
  }

  restore(memento) {
    this._state = memento.get_state();
    console.log(`Originator: My state has changed to: ${this._state}`);
  }
}

class Memento {
  get_name() {}
  get_date() {}
}

class ConcreteMemento extends Memento {
  constructor(state) {
    super();
    this._state = state;
    this._date = dateTimeNow();
  }

  get_state() {
    return this._state;
  }

  get_name() {
    return `${this._date} / (${this._state.slice(0, 9)})...`;
  }

  get_date() {
    return this._date;
  }
}

class Caretaker {
  constructor(originator) {
    this._mementos = [];
    this._originator = originator;
  }

  backup() {
    console.log("\nCaretaker: Saving Originator's state...");
    this._mementos.push(this._originator.save());
  }

  undo() {
    if (!this._mementos.length) {
      return;
    }

    const memento = this._mementos.pop();
    console.log(`Caretaker: Restoring state to: ${memento.get_name()}`);
    try {
      this._originator.restore(memento);
    } catch {
      (e) => this.undo();
    }
  }
  show_history() {
    console.log("Caretaker: Here's the list of mementos:");
    this._mementos.forEach((memento) => console.log(memento.get_name()));
  }
}
const main = () => {
  const originator = new Originator('Super-duper-super-puper-super.');
  const caretaker = new Caretaker(originator);

  caretaker.backup();
  originator.do_something();

  caretaker.backup();
  originator.do_something();

  caretaker.backup();
  originator.do_something();

  console.log('');
  caretaker.show_history();

  console.log("\nClient: Now, let's rollback!\n");
  caretaker.undo();

  console.log('\nClient: Once more!\n');
  caretaker.undo();
};

main();
