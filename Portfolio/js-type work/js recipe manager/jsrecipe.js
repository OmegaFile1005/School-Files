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
                    if (input.value === '') {
                        ignore = true;
                    } else {
                        input.disabled = false;
                        input.style.border = '1px solid green';
                    }
                }
            }
        })
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
    document.getElementById('recipeTable').style.display = 'none';
    document.getElementById('newRecipe').style.display = 'block';

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.value = '';
    })

    document.getElementById('recipePhoto').disabled = true;
}

function showRecipes(recipes) {
    const recipeTable = document.getElementById('recipeTable');
    recipeTable.style.display = 'block';
    recipeTable.innerHTML = '';

    recipes.forEach((recipe, index) => {
        const { name, instructions, cookTime, picture } = recipe;
        const row = document.createElement('tr');
        row.classList.add('recipe');

        row.innerHTML = `
            <td>${name}</td>
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