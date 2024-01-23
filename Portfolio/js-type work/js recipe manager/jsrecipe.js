const recipename = document.getElementById('recipeName').value;
const instructions = document.getElementById('recipeInstructions').value;
const picture = document.getElementById('recipePicture').value;
const cookTime = document.getElementById('cookTime').value * 1;

const recipe = {
    recipename,
    instructions,
    cookTime,
    picture,
}

function importRecipe() {
    const fileInput = document.getElementById('recipePhoto');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const image = document.getElementById('recipePicture');
            image.src = e.target.result;
            recipe.picture = e.target.result;
            image.style.fontSizeAdjust = '100%';
        };
        reader.readAsDataURL(file);
    }

    document.getElementById('recipePhoto').setAttribute('disabled', true);
    fileInput.value = '';
}

function submitRecipe() {
    if (recipename === '' || instructions === '' || picture === '' || cookTime === '') {
        alert('Please fill in all fields');
        return;
    }

    const recipes = JSON.parse(localStorage.getItem('recipes'));
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

function newRecipe() {
    document.getElementById('recipeTable').style.display = 'none';
    document.getElementById('newRecipe').style.display = 'block';

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.value = '';
    })

    document.getElementById('recipePicture').disabled = true;
}

function showRecipes(recipes) {
    const recipeTable = document.getElementById('recipeTable');
    recipeTable.style.display = 'block';
    recipeTable.innerHTML = '';

    recipes.forEach((recipe, index) => {
        const { recipename, instructions, cookTime, picture } = recipe;
        const row = document.createElement('tr');
        row.classList.add('recipe');

        row.innerHTML = `
            <td>${recipename}</td>
            <td>${instructions}</td>
            <td>${cookTime}</td>
            <td>${picture}</td>
            <td><i class="bi bi-trash" style="color: blue" onclick="deleteRecipe(${index})"></i></td>
        `;

        recipeTable.appendChild(row);
    });
}

function deleteRecipe(index) {
    const recipes = JSON.parse(localStorage.getItem('recipes'));
    recipes.splice(index, 1);
    localStorage.setItem('recipes', JSON.stringify(recipes));
}