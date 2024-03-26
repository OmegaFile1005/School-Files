string input = "Hello, world.";
int vowCount = 0;
int conCount = 0;

foreach (char c in input)
{
    if (char.IsLetter(c))
    {
        char lowerCaseChar = char.ToLower(c);
        if (lowerCaseChar == 'a' || lowerCaseChar == 'e' || lowerCaseChar == 'i' || lowerCaseChar == 'o' || lowerCaseChar == 'u')
        {
            vowCount++;
        }
        else
        {
            conCount++;
        }
    }
}

Console.WriteLine("String: " + input);
Console.WriteLine("Vowels: " + vowCount);
Console.WriteLine("Consonants: " + conCount);