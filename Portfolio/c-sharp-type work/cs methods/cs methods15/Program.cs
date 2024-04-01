Console.WriteLine("Enter size of array: ");
int size = int.Parse(Console.ReadLine());
int[] values = new int[size];

Console.WriteLine("Enter array values: ");
for (int i = 0; i < size; i++)
{
    values[i] = int.Parse(Console.ReadLine());
}

int total = 0;
foreach (int value in values)
{
    total += value;
}

Console.WriteLine("Total: " +  total);