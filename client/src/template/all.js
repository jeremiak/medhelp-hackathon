
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
        <option value="inactive">Inactive</option> \
        <option value="moderately_active">Moderately Active</option> \
        <option value="very_active">Very Active</option> \
      </select> \
    </div> \
    <div class="centered"> \
      <a href="#" class="button submitForm">start</a> \
    </div> \
  </form> \
  '
};