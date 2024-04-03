<<<<<<< HEAD
﻿using System.Numerics;

Console.WriteLine("Enter a value from 1 to 100 to find factorial: ");
int value = int.Parse(Console.ReadLine());

if (value < 1 || value > 100)
{
    Console.WriteLine("Invalid input.");
}
else
{
    BigInteger factorial = 1;
    for (int i = 2; i < value; i++)
    {
        factorial *= i;
    }
    Console.WriteLine($"{value}'s factorial: " + factorial);
}
=======
﻿using System.Diagnostics;

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
>>>>>>> 4242b14ff39f2a5144f3934bc477af0f44825df1
