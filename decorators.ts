function LogInstantiation<T extends new (...args: any[]) => any>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      console.log(`✅ New instance of ${constructor.prototype.constructor.name} created with args:`, args);
      super(...args);
    }
  };
}

@LogInstantiation
class User {
  constructor(public name: string, public age: number) {}
}

const u1 = new User("Alice", 25);
const u2 = new User("Bob", 30);
