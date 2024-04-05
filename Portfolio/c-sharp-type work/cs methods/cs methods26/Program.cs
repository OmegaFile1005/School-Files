Console.WriteLine("Calculates and compares the areas of two rectangles.");
Console.WriteLine();
Console.Write("Enter first rectangle's length: ");
double len1 = double.Parse(Console.ReadLine());
Console.WriteLine();
Console.Write("Enter first rectangle's width: ");
double wid1 = double.Parse(Console.ReadLine());
Console.WriteLine();

Console.Write("Enter second rectangle's length: ");
double len2 = double.Parse(Console.ReadLine());
Console.WriteLine();
Console.Write("Enter second rectangle's width: ");
double wid2 = double.Parse(Console.ReadLine());
Console.WriteLine();

double area1 = len1 * wid1;
double area2 = len2 * wid2;

if (area1 > area2)
{
    Console.WriteLine("The area of first rectangle is greater than second.");
}
else if (area1 < area2)
{
    Console.WriteLine("The area of second rectangle is greater than first.");
}
else
{
    Console.WriteLine("They are the same.");
}