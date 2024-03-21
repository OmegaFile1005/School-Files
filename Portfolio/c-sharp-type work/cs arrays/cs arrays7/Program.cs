int[] values = { -2, 5, 8, -9, 10, 15, -4 };
int posTotal = 0;
int negTotal = 0;

foreach (int value in values)
{
    if (value > 0)
    {
        posTotal += value;
    }
    else if (value < 0)
    {
        negTotal += value;
    }
}

Console.WriteLine("Array Values:");
foreach (int value in values)
{
    Console.Write(value + " ");
}
Console.WriteLine();

Console.WriteLine("Positive Total: " +  posTotal);
Console.WriteLine("Negative Total: " +  negTotal);