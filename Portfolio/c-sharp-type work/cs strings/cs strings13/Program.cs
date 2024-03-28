Console.WriteLine("Write a sentence: ");
string sent = Console.ReadLine();

char[] chars = sent.ToCharArray();
for (int i = 0; i < chars.Length; i++)
{
    if (char.IsLower(chars[i]))
    {
        chars[i] = char.ToUpper(chars[i]);
    }
    else if (char.IsUpper(chars[i]))
    {
        chars[i] = char.ToLower(chars[i]);
    }
}

sent = new string(chars);
Console.WriteLine("Converted sentence: " + sent);