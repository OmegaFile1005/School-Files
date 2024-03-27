Console.WriteLine("Write a string: ");
string text = Console.ReadLine();

Console.WriteLine("Write a substring to extract: ");
string subStr = Console.ReadLine();

int startI = text.IndexOf(subStr);
if (startI != -1)
{
    int endI = startI + subStr.Length;
    string extStr = text.Substring(startI, endI - startI);
    Console.WriteLine($"The extracted string is {extStr}.");
}
else
{
    Console.WriteLine("Not found.");
}