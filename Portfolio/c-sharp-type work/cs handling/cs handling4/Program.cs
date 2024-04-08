Console.WriteLine("Months: May, June, July, August, September, October, December");
Console.Write("Enter month: ");
string month = Console.ReadLine();
Console.WriteLine();

Console.WriteLine("Night Range: 1 to 200");
Console.Write("Enter amount of nights: ");
int nights = int.Parse(Console.ReadLine());
Console.WriteLine();

decimal studP = 0;
decimal doubP = 0;
decimal suitP = 0;

switch (month)
{
    case "May":
    case "October":
        studP = 50m;
        doubP = 65m;
        suitP = 75m;

        if (nights > 7)
        {
            studP -= studP * 0.05m;
        }
        break;
    case "June":
    case "September":
        studP = 60m;
        doubP = 72m;
        suitP = 82m;

        if (nights > 14 && month == "September")
        {
            studP -= studP;
        }
        else if (nights > 14)
        {
            doubP -= doubP * 0.1m;
        }
        break;
    case "July":
    case "August":
    case "December":
        studP = 68m;
        doubP = 77m;
        suitP = 89m;

        if (nights > 14)
        {
            suitP -= suitP * 0.15m;
        }
        break;
}

decimal studTotal = studP * nights;
decimal doubTotal = doubP * nights;
decimal suitTotal = suitP * nights;

Console.WriteLine($"Studio: ${studTotal:F2} dollars.");
Console.WriteLine($"Double: ${doubTotal:F2} dollars.");
Console.WriteLine($"Suite: ${suitTotal:F2} dollars.");