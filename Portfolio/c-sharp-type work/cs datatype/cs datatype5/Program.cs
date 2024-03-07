Console.WriteLine("Enter the first decimal number:");
decimal value1 = decimal.Parse(Console.ReadLine());

Console.WriteLine("Enter the second decimal number:");
decimal value2 = decimal.Parse(Console.ReadLine());

Console.WriteLine("Enter the third decimal number:");
decimal value3 = decimal.Parse(Console.ReadLine());

decimal result = value1 * value2 * value3;
Console.WriteLine("The product of the three values is: " + result);