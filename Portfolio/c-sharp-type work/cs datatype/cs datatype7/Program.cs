float float1 = 7.5f;
float float2 = 5.3f;

bool Equal = float1 == float2;
bool GreaterThan = float1 > float2;
bool LessThan = float1 < float2;
bool EqualGreater = float1 >= float2;
bool EqualLess = float1 <= float2;
bool NotEqual  = float1 != float2;

Console.WriteLine("a = " + float1);
Console.WriteLine("b = " + float2);
Console.WriteLine("a == b: " + Equal);
Console.WriteLine("a > b: " +  GreaterThan);
Console.WriteLine("a < b: " +  LessThan);
Console.WriteLine("a >= b: " + EqualGreater);
Console.WriteLine("a <= b: " + EqualLess);
Console.WriteLine("a != b: " + NotEqual);