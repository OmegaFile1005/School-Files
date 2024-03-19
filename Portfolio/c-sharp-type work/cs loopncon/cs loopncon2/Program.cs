Console.WriteLine("Enter first angle: ");
double angle1 = double.Parse(Console.ReadLine());
Console.WriteLine("Enter second angle: ");
double angle2 = double.Parse(Console.ReadLine());
Console.WriteLine("Enter third angle: ");
double angle3 = double.Parse(Console.ReadLine());

if (angle1 == angle2 && angle2 == angle3)
{
    Console.WriteLine("This triangle is equilateral.");
}
else if (angle1 == angle2 || angle2 == angle3 || angle1 == angle3)
{
    Console.WriteLine("This triangle is isosceles.");
}
else
{
    Console.WriteLine("This triangle is scalene.");
}
