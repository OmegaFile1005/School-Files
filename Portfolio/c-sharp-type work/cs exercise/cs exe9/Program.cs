int shares = 1000;
double priceShare = 32.87;
double commRate = 0.02;
double salesPrice = 33.92;
double salesRate = 0.02;

double purAm = shares * priceShare;
double purComm = purAm * commRate;
double salesAm = shares * salesPrice;
double salesComm = salesAm * salesRate;

double profitLoss = Math.Round(salesAm - purAm - purComm - salesComm, 2);

Console.WriteLine("Amount paid for the stock: $" + purAm);
Console.WriteLine("Commission paid when buying the stock: $" + purComm);
Console.WriteLine("Amount sold for: $" + salesAm);
Console.WriteLine("Commission paid when selling the stock: $" + salesComm);

if (profitLoss > 0)
{
    Console.WriteLine("Joe made a profit of: $" + profitLoss);
}
else if (profitLoss < 0)
{
    Console.WriteLine("Joe incurred a loss of: $" + Math.Abs(profitLoss));
}
else
{
    Console.WriteLine("Joe broke even with no profit or loss.");
}