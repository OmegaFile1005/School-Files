int[] evenArray = new int[20];
int total = 0;

for (int i = 0; i < evenArray.Length; i++)
{
    evenArray[i] = (i + 1) * 2;
}
for (int i = 0; i < evenArray.Length; i++)
{
    total += evenArray[i];
}

Console.WriteLine("Array values:");
foreach (int i in evenArray)
{
    Console.Write(i + " ");
}

Console.WriteLine();
Console.WriteLine("Array's total: " + total);