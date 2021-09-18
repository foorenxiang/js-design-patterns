class Subject {
  attach(observer) {}
  detach(observer) {}
  notify() {}
}

class ConcreteSubject extends Subject {
  _state;
  _observers = [];

  attach(observer) {
    this._observers.push(observer);
    console.log('Subject: Attached an observer.');
  }

  detach(observer) {
    this._observers = this._observers.map((item) => item != observer);
  }

  notify() {
    console.log('Subject: Notifying observers...');
    this._observers.forEach((observer) => {
      try {
        observer.update(this);
      } catch {
        (e) => console.error(e);
      }
    });
  }

  some_business_logic() {
    console.log("\nSubject: I'm doing something important.");
    this._state = Math.floor(Math.random() * 10);
    console.log(`Subject: My state has changed to: ${this._state}`);
    this.notify();
  }
}

class Observer {
  update(subject) {}
}

class ConcreteObserverA extends Observer {
  update(subject) {
    if (subject._state < 3) {
      console.log('ConcreteObserverA: Reacted to the event');
    }
  }
}

class ConcreteObserverB extends Observer {
  update(subject) {
    if (subject._state === 0 || subject._state > 1) {
      console.log('ConcreteObserverB: Reacted to the event');
    }
  }
}

const client_code = () => {};

const main = () => {
  const subject = new ConcreteSubject();

  observer_a = new ConcreteObserverA();
  subject.attach(observer_a);

  const observer_b = new ConcreteObserverB();
  subject.attach(observer_b);

  subject.some_business_logic();
  subject.some_business_logic();

  subject.detach(observer_a);
  subject.some_business_logic();
};

main();
