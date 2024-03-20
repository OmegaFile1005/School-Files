int[] ogArray = new int[10];
int[] coArray = new int[10];

Random r = new Random();
for (int i = 0; i < 10; i++)
{
    ogArray[i] = r.Next(50, 101);
}
for (int i = 0; i < 10; i++)
{
    coArray[i] = ogArray[i] / 2;
}

Console.WriteLine("Original Array:");
foreach (int i in ogArray)
{
    Console.Write(i + " ");
}

Console.WriteLine();
Console.WriteLine("Copied Array * 0.5:");
foreach (int i in coArray)
{
    Console.Write(i + " ");
}