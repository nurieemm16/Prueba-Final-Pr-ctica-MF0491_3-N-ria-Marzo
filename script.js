//Autora Núria Marzo

//Clase padre

class Food {
    constructor(name, calories, protein, carbs, fats) {
        this.name = name;
        this.calories = calories;
        this.protein = protein;
        this.carbs = carbs;
        this.fats = fats;
    }
}

//Extiende de padre food 
class Huevo extends Food {
    constructor(name, calories, protein, carbs, fats, conservacion) {
        super(name, calories, protein, carbs, fats);
        this.conservacion = conservacion; 
    }
}

//Alimentos con propiedad comunes:nomnre, calorías, proteinas, carbohidratos y lípidos/grasas
const fresa = new Food('fresa', 27, 0.9, 5.6, 0.4,);
const mango = new Food('mango', 73, 0.7, 16.8, 0.4);
const bistec = new Food('bistec', 92, 20.7, 0.5, 1);
const merluza = new Food('merluza', 71, 17, 0.3, 0) ;
const huevo = new Huevo('huevo', 156, 13, 0, 11.1, 'fresco');


function calcularNutricion() {
    const foodSelect = document.getElementById('food');
    const selectedFood = foodSelect.options[foodSelect.selectedIndex].value;
    const quantity = parseFloat(document.getElementById('cantidad').value);
      //Gestión/manejo de error:
      if (isNaN(quantity) || quantity <= 0) {
        alert("Por favor, ingrese una cantidad válida mayor que cero.");
        return;
    }
    
    let food; 

    switch (selectedFood) { //Hacer switch  para elegir el distinto tipo de food
        case 'fresa':
            food = fresa;
            break;
        case 'mango':
            food = mango;
            break;
        case 'bistec':
            food = bistec;
            break;
        case 'merluza':
            food = merluza;
            break;
        case 'Huevo': 
            food = huevo; 
            break;
        default:
            food = new Food('Desconocido', 0, 0, 0, 0);
    }
// Calcular las cantidades
    const calories = (food.calories * quantity) / 100;
    const protein = (food.protein * quantity) / 100;
    const carbs = (food.carbs * quantity) / 100;
    const fats = (food.fats * quantity) / 100;



    const resultElement = document.getElementById('resultado');
    resultElement.innerHTML = `
        <h2>Resultado:</h2>
        <p>Calorías: ${calories.toFixed(2)}</p>
        <p>Proteínas: ${protein.toFixed(2)}g</p>
        <p>Carbohidratos: ${carbs.toFixed(2)}g</p>
        <p>Grasas: ${fats.toFixed(2)}g</p>
        <p>Conservación: ${food.conservacion}</p> 
    `;
}