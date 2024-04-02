using System.Diagnostics;

int[] values = { 2, 6, 3, 1, 7, 4, 11 };

ReverseArray(values);
Console.WriteLine("Reversed:");
foreach (int value in values)
{
    Console.Write(value + " ");
}

static void ReverseArray(int[] values)
{
    int left = 0;
    int right = values.Length - 1;
    while (left < right)
    {
        (values[right], values[left]) = (values[left], values[right]);
        left++;
        right--;
    }
}

Console.WriteLine();
