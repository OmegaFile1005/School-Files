Console.WriteLine("Enter product's amount: ");
int amount = int.Parse(Console.ReadLine());

Console.WriteLine("Enter product's value: ");
double value = double.Parse(Console.ReadLine());

double discount = 0;
if (amount > 6 && amount <= 12)
{
    discount = 0.04;
}
else if (amount > 12)
{
    discount = 0.1;
}

double discVal = value - (value * discount);
double total = amount * discVal;

Console.WriteLine("Total Price: " + total);