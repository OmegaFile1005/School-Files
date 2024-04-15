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

    }
}
*/