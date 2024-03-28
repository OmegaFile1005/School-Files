Console.WriteLine("Enter coords for first point: ");
double x1 = double.Parse(Console.ReadLine());
double y1 = double.Parse(Console.ReadLine());
Console.WriteLine("Enter coords for second point: ");
double x2 = double.Parse(Console.ReadLine());
double y2 = double.Parse(Console.ReadLine());

double delX = x2 - x1;
double delY = y2 - y1;

double distSq = Math.Pow(delX, 2) + Math.Pow(delY, 2);
double dist = Math.Sqrt(distSq);

Console.WriteLine("Distance between two points: " +  dist);