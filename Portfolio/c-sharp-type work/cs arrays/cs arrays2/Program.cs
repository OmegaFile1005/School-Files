int[] values = new int[50];
int evenValue = 2;

for (int i = 0; i < values.Length; i++)
{
    values[i] = evenValue;
    evenValue += 2;
}

Console.WriteLine("Array Values: ");
foreach (int value in values)
{
    Console.WriteLine(value + " ");
}

Console.WriteLine();