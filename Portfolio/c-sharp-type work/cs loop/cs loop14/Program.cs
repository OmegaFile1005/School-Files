const int firstNumber = 1;
const int lastNumber = 200;

int totalEven = 0;
int countEven = 0;
int totalOdd = 0;
int countOdd = 0;

for (int number = firstNumber; number <= lastNumber; number++)
{
    if (number % 2 == 0)
    {
        totalEven += number;
        countEven++;
    }
    else
    {
        totalOdd += number;
        countOdd++;
    }
}

double averageEven = (double)totalEven / countEven;
double averageOdd = (double)totalOdd / countOdd;

Console.WriteLine("The even total is " + totalEven);
Console.WriteLine("The even average is " + averageEven);
Console.WriteLine("The odd total is " + totalOdd);
Console.WriteLine("The odd average is " + averageOdd);