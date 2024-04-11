using System;
using System.Windows.Forms;

namespace cs_wfa1
{
    public partial class Form1 : Form
    {
        private TextBox speedTextBox;
        private Button calculateButton;
        private Label distanceLabel;

        public Form1()
        {
            InitializeComponent();
        }

        private void InitializeComponent()
        {
            speedTextBox = new TextBox();
            calculateButton = new Button();
            distanceLabel = new Label();

            speedTextBox.Location = new System.Drawing.Point(10, 10);
            speedTextBox.Size = new System.Drawing.Size(100, 20);

            calculateButton.Location = new System.Drawing.Point(10, 40);
            calculateButton.Size = new System.Drawing.Size(100, 30);
            calculateButton.Text = "Calculate";
            calculateButton.Click += CalculateButton_Click;

            distanceLabel.Location = new System.Drawing.Point(10, 80);
            distanceLabel.Size = new System.Drawing.Size(200, 20);
            distanceLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;

            Controls.Add(speedTextBox);
            Controls.Add(calculateButton);
            Controls.Add(distanceLabel);
        }

        private void CalculateButton_Click(object sender, EventArgs e)
        {
            if (double.TryParse(speedTextBox.Text, out double speed))
            {
                double distance5Hours = speed * 5;
                double distance8Hours = speed * 8;
                double distance12Hours = speed * 12;

                distanceLabel.Text = $"Distance in 5 hours: {distance5Hours} miles" +
                                      $"\nDistance in 8 hours: {distance8Hours} miles" +
                                      $"\nDistance in 12 hours: {distance12Hours} miles";
            }
            else
            {
                MessageBox.Show("Please enter a valid speed in miles per hour.", "Invalid Input", MessageBoxButtons.OK, MessageBoxIcon.Warning);
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