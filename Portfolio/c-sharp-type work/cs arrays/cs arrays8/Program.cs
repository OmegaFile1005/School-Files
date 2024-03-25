
// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
int[] values = { 4, 9, 2, 7, 5, 1, 6, 3, 8 };
int top = values[0];
int bottom = values[0];

for (int i = 1; i < values.Length; i++)
{
    if (values[i] > top)
    {
        top = values[i];
    }
    else if (values[i] < bottom)
    {
        bottom = values[i];
    }
}

Console.WriteLine("Array values:");
foreach (int i in values)
{
    Console.Write(i + " ");
}
Console.WriteLine();

Console.WriteLine("Max value: " +  top);
Console.WriteLine("Min value: " + bottom);