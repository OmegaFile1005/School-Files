Console.WriteLine("Enter X coordinate: ");
int x = int.Parse(Console.ReadLine());
Console.WriteLine("Enter Y coordinate: ");
int y = int.Parse(Console.ReadLine());

if (x > 0 && y > 0)
{
    Console.WriteLine("The point ({0}, {1}) is in the first quadrant.", x, y);
}
else if (x < 0 && y > 0)
{
    Console.WriteLine("The point ({0}, {1}) is in the second quadrant.", x, y);
}
else if (x < 0 && y < 0)
{
    Console.WriteLine("The point ({0}, {1}) is in the third quadrant.", x, y);
}
else if (x > 0 && y < 0)
{
    Console.WriteLine("The point ({0}, {1}) is in the fourth quadrant.", x, y);
}
else if (x == 0 && y == 0)
{
    Console.WriteLine("The point ({0}, {1}) is on the origin.", x, y);
}
else if (x == 0)
{
    Console.WriteLine("The point ({0}, {1}) is on the y-axis.", x, y);
}
else if (y == 0)
{
    Console.WriteLine("The point ({0}, {1}) is on the x-axis.", x, y);
}
