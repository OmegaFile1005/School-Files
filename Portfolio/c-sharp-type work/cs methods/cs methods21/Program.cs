Console.WriteLine("Checks if user and password are correct. Only three attempts are allowed.");
Console.WriteLine();
const int maxAtt = 3;
string valUs = "me";
string valPa = "123";
int att = 0;

while (att < maxAtt)
{
    Console.WriteLine("Enter username: ");
    string username = Console.ReadLine();
    Console.WriteLine("Enter password: ");
    string password = Console.ReadLine();

    if (username == valUs && password == valPa)
    {
        Console.WriteLine("Logged in! Bye!");
        return;
    }
    else
    {
        att++;
        Console.WriteLine("Incorrect input(s). Remaining Attempts: " + (maxAtt - att));
        Console.WriteLine();
    }
}

Console.WriteLine("Too many failures. Try again another time!");