
R.Template = R.Template || {};

R.Template.Person = {
  Start: ' \
  <h2> Enter your information: </h2> \
  <form id="personInput" class="clearfix"> \
    <label>Current weight</label> \
    <div class="right"> \
      <input type="text" name="current_weight" /><span>lbs.</span> \
    </div> \
    <label>Goal weight</label> \
    <div class="right"> \
      <input type="text" name="goal_weight" /><span>lbs.</span><br> \
    </div> \
    <label>Weeks until goal</label> \
    <div class="right"> \
      <input type="text" name="weeks_to_goal" /><span>weeks</span><br> \
    </div> \
    <label>Age</label> \
    <div class="right"> \
      <input type="text" name="age" /><span>yrs</span><br> \
    </div> \
    <label>Height</label> \
    <div class="right"> \
      <input type="text" name="height" /><span>inches</span><br> \
    </div> \
    <label>Gender</label> \
    <div class="right"> \
      <select name="gender"> \
        <option value="male">Male</option> \
        <option value="female">Female</option> \
      </select> \
    </div> \
    <label>Activity Level</label> \
    <div class="right"> \
      <select name="activity_level"> \
        <option value="sedentary">Sedentary</option> \
        <option value="lightly active">Ligtly Active</option> \
        <option value="moderately_active">Moderately Active</option> \
        <option value="very_active">Very Active</option> \
      </select> \
    </div> \
    <label>Cereal Allergy</label> \
    <div class="right"> \
      <select name="cereal_allergy"> \
        <option value="yes">Yes</option> \
        <option value="no">No</option> \
      </select> \
    </div> \
    <label>Coconut Allergy</label> \
    <div class="right"> \
      <select name="coconut_allergy"> \
        <option value="yes">Yes</option> \
        <option value="no">No</option> \
      </select> \
    </div> \
    <label>Corn Allergy</label> \
    <div class="right"> \
      <select name="corn_allergy"> \
        <option value="yes">Yes</option> \
        <option value="no">No</option> \
      </select> \
    </div> \
    <label>Egg Allergy</label> \
    <div class="right"> \
      <select name="egg_allergy"> \
        <option value="yes">Yes</option> \
        <option value="no">No</option> \
      </select> \
    </div> \
    <label>Fish Allergy</label> \
    <div class="right"> \
      <select name="fish_allergy"> \
        <option value="yes">Yes</option> \
        <option value="no">No</option> \
      </select> \
    </div> \
    <label>Gluten Allergy</label> \
    <div class="right"> \
      <select name="gluten_allergy"> \
        <option value="yes">Yes</option> \
        <option value="no">No</option> \
      </select> \
    </div> \
    <label>Lactose Allergy</label> \
    <div class="right"> \
      <select name="lactose_allergy"> \
        <option value="yes">Yes</option> \
        <option value="no">No</option> \
      </select> \
    </div> \
    <label>Milk Allergy</label> \
    <div class="right"> \
      <select name="milk_allergy"> \
        <option value="yes">Yes</option> \
        <option value="no">No</option> \
      </select> \
    </div> \
    <label>Peanuts Allergy</label> \
    <div class="right"> \
      <select name="peanuts_allergy"> \
        <option value="yes">Yes</option> \
        <option value="no">No</option> \
      </select> \
    </div> \
    <label>Sesame Seed Allergy</label> \
    <div class="right"> \
      <select name="sesame_seed_allergy"> \
        <option value="yes">Yes</option> \
        <option value="no">No</option> \
      </select> \
    </div> \
    <label>Shellfish Allergy</label> \
    <div class="right"> \
      <select name="shellfish_allergy"> \
        <option value="yes">Yes</option> \
        <option value="no">No</option> \
      </select> \
    </div> \
    <label>Soybean Allergy</label> \
    <div class="right"> \
      <select name="soybean_allergy"> \
        <option value="yes">Yes</option> \
        <option value="no">No</option> \
      </select> \
    </div> \
    <label>Sulfites Allergy</label> \
    <div class="right"> \
      <select name="sulfites_allergy"> \
        <option value="yes">Yes</option> \
        <option value="no">No</option> \
      </select> \
    </div> \
    <label>Tree Nut Allergy</label> \
    <div class="right"> \
      <select name="tree_nut_allergy"> \
        <option value="yes">Yes</option> \
        <option value="no">No</option> \
      </select> \
    </div> \
    <label>Wheat Allergy</label> \
    <div class="right"> \
      <select name="wheat_allergy"> \
        <option value="yes">Yes</option> \
        <option value="no">No</option> \
      </select> \
    </div> \
    <div class="centered"> \
      <a href="#" class="button submitForm">start</a> \
    </div> \
  </form> \
  '
};

R.Template.Product = {
  Search: ' \
  <h2>Find a product: </h2> \
  <form id="productSearch" class="clearfix"> \
    <label>Product UPC</label> \
    <div class="right"> \
      <input style="width:150px;" type="text" name="upc" /><span></span> \
    </div> \
    <div class="centered"> \
      <a href="#" class="button submitForm">start</a> \
    </div> \
  </form> \
  '
};
