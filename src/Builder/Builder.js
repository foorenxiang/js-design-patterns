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

  #product;

  reset() {
    console.log("Creating new product for #product");
    this.#product = new Product1();
    console.log("Finished creating new product for #product");
  }

  get product() {
    const product = { ...this.#product };
    this.reset();
    console.log("Product:");
    console.log(product);
    return "I am product";
    return product;
  }

  produce_part_a() {
    this.#product.add("PartA1");
  }

  produce_part_b() {
    this.#product.add("PartB1");
  }

  produce_part_c() {
    this.#product.add("PartC1");
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
    console.log(this.parts);
  }
}

const main = () => {
  const builder = new ConcreteBuilder1();
  console.log("Custom product: ");
  builder.produce_part_a();
  builder.produce_part_b();
  console.log("Printouts");
  console.log(builder.product);
  console.log(builder.product());
  console.log(builder.product.list_parts);
};

main();
