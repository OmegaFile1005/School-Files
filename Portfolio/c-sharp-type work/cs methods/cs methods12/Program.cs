using System.Numerics;

Console.WriteLine("Enter a value from 1 to 100 to find factorial: ");
int value = int.Parse(Console.ReadLine());

if (value < 1 || value > 100)
{
    Console.WriteLine("Invalid input.");
}
else
{
    BigInteger factorial = 1;
    for (int i = 2; i < value; i++)
    {
        factorial *= i;
    }
    Console.WriteLine($"{value}'s factorial: " + factorial);
}