while (true)
{
    Console.WriteLine("A menu driven program to compute the area of various geometrical shapes:");
    Console.WriteLine("--------------------------------------------------");
    Console.WriteLine("Input 1 for area of circle");
    Console.WriteLine("Input 2 for area of rectangle");
    Console.WriteLine("Input 3 for area of triangle");

    Console.WriteLine("Input of your choice: ");
    int select;
    if (!int.TryParse(Console.ReadLine(), out select))
    {
        Console.WriteLine("Clarify it's a number.");
        continue;
    }

    switch (select)
    {
        case 1:
            Console.WriteLine("Input radius of the circle: ");
            double radius;
            if (!double.TryParse(Console.ReadLine(), out radius))
            {
                Console.WriteLine("Clarify it's a number.");
                return;
            }
            double area = Math.PI * radius * radius;
            break;
        case 2:
            Console.WriteLine("")
        case 3:
    }
}