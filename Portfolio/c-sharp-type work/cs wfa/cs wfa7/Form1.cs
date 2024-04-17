using System;
using System.Windows.Forms;

namespace MonthlyCosts
{
    public partial class Form1 : Form
    {
        private TextBox loanTextBox;
        private TextBox insuranceTextBox;
        private TextBox gasTextBox;
        private TextBox oilTextBox;
        private TextBox tiresTextBox;
        private TextBox maintenanceTextBox;
        private Button calculateButton;
        private Label totalMonthlyCostLabel;
        private Label totalAnnualCostLabel;

        public Form1()
        {
            InitializeForm();
        }

        private void CalculateButton_Click(object sender, EventArgs e)
        {
            decimal loanCost = decimal.Parse(loanTextBox.Text);
            decimal insuranceCost = decimal.Parse(insuranceTextBox.Text);
            decimal gasCost = decimal.Parse(gasTextBox.Text);
            decimal oilCost = decimal.Parse(oilTextBox.Text);
            decimal tiresCost = decimal.Parse(tiresTextBox.Text);
            decimal maintenanceCost = decimal.Parse(maintenanceTextBox.Text);

            decimal totalMonthlyCost = loanCost + insuranceCost + gasCost + oilCost + tiresCost + maintenanceCost;
            decimal totalAnnualCost = totalMonthlyCost * 12;

            totalMonthlyCostLabel.Text = $"Total Monthly Cost: ${totalMonthlyCost}";
            totalAnnualCostLabel.Text = $"Total Annual Cost: ${totalAnnualCost}";
        }

        private void InitializeForm()
        {
            loanTextBox = new TextBox();
            insuranceTextBox = new TextBox();
            gasTextBox = new TextBox();
            oilTextBox = new TextBox();
            tiresTextBox = new TextBox();
            maintenanceTextBox = new TextBox();
            calculateButton = new Button();
            totalMonthlyCostLabel = new Label();
            totalAnnualCostLabel = new Label();

            loanTextBox.Location = new System.Drawing.Point(10, 10);
            loanTextBox.Size = new System.Drawing.Size(200, 20);
            loanTextBox.Text = "0";

            insuranceTextBox.Location = new System.Drawing.Point(10, 40);
            insuranceTextBox.Size = new System.Drawing.Size(200, 20);
            insuranceTextBox.Text = "0";

            gasTextBox.Location = new System.Drawing.Point(10, 70);
            gasTextBox.Size = new System.Drawing.Size(200, 20);
            gasTextBox.Text = "0";

            oilTextBox.Location = new System.Drawing.Point(10, 100);
            oilTextBox.Size = new System.Drawing.Size(200, 20);
            oilTextBox.Text = "0";

            tiresTextBox.Location = new System.Drawing.Point(10, 130);
            tiresTextBox.Size = new System.Drawing.Size(200, 20);
            tiresTextBox.Text = "0";

            maintenanceTextBox.Location = new System.Drawing.Point(10, 160);
            maintenanceTextBox.Size = new System.Drawing.Size(200, 20);
            maintenanceTextBox.Text = "0";

            calculateButton.Location = new System.Drawing.Point(10, 190);
            calculateButton.Size = new System.Drawing.Size(100, 30);
            calculateButton.Text = "Calculate";
            calculateButton.Click += CalculateButton_Click;

            totalMonthlyCostLabel.Location = new System.Drawing.Point(10, 230);
            totalMonthlyCostLabel.Size = new System.Drawing.Size(300, 20);
            totalMonthlyCostLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;

            totalAnnualCostLabel.Location = new System.Drawing.Point(10, 260);
            totalAnnualCostLabel.Size = new System.Drawing.Size(300, 20);
            totalAnnualCostLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;

            Controls.Add(loanTextBox);
            Controls.Add(insuranceTextBox);
            Controls.Add(gasTextBox);
            Controls.Add(oilTextBox);
            Controls.Add(tiresTextBox);
            Controls.Add(maintenanceTextBox);
            Controls.Add(calculateButton);
            Controls.Add(totalMonthlyCostLabel);
            Controls.Add(totalAnnualCostLabel);
        }
    }
}