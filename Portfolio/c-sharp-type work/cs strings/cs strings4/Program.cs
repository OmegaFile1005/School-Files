string input = "Hello, world. 123";

int alphCount = 0;
int numCount = 0;
int specCount = 0;

foreach (char c in input)
{
    if (char.IsDigit(c))
    {
        numCount++;
    }
    else if (char.IsLetter(c))
    {
        alphCount++;
    }
    else
    {
        specCount++;
    }
}

Console.WriteLine("String: " + input);
Console.WriteLine("Letters: " + alphCount);
Console.WriteLine("Numbers: " + numCount);
Console.WriteLine("Specials: " + specCount);