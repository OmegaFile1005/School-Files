Console.WriteLine("Enter first letter: ");
char key1 = Console.ReadKey().KeyChar;
Console.ReadKey();
Console.WriteLine("Enter second letter: ");
char key2 = Console.ReadKey().KeyChar;
Console.ReadKey();
Console.WriteLine("Enter third letter: ");
char key3 = Console.ReadKey().KeyChar;
Console.ReadKey();

Console.WriteLine("Letters's order is now reversed.");
Console.WriteLine(key3 + " " + key2 + " " + key1);