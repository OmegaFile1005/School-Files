using System;
using System.Windows.Forms;

namespace cs_wfa5
{
    public partial class Form1 : Form
    {
        private TextBox weightTextBox;
        private TextBox heightTextBox;
        private Button calculateButton;
        private Label resultLabel;

        public Form1()
        {
            InitializeForm();
        }

        private void InitializeForm()
        {
            weightTextBox = new TextBox();
            heightTextBox = new TextBox();
            calculateButton = new Button();
            resultLabel = new Label();

            weightTextBox.Location = new System.Drawing.Point(10, 10);
            weightTextBox.Size = new System.Drawing.Size(100, 20);

            heightTextBox.Location = new System.Drawing.Point(10, 40);
            heightTextBox.Size = new System.Drawing.Size(100, 20);

            calculateButton.Location = new System.Drawing.Point(10, 70);
            calculateButton.Size = new System.Drawing.Size(100, 30);
            calculateButton.Text = "Calculate BMI";
            calculateButton.Click += CalculateButton_Click;

            resultLabel.Location = new System.Drawing.Point(10, 110);
            resultLabel.Size = new System.Drawing.Size(200, 50);
            resultLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;

            Controls.Add(weightTextBox);
            Controls.Add(heightTextBox);
            Controls.Add(calculateButton);
            Controls.Add(resultLabel);
        }

        private void CalculateButton_Click(object sender, EventArgs e)
        {
            if (double.TryParse(weightTextBox.Text, out double weight) &&
                double.TryParse(heightTextBox.Text, out double height))
            {
                double bmi = (weight * 703) / (height * height);

                string weightCategory;
                if (bmi < 18.5)
                {
                    weightCategory = "Underweight";
                }
                else if (bmi >= 18.5 && bmi <= 25)
                {
                    weightCategory = "Optimal weight";
                }
                else
                {
                    weightCategory = "Overweight";
                }

                resultLabel.Text = $"BMI: {bmi:F2}\nWeight Category: {weightCategory}";
            }
            else
            {
                MessageBox.Show("Please enter valid weight and height values.", "Invalid Input", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
        }
    }
}