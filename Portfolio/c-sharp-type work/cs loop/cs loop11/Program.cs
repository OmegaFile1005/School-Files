double total = 0;
int inputs = 0;

Console.WriteLine("Enter values and a non-number to stop:");
while (true)
{
    string input = Console.ReadLine();
    if (!double.TryParse(input, out double value))
    {
        break;
    }
    total += value;
    inputs++;
}

if (inputs > 0)
{
    double mean = total / inputs;
    Console.WriteLine("The average is " + mean);
}
else
{
    Console.WriteLine("No values were placed.");
}