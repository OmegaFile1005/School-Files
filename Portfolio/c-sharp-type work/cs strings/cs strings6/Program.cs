Console.WriteLine("Enter a string that is maxed at 20: ");
string input = Console.ReadLine();

if (input.Length < 20)
{
    input = input.PadRight(20, '*');
}

Console.WriteLine("Result: " +  input);