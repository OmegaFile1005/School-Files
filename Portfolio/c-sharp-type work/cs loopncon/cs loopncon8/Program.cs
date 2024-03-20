class PizzaCalc
{
    private Dictionary<string, int> ingredCal;
    private List<string> ingredCalList;

    public PizzaCalc()
    {
        ingredCal = new Dictionary<string, int>()
        {
            { "Cheese", 100 },
            { "Pepperoni", 150 },
            { "Mushrooms", 50 },
            { "Onions", 40 },
            { "Bell Peppers", 30 },
            { "Ham", 120 },
            { "Olives", 35 }
        };
        ingredCalList = new List<string>();
    }

    public void Run()
    {
        while (true)
        {
            Console.WriteLine("Menu:");
            Console.WriteLine("1. Add Ingredient");
            Console.WriteLine("2. Calculate Calories");
            Console.WriteLine("3. Exit");
            Console.WriteLine();
            Console.WriteLine("Enter your choice: ");

            int choice;
            if (!int.TryParse(Console.ReadLine(), out choice))
            {
                Console.WriteLine("Clarify it's a number.");
                continue;
            }

            switch (choice)
            {
                case 1:
                    Console.WriteLine("Current Ingredients:");
                    Console.WriteLine("1. Cheese");
                    Console.WriteLine("2. Pepperoni");
                    Console.WriteLine("3. Mushrooms");
                    Console.WriteLine("4. Onions");
                    Console.WriteLine("5. Bell Peppers");
                    Console.WriteLine("6. Ham");
                    Console.WriteLine("7. Olives");

                    Console.WriteLine("Enter the ingredients: ");
                    int ingredValue;
                    if (!int.TryParse(Console.ReadLine(), out ingredValue))
                    {
                        Console.WriteLine("Invalid value.");
                        return;
                    }

                    switch (ingredValue)
                    {
                        case 1:
                            ingredCalList.Add("Cheese");
                            break;
                        case 2:
                            ingredCalList.Add("Pepperoni");
                            break;
                        case 3:
                            ingredCalList.Add("Mushrooms");
                            break;
                        case 4:
                            ingredCalList.Add("Onions");
                            break;
                        case 5:
                            ingredCalList.Add("Bell Peppers");
                            break;
                        case 6:
                            ingredCalList.Add("Ham");
                            break;
                        case 7:
                            ingredCalList.Add("Olives");
                            break;
                        default:
                            Console.WriteLine("Clarify it's a number.");
                            return;
                    }
                    Console.WriteLine("Ingredient Added");
                    break;
                case 2:
                    int totalCal = 0;

                    foreach (var cal in ingredCalList)
                    {
                        if (ingredCal.ContainsKey(cal))
                        {
                            totalCal += ingredCal[cal];
                        }
                    }

                    Console.WriteLine("Pizza's Calories: " + totalCal);
                    break;
                case 3:
                    Console.WriteLine("Closing Console...");
                    return;
                default:
                    Console.WriteLine("Invalid");
                    break;
            }
        }
    }
}

class Program
{
    static void Main()
    {
        PizzaCalc calc = new PizzaCalc();
        calc.Run();
    }
}