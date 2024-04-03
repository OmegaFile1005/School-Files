Console.WriteLine("Enter a character: ");
char ranChar = Console.ReadKey().KeyChar;
Console.WriteLine();

Console.WriteLine("Enter width: ");
int width = int.Parse(Console.ReadLine());

for (int i = 1; i <= width; i++)
{
    for (int j = 1; j <= i; j++)
    {
        Console.Write(ranChar);
    }
    Console.WriteLine();
}