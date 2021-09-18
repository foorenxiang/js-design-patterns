class Iterator {}

class AlphabeticalOrderIterator extends Iterator {
  _position;

  _reverse = false;

  constructor(collection, reverse = false) {
    this._collection = collection;
    this._reverse = reverse;
    this._position = reverse ? -1 : 0;
  }

  next() {}
}
