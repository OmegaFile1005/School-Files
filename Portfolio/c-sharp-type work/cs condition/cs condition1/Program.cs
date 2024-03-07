Console.WriteLine("Enter a number: ");
int number = int.Parse(Console.ReadLine());

if (number > 0)
{
    Console.WriteLine("Input is positive.");
}
else if (number < 0)
    Console.WriteLine("Input is negative.");
else
{
    Console.WriteLine("Input is zero.");
}