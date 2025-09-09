type Id = string | number;

let productId: Id;
productId = 101;
productId = "A102";
console.log("Product ID:", productId);

type ShirtSize = "small" | "medium" | "large";

let myShirt: ShirtSize;
myShirt = "medium";
console.log("Shirt Size:", myShirt);

interface Person {
    name: string;
}

interface Employee {
    employeeId: number;
}

type Staff = Person & Employee;

const staffMember: Staff = {
    name: "Antony",
    employeeId: 101
};
console.log("Staff Member:", staffMember);

interface Product {
    id: Id;
    name: string;
    size: ShirtSize;
    inStock: boolean;
    price?: number;
    category?: string;
}

const product: Product = {
    id: 25,
    name: "T-Shirt",
    size: "large",
    inStock: true,
    price: 499,
    category: "Clothing"
};

console.log("Product:", product);
