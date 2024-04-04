Console.WriteLine("Calculates area, perimeter, and diagonal of a rectangle given the width and height.");
Console.WriteLine();
Console.WriteLine("Enter width: ");
double width = double.Parse(Console.ReadLine());
Console.WriteLine("Enter height: ");
double height = double.Parse(Console.ReadLine());

double peri = 2 * (width + height);
double area  = width * height;
double dia = (width * width + height * height);

Console.WriteLine("Perimeter: " +  peri);
Console.WriteLine("Area: " +  area);
Console.WriteLine("Diagonal: " + dia);