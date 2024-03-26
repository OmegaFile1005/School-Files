string input = "This is sample.";

int wordCount = 0;
bool wordHuh = false;

foreach (char c in input)
{
    if (char.IsLetter(c))
    {
        if (!wordHuh)
        {
            wordCount++;
            wordHuh = true;
        }
    }
    else
    {
        wordHuh = false;
    }
}

Console.WriteLine("Input: " + input);
Console.WriteLine("Count: " + wordCount);