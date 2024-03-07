Console.WriteLine("Enter a number from 1 to 9:");
string input  = Console.ReadLine();
if (int.TryParse(input, out int number) && number >= 1 && number <= 9 )
{
    int newMulti;
    if (number >=1  && number <=3)
    {
        newMulti = number * 10;
    }
    if (number >= 4 && number <=6)
    { 
        newMulti = number * 100;
    }
    else
    {
        newMulti = number * 1000;
    }
    Console.WriteLine("New Number: " +  newMulti);
}
else
{
    Console.WriteLine("Invalid Input.");
}