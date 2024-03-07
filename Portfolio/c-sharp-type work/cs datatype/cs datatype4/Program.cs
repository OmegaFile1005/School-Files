int value1 = 634;
int value2 = 51;

Console.WriteLine("Before Swapping:");
Console.WriteLine("value1 = " + value1);
Console.WriteLine("value2 = " +  value2);

(value2, value1) = (value1, value2);

Console.WriteLine("After Swapping:");
Console.WriteLine("value1 = " + value1);
Console.WriteLine("value2 = " + value2);