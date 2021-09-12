class Builder {
  product = () => {};
  produce_part_a = () => {};
  produce_part_b = () => {};
  produce_part_c = () => {};
}

class ConcreteBuilder1 extends Builder {
  constructor() {
    super();
    this.reset();
  }
  _product;

  reset() {
    console.log("Resetting Product 1");
    this._product = new Product1();
    console.log(this._product);
  }

  // product() {
  //   const product = this._product;
  //   this.reset();
  //   console.log("Getting product");
  //   console.log(product);
  //   return this._product;
  // }
  product = this._product;

  produce_part_a() {
    this._product.add("PartA1");
  }
  produce_part_b() {
    this._product.add("PartB1");
  }
  produce_part_c() {
    this._product.add("PartC1");
  }
}

class Product1 {
  constructor() {
    this.parts = [];
  }

  add(part) {
    this.parts.push(part);
  }

  list_parts() {
    return `Product parts: ${this.parts.join(", ")}`;
  }
}

class Director {
  constructor() {
    this.builder = null;
  }

  build_minimal_viable_product() {
    this.builder.produce_part_a();
  }

  build_full_featured_product() {
    this.builder.produce_part_a();
    this.builder.produce_part_b();
    this.builder.produce_part_c();
  }
}

const main = () => {
  const { equal: AssertEqual } = require("assert");

  const director = new Director();
  const builder = new ConcreteBuilder1();
  director.builder = builder;

  console.log("Standard basic product: ");
  director.build_minimal_viable_product();
  console.log(builder.product);

  console.log(typeof builder.product);
  console.log(typeof builder.product.list_parts);

  // console.log("");

  // console.log("Standard full featured product: ");
  // director.build_full_featured_product();
  // builder.product.list_parts();

  // console.log("");

  // console.log("Custom products: ");
  // builder.produce_part_a();
  // builder.produce_part_b();
  // builder.product.list_parts();
};

main();
