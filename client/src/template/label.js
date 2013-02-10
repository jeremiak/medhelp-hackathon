R.Template = R.Template || {};

R.Template.Label = {
  Start: ' \
          <h2><%= item %></h2> \
          <div class="nutrition-label"> \
            <h1>Nutrition Facts</h1> \
            <h2>Serving Size <%= serving_size %> <%= serving_size_uom %></h2> \
            <h2>Servings Per Container <%= servings_per_container %></h2> \
            <div class="filled-in"></div> \
            <h3 class="small-label">Amount Per Serving</h3> \
            <div class="nutrition-fact"> \
                <div class="nutrient">Calories</div> \
                <div class="nutrient-amount"><%= nutrients["Calories"]["Value"] %></div> \
            </div> \
            <div class="clear-fix"></div> \
            <div class="filled-in"></div> \
            <h3 class="small-label right-align">% Daily Value *</h3> \
            <div class="nutrition-fact"> \
                <div class="nutrient">Total Fat</div> \
                <div class="nutrient-amount"><%= nutrients["Total Fat"]["Value"] %><%= nutrients["Total Fat"]["uom"] %></div> \
                <div class="percentage"><%= nutrients["Total Fat"]["Percent"]%></div> \
            </div> \
            <div class="clear-fix"></div> \
            <div class="nutrition-fact"> \
                <div class="nutrient">Sodium</div> \
                <div class="nutrient-amount"><%= nutrients["Sodium"]["Value"] %><%= nutrients["Sodium"]["uom"] %></div> \
                <div class="percentage"><%= nutrients["Sodium"]["Percent"] %></div> \
            </div> \
            <div class="clear-fix"></div> \
            <div class="nutrition-fact"> \
                <div class="nutrient">Potassium</div> \
                <div class="nutrient-amount"><%= nutrients["Sodium"]["Value"] %><%= nutrients["Sodium"]["uom"] %></div> \
                <div class="percentage"><%= nutrients["Sodium"]["Percent"] %></div> \
            </div> \
            <div class="clear-fix"></div> \
            <div class="nutrition-fact"> \
                <div class="nutrient">Total Carbohydrate</div> \
                <div class="nutrient-amount"><%= nutrients["Total Carbohydrate"]["Value"] %><%= nutrients["Total Carbohydrate"]["uom"] %></div> \
                <div class="percentage"><%= nutrients["Total Carbohydrate"]["Percent"] %></div> \
            </div> \
            <div class="clear-fix"></div> \
            <div class="nutrition-fact sub-nutrient"> \
                <div class="nutrient">Sugars</div> \
                <div class="nutrient-amount"><%= nutrients["Sugars"]["Value"] %><%= nutrients["Sugars"]["uom"] %></div> \
            </div> \
            <div class="clear-fix"></div> \
            <div class="nutrition-fact"> \
                <div class="nutrient">Protein</div> \
                <div class="nutrient-amount"><%= nutrients["Protein"]["Value"] %><%= nutrients["Protein"]["uom"] %></div> \
            </div> \
            <div class="clear-fix"></div> \
            <div class="filled-in"></div> \
            <h4>* Percent Daily Values are based on your <%= daily_calorie_limit %> calorie diet</h4> \
        </div> \
        <div class="ingredients"> \
            <span class="title">INGREDIENTS:</span><%= ingredients %> \
        </div> \
        <a href="#" class="button search">search again</a> \
  '
};
