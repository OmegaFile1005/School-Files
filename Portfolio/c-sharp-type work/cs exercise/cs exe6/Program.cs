double statesalesTR = 0.04;
double countysalesTR = 0.02;

Console.Write("Enter the amount of the purchase: $");
double purA = double.Parse(Console.ReadLine());

double statesalesT = purA * statesalesTR;
double countysalesT = purA * countysalesTR;
double totalsalesT = statesalesT + countysalesT;
double totalSA = purA + totalsalesT;

Console.WriteLine("Amount of Purchase: $" + purA);
Console.WriteLine("State Sales Tax: $" + statesalesT);
Console.WriteLine("County Sales Tax: $" + countysalesT);
Console.WriteLine("Total Sales Tax: $" + totalsalesT);
Console.WriteLine("Total Sale Amount: $" + totalSA);