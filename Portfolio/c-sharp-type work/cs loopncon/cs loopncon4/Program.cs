Console.WriteLine("Enter the grade: ");
char grade = char.ToUpper(Console.ReadKey().KeyChar);
Console.WriteLine();

string desc;
switch (grade)
{
    case 'E':
        desc = "Excellent";
        break;
    case 'V':
        desc = "Very Good";
        break;
    case 'G':
        desc = "Good";
        break;
    case 'A':
        desc = "Average";
        break;
    case 'F':
        desc = "Fail";
        break;
    default:
        desc = "Invalid";
        break;
}

Console.WriteLine("The equivalence is " + desc);