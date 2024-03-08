const int numberSet = 5;
double total = 0;
Console.WriteLine("Enter " +  numberSet + " values: ");
for  (int i = 0; i < numberSet; i++)
{
    double value = double.Parse(Console.ReadLine());
    total += value;
}
double mean = total / numberSet;
Console.WriteLine("The average is " + mean);