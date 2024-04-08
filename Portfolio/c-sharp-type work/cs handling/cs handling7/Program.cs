Console.Write("Enter ingredient: ");
string ing = Console.ReadLine();
Console.WriteLine();
int ingCount = 0;

while (ing != "Bake!" && ingCount < 20)
{
    if (ing.Length > 50)
    {
        Console.WriteLine("Invalid ingredient. Please enter an ingredient with a maximum of 50 characters.");
        ing = Console.ReadLine();
        continue;
    }

    Console.WriteLine($"Adding ingredient {ing}.");
    ingCount++;
    ing = Console.ReadLine();
}

Console.WriteLine($"Preparing cake with {ingCount} ingredients.");