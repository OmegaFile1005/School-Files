using System;
using System.Collections.Generic;
using System.Drawing;
using System.Windows.Forms;

namespace CalorieCounterApp
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

            pictureBoxBanana = new PictureBox();
            pictureBoxBanana.Location = new Point(10, 80);
            pictureBoxBanana.Size = new Size(100, 100);
            pictureBoxBanana.Image = Image.FromFile("Images/banana.jpg");
            pictureBoxBanana.SizeMode = PictureBoxSizeMode.StretchImage;
            pictureBoxBanana.Click += PictureBox_Click;

            pictureBoxApple = new PictureBox();
            pictureBoxApple.Location = new Point(120, 80);
            pictureBoxApple.Size = new Size(100, 100);
            pictureBoxApple.Image = Image.FromFile("Images/apple.jpg");
            pictureBoxApple.SizeMode = PictureBoxSizeMode.StretchImage;
            pictureBoxApple.Click += PictureBox_Click;

            pictureBoxOrange = new PictureBox();
            pictureBoxOrange.Location = new Point(230, 80);
            pictureBoxOrange.Size = new Size(100, 100);
            pictureBoxOrange.Image = Image.FromFile("Images/orange.jpg");
            pictureBoxOrange.SizeMode = PictureBoxSizeMode.StretchImage;
            pictureBoxOrange.Click += PictureBox_Click;

            pictureBoxPear = new PictureBox();
            pictureBoxPear.Location = new Point(340, 80);
            pictureBoxPear.Size = new Size(100, 100);
            pictureBoxPear.Image = Image.FromFile("Images/pear.jpg");
            pictureBoxPear.SizeMode = PictureBoxSizeMode.StretchImage;
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