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
            image.style.fontSizeAdjust = '100%';
            image.alt = file.name;
        };
        reader.readAsDataURL(file);
    }

    document.getElementById('recipePhoto').setAttribute('disabled', true);
    fileInput.value = '';
}

function submitRecipe() {
    const recipeName = document.getElementById('recipeName').value;
    const instructions = document.getElementById('recipeInstructions').value;
    const cookTime = document.getElementById('cookTime').value * 1;
    const image = document.getElementById('recipePicture');

    if (!recipeName || !instructions || !cookTime) {
        alert('Please fill in all fields');
        return;
    }

    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    if (recipes.find(recipe => recipe.recipeName === recipeName)) {
        alert('Recipe already exists');
        return;
    }

    if (!image.src || image.src.endsWith('flourslaphands.jpeg')) {
        alert('Please add a picture');
        return;
    }

    recipe.recipename = recipeName;
    recipe.instructions = instructions;
    recipe.cookTime = cookTime;
    recipe.picture = image.src;

    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));

    document.getElementById('recipeForm').reset();
    image.src = 'flourslaphands.jpeg';
}

function newRecipe() {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.value = '';
    });

    document.getElementById('recipeList').style.display = 'none';
    document.getElementById('recipePicture').src = 'flourslaphands.jpeg';
    document.getElementById('recipePhoto').removeAttribute('disabled');
}

function showRecipes() {
    document.getElementById('recipeList').removeAttribute('style');
    const recipes = JSON.parse(localStorage.getItem('recipes'));
    let recipeTableBody = document.getElementById('recipeTbody');
    recipeTableBody.innerHTML = "";

    if (!recipes) {
        document.getElementById('recipeList').style.display = 'none';
        return;
    }

    recipes.forEach((recipe, index) => {
        const recipeRow = document.createElement('tr');
        recipeRow.innerHTML += `
            <td>${recipe.recipename}</td>
            <td>${recipe.instructions}</td>
            <td>${recipe.cookTime}</td>
            <td><img src="${recipe.picture}" alt="recipe${index + 1}" style="width: 100px; height: 100px"></td>
            <td><i class="bi bi-trash lg" style="color: blue" onclick="deleteRecipe(${index})"></i></td>
        `;

        recipeTableBody.appendChild(recipeRow);
    });
}

function deleteRecipe(index) {
    console.log(index);
    const recipes = JSON.parse(localStorage.getItem('recipes'));
    recipes.splice(index, 1);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    showRecipes();
}