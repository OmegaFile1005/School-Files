double taxR = 0.06;
double subT = 0;

for (int i = 1; i <= 5; i++)
{
    Console.Write($"Enter the price of item {i}: ");
    double price = double.Parse(Console.ReadLine());
    subT += price;
}
double tax = subT * taxR;
double total = subT + tax;

Console.WriteLine("Subtotal: $" + subT);
Console.WriteLine("Sales Tax: $" + tax);
Console.WriteLine("Total: $" + total);