Console.Write("Enter Pesho's damage: ");
int peshoDMG = int.Parse(Console.ReadLine());
Console.WriteLine();
Console.Write("Enter Gosho's damage: ");
int goshoDMG = int.Parse(Console.ReadLine());

int peshoHP = 100;
int goshoHP = 100;
int round = 1;

while (true)
{
    if (round % 2 == 1)
    {
        goshoHP -= peshoDMG;
        Console.WriteLine($"Pesho used Roundhouse kick and reduced Gosho to {goshoHP} HP.");
    }
    else
    {
        peshoHP -= goshoDMG;
        Console.WriteLine($"Gosho used Thunderous fist and reduced Pesho to {peshoHP} HP.");
    }

    if (peshoHP <= 0)
    {
        Console.WriteLine($"Gosho won in {round}th round.");
        break;
    }
    else if (goshoHP <= 0)
    {
        Console.WriteLine($"Pesho won in {round}th round.");
        break;
    }

    if (round % 3 == 0)
    {
        peshoHP += 10;
        goshoHP += 10;
    }

    round++;
}