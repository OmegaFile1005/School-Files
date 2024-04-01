Console.WriteLine("Enter a number: ");
int value = int.Parse(Console.ReadLine());

int lastDig = value % 10;
string digName;

switch (lastDig)
{
    case 0:
        digName = "zero";
        break;
    case 1:
        digName = "one";
        break;
    case 2:
        digName = "two";
        break;
    case 3:
        digName = "three";
        break;
    case 4:
        digName = "four";
        break;
    case 5:
        digName = "five";
        break;
    case 6:
        digName = "six";
        break;
    case 7:
        digName = "seven";
        break;
    case 8:
        digName = "eight";
        break;
    case 9:
        digName = "nine";
        break;
    default:
        digName = "Invalid number";
        break;
}

Console.WriteLine("The English name of the last digit is: " + digName);