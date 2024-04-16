using System;
using System.Windows.Forms;

namespace cs_wfa8
{
    public partial class Form1 : Form
    {
        private Label classALabel;
        private Label classBLabel;
        private Label classCLabel;
        private TextBox classATextBox;
        private TextBox classBTextBox;
        private TextBox classCTextBox;
        private Button calculateButton;
        private Label resultLabel;

        public Form1()
        {
            InitializeForm();
        }

        private void InitializeForm()
        {
            classALabel = new Label();
            classBLabel = new Label();
            classCLabel = new Label();
            classATextBox = new TextBox();
            classBTextBox = new TextBox();
            classCTextBox = new TextBox();
            calculateButton = new Button();
            resultLabel = new Label();

            classALabel.Location = new System.Drawing.Point(10, 10);
            classALabel.Size = new System.Drawing.Size(100, 20);
            classALabel.Text = "Class A Seats:";

            classBLabel.Location = new System.Drawing.Point(10, 40);
            classBLabel.Size = new System.Drawing.Size(100, 20);
            classBLabel.Text = "Class B Seats:";

            classCLabel.Location = new System.Drawing.Point(10, 70);
            classCLabel.Size = new System.Drawing.Size(100, 20);
            classCLabel.Text = "Class C Seats:";

            classATextBox.Location = new System.Drawing.Point(120, 10);
            classATextBox.Size = new System.Drawing.Size(50, 20);

            classBTextBox.Location = new System.Drawing.Point(120, 40);
            classBTextBox.Size = new System.Drawing.Size(50, 20);

            classCTextBox.Location = new System.Drawing.Point(120, 70);
            classCTextBox.Size = new System.Drawing.Size(50, 20);

            calculateButton.Location = new System.Drawing.Point(10, 100);
            calculateButton.Size = new System.Drawing.Size(100, 30);
            calculateButton.Text = "Calculate";
            calculateButton.Click += CalculateButton_Click;

            resultLabel.Location = new System.Drawing.Point(10, 140);
            resultLabel.Size = new System.Drawing.Size(300, 50);
            resultLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;

            Controls.Add(classALabel);
            Controls.Add(classBLabel);
            Controls.Add(classCLabel);
            Controls.Add(classATextBox);
            Controls.Add(classBTextBox);
            Controls.Add(classCTextBox);
            Controls.Add(calculateButton);
            Controls.Add(resultLabel);
        }

        private void CalculateButton_Click(object sender, EventArgs e)
        {
            if (int.TryParse(classATextBox.Text, out int classATickets) &&
                int.TryParse(classBTextBox.Text, out int classBTickets) &&
                int.TryParse(classCTextBox.Text, out int classCTickets))
            {
                int classAIncome = classATickets * 15;
                int classBIncome = classBTickets * 12;
                int classCIncome = classCTickets * 9;
                int totalIncome = classAIncome + classBIncome + classCIncome;

                resultLabel.Text = $"Class A Income: ${classAIncome}\n" +
                                   $"Class B Income: ${classBIncome}\n" +
                                   $"Class C Income: ${classCIncome}\n" +
                                   $"Total Revenue: ${totalIncome}";
            }
            else
            {
                MessageBox.Show("Please enter valid ticket quantities.", "Invalid Input", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
        }
    }
}