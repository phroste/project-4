# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)
aglio = Recipe.create!([
  {name: "Spaghetti Aglio e Olio", instructions: ({list: ["In a pot of salted boiling water, cook spaghetti until just shy of al dente (about 1 minute less than the package directs).", "Reserve pasta cooking water.","Meanwhile, in a large skillet, combine 6 tablespoons oil and garlic.","Add pinch of red pepper flakes, if using.","Cook over medium heat until garlic is very lightly golden, about 5 minutes.","(Adjust heat as necessary to keep it gently sizzling.) 3.","Transfer pasta to skillet along with 1/2 cup pasta water, increase heat to high, and cook, stirring and tossing rapidly, until a creamy, emulsified sauce forms and coats the noodles.","Remove from heat, add remaining 2 tablespoons olive oil, and stir well to combine.","Mix in parsley, if using, and serve right away."]}).to_json, image: "https://www.seriouseats.com/images/2016/02/20160219-pasta-aglio-olio-vicky-wasik-4.jpg", user_id: 1} 
]);

curryRice = Recipe.create!([
  {name: "Homemade Japanese Curry Rice", instructions: ({list: [
  "For the Curry Spice Blend: In a spice grinder, combine coriander, cumin, fenugreek, cardamom, black peppercorns, fennel, cinnamon, cloves, star anise, and orange peel (if using) and grind to a fine powder.",
  "Empty into a small bowl and combine with turmeric, chili powder, and nutmeg, then set aside.",
  "For the Stew: Season chicken all over with salt and pepper.",
  "In a large Dutch oven, heat oil over medium-high heat until shimmering.",
  "Add chicken and cook, turning, until browned on both sides, about 6 minutes.",
  "Transfer chicken to a plate and set aside.",
  "Add onion to Dutch oven, lower heat to medium-low, and cook, stirring, until golden, about 10 minutes.",
  "Add carrots and cook for 4 minutes.",
  "Add chicken stock and dashi and bring to a simmer over high heat; reduce heat to maintain a simmer.",
  "Cut up chicken into bite-size pieces and add back to pot, along with any accumulated juices.",
  "Add potatoes and apple and cook at a gentle simmer until potatoes are tender and carrots can easily be pierced with a fork, about 15 minutes.",
  "Meanwhile, in a medium saucepan, melt butter over medium heat until foaming.",
  "Stir in flour and cook, stirring, until roux is a deep caramel brown, about 20 minutes.",
  "Stir in ginger and 3 tablespoons (25g) Curry Spice Blend and cook for 1 minute.",
  "Scrape roux into stew pot, stir well, and simmer until broth has thickened.",
  "Season with salt and pepper.",
  "Stir in peas, if using, and cook until heated through.",
  "Serve curry with cooked rice and pickled ginger and/or rakkyo."]}).to_json, image: "https://www.seriouseats.com/recipes/images/2017/12/20171127-japanese-curry-vicky-wasik-17-1500x1125.jpg", user_id: 1} 
]);

chickenSoup = Recipe.create!([
  {name: "Homemade Chicken Soup", instructions: ({list: ["Using a sharp knife, cut chicken breasts from breastbone and detach chicken legs from carcass. In a large soup pot or Dutch oven, cover chicken breasts, legs, and carcass with stock. Add garlic, thyme, and bay leaf.", "Heat stock over medium-high heat until temperature reaches between 150 and 160°F (66 and 71°C) on an instant-read thermometer; adjust heat to maintain stock temperature in the 150–160°F range. It's okay if the temperature bounces around a little, but try to keep it above 150 and below 170°F (77°C). Cook until thickest part of chicken breasts registers 150°F on an instant-read thermometer, about 1 hour. Remove chicken breasts and set aside.", "Bring soup to a simmer and continue cooking for 1 hour longer, skimming as needed. Discard thyme sprigs and bay leaf. Remove all chicken from pot. Pull meat from bones, shredding it into bite-size pieces; discard skin and bones. If broth is cloudy, you can strain it through a fine-mesh strainer to clarify it.", "Return all chicken to pot except breast meat and return to a simmer. Add diced carrot, turnip, onion (or leek), parsnip, and celery and cook until just tender, about 10 minutes. Season with salt and pepper. Add minced fresh herbs and remove from heat. Dice chicken breasts and stir into soup along with any accumulated juices. Serve hot."]}).to_json, image: "https://www.seriouseats.com/recipes/images/2017/12/20171115-chicken-soup-vicky-wasik-11-1500x1125.jpg", user_id: 1}
]);

