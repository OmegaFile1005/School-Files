﻿Console.Write("Write a profession: ");
Console.WriteLine();

Console.WriteLine("Selection:");
Console.WriteLine("Athlete, Business(wo)man, SoftUni Student");
Console.WriteLine();

string prof = Console.ReadLine();
string drink;

switch (prof)
{
    case "Athlete":
        drink = "Water";
        break;
    case "Businessman":
    case "Businesswoman":
        drink = "Coffee";
        break;
    case "SoftUni Student":
        drink = "Beer";
        break;
    default:
        drink = "Tea";
        break;
}

Console.WriteLine($"Input: {prof}");
Console.WriteLine($"Output: {drink}");