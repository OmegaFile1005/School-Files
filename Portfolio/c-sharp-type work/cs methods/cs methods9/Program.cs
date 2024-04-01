Console.WriteLine("Enter the first number: ");
int value1 = int.Parse(Console.ReadLine());
Console.WriteLine("Enter the second number: ");
int value2 = int.Parse(Console.ReadLine());
Console.WriteLine("Enter the third number: ");
int value3 = int.Parse(Console.ReadLine());

int max = GetMax(GetMax(value1, value2), value3);
Console.WriteLine("Max: " + max);

static int GetMax(int value1, int value2)
{
    return value1 > value2 ? value1 : value2;
}