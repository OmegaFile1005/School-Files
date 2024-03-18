const int values = 10;
int total = 0;

Console.WriteLine("Enter 10 numbers: ");
for (int i = 0; i < values; i++)
{
    int value = int.Parse(Console.ReadLine());
    if (value == 0)
    {
        total += value;
    }
}

Console.WriteLine("The negative sum is " + total);