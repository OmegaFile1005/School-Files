Console.WriteLine("Prints the corresponding Roman number version of a number.");
Console.WriteLine();
Console.Write("Enter a number from 1 to 10: ");
int value = int.Parse(Console.ReadLine());

string romVal;
switch (value)
{
    case 1:
        romVal = "I";
        break;
    case 2:
        romVal = "II";
        break;
    case 3:
        romVal = "III";
        break;
    case 4:
        romVal = "IV";
        break;
    case 5:
        romVal = "V";
        break;
    case 6:
        romVal = "VI";
        break;
    case 7:
        romVal = "VII";
        break;
    case 8:
        romVal = "VIII";
        break;
    case 9:
        romVal = "IX";
        break;
    case 10:
        romVal = "X";
        break;
    default:
        Console.WriteLine("Invalid input.");
        return;
}

Console.WriteLine();
Console.Write($"The Roman equivalent of number {value} is: " +  romVal);