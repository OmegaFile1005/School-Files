Console.WriteLine("Write a string: ");
string text = Console.ReadLine();

Console.WriteLine("Write a substring to check: ");
string subStr = Console.ReadLine();

if (text.Contains(subStr))
{
    Console.WriteLine("The substring is present.");
}
else
{
    Console.WriteLine("The substring is not present.");
}