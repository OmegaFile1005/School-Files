const int total = 20;
const int values = 1000;

for (int i = 1; i <= values; i++)
{
    Console.WriteLine(i + " ");
    if (i % total == 0)
    {
        Console.WriteLine();
        Console.WriteLine("Do you wish to continue? Y/N");
        string input = Console.ReadLine().ToUpper();

        if (input != "Y")
        {
            break;
        }
    }
}