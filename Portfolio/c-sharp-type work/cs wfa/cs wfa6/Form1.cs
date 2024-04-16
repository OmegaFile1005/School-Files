namespace cs_wfa6
{
    public partial class Form1 : Form
    {

        public Form1()
        {
            InitializeComponent();
        }
        private int totalCal = 0;

        private void PictureBox1_Click(object sender, EventArgs e)
        {
            PictureBox1 = new PictureBox
            {
                Location = new Point(120, 80),
                Size = new Size(100, 100),
                Image = Image.FromFile("C:\\Users\\lwit.PROD.003\\OneDrive\\Documents\\School Files\\Portfolio\\c-sharp-type work\\cs wfa\\cs wfa6\\Images\\apple.jfif"),
                SizeMode = PictureBoxSizeMode.StretchImage
            };

            int appleValue = 115;

            PictureBox1.Click += (s, ev) =>
            {
                totalCal += appleValue;
            };
        }
    }
}