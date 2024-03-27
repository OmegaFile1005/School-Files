Console.WriteLine("Write an arithmetic expression: ");
string exp = Console.ReadLine();

Stack<char> stack = new Stack<char>();
foreach (char c in exp)
{
    if (c == '(')
    {
        stack.Push(c);
    }
    else if (c == ')')
    {
        if (stack.Count == 0 || stack.Peek() != '(')
        {
            Console.WriteLine("The parentheses are misplaced.");
            Environment.Exit(1);
            return;
        }
        stack.Pop();
    }
}

if (stack.Count == 0)
{
    Console.WriteLine("The parentheses are correctly placed.");
}
else
{
    Console.WriteLine("The parentheses are misplaced.");
}