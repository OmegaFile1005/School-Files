Console.WriteLine("Enter first number: ");
int value1 = int.Parse(Console.ReadLine());
Console.WriteLine("Enter second number: ");
int value2 = int.Parse(Console.ReadLine());

if (value2 != 0)
{
    double total = value1 / value2;
    Console.WriteLine("Result: " +  total);
}
else
{
    Console.WriteLine("You tried to divide by zero. It didn't work! Goodbye!");
}