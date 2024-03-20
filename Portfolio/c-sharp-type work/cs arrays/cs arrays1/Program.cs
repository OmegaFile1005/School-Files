int[] values = new int[11];

for (int i = 0; i < values.Length; i++)
{
    values[i] = i + 4;
}

Console.WriteLine("Array values:");
foreach (int value in values)
{
    Console.Write(value + " ");
}

Console.WriteLine();
