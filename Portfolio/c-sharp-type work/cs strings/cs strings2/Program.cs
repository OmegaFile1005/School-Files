string input = "Hello, world.";
char[] characters = input.ToCharArray();

Console.WriteLine("Input String: " + input);
Console.WriteLine("Individual Characters:");

foreach (char c in characters)
{
    Console.WriteLine(c);
}