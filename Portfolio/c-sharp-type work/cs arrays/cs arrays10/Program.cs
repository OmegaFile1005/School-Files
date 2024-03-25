int[] values1 = { 1, 2, 3, 4, 5 };
int[] values2 = { 1, 2, 3, 4, 5 };

bool theySame = AreArraysEqual(values1, values2);

Console.WriteLine("Array 1:");
PrintArray(values1);

Console.WriteLine("Array 2:");
PrintArray(values2);

if (theySame)
{
    Console.WriteLine("The arrays are equal.");
}
else
{
    Console.WriteLine("The arrays are not equal.");
}
static bool AreArraysEqual(int[] array1, int[] array2)
{
    if (array1.Length != array2.Length)
    {
        return false;
    }

    for (int i = 0; i < array1.Length; i++)
    {
        if (array1[i] != array2[i])
        {
            return false;
        }
    }

    return true;
}

static void PrintArray(int[] array)
{
    foreach (int number in array)
    {
        Console.Write(number + " ");
    }

    Console.WriteLine();
}