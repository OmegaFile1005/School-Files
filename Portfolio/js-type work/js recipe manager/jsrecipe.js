const recipe = {
    recipename: '',
    instructions: '',
    cookTime: 0,
    picture: '',
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
    const recipename = document.getElementById('recipeName').value;
    const instructions = document.getElementById('recipeInstructions').value;
    const cookTime = document.getElementById('cookTime').value * 1;

    if (recipename === '' || instructions === '' || cookTime === '') {
        alert('Please fill in all fields');
        return;
    }

    recipe.recipename = recipename;
    recipe.instructions = instructions;
    recipe.cookTime = cookTime;

    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

function newRecipe() {
    document.getElementById('recipeTable').style.display = 'none';
    document.getElementById('recipeList').style.display = 'block';

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.value = '';
    })

    document.getElementById('recipePicture').disabled = true;
}

function showRecipes() {
    const recipeTable = document.getElementById('recipeTable');
    recipeTable.innerHTML = '';
    const recipes = JSON.parse(localStorage.getItem('recipes'));
    const recipeRow = document.createElement('tr');

    recipes.forEach((recipe, index) => {
        recipeRow.classList.add('recipe');
        recipeRow.innerHTML = `
            <td>${recipe.recipename}</td>
            <td>${recipe.instructions}</td>
            <td>${recipe.cookTime}</td>
            <td><img src="${recipe.picture}" alt="recipe" id="recipePicture"></td>
            <td><i class="bi bi-trash" style="color: blue" onclick="deleteRecipe(${index})"></i></td>
        `;

        const recipeTable = document.getElementById('recipeTable');
        recipeTable.appendChild(recipeRow);
        document.getElementById('recipeList').style.display = 'block';
    });
}

function deleteRecipe(index) {
    console.log(index);
    const recipes = JSON.parse(localStorage.getItem('recipes'));
    recipes.splice(index, 1);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    showRecipes();
}