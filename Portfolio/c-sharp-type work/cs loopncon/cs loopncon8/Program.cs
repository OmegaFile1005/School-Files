string key;
do
{
    Console.WriteLine("Do you want to continue? Y/N");
    key = Console.ReadLine().ToUpper();
}
while (key != "N");