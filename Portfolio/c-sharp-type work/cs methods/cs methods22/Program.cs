Console.WriteLine("Performs arithmetic operations with two numbers.");
Console.WriteLine();
Console.WriteLine("Enter first number: ");
double value1 = double.Parse(Console.ReadLine());

char op;
bool isValOp = false;

do
{
    Console.WriteLine("Enter operation (+, -, *, /): ");
    op = char.Parse(Console.ReadLine());

    switch (op)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            isValOp = true;
            break;
        default:
            Console.WriteLine("Invalid input. Try again.");
            Console.WriteLine();
            break;
    }
} while (!isValOp);

Console.WriteLine("Enter second number: ");
double value2  = double.Parse(Console.ReadLine());
double total = 0;

switch (op)
{
    case '+':
        total = value1 + value2;
        break;
    case '-':
        total = value1 - value2;
        break;
    case '*':
        total = value1 * value2;
        break;
    case '/':
        total = value1 / value2;
        break;
}

Console.WriteLine("Result: " +  total);