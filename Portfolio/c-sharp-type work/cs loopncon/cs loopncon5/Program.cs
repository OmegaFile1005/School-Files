Console.WriteLine("Enter a value from 0 to 9: ");
int value = int.Parse(Console.ReadLine());

string valueWord;
switch (value)
{
    case 0:
        valueWord = "Zero";
        break;
    case 1:
        valueWord = "One";
        break;
    case 2:
        valueWord = "Two";
        break;
    case 3:
        valueWord = "Three";
        break;
    case 4:
        valueWord = "Four";
        break;
    case 5:
        valueWord = "Five";
        break;
    case 6:
        valueWord = "Six";
        break;
    case 7:
        valueWord = "Seven";
        break;
    case 8:
        valueWord = "Eight";
        break;
    case 9:
        valueWord = "Nine";
        break;
    default:
        valueWord = "Invalid";
        break;
}

Console.WriteLine("The value's word is " + valueWord);