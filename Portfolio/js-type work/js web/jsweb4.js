function checkOut() {
    class Order {
        constructor(orderNumber, customerName, customerLastName, methodOfOrdering, paymentMethod) {
            this.orderNumber = orderNumber;
            this.customerName = customerName;
            this.customerLastName = customerLastName;
            this.methodOfOrdering = methodOfOrdering;
            this.paymentMethod = paymentMethod;
            this.products = [];
        }

        addProduct(product) {
            this.products.push(product);
        }

        calculateTotal() {
            let total = 0;
            for (let product of this.products) {
                total += product.price * product.quantity;
            }
            return total;
        }
    }

    class Product {
        constructor(name, countryOfOrigin, price) {
            this.name = name;
            this.countryOfOrigin = countryOfOrigin;
            this.price = price;
            this.quantity = 0;
        }

        setQuantity(quantity) {
            this.quantity = quantity;
        }
    }

}