Console.Write("Enter the number of miles driven: ");
double miles = double.Parse(Console.ReadLine());

Console.Write("Enter the gallons of gas used: ");
double gallon = double.Parse(Console.ReadLine());
double milesGallon = miles / gallon;

Console.WriteLine("Miles per Gallon: " + milesGallon);