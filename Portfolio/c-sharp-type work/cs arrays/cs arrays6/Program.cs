int[] inpArray = new int[5];
double total = 0;

Console.WriteLine("Enter values:");
for (int i = 0; i < inpArray.Length; i++)
{
    Console.Write("Value " + (i + 1) + ": ");
    inpArray[i] = Convert.ToInt32(Console.ReadLine());
}

for (int i = 0; i < inpArray.Length; i++)
{
    total += inpArray[i];
}

double mean = total / inpArray.Length;

Console.WriteLine("Values inputted:");
foreach (int i in inpArray)
{
    Console.Write(i + " ");
}
Console.WriteLine();

Console.WriteLine("Arithmetic Mean: " + mean);