Console.Write("Enter the number of males registered: ");
int males = int.Parse(Console.ReadLine());

Console.Write("Enter the number of females registered: ");
int females = int.Parse(Console.ReadLine());

int total = males + females;

double malePer = (males / (double)total) * 100;
double femalePer = (females / (double)total) * 100;

Console.WriteLine("Percentage of males: " + malePer.ToString("0.##") + "%");
Console.WriteLine("Percentage of females: " + femalePer.ToString("0.##") + "%");