using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace cs_wfa1
{
    public partial class Form1 : Form
    {
        private readonly object foodChargeTextBox;
        private readonly object tipLabel;
        private readonly object taxLabel;
        private readonly object totalLabel;

        public Form1()
        {
            InitializeComponent();
        }

        private void CalculateButton_Click(object sender, EventArgs e)
        {
            // Get the food charge from the user input
            if (double.TryParse(foodChargeTextBox.Text, out double foodCharge))
            {
                // Calculate tip, sales tax, and total
                double tip = foodCharge * 0.15;
                double salesTax = foodCharge * 0.07;
                double total = foodCharge + tip + salesTax;

                // Display the calculated amounts
                tipLabel.Text = "Tip: $" + tip.ToString("0.00");
                taxLabel.Text = "Sales Tax: $" + salesTax.ToString("0.00");
                totalLabel.Text = "Total: $" + total.ToString("0.00");
            }
            else
            {
                MessageBox.Show("Please enter a valid food charge amount.", "Invalid Input", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
        }
    }
}