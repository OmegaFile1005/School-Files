string username;
string password;

do
{
    Console.WriteLine("Enter username: ");
    username = Console.ReadLine();
    Console.WriteLine("Enter password: ");
    password = Console.ReadLine();
} while (username != "me" || password != "123");
Console.WriteLine("Inputs correct. Goodbye!");