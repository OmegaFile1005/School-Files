class pizzaCalc
{
    private readonly Dictionary<string, int> ingredCal;
    private List<string> ingredCalList;

    public pizzaCalc()
    {
        ingredCal = new Dictionary<string, int>()
        {
            { "Cheese", 100 },
            { "Pepperoni", 150 },

        };
    }
}