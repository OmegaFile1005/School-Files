int sugar48 = 5;
int butter48 = 1;
int flour48 = 75;

Console.Write("Enter how many cookies needed: ");
int cookieValue = int.Parse(Console.ReadLine());
Console.WriteLine();

double sugar = (cookieValue / 48) * sugar48;
double butter = (cookieValue / 48) * butter48;
double flour = (cookieValue / 48) * flour48;

Console.WriteLine($"For {cookieValue}, you need: ");
Console.WriteLine();
Console.WriteLine($"Sugar: {sugar} cups");
Console.WriteLine($"Butter: {butter} cups");
Console.WriteLine($"Flour: {flour} cups");