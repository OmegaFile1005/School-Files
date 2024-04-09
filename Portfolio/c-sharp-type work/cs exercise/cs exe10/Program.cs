int cookieBag = 40;
int servingBag = 10;
int calServing = 300;

Console.Write("Enter the number of cookies you ate: ");
int cookiesConsumed = int.Parse(Console.ReadLine());
double caloriesConsumed = (cookiesConsumed / (double)cookieBag) * (servingBag * calServing);

Console.WriteLine("Total calories consumed: " + caloriesConsumed);