<<<<<<< HEAD
﻿Console.WriteLine("Enter first number: ");
int value1 = int.Parse(Console.ReadLine());
Console.WriteLine("Enter second number: ");
int value2 = int.Parse(Console.ReadLine());
Console.WriteLine("Enter third number: ");
int value3 = int.Parse(Console.ReadLine());
int biggestValue;

if (value1 >= value2)
{
    if (value1 >= value3)
    {
        biggestValue = value1;
    }
    else
    {
        biggestValue = value3;
    }
}
else
{
    if (value2 >= value3)
    {
        biggestValue = value2;
    }
    else
    {
        biggestValue = value3;
    }
}
Console.WriteLine("Biggest value is " + biggestValue);
=======
﻿// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
>>>>>>> 8a4180d7f59ca1ccd4a094a67e60ff31ce3d7e29
