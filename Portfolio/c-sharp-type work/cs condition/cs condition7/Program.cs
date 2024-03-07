Console.WriteLine("Write the gross amount of the invoice: ");
decimal grossAmount = decimal.Parse(Console.ReadLine());
decimal netAmount;

if (grossAmount <= 20000)
{
    netAmount = grossAmount;
}
else
{
    decimal discount = 0.15m;
    netAmount = grossAmount - (grossAmount * discount);
}
Console.WriteLine("The invoice's net income is " + netAmount);