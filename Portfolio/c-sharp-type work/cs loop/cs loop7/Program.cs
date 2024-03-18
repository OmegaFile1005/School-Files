Console.WriteLine("Type a number: ");
int value = int.Parse(Console.ReadLine());

Console.WriteLine("Multiplication Table for " + value + ":");
Console.WriteLine("----------------------------");

for (int i = 1; i < 10; i++)
{
    int sum = value * i;
    Console.WriteLine(value + "*" + i + ":" + sum);
}