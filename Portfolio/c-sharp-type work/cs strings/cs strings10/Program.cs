string text = "This is a test.";
char character = 's';

int count = 0;
foreach (char c in text)
{
    if (c == character)
    {
        count++;
    }
}

Console.WriteLine($"The character '{character}' appears {count} times.");