double total = 0;
int inputs  = 0;

Console.WriteLine("Enter values and 0 to stop: ");
while (true)
{
    double input = double.Parse(Console.ReadLine());
    if (input == 0)
    {
        break;
    }
    total += input;
    inputs++;
}

if (inputs > 0)
{
    double mean = total / inputs;
    Console.WriteLine("The average is " +  mean + ".");
}
else
{
    Console.WriteLine("No values detected.");
}
