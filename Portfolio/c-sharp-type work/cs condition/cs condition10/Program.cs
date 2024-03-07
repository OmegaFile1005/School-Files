Console.WriteLine("Enter a number from 0 to 9: ");
string key = Console.ReadLine();
if (key.Length == 1 && char.IsDigit(key[0]))
{
    string[] numberNames = { "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten" };
    int number = int.Parse(key);
    string numberName = numberNames[number];
    Console.WriteLine("The digit's name is " + numberName);
}
else
{
    Console.WriteLine("Invalid value.");
}