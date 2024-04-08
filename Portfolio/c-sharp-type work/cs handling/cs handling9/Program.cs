int count = 0;

do
{
    Console.Write("Enter a number: ");
    string value = Console.ReadLine();

    if (int.TryParse(value, out _))
    {
        count++;
    }
    else
    {
        break;
    }
}
while (true);

Console.WriteLine($"Output: {count}");