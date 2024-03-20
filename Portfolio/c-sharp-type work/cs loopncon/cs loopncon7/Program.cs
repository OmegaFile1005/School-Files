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
        return;
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
            double area1 = Math.PI * radius * radius;
            Console.WriteLine("The circle's area is " + area1);
            break;
        case 2:
            Console.WriteLine("Input length of the rectangle: ");
            double length;
            if (!double.TryParse(Console.ReadLine(), out length))
            {
                Console.WriteLine("Clarify it's a number.");
                return;
            }
            Console.WriteLine("Input width of the rectangle: ");
            double width;
            if (!double.TryParse(Console.ReadLine(), out width))
            {
                Console.WriteLine("Clarify it's a number.");
                return;
            }

            double area2 = length * width;
            Console.WriteLine("The rectangle's area is " + area2);
            break;
        case 3:
            Console.WriteLine("Input base length of the triangle: ");
            double baseLength;
            if (!double.TryParse(Console.ReadLine(), out baseLength))
            {
                Console.WriteLine("Clarify it's a number.");
                return;
            }
            Console.WriteLine("Input height of the triangle: ");
            double height;
            if (!double.TryParse(Console.ReadLine(), out height))
            {
                Console.WriteLine("Clarify it's a number.");
                return;
            }

            double area3 = 0.5 * baseLength * height;
            Console.WriteLine("The triangle's area is " + area3);
            break;
        default:
            Console.WriteLine("Clarify it's a number.");
            break;
    }