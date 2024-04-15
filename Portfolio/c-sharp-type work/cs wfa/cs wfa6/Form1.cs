namespace cs_wfa6
{
    public partial class Form1 : Form
    {

        public Form1()
        {
            InitializeComponent();
        }

        private void PictureBox1_Click(object sender, EventArgs e)
        {

        }
    }
}


/* namespace cs_wfa6
{
    public partial class Form1 : Form
    {
=======
<<<<<<< HEAD
>>>>>>> 977d5a7910b54579acc70d21939ad1322b86bd72
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
                [pictureBoxBanana] = 115,
                [pictureBoxApple] = 80,
                [pictureBoxOrange] = 90,
                [pictureBoxPear] = 120
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

<<<<<<< HEAD
=======
        private void InitializeForm()
        {
            totalCaloriesLabel = new Label();
            resetButton = new Button();

            totalCaloriesLabel.Location = new System.Drawing.Point(10, 10);
            totalCaloriesLabel.Size = new System.Drawing.Size(200, 20);
            totalCaloriesLabel.Text = "Total Calories: 0";

            resetButton.Location = new System.Drawing.Point(10, 40);
            resetButton.Size = new System.Drawing.Size(100, 30);
            resetButton.Text = "Reset";
            resetButton.Click += ResetButton_Click;

            pictureBoxBanana = new PictureBox();
            pictureBoxBanana.Location = new Point(10, 80);
            pictureBoxBanana.Size = new Size(100, 100);
            pictureBoxBanana.Image = Image.FromFile("C:\\Users\\lwit.PROD.003\\OneDrive\\Documents\\School Files\\Portfolio\\c-sharp-type work\\cs wfa\\cs wfa6\\Images\\banana.jpg");
            pictureBoxBanana.SizeMode = PictureBoxSizeMode.StretchImage;
            pictureBoxBanana.Click += PictureBox_Click;

            pictureBoxApple = new PictureBox();
            pictureBoxApple.Location = new Point(120, 80);
            pictureBoxApple.Size = new Size(100, 100);
            pictureBoxApple.Image = Image.FromFile("C:\\Users\\lwit.PROD.003\\OneDrive\\Documents\\School Files\\Portfolio\\c-sharp-type work\\cs wfa\\cs wfa6\\Images\\apple.jfif");
            pictureBoxApple.SizeMode = PictureBoxSizeMode.StretchImage;
            pictureBoxApple.Click += PictureBox_Click;

            pictureBoxOrange = new PictureBox();
            pictureBoxOrange.Location = new Point(230, 80);
            pictureBoxOrange.Size = new Size(100, 100);
            pictureBoxOrange.Image = Image.FromFile("C:\\Users\\lwit.PROD.003\\OneDrive\\Documents\\School Files\\Portfolio\\c-sharp-type work\\cs wfa\\cs wfa6\\Images\\orange.jfif");
            pictureBoxOrange.SizeMode = PictureBoxSizeMode.StretchImage;
            pictureBoxOrange.Click += PictureBox_Click;

            pictureBoxPear = new PictureBox();
            pictureBoxPear.Location = new Point(340, 80);
            pictureBoxPear.Size = new Size(100, 100);
            pictureBoxPear.Image = Image.FromFile("C:\\Users\\lwit.PROD.003\\OneDrive\\Documents\\School Files\\Portfolio\\c-sharp-type work\\cs wfa\\cs wfa6\\Images\\pear.jpg");
            pictureBoxPear.SizeMode = PictureBoxSizeMode.StretchImage;
            pictureBoxPear.Click += PictureBox_Click;

            Controls.Add(totalCaloriesLabel);
            Controls.Add(resetButton);
            Controls.Add(pictureBoxBanana);
            Controls.Add(pictureBoxApple);
            Controls.Add(pictureBoxOrange);
            Controls.Add(pictureBoxPear);
=======
        public Form1()
        {
            InitializeComponent();
>>>>>>> 54347f444a607adc2dff44b5e7a9ea01f7180c45
        }
>>>>>>> 977d5a7910b54579acc70d21939ad1322b86bd72
    }
}
*/