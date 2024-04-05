Console.Write("Write a profession: ");
Console.WriteLine();

Console.WriteLine("Selection:");
Console.WriteLine("Athlete, Business(wo)man, SoftUni Student");
Console.WriteLine();
string prof = Console.ReadLine();

Console.Write("Enter amount: ");
Console.WriteLine();
int count = int.Parse(Console.ReadLine());

string drink;
decimal price;

switch (prof)
{
    case "Athlete":
        drink = "Water";
        price = 0.70m;
        break;
    case "Businessman":
    case "Businesswoman":
        drink = "Coffee";
        price = 1.00m;
        break;
    case "SoftUni Student":
        drink = "Beer";
        price = 1.70m;
        break;
    default:
        drink = "Tea";
        price = 1.20m;
        break;
}

decimal total = count * price;

Console.WriteLine($"Input: {prof} -> {count} drinks");
Console.WriteLine($"Output: ${total}");