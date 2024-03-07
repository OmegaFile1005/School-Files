Console.WriteLine("Enter first number: ");
int value1 = int.Parse(Console.ReadLine());
Console.WriteLine("Enter second number: ");
int value2 = int.Parse(Console.ReadLine());
Console.WriteLine("Enter third number: ");
int value3 = int.Parse(Console.ReadLine());

if (value1 < value2 && value2 < value3)
{
    Console.WriteLine("Numbers are in increasing order.");
}
else
{
    Console.WriteLine("Numbers are NOT in increasing order!");
}