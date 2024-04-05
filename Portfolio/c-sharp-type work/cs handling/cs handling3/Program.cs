Console.Write("Enter a group size: ");
Console.WriteLine();
int count = int.Parse(Console.ReadLine());

Console.WriteLine("Selection:");
Console.WriteLine("Normal, Gold, Platinum");
Console.Write("Enter your package: ");
Console.WriteLine();
string pack = Console.ReadLine();

string hall;
decimal hallP;

if (count <= 50)
{
    hall = "Small Hall";
    hallP = 2500m;
}
else if (count <= 100)
{
    hall = "Terrace";
    hallP = 5000m;
}
else if (count <= 120)
{
    hall = "Great Hall";
    hallP = 7500m;
}
else
{
    Console.WriteLine("Cant hold.");
    return;
}

decimal packP;
decimal discP;

switch (pack)
{
    case "Normal":
        packP = 500m;
        discP = 5m;
        break;
    case "Gold":
        packP = 750m;
        discP = 10m;
        break;
    case "Platinum":
        packP = 1000m;
        discP = 15m;
        break;
    default:
        Console.WriteLine("Invalid");
        return;
}