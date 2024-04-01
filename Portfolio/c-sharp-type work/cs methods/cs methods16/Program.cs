using System;
using System.Collections.Generic;

class Program
{
    private List<string> elements = new List<string>();
    private bool exitPro = false;

    public void Run()
    {
        while (!exitPro)
        {
            Console.WriteLine("Menu:");
            Console.WriteLine();
            Console.WriteLine("1. Add Element");
            Console.WriteLine("2. Show All Elements");
            Console.WriteLine("3. Exit");
            Console.WriteLine("Enter Choice:");
            Console.WriteLine();

            int choice = int.Parse(Console.ReadLine());

            switch (choice)
            {
                case 1:
                    Console.WriteLine("Enter adding element: ");
                    string element = Console.ReadLine();
                    elements.Add(element);
                    Console.WriteLine("Added Element: " + element);
                    break;
                case 2:
                    if (elements.Count > 0)
                    {
                        Console.WriteLine("All Elements: ");
                        for (int i = 0; i < elements.Count; i++)
                        {
                            Console.WriteLine(i + ". " + elements[i]);
                        }
                    }
                    else
                    {
                        Console.WriteLine("No elements.");
                    }
                    break;
                case 3:
                    exitPro = true;
                    Console.WriteLine("Exiting Program...");
                    break;
                default:
                    Console.WriteLine("Invalid input.");
                    break;
            }

            Console.WriteLine();
        }
    }
}

class ProgramRunner
{
    static void Main()
    {
        Program program = new Program();
        program.Run();
    }
}