bucatini = Recipe.create!([
  {name: "Bucatini all'Amatriciana", instructions: ({list: ["In a large skillet, heat olive oil over medium-high heat until shimmering. Add guanciale and pepper flakes and cook, stirring, until lightly browned, about 5 minutes. Add wine and cook, scraping up any browned bits on bottom of pan, until nearly evaporated, about 3 minutes.", "Add tomatoes and bring to a simmer. Season with salt and pepper.", "Meanwhile, boil pasta in salted water until just shy of al dente, about 1 minute less than package recommends. Using tongs, transfer pasta to sauce, along with 1/4 cup pasta cooking water. Cook over high heat, stirring and tossing rapidly, until pasta is al dente and sauce has thickened and begins to coat noodles. Remove from heat, add cheese, and stir rapidly to incorporate. Season to taste with more salt and pepper. Serve right away, passing more cheese at the table."]}).to_json, image: "https://www.seriouseats.com/recipes/images/2016/03/20160209-amatriciana-pasta-vicky-wasik-017-1500x1125.jpg", user_id: 1}
]);

blt = Recipe.create!([
  {name: "BLT Sandwich", instructions: ({list: ["Place a griddle or skillet over medium-low heat. Add bacon and place a bacon press, skillet, or masonry trowel on top of it to keep it flat as it cooks. Cook until lightly browned on first side, about 5 minutes, then flip, cover again, and continue cooking until bacon is browned on both sides and fat has rendered, about 3 minutes longer. Transfer bacon to a paper towel–lined plate and set aside.", "Place bread on same skillet or griddle and toast in bacon fat over medium-low heat, swirling occasionally, until evenly browned on first side. Flip and brown second side.", "Lay toasted bread on a work surface and spread mayonnaise on both top faces. Divide lettuce evenly between both pieces of bread. Layer tomato slices on one piece of bread and sprinkle generously with coarse salt and freshly ground pepper.", "Break bacon slices in half and layer them onto the sandwich in 2 layers of 3 half-slices each, alternating the orientation of bacon in each layer for more structural stability. Close sandwich and cut in half diagonally. Serve immediately."]}).to_json, image: "https://www.seriouseats.com/recipes/images/2016/08/20160812-BLT-bacon-lettuce-tomato-12-1500x1125.jpg", user_id: 1}
]);

cherrySalad = Recipe.create!([
  {name: "Cherry Jicama Salad with Lime and Macadamia Nuts", instructions: ({list: ["In a large salad or mixing bowl, combine cherries, jicama, basil, and macadamia nuts. Add lime zest and drizzle on just enough olive oil to lightly coat all ingredients. Toss well. Add lime juice to taste (should be bright and tart enough to contrast with the sweet cherries and rich olive oil), tossing well, and season with salt. Serve."]}).to_json, image: "https://www.seriouseats.com/recipes/images/2017/05/20170519-cherry-jicama-salad-vicky-wasik-3-1500x1125.jpg", user_id: 1}
]);

watermelonSalad = Recipe.create!([
  {name: "Watermelon Feta Mint Salad", instructions: ({list: ["Place watermelon chunks in a large bowl. Finely chop lemon zest. Add lemon juice and half of zest to bowl with watermelon. Add oil, mint, and arugula (if using) and toss until watermelon is evenly dressed. Season lightly to taste with salt and pepper.", "Transfer salad to a wide, shallow bowl or a large plate and spread out evenly. Crumble feta over the top. Sprinkle with remaining lemon zest. Drizzle with more olive oil and a few grinds of black pepper. Serve immediately."]}).to_json, image: "https://www.seriouseats.com/recipes/images/2016/06/20160620-watermelon-feta-mint-salad-21-1500x1125.jpg", user_id: 1}
]);

pancakes = Recipe.create!([
  {name: "Buttermilk Pancakes", instructions: ({list: ["For the Dry Pancake Mix: Combine flour, baking powder, baking soda, salt, and sugar in a medium bowl and whisk until homogenous. Transfer to an airtight container. The mix will stay good for 3 months.", "For each Batch of Pancakes: Place one batch of dry mix in a large bowl. In a medium clean bowl, whisk the egg whites until stiff peaks form. In a large bowl, whisk the egg yolks, buttermilk, and sour cream until homogenous. Slowly drizzle in the melted butter while whisking. Carefully fold in the egg whites with a rubber spatula until just combined. Pour the mixture over the dry mix and fold until just combined (there should still be plenty of lumps).", "Heat a large heavy-bottomed nonstick skillet over medium heat for 5 minutes (or use an electric griddle). Add a small amount of butter or oil to the griddle and spread with a paper towel until no visible butter or oil remains. Use a 1⁄4-cup dry measure to place 4 pancakes in the skillet and cook until bubbles start to appear on top and the bottoms are golden brown, about 2 minutes. Carefully flip the pancakes and cook on the second side until golden brown and completely set, about 2 minutes longer. Serve the pancakes immediately, or keep warm on a wire rack set on a rimmed baking sheet in a warm oven while you cook the remaining 3 batches. Serve with warm maple syrup and butter."]}).to_json, image: "https://www.seriouseats.com/recipes/images/2015/05/20150518-pancakes-new-kenji-1500x1125.jpg", user_id: 1}
]);

