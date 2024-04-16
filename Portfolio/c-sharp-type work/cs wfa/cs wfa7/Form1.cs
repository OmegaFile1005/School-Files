using System;
using System.Windows.Forms;

namespace AutomobileExpenses
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();
        }

        private void btnCalculate_Click(object sender, EventArgs e)
        {
            try
            {
                // Parse the user input for each expense
                decimal loanPayment = decimal.Parse(txtLoanPayment.Text);
                decimal insurance = decimal.Parse(txtInsurance.Text);
                decimal gas = decimal.Parse(txtGas.Text);
                decimal oil = decimal.Parse(txtOil.Text);
                decimal tires = decimal.Parse(txtTires.Text);
                decimal maintenance = decimal.Parse(txtMaintenance.Text);

                // Calculate the total monthly cost
                decimal totalMonthlyCost = loanPayment + insurance + gas + oil + tires + maintenance;

                // Calculate the total annual cost
                decimal totalAnnualCost = totalMonthlyCost * 12;

                // Display the total monthly and annual costs
                lblTotalMonthlyCost.Text = "Total Monthly Cost: $" + totalMonthlyCost.ToString("0.00");
                lblTotalAnnualCost.Text = "Total Annual Cost: $" + totalAnnualCost.ToString("0.00");
            }
            catch (FormatException)
            {
                MessageBox.Show("Invalid input. Please enter numeric values for the expenses.");
            }
        }
    }
}