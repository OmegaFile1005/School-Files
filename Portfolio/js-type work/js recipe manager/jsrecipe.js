function importRecipe() {
    const fileInput = document.getElementById('recipePhoto');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const textArea = document.getElementById('recipePicture');
            textArea.value = e.target.result;
        };
        reader.readAsText(file);
    }

    fileInput.value = '';
    document.getElementById('recipePhoto').disabled = true;
}

function submitRecipe() {
    const name = document.getElementById('recipeName').value;
    const instructions = document.getElementById('recipeInstructions').value;
    const picture = document.getElementById('recipePicture').value;
    const cookTime = document.getElementById('cookTime').value;

    if (name === '' || instructions === '' || picture === '' || cookTime === '') {
        alert('Please fill in all fields');
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (input.value === '') {
                input.style.border = '1px solid red';
                input.style.boxShadow = '0 0 10px red';
            } else {
                if (input.id === 'recipePhoto') {
                    if (input.files.length === 0) {
                        ignore = true;
                    }
                }
            }
        });
        return;
    }

    const recipe = {
        name,
        instructions,
        picture,
        cookTime,
        recipePhoto
    }

    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

function newRecipe() {
    document.getElementById('recipeList').style.display = 'none';
    document.getElementById('newRecipe').style.display = 'block';

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.value = '';
    })

    document.getElementById('recipePhoto').disabled = true;
}

function showRecipes(recipies) {
    const recipeList = document.getElementById('recipeList');
    recipeList.style.display = 'block';

    recipies.forEach((recipe, index) => {
        const row = document.createElement('tr');
        row.classList.add('recipe');

        const name = document.createElement('td');
        name.innerHTML = recipe.name;
        const instructions = document.createElement('td');
        instructions.innerHTML = recipe.instructions;
        const cookTime = document.createElement('td');
        cookTime.innerHTML = recipe.cookTime;
        const picture = document.createElement('td');
        picture.innerHTML = recipe.picture;
        const action = document.createElement('td');
        action.innerHTML = `<i class="bi bi-trash"></i>`


        row.appendChild(name);
        row.appendChild(instructions);
        row.appendChild(cookTime);


    })
}