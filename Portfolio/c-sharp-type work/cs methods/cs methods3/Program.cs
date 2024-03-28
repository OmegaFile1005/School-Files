Console.WriteLine("Enter a value for n: ");
int n = int.Parse(Console.ReadLine());

Console.WriteLine("Enter a value for m: ");
int m = int.Parse(Console.ReadLine());

int result = 1;
for (int i = 1; i <= m; i++)
{
    result *= n;
}

Console.WriteLine("Result: " + result);