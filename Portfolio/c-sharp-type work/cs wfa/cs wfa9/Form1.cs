using System;
using System.Collections.Generic;
using System.Windows.Forms;

namespace cs_wfa9
{
    public partial class Form1 : Form
    {
        private Dictionary<string, Workshop> workshops;
        private Dictionary<string, int> lodgingFees;

        private ListBox workshopListBox;
        private ListBox locationListBox;
        private Button calculateButton;
        private Label registrationLabel;
        private Label lodgingLabel;
        private Label totalLabel;

        public Form1()
        {
            InitializeForm();
            InitializeWorkshops();
            InitializeLocations();
        }

        private void InitializeWorkshops()
        {
            workshops = new Dictionary<string, Workshop>();
            workshops["Handling Stress"] = new Workshop("Handling Stress", 3, 1000);
            workshops["Time Management"] = new Workshop("Time Management", 3, 800);
            workshops["Supervision Skills"] = new Workshop("Supervision Skills", 3, 1500);
            workshops["Negotiation"] = new Workshop("Negotiation", 5, 1300);
            workshops["How to Interview"] = new Workshop("How to Interview", 1, 500);
        }

        private void InitializeLocations()
        {
            lodgingFees = new Dictionary<string, int>();
            lodgingFees["Austin"] = 150;
            lodgingFees["Chicago"] = 225;
            lodgingFees["Dallas"] = 175;
            lodgingFees["Orlando"] = 300;
            lodgingFees["Phoenix"] = 175;
            lodgingFees["Raleigh"] = 150;
        }

        private void CalculateButton_Click(object sender, EventArgs e)
        {
            string selectedWorkshop = workshopListBox.SelectedItem.ToString();
            string selectedLocation = locationListBox.SelectedItem.ToString();

            Workshop workshop = workshops[selectedWorkshop];
            int lodgingFee = lodgingFees[selectedLocation];

            int registrationCost = workshop.RegistrationFee;
            int lodgingCost = lodgingFee * workshop.NumberOfDays;
            int totalCost = registrationCost + lodgingCost;

            registrationLabel.Text = $"Registration Cost: ${registrationCost}";
            lodgingLabel.Text = $"Lodging Cost: ${lodgingCost}";
            totalLabel.Text = $"Total Cost: ${totalCost}";
        }

        private void InitializeForm()
        {
            workshopListBox = new ListBox();
            locationListBox = new ListBox();
            calculateButton = new Button();
            registrationLabel = new Label();
            lodgingLabel = new Label();
            totalLabel = new Label();

            workshopListBox.Location = new System.Drawing.Point(10, 10);
            workshopListBox.Size = new System.Drawing.Size(200, 120);
            workshopListBox.Items.AddRange(new object[] {
                "Handling Stress",
                "Time Management",
                "Supervision Skills",
                "Negotiation",
                "How to Interview"
            });

            locationListBox.Location = new System.Drawing.Point(220, 10);
            locationListBox.Size = new System.Drawing.Size(200, 120);
            locationListBox.Items.AddRange(new object[] {
                "Austin",
                "Chicago",
                "Dallas",
                "Orlando",
                "Phoenix",
                "Raleigh"
            });

            calculateButton.Location = new System.Drawing.Point(160, 140);
            calculateButton.Size = new System.Drawing.Size(100, 30);
            calculateButton.Text = "Calculate";
            calculateButton.Click += CalculateButton_Click;

            registrationLabel.Location = new System.Drawing.Point(10, 180);
            registrationLabel.Size = new System.Drawing.Size(300, 20);
            registrationLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;

            lodgingLabel.Location = new System.Drawing.Point(10, 195);
            lodgingLabel.Size = new System.Drawing.Size(300, 20);
            lodgingLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;

            totalLabel.Location = new System.Drawing.Point(10, 210);
            totalLabel.Size = new System.Drawing.Size(300, 20);
            totalLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;

            Controls.Add(workshopListBox);
            Controls.Add(locationListBox);
            Controls.Add(calculateButton);
            Controls.Add(registrationLabel);
            Controls.Add(lodgingLabel);
            Controls.Add(totalLabel);
        }
    }

    public class Workshop
    {
        public string Name { get; set; }
        public int NumberOfDays { get; set; }
        public int RegistrationFee { get; set; }

        public Workshop(string name, int numberOfDays, int registrationFee)
        {
            Name = name;
            NumberOfDays = numberOfDays;
            RegistrationFee = registrationFee;
        }

        public override string ToString()
        {
            return Name;
        }
    }
}