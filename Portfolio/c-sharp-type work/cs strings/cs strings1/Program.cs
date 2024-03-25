string input = "Hello, world.";

int length = 0;
foreach (char c in input)
{
    length++;
}

Console.WriteLine("String's Input: " + input);
Console.WriteLine("Length: " +  length);