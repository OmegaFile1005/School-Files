int[] elements;
int count;
bool exitPro;

elements = new int[100];
count = 0;
exitPro = false;

while (!exitPro)
{
    Console.WriteLine("Menu:");
    Console.WriteLine();
    Console.WriteLine("1. Add Element");
    Console.WriteLine("2. Remove Element");
    Console.WriteLine("3. Show All Elements");
    Console.WriteLine("4. Statistics");
    Console.WriteLine("5. Exit");
    Console.WriteLine("Enter Choice:");
    Console.WriteLine();

    int choice = int.Parse(Console.ReadLine());

    switch (choice)
    {
        case 1:
            Console.WriteLine("Add element: ");
            int element = int.Parse(Console.ReadLine());

            elements[count++] = element;
            break;
        case 2:
            Console.WriteLine("Remove element at index: ");
            int index = int.Parse(Console.ReadLine());

            if (index < 0 || index >= count)
            {
                Console.WriteLine("Invalid index.");
            }
            else
            {
                for (int i = index; i < count - 1; i++)
                {
                    elements[i] = elements[i + 1];
                }
                count--;
                Console.WriteLine("Element removed.");
            }
            break;
        case 3:
            Console.WriteLine("All Elements: ");
            for (int i = 0; i < count; i++)
            {
                Console.WriteLine(i + ". " + elements[i]);
            }
            break;
        case 4:
            if (count > 0)
            {
                int sum = 0;
                int min = elements[0];
                int max = elements[0];

                for (int i = 0; i < count; i++)
                {
                    int currentElement = elements[i];
                    sum += currentElement;

                    if (currentElement < min)
                    {
                        min = currentElement;
                    }

                    if (currentElement > max)
                    {
                        max = currentElement;
                    }
                }

                double average = (double)sum / count;

                Console.WriteLine("Statistics:");
                Console.WriteLine("Total amount of data: " + count);
                Console.WriteLine("Sum: " + sum);
                Console.WriteLine("Average: " + average);
                Console.WriteLine("Maximum: " + max);
                Console.WriteLine("Minimum: " + min);
            }
            else
            {
                Console.WriteLine("No elements.");
            }
            break;
        case 5:
            exitPro = true;
            Console.WriteLine("Exiting Program...");
            break;
        default:
            Console.WriteLine("Invalid input.");
            break;
    }

    Console.WriteLine();
}