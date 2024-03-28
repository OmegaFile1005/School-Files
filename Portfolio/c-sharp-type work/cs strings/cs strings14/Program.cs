Console.WriteLine("Write a string: ");
string text = Console.ReadLine();

Console.WriteLine("Enter substring to search: ");
string subStr = Console.ReadLine();

int position = text.IndexOf(subStr);
if (position != -1)
{
    Console.WriteLine($"The substring's position is {position}.");
}
else
{
    Console.WriteLine("Not found.");
}