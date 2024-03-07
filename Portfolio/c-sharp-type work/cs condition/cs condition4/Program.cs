Console.WriteLine("Choose from 1 to 7.");
int day = int.Parse(Console.ReadLine());
string[] daysOfWeek = { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };

if (day >= 1 && day <= 7)
{
    string dayOfWeek = daysOfWeek[day - 1];
    Console.WriteLine("The day is " +  dayOfWeek);
}
else
{
    Console.WriteLine("Unknown value.");
}    