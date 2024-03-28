Console.WriteLine("Enter a value from 1 to 12: ");
int monthN = int.Parse(Console.ReadLine());

int days;
switch (monthN)
{
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        days = 30;
        break;
    case 2:
        days = 28;
        break;
    default:
        days = -1;
        break;
}

Console.WriteLine("Day amount: " + days);