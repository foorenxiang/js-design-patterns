class Target {
  request = () => "Target: The default target's behavior.";
}

class Adaptee {
  specific_request = () => ".eetpadA eht fo roivaheb laicepS";
}

class Adapter extends Target {
  inheritedAdaptee = new Adaptee();
  specific_request = this.inheritedAdaptee.specific_request;

  reverse_string = (string) => string.split("").reverse().join("");

  request = () =>
    `Adapter: (TRANSLATED) ${this.reverse_string(this.specific_request())}`;
}

const client_code = (target) => {
  console.log(target.request());
};

const main = () => {
  console.log("Client: I can work just fine with the Target objects:");
  target = new Target();
  client_code(target);
  console.log("\n");

  adaptee = new Adaptee();
  console.log(
    `Client: The Adaptee class has a weird interface.
  See, I don't understand it:`
  );
  console.log(`Adaptee: ${adaptee.specific_request()}`);

  console.log("Client: But I can work with it via the Adapter:");
  adapter = new Adapter();
  client_code(adapter);
};

main();