grilledCheese = Recipe.create!([
  {name: "Grilled Cheese Sandwich", instructions: ({list: ["Heat 1 tablepsoon butter in a 10-inch nonstick skillet over medium heat until foaming subsides. Add pineapple slices and cook, swirling pan occasionally, until softened and lightly browned, about 5 minutes total. Remove from skillet and set aside. Add ham and cook until lightly browned, about 3 minutes. Remove from skillet and set aside. Wipe out skillet with paper towels.", "Melt 2 teaspoons of butter in the skillet over medium heat until foaming subsides. Add both bread slices and cook, swirling occasionally, until pale golden brown on bottom side, about 2 minutes.", "Transfer to a cutting board toasted-side-up. Place one cheese slice on top of one slice of bread. Top with pinapple, ham, and second cheese slice. Close sandwich, with both toasted sides facing inwards.", "Melt 2 more teaspoons of butter in the skillet and reduce heat to medium low. Add sandwich and cook, swirling occasionally, until deep, even golden brown, about 5 minutes. Remove sandwich using a flexible metal spatula. Add the remaining 2 teaspoons butter. Return sandwich to skillet cooked-side up. Season with salt. Cook, swirling occasionally, until second side is deep, even golden brown and cheese is thoroughly melted, about 5 minutes. Serve immediately."]}).to_json, image: "https://www.seriouseats.com/recipes/images/2013/04/20130416-grilled-cheese-variations-2-16.jpg", user_id: 1}
]);

tamago = Recipe.create!([
  {name: "Tamago Kake Gohan (Japanese-Style Rice with Egg)", instructions: ({list: ["Place rice in a bowl and make a shallow indentation in the center. Break the whole egg into the center. Season with 1/2 teaspoon soy sauce, a pinch of salt, a pinch of MSG, 1/2 teaspoon mirin (if using), and a pinch of Hondashi (if using). Stir vigorously with chopsticks to incorporate egg; it should become pale yellow, frothy, and fluffy in texture. Taste and adjust seasonings as necessary. Sprinkle with furikake and nori (if using), make a small indentation in the top, and add the other egg yolk (if using). Serve immediately."]}).to_json, image: "https://www.seriouseats.com/recipes/images/2016/04/20140416-tamago-kake-gohan-recipe-14-1500x1125.jpg", user_id: 1}
]);

congee = Recipe.create!([
  {name: "Ground Pork and Corn Congee (Chinese Rice Porridge)", instructions: ({list: ["In a bowl, combine pork, ginger, garlic, Shaoxing wine, 1/4 teaspoon salt, sugar, soy sauce, cornstarch, and oil. Mix well and set aside in the refrigerator.", "In a large pot, add water and the washed rice. Cover the pot with a lid and bring it to a boil. When the water starts boiling, turn down the flame to a simmer and cover the pot. 15 minutes later, stir the rice making sure it’s not sticking to the bottom. Cover the pot again and stir the rice one more time 15 minutes after the first stir. Cover the pot one last time and simmer for 30 minutes. When the congee is done, it should look creamy and silky.", "Add the ground pork to the congee, breaking down the meat, and simmer with the lid off until the ground pork is cooked, 5 to 10 minutes.", "Turn off the flame, add the corn, taste and season the congee with salt. Serve immediately with chopped scallions on top (optional)."]}).to_json, image: "https://www.seriouseats.com/recipes/images/2014/08/20140828-ground-pork-and-corn-congee-shao-zhong-8-1500x1125.jpg", user_id: 1}
]);

