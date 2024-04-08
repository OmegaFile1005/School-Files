Console.Write("Enter a noun: ");
string noun = Console.ReadLine();
Console.WriteLine();

string form;
if (noun.EndsWith("y"))
{
    form = noun.Remove(noun.Length - 1) + "ies";
}
else if (noun.EndsWith("o") || noun.EndsWith("ch") || noun.EndsWith("s") || noun.EndsWith("sh") || noun.EndsWith("x") || noun.EndsWith("z"))
{
    form = noun + "es";
}
else
{
    form = noun + "s";
}

Console.WriteLine(form);