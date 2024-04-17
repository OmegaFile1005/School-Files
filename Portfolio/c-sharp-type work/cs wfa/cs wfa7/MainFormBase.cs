namespace AutomobileExpenses
{
    internal abstract class MainFormBaseBase2
    {
        protected abstract override void Dispose(bool disposing);
    }

    internal class MainFormBase : MainFormBaseBase2
    {

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            object value = base.Dispose(disposing);
        }
    }
}