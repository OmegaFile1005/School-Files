Console.Write("Enter a number (1 to 20): ");
int n = int.Parse(Console.ReadLine());

if (n < 1 || n > 20)
{
    Console.WriteLine("Invalid input.");
    return;
}

for (int i = 1; i <= n; i++)
{
    for (int j = 1; j <= i; j++)
    {
        Console.Write(j + " ");
    }
    Console.WriteLine();
}