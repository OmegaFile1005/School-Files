Console.WriteLine("Enter a string: ");
string input = Console.ReadLine();

char[] array = input.ToCharArray();
Array.Reverse(array);
string revInput = new string(array);

Console.WriteLine("Reversed String: " + revInput);