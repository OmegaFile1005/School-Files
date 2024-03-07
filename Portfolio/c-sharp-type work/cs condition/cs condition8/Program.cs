Console.WriteLine("Enter first number: ");
float value1 = float.Parse(Console.ReadLine());
Console.WriteLine("Enter second number: ");
float value2 = float.Parse(Console.ReadLine());
Console.WriteLine("Enter third number: ");
float value3 = float.Parse(Console.ReadLine());
int negativeCount = 0;

if (value1 < 0)
{
    negativeCount++;
}
if (value2 < 0)
{
    negativeCount++;
}
if (value3 < 0)
{
    negativeCount++;
}

char sign = negativeCount % 2 == 0 ? '+' : '-';
Console.WriteLine("The product's sign is " + sign);