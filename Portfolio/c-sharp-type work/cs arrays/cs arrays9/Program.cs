int[] values = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
int[] oddValues;
int[] evenValues;

Console.WriteLine("Original Values:");
foreach (int value in values)
{
    Console.Write(value + " ");
}
Console.WriteLine();

{
    int oddCount = 0;
    int evenCount = 0;

    foreach (int value in values)
    {
        if (value % 2 == 0)
        {
            evenCount++;
        }
        else
        {
            oddCount++;
        }
    }
    oddValues = new int[oddCount];
    evenValues = new int[evenCount];

    int oddI = 0;
    int evenI = 0;

    foreach (int value in values)
    {
        if ((value % 2) == 0)
        {
            evenValues[evenI] = value;
            evenI++;
        }
        else
        {
            oddValues[oddI] = value;
            oddI++;
        }
    }
}

Console.WriteLine("Odd values:");
foreach (int value in oddValues)
{
    Console.Write(value + " ");
}
Console.WriteLine();

Console.WriteLine("Even values:");
foreach (int value in evenValues)
{
    Console.Write(value + " ");
}
Console.WriteLine();