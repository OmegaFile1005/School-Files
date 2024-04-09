double profitPercentage = 0.23;

Console.Write("Enter the projected amount of total sales: ");
double total = double.Parse(Console.ReadLine());

double profit = total * profitPercentage;

Console.WriteLine("The projected profit is: $" + profit);