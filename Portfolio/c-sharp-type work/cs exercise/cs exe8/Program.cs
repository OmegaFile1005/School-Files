const double tip = 0.15;
const double tax = 0.07;

Console.Write("Enter the charge for the food: $");
double foodCharge = double.Parse(Console.ReadLine());

double tipA = foodCharge * tip;
double taxA = foodCharge * tax;
double total = foodCharge + tipA + taxA;

Console.WriteLine("Tip amount: $" + tipA);
Console.WriteLine("Tax amount: $" + taxA);
Console.WriteLine("Total amount: $" + total);