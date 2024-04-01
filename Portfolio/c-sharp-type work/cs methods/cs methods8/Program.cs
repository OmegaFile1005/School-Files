Console.WriteLine("Enter first number: ");
int value1 = int.Parse(Console.ReadLine());
Console.WriteLine("Enter second number: ");
int value2 = int.Parse(Console.ReadLine());

int max = GetMax(value1, value2);

Console.WriteLine("Max: " + max);

static int GetMax(int value1, int value2)
{
    return value1 > value2 ? value1 : value2;
}