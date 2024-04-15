using System;
using System.Windows.Forms;

namespace cs_wfa4
{
    public partial class Form1 : Form
    {
        private TextBox temperatureTextBox;
        private Button toFahrenheitButton;
        private Button toCelsiusButton;
        private Label resultLabel;

        public Form1()
        {
            InitializeForm();
        }

        private void InitializeForm()
        {
            temperatureTextBox = new TextBox();
            toFahrenheitButton = new Button();
            toCelsiusButton = new Button();
            resultLabel = new Label();

            temperatureTextBox.Location = new System.Drawing.Point(10, 10);
            temperatureTextBox.Size = new System.Drawing.Size(100, 20);

            toFahrenheitButton.Location = new System.Drawing.Point(10, 40);
            toFahrenheitButton.Size = new System.Drawing.Size(120, 30);
            toFahrenheitButton.Text = "Convert to Fahrenheit";
            toFahrenheitButton.Click += ToFahrenheitButton_Click;

            toCelsiusButton.Location = new System.Drawing.Point(140, 40);
            toCelsiusButton.Size = new System.Drawing.Size(120, 30);
            toCelsiusButton.Text = "Convert to Celsius";
            toCelsiusButton.Click += ToCelsiusButton_Click;

            resultLabel.Location = new System.Drawing.Point(10, 80);
            resultLabel.Size = new System.Drawing.Size(250, 20);
            resultLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;

            Controls.Add(temperatureTextBox);
            Controls.Add(toFahrenheitButton);
            Controls.Add(toCelsiusButton);
            Controls.Add(resultLabel);
        }

        private void ToFahrenheitButton_Click(object sender, EventArgs e)
        {
            if (double.TryParse(temperatureTextBox.Text, out double celsius))
            {
                double fahrenheit = (celsius * 9 / 5) + 32;
                resultLabel.Text = $"{celsius}°C is equal to {fahrenheit}°F";
            }
            else
            {
                MessageBox.Show("Please enter a valid temperature in Celsius.", "Invalid Input", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
        }

        private void ToCelsiusButton_Click(object sender, EventArgs e)
        {
            if (double.TryParse(temperatureTextBox.Text, out double fahrenheit))
            {
                double celsius = (fahrenheit - 32) * 5 / 9;
                resultLabel.Text = $"{fahrenheit}°F is equal to {celsius}°C";
            }
            else
            {
                MessageBox.Show("Please enter a valid temperature in Fahrenheit.", "Invalid Input", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
        }
    }
}