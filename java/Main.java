public class Main {
    public static void main(String[] args) {
        System.out.println("Java setup is working.");
        System.out.println("This repository includes Java utilities for business logic demos.");

        double subtotal = 100;
        double discounted = Calculator.applyDiscount(subtotal, 10); // 10% off
        double total = Calculator.calculateTotal(discounted, 0.17); // 17% tax
        double perPerson = Calculator.splitBill(total, 4);

        System.out.println("Subtotal: " + subtotal);
        System.out.println("After discount: " + discounted);
        System.out.println("Total with tax: " + total);
        System.out.println("Split per person (4): " + perPerson);
    }
}
