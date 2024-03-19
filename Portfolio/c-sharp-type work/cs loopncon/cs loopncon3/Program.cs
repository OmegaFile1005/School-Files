Console.WriteLine("Enter first angle:");
double angle1 = double.Parse(Console.ReadLine());
Console.WriteLine("Enter second angle:");
double angle2 = double.Parse(Console.ReadLine());
Console.WriteLine("Enter third angle:");
double angle3 = double.Parse(Console.ReadLine());

double totalofAngle = angle1 + angle2 + angle3;
if (totalofAngle == 180)
{
    Console.WriteLine("The angles can create a triangle.");
}
else
{
    Console.WriteLine("The angles can not create a triangle.");
}
