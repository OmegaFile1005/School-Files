Console.WriteLine("Enter a digit: ");
int value = int.Parse(Console.ReadLine());
long factorial = 1;
for (int i = 1; i <= value; i++)
{
    factorial *= i;
}
Console.WriteLine("Factorial of " + value + " is: " + factorial);