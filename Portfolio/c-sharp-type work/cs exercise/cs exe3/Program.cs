int feetpA = 43560;

Console.Write("Enter the total square feet in the tract of land: ");
int total = int.Parse(Console.ReadLine());
double acres = (double)total / feetpA;

Console.WriteLine("The number of acres in the tract of land is: " + acres);