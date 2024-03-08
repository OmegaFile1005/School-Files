const int cap = 100;
int totalSquares = 0;   

for (int i = 1; i <= cap; i++)
{
    int sq = i * i;
    totalSquares += sq;
}

Console.WriteLine("The total of squares from 1 to 100 is " + totalSquares);