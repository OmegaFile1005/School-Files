using System;
using System.Windows.Forms;

namespace cs_wfa3
{
    public partial class Form1 : Form
    {
        private TextBox purchaseAmountTextBox;
        private Button calculateButton;
        private Label purchaseLabel;
        private Label stateTaxLabel;
        private Label countyTaxLabel;
        private Label totalTaxLabel;
        private Label totalSaleLabel;

        public Form1()
        {
            InitializeComponent();
        }

        private void InitializeComponent()
        {
            purchaseAmountTextBox = new TextBox();
            calculateButton = new Button();
            purchaseLabel = new Label();
            stateTaxLabel = new Label();
            countyTaxLabel = new Label();
            totalTaxLabel = new Label();
            totalSaleLabel = new Label();

            purchaseAmountTextBox.Location = new System.Drawing.Point(10, 10);
            purchaseAmountTextBox.Size = new System.Drawing.Size(100, 20);

            calculateButton.Location = new System.Drawing.Point(10, 40);
            calculateButton.Size = new System.Drawing.Size(100, 30);
            calculateButton.Text = "Calculate";
            calculateButton.Click += CalculateButton_Click;

            purchaseLabel.Location = new System.Drawing.Point(10, 80);
            purchaseLabel.Size = new System.Drawing.Size(200, 20);
            purchaseLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;

            stateTaxLabel.Location = new System.Drawing.Point(10, 110);
            stateTaxLabel.Size = new System.Drawing.Size(200, 20);
            stateTaxLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;

            countyTaxLabel.Location = new System.Drawing.Point(10, 140);
            countyTaxLabel.Size = new System.Drawing.Size(200, 20);
            countyTaxLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;

            totalTaxLabel.Location = new System.Drawing.Point(10, 170);
            totalTaxLabel.Size = new System.Drawing.Size(200, 20);
            totalTaxLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;

            totalSaleLabel.Location = new System.Drawing.Point(10, 200);
            totalSaleLabel.Size = new System.Drawing.Size(200, 20);
            totalSaleLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;

            Controls.Add(purchaseAmountTextBox);
            Controls.Add(calculateButton);
            Controls.Add(purchaseLabel);
            Controls.Add(stateTaxLabel);
            Controls.Add(countyTaxLabel);
            Controls.Add(totalTaxLabel);
            Controls.Add(totalSaleLabel);
        }

        private void CalculateButton_Click(object sender, EventArgs e)
        {
            if (double.TryParse(purchaseAmountTextBox.Text, out double purchaseAmount))
            {
                double stateSalesTax = purchaseAmount * 0.04;
                double countySalesTax = purchaseAmount * 0.02;
                double totalSalesTax = stateSalesTax + countySalesTax;
                double totalSale = purchaseAmount + totalSalesTax;

                purchaseLabel.Text = $"Purchase Amount: ${purchaseAmount.ToString("0.00")}";
                stateTaxLabel.Text = $"State Sales Tax: ${stateSalesTax.ToString("0.00")}";
                countyTaxLabel.Text = $"County Sales Tax: ${countySalesTax.ToString("0.00")}";
                totalTaxLabel.Text = $"Total Sales Tax: ${totalSalesTax.ToString("0.00")}";
                totalSaleLabel.Text = $"Total Sale: ${totalSale.ToString("0.00")}";
            }
            else
            {
                MessageBox.Show("Please enter a valid purchase amount.", "Invalid Input", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
        }

        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Form1());
        }
    }
}