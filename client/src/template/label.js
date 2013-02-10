
R.Template = R.Template || {};

R.Template.Label = {
  Start: ' \
          <div class="nutrition-label">
            <h1>Nutrition Facts</h1>
            <h2>Serving Size <%= serving_size %> <%= serving_size_uom %></h2>
            <h2>Servings Per Container <%= servings_per_container %></h2>
            <div class="filled-in"></div>
            <h3 class="small-label">Amount Per Serving</h3>
            <div class="nutrition-fact">
                <div class="nutrient">Calories</div>
                <div class="nutrient-amount">70</div>
            </div>
            <div class="clear-fix"></div>
            <div class="filled-in"></div>            
            <h3 class="small-label right-align">% Daily Value *</h3>
            <div class="nutrition-fact">
                <div class="nutrient">Total Fat</div>
                <div class="nutrient-amount"><%= nutrients["Total Fat"]["Value"] %><%= nutrients["Total Fat"]["uom"] %></div>
                <div class="percentage"><%= nutrients["Total Fat"]["Percent"}%</div>
            </div>
            <div class="clear-fix"></div>            
            <div class="nutrition-fact">
                <div class="nutrient">Sodium</div>
                <div class="nutrient-amount"><%= nutrients["Sodium"]["Value"] %><%= nutrients["Sodium"]["uom"] %></div>
                <div class="percentage"><%= nutrients["Sodium"]["Percent"}%</div>
            </div>
            <div class="clear-fix"></div> 
            <div class="nutrition-fact">
                <div class="nutrient">Potassium</div>
                <div class="nutrient-amount"></div>
                <div class="percentage"></div>
            </div>
            <div class="clear-fix"></div>    
            <div class="nutrition-fact">
                <div class="nutrient">Total Carbohydrate</div>
                <div class="nutrient-amount">20g</div>
                <div class="percentage">7%</div>
            </div>
            <div class="clear-fix"></div>        
            <div class="nutrition-fact sub-nutrient">
                <div class="nutrient">Sugars</div>
                <div class="nutrient-amount">10g</div>
            </div>
            <div class="clear-fix"></div>
            <div class="nutrition-fact">
                <div class="nutrient">Protein</div>
                <div class="nutrient-amount">0g</div>
            </div>
            <div class="clear-fix"></div>
            <div class="filled-in"></div>
            <h4>* Percent Daily Values are based on a 2,000 calorie diet</h4>
        </div>
        <div class="ingredients">
            <span class="title">INGREDIENTS:</span>WHOLE GRAIN OATS, SUGAR, CANOLA OIL, YELLOW CORN FLOUR, HONEY, SOY FLOUR, BROWN SUGAR SYRUP, SALT, SOY LECITHIN, BAKING SODA, NATURAL FLAVOR, CONTAINS SOY, MAY CONTAIN PEANUT, MAY CONTAIN ALMOND AND PECAN INGREDIENTS.
        </div> 
  '
};
