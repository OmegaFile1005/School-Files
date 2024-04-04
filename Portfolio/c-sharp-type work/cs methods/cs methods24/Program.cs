Console.WriteLine("Displays a given speed in meters per second, kilometers per hour, and miles per hour.");
Console.WriteLine();

Console.WriteLine("Enter distance (meters): ");
double distM = double.Parse(Console.ReadLine());
Console.WriteLine("Enter time (hour): ");
int hour = int.Parse(Console.ReadLine());
Console.WriteLine("Enter time (minute): ");
int minute = int.Parse(Console.ReadLine());
Console.WriteLine("Enter time (second): ");
int second = int.Parse(Console.ReadLine());

int totalTiSec = (hour * 3600) + (minute * 60) + second;
double speedMeSec = distM / totalTiSec;
double speedKiloHour = (distM / 1000) / (totalTiSec / 3600);
double speedMileHour = (distM / 1609.34) / (totalTiSec / 3600);

Console.WriteLine();
Console.WriteLine("Results:");
Console.WriteLine();
Console.WriteLine($"Your speed in meters/sec is {speedMeSec}");
Console.WriteLine($"Your speed in km/h is {speedKiloHour}");
Console.WriteLine($"Your speed in miles/h is {speedMileHour}");