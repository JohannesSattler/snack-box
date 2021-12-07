const data = require('./snacks-raw-page.json')

const allProducts = []

console.log(data.products.length)

const products = data.products
products.forEach(product => {
    // palm oil: en:may-contain-palm-oil |  en:palm-oil-content-unknown | en:palm-oil | palm-oil-free
    // vegan: en:non-vegan  |  en:vegan-status-unknown |  maybe-vegan | vegan
    // vegetarian: vegetarian-status-unknown | vegetarian | non-vegetarian | maybe-vegetarian

    const ingredientsTags = product.ingredients_analysis_tags

    const palmOilConverter = {
        'en:palm-oil-free': false,
        'en:palm-oil-content-unknown': "unknown",
        'en:may-contain-palm-oil': "unknown",
        'en:palm-oil': true,
    }

    const veganConverter = {
        'en:non-vegan': false,
        'en:vegan-status-unknown': "unknown",
        'en:maybe-vegan': "unknown",
        'en:vegan': true,
    }

    const vegetarianConverter = {
        'en:non-vegetarian': false,
        'en:vegetarian-status-unknown': "unknown",
        'en:maybe-vegetarian': "unknown",
        'en:vegetarian': true,
    }

    let palmOil = "unknown"
    let vegan = "unknown"
    let vegetarian = "unknown"
    
    if(ingredientsTags) {
        palmOil = palmOilConverter[ingredientsTags[0]]
        vegan = veganConverter[ingredientsTags[1]]
        vegetarian = vegetarianConverter[ingredientsTags[2]]
    }

    let sweet = false
    let salty = false

    const category = product.categories_hierarchy

    if(category) {
        sweet = category.includes('en:sweet-snacks')
        salty = category.includes('en:salty-snacks')
    }

    const labels = product.labels_hierarchy

    let organic = false

    if(labels) {
        organic = labels.includes('en:organic')
    }
    
    const nutritentLevels = product.nutrient_levels

    const fat = nutritentLevels.fat
    const salt = nutritentLevels.salt
    const saturatedFat = nutritentLevels['saturated-fat'] || 'moderate'
    const sugars = nutritentLevels.sugars

    const nutrition = product.nutriments
    const nutriScore = product.nutriscore_grade || ''

    const nutrtionTable = {
        energy: nutrition['energy-kcal'] || 0,
        energyUnit: 'kcal',
        fat: nutrition.fat || 0,
        fatUnit: 'g',
        salt: nutrition.salt || 0,
        saltUnit: 'g',
        sugars: nutrition.sugars || 0,
        sugarsUnit: 'g',
        proteins: nutrition.proteins || 0,
        proteinsUnit: 'g',
        carbohydrates: nutrition.carbohydrates || 0,
        carbohydratesUnit: 'g',
        calcium: nutrition.calcium || 0,
        calciumUnit: 'mg',
        fiber: nutrition.fiber || 0,
        fiberUnit: 'g',
    }

    const ingredients = product['ingredients_text_en']

    const newProduct = {
        name: product.product_name_en || "",
        brand: product.brands || "",
        image: product.image_url || "",
        palmOil,
        vegan,
        vegetarian,
        sweet,
        salty,
        organic,
        fat,
        salt,
        saturatedFat,
        sugars,
        ingredients,
        nutriScore,
        nutrtionTable,
    }

    if(newProduct.image && newProduct.name) {
        allProducts.push(newProduct)
    }

});
  
console.log(allProducts)