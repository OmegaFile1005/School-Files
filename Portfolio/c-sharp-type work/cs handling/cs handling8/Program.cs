Dictionary<string, int> ingCal = new Dictionary<string, int>()
{
    { "cheese", 500 },
    { "tomato sauce", 150 },
    { "salami", 600 },
    { "pepper", 50 }
};

Console.WriteLine("Selection (Max 20):");
Console.WriteLine("Cheese, Tomato Sauce, Salami, Pepper");

int n = Math.Min(int.Parse(Console.ReadLine()), 20);
int total = 0;

for (int i = 0; i < n; i++)
{
    string ing = Console.ReadLine().ToLower().Trim();
    
    if (ing.Length > 50)
    {
        Console.WriteLine("Too long. Create an ingredient with a maximum of 50.");
        i--;
        continue;
    }
    
    if (ingCal.ContainsKey(ing))
    {
        total += ingCal[ing];
    }
}
Console.WriteLine($"Total Calories: {total}");