Console.WriteLine("Enter first number: ");
int value1 = int.Parse(Console.ReadLine());
Console.WriteLine("Enter second number: ");
int value2 = int.Parse(Console.ReadLine());

if (value1 > value2)
{
    int temp = value1;
    value1 = value2;
    value2 = temp;
    Console.WriteLine("Values have been reversed.");
    Console.WriteLine("First value is now " +  value1);
    Console.WriteLine("Second value is now " + value2);
}
else
{
    Console.WriteLine("No reversing required.");
    Console.WriteLine("First value is still " + value1);
    Console.WriteLine("Second value is still " + value2);
}