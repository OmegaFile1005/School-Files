using System;
using System.Windows.Forms;

namespace cs_wfa1
{
    public partial class Form1 : Form
    {
        private TextBox foodChargeTextBox;
        private Label tipLabel;
        private Label taxLabel;
        private Label totalLabel;

        public Form1()
        {
            InitializeComponent();
        }

        private void InitializeComponent()
        {
            foodChargeTextBox = new TextBox();
            tipLabel = new Label();
            taxLabel = new Label();
            totalLabel = new Label();
            var calculateButton = new Button();

            foodChargeTextBox.Location = new System.Drawing.Point(10, 10);
            foodChargeTextBox.Size = new System.Drawing.Size(100, 20);

            tipLabel.Location = new System.Drawing.Point(10, 40);
            tipLabel.Size = new System.Drawing.Size(200, 20);

            taxLabel.Location = new System.Drawing.Point(10, 70);
            taxLabel.Size = new System.Drawing.Size(200, 20);

            totalLabel.Location = new System.Drawing.Point(10, 100);
            totalLabel.Size = new System.Drawing.Size(200, 20);

            calculateButton.Location = new System.Drawing.Point(10, 130);
            calculateButton.Size = new System.Drawing.Size(100, 30);
            calculateButton.Text = "Calculate";
            calculateButton.Click += CalculateButton_Click;

            Controls.Add(foodChargeTextBox);
            Controls.Add(tipLabel);
            Controls.Add(taxLabel);
            Controls.Add(totalLabel);
            Controls.Add(calculateButton);
        }

        private void CalculateButton_Click(object sender, EventArgs e)
        {
            if (double.TryParse(foodChargeTextBox.Text, out double foodCharge))
            {
                double tip = foodCharge * 0.15;
                double salesTax = foodCharge * 0.07;
                double total = foodCharge + tip + salesTax;

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