class Builder {
  product() {}
  produce_part_a() {}
  produce_part_b() {}
  produce_part_c() {}
}

class ConcreteBuilder1 extends Builder {
  constructor() {
    super();
    this.reset();
  }

  reset() {
    this._product = new Product1();
  }

  get product() {
    const product = this._product;
    this.reset();
    return product;
  }

  produce_part_a() {
    this._product.add('PartA1');
  }

  produce_part_b() {
    this._product.add('PartB1');
  }

  produce_part_c() {
    this._product.add('PartC1');
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
    console.log(`Product parts: ${this.parts.join(', ')}`);
  }
}

class Director {
  constructor() {
    this._builder = null;
  }

  get builder() {
    return this._builder;
  }

  set builder(builder) {
    this._builder = builder;
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

const client_code = () => {};

const main = () => {
  client_code();
  const director = new Director();
  const builder = new ConcreteBuilder1();
  director.builder = builder;

  console.log('Standard basic product: ');
  director.build_minimal_viable_product();
  builder.product.list_parts();

  console.log('');

  console.log('Standard full featured product: ');
  director.build_full_featured_product();
  builder.product.list_parts();

  console.log('Custom product:');
  builder.produce_part_a();
  builder.produce_part_b();
  builder.product.list_parts();
};

main();
