Console.WriteLine("Enter first string: ");
string text1 = Console.ReadLine();
Console.WriteLine("Enter secpmd string");
string text2 = Console.ReadLine();

int compRes = string.Compare(text1, text2);
if (compRes < 0)
{
    Console.WriteLine("First string is before.");
}
else if (compRes > 0)
{
    Console.WriteLine("First string is after.");
}
else
{
    Console.WriteLine("They are equal.");
}