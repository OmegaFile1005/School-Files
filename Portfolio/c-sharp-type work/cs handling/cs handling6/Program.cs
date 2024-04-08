Console.Write("Enter first value: ");
int value1 = int.Parse(Console.ReadLine());
Console.WriteLine();
Console.Write("Enter second value: ");
int value2 = int.Parse(Console.ReadLine());
Console.WriteLine();

int start = Math.Min(value1, value2);
int end = Math.Max(value1, value2);

for (int i = start; i <= end; i++)
{
    Console.Write(i + " ");
};
    Console.WriteLine()