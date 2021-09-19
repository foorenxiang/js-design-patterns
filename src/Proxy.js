class Subject {
  request() {}
}

class RealSubject extends Subject {
  request() {
    console.log('RealSubject: Handling request.');
  }
}

class Proxy extends Subject {
  constructor(real_subject) {
    super();
    this._real_subject = real_subject;
  }

  request() {
    if (this.check_access()) {
      this._real_subject.request();
      this.log_access();
    }
  }

  check_access() {
    console.log('Proxy: Checking acess prior to firing a real request.');
    return true;
  }

  log_access() {
    console.log('Proxy: logging the time of request.');
  }
}

const client_code = (subject) => {
  subject.request();
};

const main = () => {
  console.log('Client: Executing the client code with a real subject:');
  const real_subject = new RealSubject();
  client_code(real_subject);

  console.log('');

  console.log('Client: Executing the same client code with a proxy:');
  const proxy = new Proxy(real_subject);
  client_code(proxy);
};

main();
