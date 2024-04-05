Console.WriteLine("Determines if a given date is magic or not.");
Console.WriteLine();

Console.Write("Enter month (two digits): ");
int month = int.Parse(Console.ReadLine());
Console.Write("Enter day (two digits): ");
int day = int.Parse(Console.ReadLine());
Console.Write("Enter year (two digits): ");
int year = int.Parse(Console.ReadLine());
Console.WriteLine();

string formDate = $"{month:D2}/{day:D2}/{year:D2}";
if (month * day == year && formDate == "06/10/60")
{
    Console.WriteLine($"The date {formDate} IS a magic date.");
}
else
{
    Console.WriteLine($"The date {formDate} is NOT a magic date.");
}