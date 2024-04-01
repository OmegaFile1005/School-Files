int[] values = { 5, 2, 4, 6, 7, 9 };

if (values == null || values.Length == 0)
{
    throw new ArgumentException("Empty.");
}

int max = values[0];
for (int i = 1; i < values.Length; i++)
{
    if (values[i] > max)
    {
        max = values[i];
    }
    Console.WriteLine(values[i]);
}

Console.WriteLine("Largest value: " + max);