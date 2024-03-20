int[] ogArray = new int[5] { 1, 2, 3, 4, 5 };
int[] coArray = new int[5];

for (int i = 0; i < ogArray.Length; i++)
{
    coArray[i] = ogArray[i];
}

Console.WriteLine("Original Array:");
for (int i = 0; i < ogArray.Length; i++)
{
    Console.WriteLine(ogArray[i]);
}

Console.WriteLine();
Console.WriteLine("Copied Array:");
for (int i = 0; i < coArray.Length; i++)
{
    Console.WriteLine(coArray[i]);
}