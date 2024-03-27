string text = "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So, we are drinking all day. We will move out of it in 5 days.";
string subStr = "in";

int count = 0;
int index = 0;

while ((index = text.IndexOf(subStr, index, StringComparison.OrdinalIgnoreCase)) != -1)
{
    count++;
    index += subStr.Length;
}

Console.WriteLine($"The substring '{subStr}' appears {count} times.");