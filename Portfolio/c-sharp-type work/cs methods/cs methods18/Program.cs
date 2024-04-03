Console.WriteLine("Enter first letter: ");
char char1 = char.ToUpper(Console.ReadLine()[0]);
Console.WriteLine("Enter second letter: ");
char char2 = char.ToUpper(Console.ReadLine()[0]);
Console.WriteLine("Enter third letter: ");
char char3 = char.ToUpper(Console.ReadLine()[0]);

string input = new string(new[] { char1, char2, char3 });

if (input.Length != 3)
{
    Console.WriteLine("Invalid length.");
    return;
}

char[] inputs = input.ToCharArray();
Array.Reverse(inputs);
string revInp = new string(inputs);
Console.WriteLine("Reversed Uppercase Letters: " +  revInp);