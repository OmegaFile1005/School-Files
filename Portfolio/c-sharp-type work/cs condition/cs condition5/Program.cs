Console.WriteLine("Enter a character: ");

char character = char.ToLower(Console.ReadKey().KeyChar);
bool Vowel = character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u';

if (Vowel)
{
    Console.WriteLine("It is a vowel.");
}
else
{
    Console.WriteLine("It is NOT a vowel.");
}
