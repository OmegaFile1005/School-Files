using System;
using System.Collections.Generic;
using System.Drawing;
using System.Windows.Forms;

namespace cs_wfa6
{
    public partial class Form1 : Form
    {
        private Dictionary<PictureBox, int> fruitCalories;
        private int totalCalories;
        private Label totalCaloriesLabel;
        private Button resetButton;
        private PictureBox pictureBoxBanana;
        private PictureBox pictureBoxApple;
        private PictureBox pictureBoxOrange;
        private PictureBox pictureBoxPear;

        public Form1()
        {
            InitializeForm();
            InitializeFruitCalories();
        }

        private int GetCaloriesByPictureBox(PictureBox pictureBox)
        {
            string imagePath = System.IO.Path.Combine(Application.StartupPath, "Images");

            switch (pictureBox.Name)
            {
                case "pictureBoxBanana":
                    return GetCaloriesFromFile(imagePath, "banana.jpg");

                case "pictureBoxApple":
                    return GetCaloriesFromFile(imagePath, "apple.jpg");

                case "pictureBoxOrange":
                    return GetCaloriesFromFile(imagePath, "orange.jpg");

                case "pictureBoxPear":
                    return GetCaloriesFromFile(imagePath, "pear.jpg");

                default:
                    return 0;
            }
        }

        private int GetCaloriesFromFile(string imagePath, string fileName)
        {
            string filePath = System.IO.Path.Combine(imagePath, fileName);

            var caloriesDictionary = new Dictionary<string, int>()
            {
                { "banana.jpg", 115 },
                { "apple.jpg", 80 },
                { "orange.jpg", 90 },
                { "pear.jpg", 120 }
            };

            if (caloriesDictionary.ContainsKey(fileName))
            {
                return caloriesDictionary[fileName];
            }

            return 0;
        }

        private void InitializeFruitCalories()
        {
            fruitCalories = new Dictionary<PictureBox, int>
            {
                { pictureBoxBanana, 115 },
                { pictureBoxApple, 80 },
                { pictureBoxOrange, 90 },
                { pictureBoxPear, 120 }
            };
        }

        private void UpdateTotalCalories()
        {
            totalCaloriesLabel.Text = $"Total Calories: {totalCalories}";
        }

        private void PictureBox_Click(object sender, EventArgs e)
        {
            PictureBox pictureBox = (PictureBox)sender;
            int calories = fruitCalories[pictureBox];
            totalCalories += calories;
            UpdateTotalCalories();
        }

        private void ResetButton_Click(object sender, EventArgs e)
        {
            totalCalories = 0;
            UpdateTotalCalories();
        }

        private void InitializeForm()
        {
            totalCaloriesLabel = new Label();
            resetButton = new Button();

            totalCaloriesLabel.Location = new Point(10, 10);
            totalCaloriesLabel.Size = new Size(200, 20);
            totalCaloriesLabel.Text = "Total Calories: 0";

            resetButton.Location = new Point(10, 40);
            resetButton.Size = new Size(100, 30);
            resetButton.Text = "Reset";
            resetButton.Click += ResetButton_Click;

            pictureBoxBanana = new PictureBox
            {
                Name = "pictureBoxBanana",
                Location = new Point(10, 80),
                Size = new Size(150, 150),
                Image = Image.FromFile("Portfolio\\c-sharp-type work\\cs wfa\\cs wfa6\\Images\\banana.jpg"),
                SizeMode = PictureBoxSizeMode.StretchImage
            };
            pictureBoxBanana.Click += PictureBox_Click;

            pictureBoxApple = new PictureBox
            {
                Name = "pictureBoxApple",
                Location = new Point(120, 80),
                Size = new Size(150, 150),
                Image = Image.FromFile("Images/apple.jpg"),
                SizeMode = PictureBoxSizeMode.StretchImage
            };
            pictureBoxApple.Click += PictureBox_Click;

            pictureBoxOrange = new PictureBox
            {
                Name = "pictureBoxOrange",
                Location = new Point(230, 80),
                Size = new Size(150, 150),
                Image = Image.FromFile("Images/orange.jpg"),
                SizeMode = PictureBoxSizeMode.StretchImage
            };
            pictureBoxOrange.Click += PictureBox_Click;

            pictureBoxPear = new PictureBox
            {
                Name = "pictureBoxPear",
                Location = new Point(340, 80),
                Size = new Size(150, 150),
                Image = Image.FromFile("Images/pear.jpg"),
                SizeMode = PictureBoxSizeMode.StretchImage
            };
            pictureBoxPear.Click += PictureBox_Click;

            Controls.Add(totalCaloriesLabel);
            Controls.Add(resetButton);
            Controls.Add(pictureBoxBanana);
            Controls.Add(pictureBoxApple);
            Controls.Add(pictureBoxOrange);
            Controls.Add(pictureBoxPear);
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            InitializeForm();
        }
    }
}