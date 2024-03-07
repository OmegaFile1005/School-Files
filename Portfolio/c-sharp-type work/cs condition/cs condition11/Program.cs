Console.WriteLine("Enter your choice:\n1 for Integer\n2 for Double\n3 for string");
int pick = int.Parse(Console.ReadLine());
switch (pick)
{
    case 1:
        Console.WriteLine("Enter an integer: ");
        int intPick = int.Parse(Console.ReadLine());
        intPick++;
        Console.WriteLine("Revised Value: " +  intPick);
        break;
    case 2:
        Console.WriteLine("Enter a double: ");
        double doublePick = double.Parse(Console.ReadLine());
        doublePick++;
        Console.WriteLine("Revised Value: " +  doublePick);
        break;
    case 3:
        Console.WriteLine("Enter a string: ");
        string stringPick = Console.ReadLine();
        stringPick += "*";
        Console.WriteLine("Revised Value: " +  stringPick);
        break;
    default:
        Console.WriteLine("Invalid input.");
        break;
}