bokchoy = Recipe.create!([
  {name: "Bok Choy with Black Bean Sauce", instructions: ({list: ["Bring a large pot of salted water to a boil. Add bok choy and blanch until bright green, about 40 seconds. Transfer to a colander set in the sink and let drain well.", "While bok choy drains, combine soy sauce, white pepper, sesame oil, cornstarch, and water in a small bowl. Set aside.", "Heat vegetable oil in a wok over high heat until lightly smoking. Add garlic and black beans and cook, stirring constantly, until fragrant, about 30 seconds. Add drained bok choy and continue to cook, stirring and tossing constantly, until bok choy is almost tender, about 2 minutes.", "Push bok choy up sides of wok. Stir sauce mixture with a fork and add it to the center. Let it come to a boil (about 20 seconds), then toss with the bok choy. Serve immediately."]}).to_json, image: "https://www.seriouseats.com/recipes/images/2014/05/20140422-shanghai-baby-bok-choy-black-bean-sauce-08.jpg", user_id: 1}
]);


# Ingredients 

Ingredient.create!(
  {name: ({list: ["Kosher salt", "1 pound (450g) dried spaghetti", "1/2 cup (120ml) extra-virgin olive oil, divided
    ", "Red pepper flakes, to taste (optional)", "Minced flat-leaf parsley, for serving (optional)"]}).to_json, recipe_id: 1}
);

Ingredient.create!([
  {name: ({list: ["For the Curry Spice Blend:",
  "2 tablespoons (7g) whole coriander seed, toasted in a dry skillet until fragrant",
  "1 tablespoon (6g) whole cumin seed, toasted in a dry skillet until fragrant",
  "1 tablespoon (6g) whole fenugreek seed, toasted in a dry skillet until fragrant",
  "2 1/2 teaspoons (6g) cardamom seeds, toasted in a dry skillet until fragrant",
  "2 teaspoons (5g) whole black peppercorns, toasted in a dry skillet until fragrant",
  "1/2 teaspoon (2g) fennel seed, toasted in a dry skillet until fragrant",
  "1 (2-inch) piece cinnamon (3g)",
  "3 cloves",
  "1/2 of a star anise pod",
  "1 or 2 strips (1g) dehydrated orange peel (optional)",
  "2 tablespoons (16g) ground turmeric",
  "1/4 to 1/2 teaspoon (1 to 2g) chili powder, depending on the intensity of your chili powder and how spicy you want the curry",
  "Pinch grated fresh nutmeg",
  "For the Stew:",
  "1 pound (450g) boneless, skinless chicken thighs",
  "Kosher salt and freshly ground black pepper",
  "2 tablespoons (30ml) vegetable oil, plus more as needed",
  "1 large yellow onion (1 pound; 450g), diced",
  "8 ounces carrots (225g; about 3 medium), peeled and cut into 1/2-inch pieces",
  "1 quart (950ml) homemade chicken stock or store-bought low-sodium broth",
  "1 quart (950ml) homemade or instant dashi",
  "1 pound (450g) Yukon Gold potatoes, peeled and cut into 1-inch chunks",
  "Half of 1 (6-ounce) apple, peeled, cored, and finely grated, minced, or puréed",
  "1/2 cup unsalted butter (4 ounces; 110g)",
  "1/2 cup all-purpose flour (2 ounces; 55g)",
  "1 (2-inch) piece peeled fresh ginger, finely grated",
  "3 tablespoons (25g) Curry Spice Blend",
  "1 cup frozen peas (5.5 ounces; 160g), if desired",
  "Warm short-grain rice, for serving",
  "Pickled ginger and/or rakkyo (pickled Japanese scallion), for serving" ]}).to_json, recipe_id: 2}
]);

Ingredient.create!([
  {name: ({list: ["1 (4-pound; 1.8kg) whole chicken", "3 quarts (2.8L) cold or room-temperature homemade chicken stock or store-bought low-sodium chicken broth", "6 medium cloves garlic", "2 sprigs fresh thyme", "1 bay leaf", "1 large carrot (8 ounces; 230g), diced", "1 medium turnip (7 ounces; 200g), peeled and diced", "1 medium yellow onion (9 ounces; 250g) or large leek (white and light green parts only), diced", "1 large parsnip (10 ounces; 285g), peeled and diced", "2 medium ribs celery (5 ounces; 150g), diced", "Kosher salt and freshly ground black pepper", "Minced fresh dill, flat-leaf parsley, or other fresh herbs, to finish"]}).to_json, recipe_id: 3}
]); 

Ingredient.create!([
  {name: ({list: ["1 tablespoon (15ml) extra-virgin olive oil", "6 ounces (170g) guanciale, cut into slices about 1/8 inch thick and then into 3/4- by 1/4-inch strips", "Pinch red pepper flakes", "1/4 cup (60ml) dry white wine", "1 (15-ounce; 425g) can whole peeled tomatoes, preferably San Marzano, crushed by hand", "Kosher salt and freshly ground black pepper", "1 pound (450g) dried bucatini pasta", "1 ounce (30g) grated Pecorino Romano cheese, plus more for serving"]}).to_json, recipe_id: 4}
]);

Ingredient.create!([
  {name: ({list: ["3 strips thick-cut, naturally cured bacon", "2 slices high-quality sandwich bread, such as shokupan", "2 tablespoons (30ml) homemade or store-bought mayonnaise", "1 1/2 cups finely shredded iceberg lettuce", "4 thick slices ripe tomato", "Coarse sea salt, such as fleur de sel or Maldon", "Freshly ground black pepper"]}).to_json, recipe_id: 5 }
]);

Ingredient.create!([
  {name: ({list: ["1 1/4 pound red cherries (565g), halved and pitted", "1 pound jicama (from 1 jicama root; about 450g); peeled and cut into batons", "1 small handful torn fresh basil leaves", "4 ounces macadamia nuts (110g), roughly crushed", "Zest of 1 lime plus fresh lime juice to taste (from 1 to 2 limes)", "Extra-virgin olive oil, for drizzling", "Kosher salt"]}).to_json, recipe_id: 6}
]);

Ingredient.create!([
  {name: ({list: ["3 pounds seedless watermelon (about 1 small or 1/4 large), rind removed, cut into 1-inch chunks (about 2 pounds/1kg chunks after rind is discarded)", "1 tablespoon (15ml) juice from 1 lemon, plus 4 (2-inch) strips zest, removed with a sharp vegetable peeler", "3 tablespoons (45ml) extra-virgin olive oil, plus more for drizzling", "1/4 cup (10g) roughly chopped fresh mint leaves", "Up to 4 ounces (1 quart) arugula leaves (optional)", "Kosher salt and freshly ground black pepper", "4 ounces (110g) feta cheese"]}).to_json, recipe_id: 7}
]);

Ingredient.create!([
  {name: ({list: ["Basic Dry Pancake Mix:", "10 ounces (about 2 cups) all purpose flour", "1 teaspoon baking powder", "1/2 teaspoon baking soda", "1 teaspoon kosher salt", "1 tablespoon sugar", "For Each Batch of Pancakes", "2 large eggs, separated", "1 1/2 cups (about 12 ounces) buttermilk", "1 cup (about 8 ounces) sour cream", "4 tablespoons unsalted butter, melted, plus more for serving", "Warm maple syrup"]}).to_json, recipe_id: 8}
]);  

Ingredient.create!([
  {name: ({list: ["3 tablespoons butter", "2 (1/2-inch thick) slices pineapple, about 2- by 4-inches each", "2 slices ham", "2 slices hearty white bread, such as Pepperidge Farm or Arnold, or 2 slices hearty French or Italian bread", "2 slices Swiss cheese", "Kosher salt"]}).to_json, recipe_id: 9}
]);

Ingredient.create!([
  {name: ({list: ["1 cup cooked hot white rice (about 12 ounces cooked rice; 340g)", "1 egg (plus 1 optional egg yolk)", "Soy sauce", "Kosher salt", "MSG powder, such as Aji-no-moto or Accent", "Mirin (optional)", "Hondashi (optional)", "Furikake (optional)", "Thinly sliced or torn nori (optional)"]}).to_json, recipe_id: 10 }
]);

Ingredient.create!([
  {name: ({list: ["1/2 pound ground pork", "1/2 teaspoon minced fresh ginger", "1/2 teaspoon minced garlic (about 1 small clove)", "1 teaspoon Shaoxing wine", "Kosher salt", "1/4 teaspoon sugar", "1/2 teaspoon soy sauce", "1 1/2 teaspoons cornstarch", "2 teaspoons vegetable or canola oil", "2 scallions, chopped (optional)", "6 cups water", "1/2 cup short grain rice, washed and drained", "About 1 cup corn kernels cut from 1 large ear of corn"]}).to_json, recipe_id: 11}
]);

Ingredient.create!([
  {name: ({list: ["Kosher salt", "12 ounces Shanghai baby bok choy, split in half", "2 teaspoons soy sauce", "1/8 teaspoon white pepper powder", "1 teaspoon sesame oil", "2 teaspoon cornstarch", "3 tablespoon water", "2 tablespoons vegetable, peanut, or canola oil", "1 tablespoon fermented black bean", "6 medium cloves garlic, roughly chopped"]}).to_json, recipe_id: 12} 
]); 

