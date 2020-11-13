this["JST"] = this["JST"] || {};

Handlebars.registerPartial("course_status", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.course_date_data : depth0)) != null ? stack1.completed_at_date : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span class=\"timestamp completed\">Completed on "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.course_date_data : depth0)) != null ? stack1.completed_at_date : stack1), depth0))
    + "</span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "		<span class=\"timestamp completed\">Course Completed.</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.course_date_data : depth0)) != null ? stack1.zero_days : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "		<span class=\"timestamp deadline-soon\">Due today!</span>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.course_date_data : depth0)) != null ? stack1.one_day : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "		<span class=\"timestamp deadline-soon\">Due tomorrow!</span>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.course_date_data : depth0)) != null ? stack1.one_week : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span class=\"timestamp deadline-kinda-soon\">Due in <span class=\"number-of-days\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.course_date_data : depth0)) != null ? stack1.num_days_to_go : stack1), depth0))
    + "</span> days.</span>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.course_date_data : depth0)) != null ? stack1.one_week_plus : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span class=\"timestamp deadline\">Due in <span class=\"number-of-days\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.course_date_data : depth0)) != null ? stack1.num_days_to_go : stack1), depth0))
    + "</span> days.</span>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.course_date_data : depth0)) != null ? stack1.end_date : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span class=\"timestamp end-date\"> Overdue since "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.course_date_data : depth0)) != null ? stack1.end_date : stack1), depth0))
    + ".</span>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.course_date_data : depth0)) != null ? stack1.new_content : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(24, data, 0),"data":data})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    return "		<span class=\"timestamp new\">New</span>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span class=\"timestamp assigned-date\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.course_date_data : depth0)) != null ? stack1.num_days_ago : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(27, data, 0),"data":data})) != null ? stack1 : "")
    + "</span>\n	";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			Assigned "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.course_date_data : depth0)) != null ? stack1.num_days_ago : stack1), depth0))
    + " days ago.\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			Assigned on "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.course_date_data : depth0)) != null ? stack1.assigned_date : stack1), depth0))
    + ".\n		";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.done : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("filter", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "locked";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<option value=\"job_titles\">Job Title is</option>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "		<option value=\"teams\">On User List</option>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "		<option value=\"bosses\">Reports directly to</option>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "		<option value=\"all_bosses\">All who report to</option>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "		<option value=\"status\">Course Status Is</option>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "        <option value=\"completed_on\">Completed On</option>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "		<option value=\"start_before\">Starts Before</option>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "		<option value=\"start_after\">Starts After</option>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "		<option value=\"start_date_of\">Starts On</option>\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "		<option value=\"end_before\">Deadline Before</option>\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "		<option value=\"end_after\">Deadline After</option>\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "		<option value=\"end_date_of\">Deadline On</option>\n";
},"27":function(container,depth0,helpers,partials,data) {
    return "		<option value=\"learner_status\">Learner Status Is</option>\n";
},"29":function(container,depth0,helpers,partials,data) {
    return "		<option value=\"has_reports\">Has Reports</option>\n";
},"31":function(container,depth0,helpers,partials,data) {
    return "		<option value=\"has_no_reports\">Has No Reports</option>\n";
},"33":function(container,depth0,helpers,partials,data) {
    return "		<option value=\"hired_before\">Hired Before</option>\n";
},"35":function(container,depth0,helpers,partials,data) {
    return "		<option value=\"hired_after\">Hired After</option>\n";
},"37":function(container,depth0,helpers,partials,data) {
    return "	<i class=\"fa fa-lock\"></i>\n";
},"39":function(container,depth0,helpers,partials,data) {
    return "	<button class=\"remove-filter\">\n		<i class=\"fa fa-times\"></i>\n	</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"filter-item "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.locked : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-filter-id=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n	<select class=\"filter-type\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.job_titles : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.teams : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.bosses : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.all_bosses : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.status : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.completed_on : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.start_before : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.start_after : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.start_date_of : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.end_before : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.end_after : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.end_date_of : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.learner_status : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.has_reports : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.has_no_reports : stack1),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.hired_before : stack1),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.hired_after : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	</select>\n	<span class=\"sub-filter\"></span>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.locked : stack1),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.program(39, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true}));

Handlebars.registerPartial("firstname", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"first_name","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.email : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"email","hash":{},"data":data}) : helper)));
},"6":function(container,depth0,helpers,partials,data) {
    return "Unknown User";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"username\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.first_name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</span>";
},"useData":true}));

Handlebars.registerPartial("username", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		"
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.email : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		"
    + container.escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"email","hash":{},"data":data}) : helper)))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "		New User\n	";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"username\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.last_name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</span>";
},"useData":true}));

Handlebars.registerPartial("organization_data", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "zero";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div id=\"new-users\">\n	<span class=\"label\">New Users</span>\n	<span class=\"monthly\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.month : depth0)) != null ? stack1.new_users : stack1), depth0))
    + "</span>\n	<span class=\"daily "
    + ((stack1 = helpers.unless.call(alias3,((stack1 = (depth0 != null ? depth0.yesterday : depth0)) != null ? stack1.new_users : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.yesterday : depth0)) != null ? stack1.new_users : stack1), depth0))
    + "</span>\n</div>\n\n<div id=\"active-users\">\n	<span class=\"label\">Active Users</span>\n	<span class=\"monthly\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.month : depth0)) != null ? stack1.active_users : stack1), depth0))
    + "</span>\n	<span class=\"daily "
    + ((stack1 = helpers.unless.call(alias3,((stack1 = (depth0 != null ? depth0.yesterday : depth0)) != null ? stack1.active_users : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.yesterday : depth0)) != null ? stack1.active_users : stack1), depth0))
    + "</span>\n</div>\n\n<div id=\"tiles-completed\">\n	<span class=\"label\">Tiles Completed</span>\n	<span class=\"monthly\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.month : depth0)) != null ? stack1.tiles_completed : stack1), depth0))
    + "</span>\n	<span class=\"daily "
    + ((stack1 = helpers.unless.call(alias3,((stack1 = (depth0 != null ? depth0.yesterday : depth0)) != null ? stack1.tiles_completed : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.yesterday : depth0)) != null ? stack1.tiles_completed : stack1), depth0))
    + "</span>\n</div>\n\n<div id=\"tiles-created\">\n	<span class=\"label\">Tiles Created</span>\n	<span class=\"monthly\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.month : depth0)) != null ? stack1.tiles_created : stack1), depth0))
    + "</span>\n	<span class=\"daily "
    + ((stack1 = helpers.unless.call(alias3,((stack1 = (depth0 != null ? depth0.yesterday : depth0)) != null ? stack1.tiles_created : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.yesterday : depth0)) != null ? stack1.tiles_created : stack1), depth0))
    + "</span>\n</div>\n\n<div id=\"tiles-assigned\">\n	<span class=\"label\">Tiles Assigned</span>\n	<span class=\"monthly\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.month : depth0)) != null ? stack1.tiles_assigned : stack1), depth0))
    + "</span>\n	<span class=\"daily "
    + ((stack1 = helpers.unless.call(alias3,((stack1 = (depth0 != null ? depth0.yesterday : depth0)) != null ? stack1.tiles_assigned : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.yesterday : depth0)) != null ? stack1.tiles_assigned : stack1), depth0))
    + "</span>\n</div>";
},"useData":true}));

Handlebars.registerPartial("question_video", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<video controls id=\"video-player\" class=\"video-js vjs-default-skin\"\n   preload=\"auto\">\n<source src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" type=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.mimetype : stack1), depth0))
    + "\" />\nYour browser does not support HTML5 video.\n</video>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<audio controls id=\"audio-player\"\n	   preload=\"auto\">\n	<source src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" type=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.mimetype : stack1), depth0))
    + "\" />\n	Your browser does not support HTML5 audio.\n</audio>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<p><span id=\"status\"></span><span id=\"counter\"></span></p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.audio : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("quiz_answer", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr>\n	<td><input class=\"answer-input\" type=\"text\"\n			   value=\""
    + alias4(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"answer","hash":{},"data":data}) : helper)))
    + "\" data-answer-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"/></td>\n	<td><input class=\"answer-correct\"\n			   "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.correct : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n			   type=\"checkbox\" data-answer-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" /></td>\n	<td><button class=\"answer-delete\" type=\"button\" data-answer-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n		<img src=\"dist/img/redX-0e027947e58faacf5aff38635709aed9.png\" alt=\"delete\" >\n	</button></td>\n</tr>";
},"useData":true}));

Handlebars.registerPartial("assignment_audio", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<button class='delete-contents' id='delete-contents-"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "'><i class=\"fa fa-times\"></i></button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<button class='delete-contents standard' id='delete-preview'><i class=\"fa fa-times\"></i></button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div id='audio-container'>\n	<audio id=\"audio-player\" preload=\"auto\" controls=\"controls\">\n		<source type=\"audio/mpeg\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" />\n		Your browser does not support HTML5 audio.\n	</audio>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true}));

Handlebars.registerPartial("assignment_file", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<button class='delete-contents' id='delete-contents-"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "'><i class=\"fa fa-times\"></i></button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<button class='delete-contents standard' id='delete-preview'><i class=\"fa fa-times\"></i></button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id='files-container'>\n	<button class='download-file standard' value='"
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "'><i class=\"fa fa-download\"></i> "
    + alias4(((helper = (helper = helpers.file_name || (depth0 != null ? depth0.file_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"file_name","hash":{},"data":data}) : helper)))
    + "</button>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true}));

Handlebars.registerPartial("assignment_image", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<button class='delete-contents' id='delete-contents-"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "'><i class=\"fa fa-times\"></i></button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<button class='delete-contents standard' id='delete-preview'><i class=\"fa fa-times\"></i></button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"image-container media-container why\">\n	<a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\"><img src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"/></a>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n<br>";
},"useData":true}));

Handlebars.registerPartial("assignment_response", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "me";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.editable : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "				<button class='edit-response neutral'>Edit</button>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<p>"
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.sound : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.media : depth0),{"name":"unless","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "				<div id='video-container' class=\"media-container\">\n					<video id=\"video-player\" class=\"video-js vjs-default-skin\" controls preload=\"auto\" playsinline>\n						<source src=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" type=\"video/mp4\"/>\n					</video>\n					<button class='delete-contents standard hidden' id='delete-contents-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "'><i class=\"fa fa-times\"></i></button>\n				</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "				<div id='audio-container' class=\"media-container\">\n					<audio id=\"audio-player\" preload=\"auto\" controls=\"controls\">\n						<source type=\"audio/mpeg\" src=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" />\n						Your browser does not support HTML5 audio.\n					</audio>\n					<button class='delete-contents standard hidden' id='delete-contents-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "'><i class=\"fa fa-times\"></i></button>\n				</div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "			<div>\n				<div class=\"image-container media-container\">\n					<a href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\"_blank\"><img src=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\"/></a>\n					<button class='delete-contents hidden' id='delete-contents-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "'><i class=\"fa fa-times\"></i></button>\n				</div>\n			</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.file_name : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "					<div id='files-container'>\n						<button class='download-file standard' value='"
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "'><i class=\"fa fa-download\"></i> "
    + alias2(alias1((depth0 != null ? depth0.file_name : depth0), depth0))
    + "</button>\n						<button class='delete-contents hidden' id='delete-contents-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "'><i class=\"fa fa-times\"></i></button>\n					</div>\n					<br>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tile_media : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<button class=\"edit-response neutral hidden\">Cancel</button>\n			<button class=\"edit-response standard hidden\" id=\"save-edit\">Save</button>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "				<button class=\"video-response neutral hidden\"><i class=\"fa fa-video-camera\"></i></button>\n				<button class=\"upload-response neutral hidden\"><i class=\"fa fa-upload\"></i></button>\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<p class=\"score\">\n		"
    + alias4(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "'s score set to \n		<span class=\"score-update\">\n			<strong class=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.passing_score : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.program(26, data, 0),"data":data})) != null ? stack1 : "")
    + "\">"
    + alias4(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score","hash":{},"data":data}) : helper)))
    + "</strong>\n		</span> \n	</p>\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "passing-score";
},"26":function(container,depth0,helpers,partials,data) {
    return "failing-score";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"js-ar-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n<section id=\"js-ar-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"nopadding js-responses discussion-post "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.current_user_resp : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	<header>\n		<span class=\"author\">"
    + alias4(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "</span>\n		<span class=\"date\">"
    + alias4(((helper = (helper = helpers.formatted_date || (depth0 != null ? depth0.formatted_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"formatted_date","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.current_user_resp : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</header>\n	<div class=\"padding\">\n		<div id='text-container'>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n		<div id='response-contents-container'>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.assignment_contents : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.editable : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.editable : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</section>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.scored : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true}));

Handlebars.registerPartial("assignment_submission", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"score-input\">\n			Score Assignment:\n			<input type=\"radio\" name=\"pass-fail\" value=\"pass\">Pass\n			<input type=\"radio\" name=\"pass-fail\" value=\"fail\">Fail\n		</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.has_text : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.has_url : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.no_submission : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "	<div class=\"student-reply\">\n		<p>"
    + container.escapeExpression(((helper = (helper = helpers.formatted_date || (depth0 != null ? depth0.formatted_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"formatted_date","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.ungraded : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</p>\n		<div class=\"show-all-whitespace\" id=\"assignment-text\">"
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n	</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return " <strong>- New</strong>";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"student-reply\">\n		<h2>Student's Uploads: </h2>\n		<span id=\"assignment-upload\">file uploaded "
    + alias4(((helper = (helper = helpers.formatted_date || (depth0 != null ? depth0.formatted_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"formatted_date","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.ungraded : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n		<button class=\"assignment-upload-button neutral\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">Download "
    + alias4(((helper = (helper = helpers.file_name || (depth0 != null ? depth0.file_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"file_name","hash":{},"data":data}) : helper)))
    + "</button>\n	</div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "	<p>No Submission</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.pass_fail : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("assignment_video", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<button class='delete-contents' id='delete-contents-"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "'><i class=\"fa fa-times\"></i></button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<button class='delete-contents standard' id='delete-preview'><i class=\"fa fa-times\"></i></button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<div> <!-- to make each display as a block -->\n<div id='video-container' class=\"media-container\">\n	<video id=\"video-player\" class=\"video-js vjs-default-skin\" controls preload=\"auto\" playsinline>\n		<source src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" type=\"video/mp4\"/>\n	</video>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n</div>";
},"useData":true}));

Handlebars.registerPartial("new_assignment_response", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "		<button id=\"video-response\" class=\"video-response neutral\" type=\"button\"><i class=\"fa fa-video-camera\"></i></button>\n		<button id=\"upload-response\" class=\"upload-response neutral\" type=\"button\"><i class=\"fa fa-upload\"></i></button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"discussion-post create\">\n	<textarea id=\"text-response\" placeholder=\"Your message\"></textarea>\n	<div id='response-contents-container'></div>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tile_media : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<button class=\"submit-response standard send\" type=\"button\">Send</button>\n</section>";
},"useData":true}));

Handlebars.registerPartial("results_list_check", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<span class=\"score done\">\n	<i class=\"fa fa-check\"></i>\n</span>";
},"useData":true}));

Handlebars.registerPartial("results_list_item", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<a href=\"#tileedit-"
    + alias4(((helper = (helper = helpers.tile_id || (depth0 != null ? depth0.tile_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tile_id","hash":{},"data":data}) : helper)))
    + "-results-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tile_completed : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tile_passed : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pass_or_fail : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "						<span class=\"score pass\">Pass</span>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.hasScoreBool : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						<span class=\"score pass\">"
    + container.escapeExpression(((helper = (helper = helpers.tile_score || (depth0 != null ? depth0.tile_score : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tile_score","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "						<span class=\"score pass\">Done</span>\n					";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tileFailed : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(24, data, 0),"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pass_or_fail : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    return "						<span class=\"score fail\">Fail</span>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.hasScoreBool : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(22, data, 0),"data":data})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						<span class=\"score fail\">"
    + container.escapeExpression(((helper = (helper = helpers.tile_score || (depth0 != null ? depth0.tile_score : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tile_score","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "						<span class=\"score fail\">Done</span>\n					";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.needsGraded : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(27, data, 0),"data":data})) != null ? stack1 : "")
    + "				";
},"25":function(container,depth0,helpers,partials,data) {
    return "						<span class=\"score pending\">Unscored</span>\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.completedScorm : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"28":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.hasScoreBool : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.program(31, data, 0),"data":data})) != null ? stack1 : "")
    + "					";
},"29":function(container,depth0,helpers,partials,data) {
    var helper;

  return "							<span class=\"score pending\">"
    + container.escapeExpression(((helper = (helper = helpers.tile_score || (depth0 != null ? depth0.tile_score : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tile_score","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"31":function(container,depth0,helpers,partials,data) {
    return "							<span class=\"score pending\">Done</span>\n";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tile_completed : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"34":function(container,depth0,helpers,partials,data) {
    return "				<span class=\"score done\">\n					<i class=\"fa fa-check\"></i>\n				</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"js-student-list-item "
    + alias4(((helper = (helper = helpers.statusClass || (depth0 != null ? depth0.statusClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"statusClass","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.link_view : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "		<span class=\"name\">"
    + ((stack1 = container.invokePartial(partials.username,(depth0 != null ? depth0.user : depth0),{"name":"username","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completionAndPassing : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(33, data, 0),"data":data})) != null ? stack1 : "")
    + "	</a>\n</li>";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("edit_url", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"select-container\">\n	Change URL: <div id=\"edit-url-container\">\n	<input type=\"text\" id=\"tile-edit-url\" placeholder=\"Edit URL\">\n	</div>\n</div>";
},"useData":true}));

this["JST"]["app/templates/accept_terms/accept.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"accept\" data-outer-class=\"accept-terms\" role=\"main\">\n	<div class=\"contents\">\n		<h1>End User License Agreement</h1>\n		<p>To continue using Skillo, please accept our latest Terms of Service, Privacy Policy and End User License Agreement.</p>\n		<div id=\"terms-links\">\n			<a href=\"http://tryskillo.com/tos.html\" target=\"blank\">Read Terms of Service</a>\n			<a href=\"http://tryskillo.com/privacy.html\" target=\"blank\">Read Privacy Policy</a>\n		</div>\n		<div class=\"right\">\n			<button class=\"neutral\" aria-label=\"decline\" style=\"margin-right: 10px;\">I Decline</button>\n			<button class=\"signup-arrow standard\" aria-label=\"next\">I Accept</button>\n		</div>\n	</div>\n</div>";
},"useData":true});

this["JST"]["app/templates/account_creator/signup-account-info.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"signup-frame-container\" data-outer-class=\"step-1\" role=\"main\">\n	<div class=\"contents\">\n		<div class=\"centered-text\">\n			<a id=\"already-created\" class=\"button standard\" aria-label=\"account-already-created\" style=\"color: white;\">Sign In</a>\n			<h1>Or Create a Skillo Account</h1>\n		</div>\n		<form id=\"signup-first-frame\">\n			<label id=\"first-name-container\">First Name<input aria-required=\"true\" autofocus type=\"text\" id=\"first-name-input\" name=\"first_name\" class=\"signup-input\"></label>\n			<label id=\"last-name-container\">Last Name<input aria-required=\"true\" type=\"text\" id=\"last-name-input\" class=\"signup-input\" name=\"last_name\"></label>\n			<label id=\"email-container\">Email<input aria-required=\"true\" type=\"text\" id=\"email-input\" name=\"email\" class=\"signup-input\"></label>\n			<label id=\"password-container\">Password<input aria-required=\"true\" type=\"password\" id=\"password-input\" class=\"signup-input\" name=\"password\"></label>\n			<label id=\"password-confirmation-container\">Confirm Password<input aria-required=\"true\" type=\"password\" id=\"password-confirm-input\" class=\"signup-input\" name=\"password_confirmation\"></label>\n\n			<label id=\"license\"><input aria-required=\"true\" type=\"checkbox\" id=\"terms-checkbox\"  class=\"signup-input\" name=\"terms_accepted\">I accept Skillo&apos;s <a href=\"http://tryskillo.com/eula.html\" target=\"blank\">EULA</a> and <a href=\"http://tryskillo.com/tos.html\" target=\"blank\">Terms of Service</a>.\n			</label>\n		</form>\n		<div class=\"center\">\n			<button class=\"signup-arrow standard\" aria-label=\"create-account\">Create Account </button>\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/addinstructors_view/addinstructors_view.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"js-main-container\" class=\"main-content-container\">\n</div>";
},"useData":true});

this["JST"]["app/templates/addlearners_view/addlearners_view.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"js-main-container\" class=\"main-content-container\">\n</div>";
},"useData":true});

this["JST"]["app/templates/autoassign_view/autoassign_editor.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id=\"js-autoassign-container\" class=\"nopadding ruleset\">\n    <header>\n        <h3>\n            <span id=\"js-all-users\" class=\"hidden\"></span>\n            <span id=\"js-one-filter\" class=\"hidden\"> this criterion.</span>\n            <span id=\"js-two-filters\" class=\"hidden\"> both criteria.</span>\n            <span id=\"js-more-filters\" class=\"hidden\"> all \n                <span id=\"js-criteria-number\"></span> criteria.\n            </span>\n        </h3>\n        <button class=\"js-edit-autoassigns edit-ruleset\" id=\"js-edit-button\"><i class=\"fa fa-pencil\"></i></button>\n    </header>\n    <div id=\"js-autoassign-filters\"></div>\n    <div id=\"js-sanity-box\" class=\"hidden note sanity-check\" style=\"margin: 2px 0px;\">\n        <h3>Sanity Check</h3>\n        <p id=\"js-more-people-message\" class=\"hidden\">\n            <span id=\"js-autoassign-sanitycheck\">0</span>\n            new people will be assigned to this course right away.\n        </p>\n        <p id=\"js-no-people-message\" class=\"hidden\">\n            No one new will be added now, but learners will be added automatically when they meet the above criteria.\n        </p>\n        <p>Reminder: these rules won&apos;t affect people who have already been assigned to the course, even if they were manually removed later.</p>\n        <button id=\"js-sanity-confirm\" class=\"neutral large sanity-confirm\"><i class=\"fa fa-check\"></i> Sounds right. Do it!</button>\n    </div>\n    <div class=\"actions\">\n        <button id=\"js-save-button\" class=\"standard large\" disabled>Save Changes</button>\n        <button id=\"js-cancel-button\" class=\"neutral large cancel\">Cancel</button>\n        <button id=\"js-delete-button\" class=\"delete\"><i class=\"fa fa-trash\"></i></button>\n    </div>\n</section>\n";
},"useData":true});

this["JST"]["app/templates/autoassign_view/autoassign_view.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "            <section class=\"note\">\n                <i class=\"fa fa-info-circle\"></i> You are looking at an archived course. You can still edit auto-assign rules, but no one will actually be assigned to the course.\n            </section>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<main class=\"main-content-container\">\n    <header><h1 class=\"main-view-title\">Manage Automatic Assignment Rules</h1></header>\n    <div class=\"content-layout single-column\">\n        <h1>Who should be required to take this course as a learner?</h1>\n        <div id=\"js-rule-list\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <section id=\"js-intro\" class=\"intro hidden\">\n            <p>Set up filters to assign this course to everyone who matches a set of criteria. \n            </p>\n            <button id=\"js-first-add-button\" class=\"neutral white\">Let's Go!</button>\n        </section>\n        </div>\n        <button id=\"js-add-button\" class=\"neutral round hidden\">New Group</button>\n    </div>\n</main>";
},"useData":true});

this["JST"]["app/templates/autoassign_view/pick_scope_modal.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div data-outer-class=\"scope-picker\" class=\"padding\">\n	<p>Pick a starting scope for this group. You can add more filters afterward.</p>\n	<label><input id=\"js-staff-radio\" type=\"radio\" name=\"scope\" value=\"staff\" checked /> My Staff </label>\n	<label><input id=\"js-categories-radio\" type=\"radio\" name=\"scope\" value=\"categories\" /> My Categories </label>\n	<br style=\"margin-bottom: 20px\">\n	<button id=\"js-confirm\" class=\"standard\">Confirm</button>\n</div>";
},"useData":true});

this["JST"]["app/templates/completion_view/completed-tile.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " \n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.status_datum : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.completed : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	";
},"2":function(container,depth0,helpers,partials,data) {
    return "			complete\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.status_datum : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.score : stack1), depth0))
    + " ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"tr "
    + alias4(((helper = (helper = helpers.statusClass || (depth0 != null ? depth0.statusClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"statusClass","hash":{},"data":data}) : helper)))
    + "\">\n	<span class=\"completion-status td"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.status_datum : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n		"
    + alias4(((helper = (helper = helpers.statusUnicode || (depth0 != null ? depth0.statusUnicode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"statusUnicode","hash":{},"data":data}) : helper)))
    + "\n	</span>\n	<span class=\"tiles-title td\">"
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n	<span class=\"scored-tile td\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.status_datum : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n</li>";
},"useData":true});

this["JST"]["app/templates/completion_view/students-view.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<main>\n	<header>\n		<h1>"
    + alias4(((helper = (helper = helpers.studentName || (depth0 != null ? depth0.studentName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"studentName","hash":{},"data":data}) : helper)))
    + " ("
    + alias4(((helper = (helper = helpers.completedTotal || (depth0 != null ? depth0.completedTotal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"completedTotal","hash":{},"data":data}) : helper)))
    + "% Complete)\n		</h1>\n	</header>\n	<div id=\"js-checklist\" class=\"content-layout single-column\">	\n		<h2>"
    + alias4(((helper = (helper = helpers.courseTitle || (depth0 != null ? depth0.courseTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"courseTitle","hash":{},"data":data}) : helper)))
    + " Checklist for "
    + alias4(((helper = (helper = helpers.studentName || (depth0 != null ? depth0.studentName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"studentName","hash":{},"data":data}) : helper)))
    + "</h2>\n		<section id=\"completion-list-container\">\n			<div class=\"table\">\n				<header class=\"nopadding\">\n					<span class=\"completion-status td\"><i class=\"fa fa-check-circle-o\"></i></span>\n					<span class=\"tiles-title td\">Content</span>\n					<span class=\"scored-tile td\" style=\"text-align: center;\">Score</span>\n				</header>\n				<ul id=\"completion-list\" class=\"nopadding\">\n					\n				</ul>\n			</div>	\n			<p><strong>Average of Scored Tiles: <span id=\"js-completion-average\"></span>%</strong></p>\n		</section>\n	</div>\n</main>";
},"useData":true});

this["JST"]["app/templates/course_creator/duplicate-course-box.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form data-outer-class=\"course-duplicate\">\n	<div class=\"contents\">\n		<label class=\"long select-wrapper\" for=\"course-id\">\n			<select name=\"course_id\" id=\"course-id\">\n			</select>\n		</label>\n		<!--<p>How would you like to use this course?</p>-->\n		<!--<input type=\"radio\" id=\"use-course\" name=\"use-course\" value=\"link\">Link to Original <a class=\"hint&#45;&#45;right\" data-hint=\"Use this course as it is. If the owner of this Course alters it, your course materials will update automatically, but you won&apos;t be able to make your own edits.\">?</a> <br>-->\n		<!--<input type=\"radio\" id=\"copy-course\" name=\"use-course\" value=\"copy\">Copy &amp; Customize <a class=\"hint&#45;&#45;right\" data-hint=\"Use this Course as a starting point, and create your own version which you can freely edit.\">?</a><br>-->\n		<div class=\"right\"><button id=\"finish-sharing\" style='background-color: grey; border-color: transparent' class=\"standard\">next</button></div>\n	</div>\n</form>\n";
},"useData":true});

this["JST"]["app/templates/course_creator/start-course-box.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form data-outer-class=\"start-course\">\n	<div class=\"contents\">\n		<h1>Add New Course</h1>\n		<label class=\"long\">\n			<input aria-required=\"true\" placeholder=\"Course Title\" autofocus type=\"text\" maxlength=\"80\" name=\"title\" id=\"title\">\n		</label>\n		<!--\n		<label id=\"course-start-date\" class=\"term-dates-label\">\n			<input aria-required=\"true\" type=\"text\" name=\"start_date\" placeholder=\"Start Date\">\n		</label>\n		<label id=\"course-end-date\" class=\"term-dates-label\">\n			<input aria-required=\"true\" type=\"text\" name=\"end_date\" placeholder=\"End Date\">\n		</label><a class=\"hint--right\" data-hint=\"It's OK to guess, you'll confirm this when you publish the course. We use this to display accurate prices in your search results.\">?</a>\n		-->\n		<div id=\"create-course-options\">\n			<label><input type=\"radio\" name=\"course-option\" value=\"scratch\">Start from scratch</label> <br>\n			<label><input type=\"radio\" name=\"course-option\" value=\"course\">Start with an existing course</label> <br>\n			<!-- leave this out for now <input type=\"radio\" name=\"course-option\" value=\"textbook\">Start with a textbook -->\n		</label>\n\n		<div class=\"right\">\n			<button id=\"new-course\" class=\"standard\">Create</button>\n		</div>\n	</div>\n</form>";
},"useData":true});

this["JST"]["app/templates/course_editor/edit-course-info-container.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "	<section class=\"note\">\n		<i class=\"fa fa-info-circle\"></i> You are looking at an archived course.\n	</section>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return " src="
    + container.escapeExpression(((helper = (helper = helpers.thumbnail || (depth0 != null ? depth0.thumbnail : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"thumbnail","hash":{},"data":data}) : helper)))
    + " \n				";
},"5":function(container,depth0,helpers,partials,data) {
    return " src=\"dist/img/courseview/blue-50e1db88ca1f1c585dbc539be9775dc2.svg\" \n				";
},"7":function(container,depth0,helpers,partials,data) {
    return "on";
},"9":function(container,depth0,helpers,partials,data) {
    return "off";
},"11":function(container,depth0,helpers,partials,data) {
    return " hidden";
},"13":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<section id=\"elective-section\" class=\"nopadding "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.enabled_elective : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n		<header>\n		<h2>Elective</h2>\n				<label class=\"switch\">\n					<input type=\"checkbox\" id=\"js-elective\" type=\"checkbox\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.enabled_elective : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n					<span class=\"slider round\"></span>\n				</label>\n		</header>\n		<input type=\"checkbox\" class=\"more-info-toggle\" id=\"more-info-toggle2\">\n		<div class=\"padding\">\n			<span class=\"off\">OFF: Learners can't see this course unless assigned to it by an instructor.</span>\n			<span class=\"on\">ON: Learners can search for and assign themselves to this course.</span>\n			<label for=\"more-info-toggle2\">\n				<span class=\"more\">Show more <i class=\"fa fa-caret-right\"></i></span>\n				<span class=\"less\">Show less <i class=\"fa fa-caret-right\"></i></span>\n			</label>\n		</div>\n\n		<div class=\"more-info padding\">\n			<p><strong>How Electives Work:</strong> If a course is an Elective, anyone at your organization can find it on the Electives screen and assign themselves to it as a learner. If assigned this way, they will have no deadline unless an instructor gives them one afterward. Flipping this switch has no effect on anyone already assigned to the course.</p>\n\n		</div>\n	</section>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return " disabled ";
},"19":function(container,depth0,helpers,partials,data) {
    return "hidden";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<main id=\"edit-media-container\">\n<header>\n	<h1>Course Options</h1>\n	<div class=\"actions\">\n		<button class=\"neutral\" id=\"js-edit-course-done-button\">Done</button>\n	</div>\n</header>\n<div class=\"content-layout single-column-slim\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<section class=\"nopadding\">\n		<header>\n			<h2>Basic Info</h2>\n		</header>\n		<div class=\"padding\">\n			<label id=\"edit-image-title-label\">Title<input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" aria-required=\"true\" maxlength=\"80\"></label>\n			<label id=\"edit-description-label\">\n				Description \n				<div class=\"character-count\">\n					(<span class=\"current\" id=\"spnCharLeft\">0</span><span class=\"limit\">/200</span>)\n				</div>\n				<textarea maxlength=\"200\" placeholder=\"Tell learners and other instuctors what this course is about.\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea>\n			</label>\n			<label id=\"edit-tags-label\">Tags</label>\n			<label>Thumbnail (300x160)\n			<div class=\"course-thumbnail\" id=\"js-thumbnail-button\">\n				<div class=\"replace\">\n					<i class=\"fa fa-picture-o\"></i>\n					<span>Replace</span>\n				</div>\n				<img id=\"js-thumbnail-preview\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.thumbnail : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "> </img>\n			</div>\n			</label>\n		</div>\n		<div style=\"opacity: 0;\" class=\"course-saving-notification\">Updating Item</div>\n	</section>\n\n	<section id=\"auto-pass-section\" class=\"nopadding "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.auto_pass : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n		<header>\n		<h2>Automatic Completion</h2>\n			<label class=\"switch\">\n				<input type=\"checkbox\" id=\"js-auto-pass\" type=\"checkbox\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.auto_pass : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n				<span class=\"slider round\"></span>\n			</label>\n		</header>\n		<input type=\"checkbox\" class=\"more-info-toggle\" id=\"more-info-toggle\">\n		<div class=\"padding\">\n			<span class=\"off\">OFF: Learners who reach 100% progress will NOT be marked Complete, and will be required to complete any new content added in the future.</span>\n			<span class=\"on\">ON: Once the learner's progress reaches 100%, they will be marked Complete in the course, and will not be required to complete any content added in the future.</span>\n			<label for=\"more-info-toggle\">\n				<span class=\"more\">Show more <i class=\"fa fa-caret-right\"></i></span>\n				<span class=\"less\">Show less <i class=\"fa fa-caret-right\"></i></span>\n			</label>\n		</div>\n\n\n		<div class=\"more-info padding\">\n			<p><strong>How Completion Works:</strong> Once a learner has been marked Complete in a course, it will always show as \"Done\" for them, even if\n			they have unfinished tiles. Learners can be marked Complete or Not Complete from the Learners screen.</p>\n			<p><strong>Should automatic completion be on or off?</strong> We suggest leaving it on if learners are meant to work through the course once\n			and move on. If learners need to keep up with new content as it comes, turn it off.</p>\n		</div>\n	</section>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.electives_enabled : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	<section id=\"auto-assign-section\" class=\"nopadding "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n		<header>\n			<h2>Automatic Assignment</h2>\n			<label class=\"switch\">\n				<input id=\"js-auto-assign\" type=\"checkbox\" value=\"active\">\n				<span class=\"slider round\"></span>\n			</label>\n		</header>\n		<div class=\"padding\">\n			<p class=\"off\">OFF: Learners won't be automatically added to this course.</p>\n			<p class=\"on\">ON: Learners will be automatically added to this course when they...</p>\n			<label id=\"automatic-assign-prereq-input\">\n				<select id=\"prereq-type\">\n					<option value=\"join-list\" selected>Join User List</option>\n					<option value=\"comp-other\">Complete Another Course</option>\n				</select>\n			</label>\n			<label id=\"prereq-list\">\n				<select id=\"prereq-list-select\"></select>\n			</label>\n		</div>\n	</section>\n	<section class=\"nopadding "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n		<header>\n			<h2>Automatic Deadline</h2>\n			<label class=\"switch\">\n				<input id=\"js-auto-deadline\" type=\"checkbox\" value=\"active\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.default_days_til_deadline : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n				<span class=\"slider round\"></span>\n			</label>\n		</header>\n		<label id=\"auto-assign-deadline-input\">\n			<div class=\"padding\">\n			<p>When learners are assigned to this course, automatically set the deadline this many days away. Deadlines can be changed for particular learners at any time.</p>\n				<input type=\"number\" id=\"days-input\" placeholder=\"Set number of days\" value=\""
    + alias4(((helper = (helper = helpers.default_days_til_deadline || (depth0 != null ? depth0.default_days_til_deadline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"default_days_til_deadline","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.default_days_til_deadline : depth0),{"name":"unless","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n			</div>\n\n			<!-- input selector generated by js -->\n		</label>\n	</section>\n	<section class=\"nopadding hide-unless owns-course\">\n		<header>\n			<h2>Course Owner</h2>\n		</header>\n		<div class=\"padding\">\n			<label>Select a User:<select id=\"js-creator-select\"></select></label>\n		</div>\n	</section>\n	<section id=\"js-unarchive-section\" class=\"delete-area hide-unless owns-course "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"unless","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n		<button id=\"js-unarchive-button\" class=\"standard\" style=\"margin-right: 20px\">Restore Course</button>\n		<p>This course is currently archived. New learners can't be added, and it won't appear in anyone's course list unless they deliberately browse the archive. Restoring it will make it reappear for everyone who has access.</p>\n	</section>\n	<section id=\"js-archive-section\" class=\"delete-area hide-unless owns-course "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n		<button id=\"js-archive-button\" class=\"warning\" style=\"margin-right: 20px\">Archive Course</button>\n		<p>Hide this Course form everyone's default view. It will disappear from everyone's course list, but records are kept, and users can still find it by deliberately browsing the archive.</p>\n	</section>\n	<section class=\"delete-area hide-unless owns-course\">\n		<button id=\"js-delete-course-button\" class=\"warning\" style=\"margin-right: 20px\">Delete Course</button>\n		<span>You can't undo this.</span>\n	</section>\n</div>\n</main>";
},"useData":true});

this["JST"]["app/templates/course_permission_editor.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n            <div class=\"subsection\">\n                <label><input type=\"radio\" name=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-radio\" class=\"js-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-radio\" value=\"any\" checked /> Any </label>\n                <label><input type=\"radio\" name=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-radio\" id=\"js-category-theirs-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-radio\" class=\"js-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-radio\" value=\"theirs\" /> Theirs "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.defaultCategory : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</label>\n                <label class=\"small\"><input type=\"radio\" name=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-radio\" class=\"js-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-radio\" value=\"custom\" id=\"js-override-checkbox\" /> <select class=\"js-custom-category-select\" id=\"js-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-select\" class=\"small\"></select> </label>\n            </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "("
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.defaultCategory : depth0)) != null ? stack1.title : stack1), depth0))
    + ")";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Permission Level</h2>\n<div class=\"subsection\">\n    <label><input type=\"radio\" name=\"permission-level\" id=\"js-edit-permission\" checked /> Editor - can change content and settings </label>\n    <label><input type=\"radio\" name=\"permission-level\" id=\"js-observe-permission\" /> Observer - can only see and grade learners </label>\n</div>\n\n<div id=\"js-custom-categories\" class=\"hidden hide-unless admin\">\n    <h2>Can Instruct Whom?</h2>\n    <div class=\"subsection\">\n        <label><input type=\"radio\" name=\"whom\" value=\"any\" id=\"js-anyone-checkbox\" checked /> Anyone </label>\n        <label><input type=\"radio\" name=\"whom\" value=\"staff\" id=\"js-staff-only-checkbox\" /> Their Staff Only </label>\n        <label><input type=\"radio\" name=\"whom\" value=\"custom\" id=\"js-override-checkbox\" /> Their Staff + Custom </label>\n    </div>\n</div>\n<hr>\n<div id=\"js-custom-staff-config\" class=\"hidden hide-unless admin\">\n    <h2>Custom Scope</h2>\n    <div id=\"js-custom-categories-access\">\n        <p>Instructors above will be able to manage Learners who either report to them or match all critera below. </p>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.custom_categories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <hr>\n</div>";
},"useData":true});

this["JST"]["app/templates/course_view/course_view.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "			<button id=\"add-course-button\" class=\"standard js-add-course\">\n				<span class=\"desktop-hide\">+</span>\n				<span class=\"mobile-hide\"> New Course</span>\n			</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div>\n<main id=\"course-list\" class=\"list-style\">\n	<header>\n		<h1>Courses</h1>\n		<div class=\"actions\">\n			<span id=\"search-bar-container\" class=\"search-bar responsive\">\n				<input id=\"course-search\" class=\"tile-search\"\n				placeholder=\"Search courses\">\n				<button type=\"submit\" id=\"course-search-btn\">\n					<i class=\"fa fa-search\"></i>\n				</button>\n			</span>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.can_create_course : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n\n	</header>\n\n\n\n	<div class=\"main-content-container\" id=\"main-content-container\">\n\n		<div id=\"js-course-groups\"></div>\n	</div>\n</main>\n</div>\n\n";
},"useData":true});

this["JST"]["app/templates/course_view/elective-add-prompt.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"add-elective\" data-outer-class=\"add-box prompt-lightbox\">\n	<p>Take <strong>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</strong> as a learner? It will appear in your To Do list on the Learn screen.</p>\n	<button id=\"confirm-add-elective-button\">Take Course</button>\n	<button id=\"cancel-add-elective-button\">Cancel</button>\n</div>";
},"useData":true});

this["JST"]["app/templates/course_view/electives_course.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"color","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<img class=\"thumb\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.thumbnail || (depth0 != null ? depth0.thumbnail : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"thumbnail","hash":{},"data":data}) : helper)))
    + "\"/>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<li class=\"electives-course course\" value="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">\n	<a id=\"js-course-thumb\" class=\"thumbnail-area "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.thumbnail : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"#electives-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.thumbnail : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</a>\n	<div class=\"text\">\n		<a id=\"js-course-title\" href=\"#electives-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span class=\"course-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></a>\n		<span class=\"creator\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.creator : depth0)) != null ? stack1.first_name : stack1), depth0))
    + " "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.creator : depth0)) != null ? stack1.last_name : stack1), depth0))
    + "</span>\n		<a id=\"js-course-description\" href=\"#electives-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</a>\n	</div>\n</li>";
},"useData":true});

this["JST"]["app/templates/course_view/electives_view.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n<main id=\"electives-list\" class=\"card-style electives-view\">\n	<header>\n		<h1>Catalog of Elective Courses</h1>\n		<div class=\"actions\">\n			<span id=\"search-bar-container\" class=\"dark search-bar responsive\">\n				<input id=\"course-search\" class=\"tile-search\"\n				placeholder=\"Search courses\">\n				<button type=\"submit\" id=\"course-search-btn\">\n					<i class=\"fa fa-search\"></i>\n				</button>\n			</span>\n		</div>		\n	</header>\n	<div class=\"main-content-container\" id=\"main-content-container\">\n		<h2 style=\"text-align: center; padding: 5px 20px;\">Here are the optional courses you can take as a learner, except the ones you are already taking.</h2>\n		<ul class=\"js-course-list\"></ul>\n\n		</div>\n	</div>\n</main>\n</div";
},"useData":true});

this["JST"]["app/templates/course_view/instruct_course.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "tagged";
},"3":function(container,depth0,helpers,partials,data) {
    return "tagless";
},"5":function(container,depth0,helpers,partials,data) {
    return " archived";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<a id=\"js-course-thumb\" class=\"thumbnail-area\" href=\"#topic-"
    + container.escapeExpression(((helper = (helper = helpers.first_topic_id || (depth0 != null ? depth0.first_topic_id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"first_topic_id","hash":{},"data":data}) : helper)))
    + "\">\n			<img class=\"thumb\" src=\"dist/img/courseview/archived-c21c12d43a1f2c99965cd1a985274144.png\">\n		</a>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<a id=\"js-course-thumb\" class=\"thumbnail-area "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.thumbnail : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"#topic-"
    + container.escapeExpression(((helper = (helper = helpers.first_topic_id || (depth0 != null ? depth0.first_topic_id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"first_topic_id","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.thumbnail : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</a>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"color","hash":{},"data":data}) : helper)));
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<img class=\"thumb\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.thumbnail || (depth0 != null ? depth0.thumbnail : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"thumbnail","hash":{},"data":data}) : helper)))
    + "\" />\n";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "				<a href=\"#instruct-"
    + alias2(alias1((depths[1] != null ? depths[1].mode : depths[1]), depth0))
    + "-"
    + alias2(alias1((depths[1] != null ? depths[1].sort : depths[1]), depth0))
    + "-%23"
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">"
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "		<a href=\"#topic-"
    + alias3(((helper = (helper = helpers.first_topic_id || (depth0 != null ? depth0.first_topic_id : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"first_topic_id","hash":{},"data":data}) : helper)))
    + "\" class=\"status done\">\n			<span id=\"js-course-status\" class=\"status-text\">Archived "
    + alias3((helpers.timestamp || (depth0 && depth0.timestamp) || alias2).call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"timestamp","hash":{},"data":data}))
    + "</span>\n		</a>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<a href=\"#topic-"
    + container.escapeExpression(((helper = (helper = helpers.first_topic_id || (depth0 != null ? depth0.first_topic_id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"first_topic_id","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.has_ungradings : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.has_ungradings : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data})) != null ? stack1 : "")
    + "		</a>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return " class=\"status has-ungraded\" ";
},"21":function(container,depth0,helpers,partials,data) {
    return " class=\"status done\" ";
},"23":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<span id=\"js-course-status\" class=\"status-text\">Unscored submissions</span>\n			<span class=\"status-badge\"> <num>"
    + container.escapeExpression(((helper = (helper = helpers.ungradings_count || (depth0 != null ? depth0.ungradings_count : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ungradings_count","hash":{},"data":data}) : helper)))
    + "</num></span>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<span id=\"js-course-status\" class=\"status-text\">Last Updated</span>\n			<span class=\"status-text\">"
    + container.escapeExpression(((helper = (helper = helpers.updated_at || (depth0 != null ? depth0.updated_at : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"updated_at","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"instruct-course course "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"js-course-item\">\n	<button id=\"js-star-button\">&#9734;</button>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n	<div class=\"text\">\n		<a id=\"js-course-title\" href=\"#topic-"
    + alias4(((helper = (helper = helpers.first_topic_id || (depth0 != null ? depth0.first_topic_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_topic_id","hash":{},"data":data}) : helper)))
    + "\"><span class=\"course-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></a>\n		<span class=\"creator\">"
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.creator : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "</span>\n		<a id=\"js-course-description\" href=\"#topic-"
    + alias4(((helper = (helper = helpers.first_topic_id || (depth0 != null ? depth0.first_topic_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_topic_id","hash":{},"data":data}) : helper)))
    + "\" class=\"description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</a>\n		<span class=\"tags\" id=\"js-tags\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</span>\n	</div>\n	\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(18, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</li>";
},"useData":true,"useDepths":true});

this["JST"]["app/templates/course_view/instruct_view.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return " \n	"
    + container.escapeExpression(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"style","hash":{},"data":data}) : helper)))
    + " \n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	card-style \n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div>\n<main id=\"course-list\" class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.style : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "instruct-view\">\n	<header>\n		<span class=\"select-label-text\">Courses:</span>\n		<span class=\"button-look\">\n			<select class=\"naked\" id=\"js-which-courses\">\n				<option>Mine</option>\n				<option>Starred</option>\n				<option>Archived</option>\n				<option class=\"hide-unless has-reports\">Reports</option>\n				<option class=\"hide-unless admin\">All</option>\n			</select>\n		</span>\n\n		<span class=\"select-label-text\">Sorted by:</span>\n		<span class=\"button-look\">\n			<select class=\"naked\" id=\"js-which-sort\">\n				<option>Recent</option>\n				<option>A to Z</option>\n			</select>\n		</span>\n\n\n		<span class=\"select-label-text\">Style:</span>\n\n		<span class=\"button-look\">\n			<select class=\"naked\" id=\"js-which-style\">\n				<option>Cards</option>\n				<option>List</option>\n			</select>\n		</span>\n		<div class=\"actions\">\n			<span id=\"search-bar-container\" class=\"search-bar responsive\">\n				<input id=\"course-search\" class=\"tile-search\"\n				placeholder=\"Search courses\">\n				<button type=\"submit\" id=\"course-search-btn\">\n					<i class=\"fa fa-search\"></i>\n				</button>\n			</span>\n			<button id=\"add-course-button\" class=\"hidden standard js-add-course\">\n				<span class=\"icon\">+</span>\n				<span class=\"text\"> New Course</span>\n			</button>\n		</div>\n		<div class=\"overflow-menu\">\n			<button>\n				<i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n			</button>\n			<ul class=\"simple-dropdown-menu hidden right\">\n				<li>Search</li>\n				<li>Add Content</li>\n			</ul>\n		</div>\n\n	</header>\n\n\n\n	<div class=\"main-content-container\" id=\"main-content-container\">\n\n		<ul class=\"js-course-list\"></ul>\n	</div>\n</main>\n</div>\n\n";
},"useData":true});

this["JST"]["app/templates/course_view/learn_course.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " archived";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "		<a id=\"js-course-thumb\" class=\"thumbnail-area\" href=\"#topic-"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.first_topic_id : stack1), depth0))
    + "-"
    + alias1(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n			<img class=\"thumb\" src=\"dist/img/courseview/archived-c21c12d43a1f2c99965cd1a985274144.png\">\n		</a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "		<a id=\"js-course-thumb\" class=\"thumbnail-area "
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.thumbnail : stack1),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"#topic-"
    + alias2(container.lambda(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.first_topic_id : stack1), depth0))
    + "-"
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.thumbnail : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</a>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"color","hash":{},"data":data}) : helper)));
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<img class=\"thumb\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.thumbnail : stack1), depth0))
    + "\" />\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=helpers.helperMissing;

  return "		<a href=\"#topic-"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.first_topic_id : stack1), depth0))
    + "-"
    + alias1(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"status done\">\n			<span id=\"js-course-status\" class=\"hidden\"></span> <!-- stupid -->\n			Archived "
    + alias1((helpers.timestamp || (depth0 && depth0.timestamp) || alias3).call(alias2,((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"timestamp","hash":{},"data":data}))
    + "\n		</a>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<a href=\"#topic-"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.first_topic_id : stack1), depth0))
    + "-"
    + alias1(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"status "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.done : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n		<span id=\"js-course-status\" class=\"status-text\"></span>\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0.done : depth0),{"name":"unless","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</a>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "done";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<span class=\"status-badge\">\n				<num>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.display_tiles_todo : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "")
    + "				</num>\n			</span>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						"
    + container.escapeExpression(((helper = (helper = helpers.tiles_todo || (depth0 != null ? depth0.tiles_todo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tiles_todo","hash":{},"data":data}) : helper)))
    + "\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "						To Do\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, alias4=helpers.helperMissing, alias5="function";

  return "<li class=\"learn-course course"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	<button id=\"js-star-button\">&#9734;</button>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "	<div class=\"text\">\n		<a id=\"js-course-title\" href=\"#topic-"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.first_topic_id : stack1), depth0))
    + "-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span class=\"course-title\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span></a>\n		<span class=\"creator\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.creator : stack1)) != null ? stack1.first_name : stack1), depth0))
    + " "
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.creator : stack1)) != null ? stack1.last_name : stack1), depth0))
    + "</span>\n		<a id=\"js-course-description\" href=\"#topic-"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.first_topic_id : stack1), depth0))
    + "-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"description\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.description : stack1), depth0))
    + "</a>\n	</div>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "</li>";
},"useData":true});

this["JST"]["app/templates/course_view/learn_view.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n<main id=\"course-list\" class=\"card-style learn-view\">\n	<header>\n		<span class=\"select-label-text\">Showing:</span>\n		<span class=\"button-look\">\n			<select id=\"js-which-courses\" class=\"naked\" >\n				<option>To Do</option>\n				<option>Starred</option>\n				<option>Done</option>\n				<option>All</option>\n				<option>Archived</option>\n			</select>\n		</span>\n		\n		<span class=\"select-label-text\">Sorted by:</span>\n		<span class=\"button-look\">\n			<select id=\"js-which-sort\" class=\"naked\">\n				<option>Last Opened by Me</option>\n				<option>Course Title</option>\n			</select>\n		</span>\n\n		<div class=\"actions\">\n			<span id=\"search-bar-container\" class=\"dark search-bar responsive\">\n				<input id=\"course-search\" class=\"tile-search\"\n				placeholder=\"Search courses\">\n				<button type=\"submit\" id=\"course-search-btn\">\n					<i class=\"fa fa-search\"></i>\n				</button>\n			</span>\n		</div>\n\n	</header>\n\n\n\n	<div class=\"main-content-container\" id=\"main-content-container\">\n\n		<ul class=\"js-course-list\"></div>\n	</div>\n</main>\n</div>\n\n";
},"useData":true});

this["JST"]["app/templates/course_view/load_card.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<li class=\"load-card\" id=\"js-load-card\">\n	<i class=\"fa fa-spinner fa-spin\"></i>\n</li>";
},"useData":true});

this["JST"]["app/templates/course_view/no_courses_message.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"note\">Looks like there are no courses here yet.</div>";
},"useData":true});

this["JST"]["app/templates/course_view/no-courses-note.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"nothing-here-message\">\n	<p class=\"note\" id=\"todo\">Looks like you've done everything you've been assigned. Hooray!</p>\n	<p class=\"note\" id=\"star\">Courses you have starred will appear here. To star a course, click the <i class=\"fa fa-star-o\"></i> in the corner.</p>\n	<p class=\"note\" id=\"all\">Looks like you don't have any courses right now.</p>\n	<p class=\"note\" id=\"done\">When you've finished a course, it will disappear from To Do and appear here.</p>\n	<p class=\"note\" id=\"mine\">Courses you own or instruct will appear here. Looks like there are none right now.</p>\n	<p class=\"note\" id=\"reports\">Courses instructed by people who report to you will appear here. Looks like there are none right now.</p>\n</div>";
},"useData":true});

this["JST"]["app/templates/courseinfo_view/courseinfo_view.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"js-main-container\" class=\"main-content-container\">\n</div>";
},"useData":true});

this["JST"]["app/templates/courseinstructors_view/courseinstructors_view.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<main id=\"js-main-container\" class=\"main-content-container\">\n</main>";
},"useData":true});

this["JST"]["app/templates/courseoptions_view/courseoptions_view.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"js-main-container\" class=\"main-content-container\">\n</div>";
},"useData":true});

this["JST"]["app/templates/editinstructor_view/editinstructor_view.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<main>\n    <header>\n        <h1>Edit Instructor</h1>\n        <div class=\"actions\">\n            <button id=\"js-cancel-button\" class=\"neutral\">Cancel</button>\n        </div>\n    </header>\n    <div class=\"content-layout single-column\">\n        <section>\n            <h1>\n                <strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.first_name : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.last_name : stack1), depth0))
    + "</strong> has the following permissions for <strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.title : stack1), depth0))
    + ".</strong>\n            </h1>\n            <hr>\n            <div id=\"js-permission-editor\">\n\n            </div>\n            <button id=\"js-save-button\" class=\"standard primary-action\">Update Permissions</button>\n        </section>\n    </div>\n</main>";
},"useData":true});

this["JST"]["app/templates/editperson_view/editperson_view.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<h1>"
    + ((stack1 = container.invokePartial(partials.username,depth0,{"name":"username","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</h1>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<span class=\"locked-field\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.first_name : stack1), depth0))
    + "</span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<input name=\"first_name\" type=\"text\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.first_name : stack1), depth0))
    + "\"/>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<span class=\"locked-field\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.last_name : stack1), depth0))
    + "</span>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<input name=\"last_name\" type=\"text\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.last_name : stack1), depth0))
    + "\"/>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<span class=\"locked-field\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.email : stack1), depth0))
    + "</span>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<input name=\"email\" type=\"text\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.email : stack1), depth0))
    + "\"/>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<span class=\"locked-field\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<select id=\"js-title\">\n							<option selected>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.title : stack1), depth0))
    + "</option>\n						</select>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<span class=\"locked-field\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.hired_at : stack1), depth0))
    + "</span>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<input id=\"js-hired-at\" name=\"hired_at\" type=\"text\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.hired_at : stack1), depth0))
    + "\" />\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<span class=\"locked-field\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.ext_boss_name : stack1), depth0))
    + "</span>\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "						<select id=\"js-boss-id\">\n						</select>\n";
},"27":function(container,depth0,helpers,partials,data) {
    return "					<div class=\"note\">\n						Note: this user has account info maintained by an external integration. Any fields that show as disabled above should be edited at the source.\n					</div>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<h2>List Memberships</h2>\n			<section class=\"list-membership nopadding\">\n				<div class=\"table\">\n					<ul id=\"js-lists\">\n\n					</ul>\n				</div>\n				<label>\n					<select id=\"js-list-select\"></select>\n					<!--<input type=\"text\" placeholder=\"List name\">-->\n					<button id=\"js-add-to-list\" class=\"neutral\" style=\"margin-top: 8px;\">Add</button>\n				</label>\n			</section>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.hasCustomCategories : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"30":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<h2>Categories</h2>\n			<section class=\"custom-categories\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.custom_category_types : depth0),{"name":"each","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</section>\n";
},"31":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<label>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n					<select id=\"js-category-type-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></select>\n				</label>\n";
},"33":function(container,depth0,helpers,partials,data) {
    return "		<section class=\"reset-delete delete-area\">\n			<div>	\n				<button id=\"js-reset-password\" class=\"neutral\">Reset Password</button>\n				<span>A new password will be emailed to them.</span>\n			</div>\n			<div style=\"margin-top: 20px;\">\n				<button id=\"js-delete-user\" class=\"warning\">Delete User</button>\n				<span>You can't undo this.</span>\n			</div>\n		</section>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<main>\n	<header>\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.user : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<div class=\"actions\">\n			<a id=\"js-done-button\" class=\"button neutral\">Done</a>\n		</div>\n	</header>\n	<div class=\"content-layout single-column-slim\">\n		<form id=\"js-person-form\">\n			<h2>Basic Info</h2>\n			<section>\n				<label>\n					First Name\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.external_id : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "				</label>\n				<label>\n					Last Name\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.external_id : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "				</label>\n				<label>\n					Email\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.external_id : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "				</label>\n				<label>\n					Title:\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.external_id : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + "				</label>\n				<label>\n					Hire Date:\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.external_id : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + "				</label>\n				<label>\n					Reports to:\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.boss_external_id : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data})) != null ? stack1 : "")
    + "				</label>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.external_id : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</section>\n			<h2>Permissions</h2>\n			<section>\n				<label>\n					<input id=\"js-is-basic\" type=\"radio\" name=\"permission\"\n						   value=\"basic\">\n					Basic - can only edit a course if invited as an instructor.\n				</label>\n				<label>\n					<input id=\"js-can-create\" type=\"radio\" name=\"permission\"\n						   value=\"can_create\">\n					Author - can create courses and delete courses they’ve created.\n				</label>\n				<label>\n					<input id=\"js-is-admin\" type=\"radio\" name=\"permission\"\n						   value=\"admin\">\n					Admin - can see and do everything.\n				</label>\n			</section>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</form>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.id : stack1),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</main>";
},"usePartial":true,"useData":true});

this["JST"]["app/templates/editperson_view/password_reset.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form data-outer-class=\"password-reset\">\n    <h2>Reset User's Password</h2>\n    <label>\n        <input id=\"js-email\" type=\"radio\" name=\"password_choice\" value=\"random\" checked />\n        Email them a link to reset their password (recommended)\n    </label>\n    <label>\n        <input id=\"js-user\" type=\"radio\" name=\"password_choice\" value=\"arbitrary\"/>\n        Type a new password\n    </label>\n    <label class=\"hidden-field\">\n        <input id=\"js-password-input\" type=\"password\" name=\"password\" disabled/>\n        <button id=\"js-show-password\" disabled>\n            <i class=\"fa fa-eye\"></i>\n        </button>\n    </label>\n    <button id=\"js-change-password\" class=\"standard\">Confirm Reset</button>\n</form>";
},"useData":true});

this["JST"]["app/templates/editperson_view/team-item.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li>\n	"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n	<i data-list-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"remove-list-item fa\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.external_id : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\"></i>\n</li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "						 fa-lock\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "						 js-delete-button fa-times\n						 ";
},"6":function(container,depth0,helpers,partials,data) {
    return "<li>User is not a Member of any Lists.</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["app/templates/filterer/filterer.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!--<select id=\"js-filterer-select\"></select>-->\n\n<div id=\"filter-area\">\n	<div id=\"filter-group\">\n		<!--filters go here-->\n	</div>\n	<button id=\"add-filter\" class=\"neutral add-filter\">\n		<i class=\"fa fa-plus\"></i>\n		Add Filter\n	</button>\n</div>";
},"useData":true});

this["JST"]["app/templates/loader/loader-0.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<!-- in the event of error this will be appended to #js-loader-container -->\n<div id=\"error-text\">\n    <h2 id=\"error-line-1\">Oops, that didn't work.</h2>\n    <p id=\"error-line-2\">Network connection lost.\n        Please verify that you still have a connection to the internet.\n        If this keeps happening, you may have found a bug we need to fix.\n        Please email support@tryskillo.com explaining how you encountered\n        this message, and include the error below:\n    </p>\n    <p id=\"specific-error\">"
    + container.escapeExpression(((helper = (helper = helpers.specificerror || (depth0 != null ? depth0.specificerror : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"specificerror","hash":{},"data":data}) : helper)))
    + "</p>\n</div>";
},"useData":true});

this["JST"]["app/templates/loader/loader-500.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<!-- in the event of error this will be appended to #js-loader-container -->\n<div id=\"error-text\">\n    <h2 id=\"error-line-1\">Oops, that didn't work.</h2>\n    <p id=\"error-line-2\">Looks like a server error. If this keeps happening, you found a bug we need to fix. Please email support@tryskillo.com explaining how you encountered the bug, and include the error message below:</p>\n    <p id=\"specific-error\">"
    + container.escapeExpression(((helper = (helper = helpers.specificerror || (depth0 != null ? depth0.specificerror : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"specificerror","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/loader/loader-502.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<!-- in the event of error this will be appended to #js-loader-container -->\n<div id=\"error-text\">\n    <h2 id=\"error-line-1\">Busy Servers</h2>\n    <p id=\"error-line-2\">Sorry, we're getting much more traffic than usual. Please wait a few minutes and try again.</p>\n    <p id=\"specific-error\">"
    + container.escapeExpression(((helper = (helper = helpers.specificerror || (depth0 != null ? depth0.specificerror : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"specificerror","hash":{},"data":data}) : helper)))
    + "</p>\n</div>";
},"useData":true});

this["JST"]["app/templates/loader/loader-503.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<!-- in the event of error this will be appended to #js-loader-container -->\n<div id=\"error-text\">\n    <h2 id=\"error-line-1\">Busy Servers</h2>\n    <p id=\"error-line-2\">Sorry, we're getting much more traffic than usual. Please wait a few minutes and try again.</p>\n    <p id=\"specific-error\">"
    + container.escapeExpression(((helper = (helper = helpers.specificerror || (depth0 != null ? depth0.specificerror : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"specificerror","hash":{},"data":data}) : helper)))
    + "</p>\n</div>";
},"useData":true});

this["JST"]["app/templates/loader/loader-504.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<!-- in the event of error this will be appended to #js-loader-container -->\n<div id=\"error-text\">\n    <h2 id=\"error-line-1\">Busy Servers</h2>\n    <p id=\"error-line-2\">Sorry, we're getting much more traffic than usual. Please wait a few minutes and try again.</p>\n    <p id=\"specific-error\">"
    + container.escapeExpression(((helper = (helper = helpers.specificerror || (depth0 != null ? depth0.specificerror : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"specificerror","hash":{},"data":data}) : helper)))
    + "</p>\n</div>";
},"useData":true});

this["JST"]["app/templates/loader/loader-error.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<!-- in the event of error this will be appended to #js-loader-container -->\n<div id=\"error-text\">\n	<h2 id=\"error-line-1\">Oops, something went wrong.</h2>\n	<p id=\"error-line-2\">First, check your internet connection, then refresh your browser. If you still get this error, you found a bug we need to fix. Please email support@tryskillo.com explaining how you encountered the bug, and include the error message below:</p>\n	<p id=\"specific-error\">"
    + container.escapeExpression(((helper = (helper = helpers.specificerror || (depth0 != null ? depth0.specificerror : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"specificerror","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/loader/loader.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"js-loader-container\" class=\"lightbox-shadow\">\n	<div class=\"box\">\n		<h2 id=\"waiting-text\">"
    + container.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"message","hash":{},"data":data}) : helper)))
    + "</h2>\n		<div id=\"js-spinner\">\n			<i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\n		</div>\n	</div>\n\n	\n</div>";
},"useData":true});

this["JST"]["app/templates/login/login.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"other-options\">\n					<a id=\"confirm-forgot-password-link\" class=\"small-round button\">Forgot Password</a>\n					<br>\n					<a id=\"go-back-link\" class=\"small-round button\">Go Back</a>\n				</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<main id=\"login-view\">\n	<div id=\"login-logo\"><!-- image set in branding.css --></div>\n	<div id=\"existing-email-warning\" class=\"login-warning\"></div>\n\n	<div id=\"viewport\" class=\"face\">\n		<section id=\"email-entry-screen\">\n			<h2>Sign In</h2>\n			<label for=\"username-field\" class=\"hidden\">Email Address</label>\n			<input type=\"text\" id=\"username-field\" aria-label=\"Email Address Field\" placeholder=\"Email Address\" class=\"fat\" autofocus>\n			<button id=\"js-next-button\" class=\"neutral fat\">Next</button>\n		</section>\n\n		<section id=\"organization-select\">\n			<h2>Select Organization</h2>\n			<select id=\"js-org-select\">\n				<option>--</option>\n			</select>\n		</section>\n\n		<section id=\"password-entry-screen\">\n			<div class=\"intro-message\">\n				<h2 id=\"js-message-heading\"></h2>\n				<p id=\"js-message\"></p>\n			</div>\n			<label for=\"password-field\" class=\"hidden\">Password</label>\n			<input type=\"password\" id=\"password-field\" class=\"fat\" aria-label=\"Password Field\" placeholder=\"password\">\n			<button class=\"standard fat\" id=\"login-button\">Sign In</button>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.normalFlow : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</section>\n\n\n		<section id=\"password-reset-confirm-screen\">\n			<h2>Reset Password?</h2>\n			<p>If you&apos;ve lost your password, we can email you a link that will allow you to reset it.\n			</p>\n			<button class=\"standard fat\" id=\"forgot-password-link\">Get New Password</button>\n			<button id=\"login-link\" class=\"small-round button\">Go Back</button>\n		</section>\n\n	</div>\n</main>";
},"useData":true});

this["JST"]["app/templates/login/reset-pass.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<main id=\"login-view\">\n	<div id=\"login-logo\">\n		<!-- image set in branding.css -->\n	</div>\n<section id=\"password-change\">\n	<div id=\"password-change-box\" class=\"hide-from-external-account\">\n		<h2>Reset Password</h2>\n\n		<label>\n			<input type=\"password\" name=\"password\" placeholder=\"New Password\">\n		</label>\n\n		<label>\n			<input type=\"password\" name=\"password_confirmation\" placeholder=\"Confirm New Password\">\n		</label>\n\n		<button id=\"change-password\" class=\"standard\" style=\"\">\n			Change Password\n		</button>\n\n	</div>\n</section>\n</main>";
},"useData":true});

this["JST"]["app/templates/organization_creator/signup-org-info.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"free-trial-creator\" data-outer-class=\"trial-creator-container\" role=\"main\">\n	<div class=\"contents\">\n		<img id=\"logo\" src=\"dist/img/whitelogo-885a32941d579ccabf8e669e0a2dd021.png\">\n		<form id=\"signup-first-frame\">\n\n			<img id=\"check-your-email\" src=\"dist/img/checkyouremail-476b4e2cfba46bb11e953d986ffb4218.png\">\n			<label id=\"organization-code\"><input placeholder=\"Activation Code\" aria-required=\"ture\" autofocus type=\"text\" id=\"code-input\" name=\"code\"></label>\n			<label id=\"email-container\"><input placeholder=\"Email\" aria-required=\"true\" type=\"text\" id=\"email-input\" name=\"email\" class=\"signup-input\"></label>\n			<label id=\"password-container\"><input placeholder=\"Password\" aria-required=\"true\" type=\"password\" id=\"password-input\" class=\"signup-input\" name=\"password\"></label>\n			<label id=\"password-confirmation-container\"><input placeholder=\"Confirm Password\" aria-required=\"true\" type=\"password\" id=\"password-confirm-input\" class=\"signup-input\" name=\"password_confirmation\"></label>\n			<label id=\"license\"><input aria-required=\"true\" type=\"checkbox\" id=\"terms-checkbox\"  class=\"signup-input\" name=\"terms_accepted\">I accept Skillo&apos;s <a href=\"http://tryskillo.com/eula.html\" target=\"blank\">EULA</a> and <a href=\"http://tryskillo.com/tos.html\" target=\"blank\">Terms of Service</a>.\n			</label>\n			<button id=\"js-create-account\" class=\"standard\" aria-label=\"create-account\">Create Account </button>\n		</form>\n	</div>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/people_view/add_users.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div data-outer-class=\"add-users-to-list\">\n	<label>\n		Users\n		<select id=\"js-list-select\"></select>\n	</label>\n	<button class=\"lightbox-done standard\">Add People</button>\n	<i id=\"button-spinner\" class=\"fa fa-spinner fa-spin hidden\"></i>\n</div>";
},"useData":true});

this["JST"]["app/templates/people_view/create-list.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div data-outer-class=\"create-list\" id=\"list-creator-box\">\n	<label>\n		New List Title\n		<input id=\"js-list-name\" type=\"text\">\n		<div class=\"js-error-printout\"></div>\n	</label>\n	<label>\n		Members (you can add more later)\n		<select id=\"js-list-select\"></select>\n	</label>\n	<button class=\"lightbox-done standard\">Finish</button>\n	<i id=\"button-spinner\" class=\"fa fa-spinner fa-spin hidden \"></i>\n</div>";
},"useData":true});

this["JST"]["app/templates/people_view/import-list-person.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"name\">"
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "</span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<li>\n	<p>\n		"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.last_name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		<span class=\"email\">"
    + container.escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</span>\n	</p>\n</li>";
},"useData":true});

this["JST"]["app/templates/people_view/import-users.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <section class=\"nopadding\">\n          <header>\n            <h2>Create Single User</h2>\n          </header>\n          <div class=\"padding\">\n            <p>Quickly add a new user to your organization at any time. This will notify them via email.</p>\n            <a href=\"#editperson-\" id=\"js-create-user\" class=\"button standard\">Create User</a>\n          </div>\n        </section>\n        <section class=\"nopadding\">\n          <header>\n            <h2>Import Many Users</h2>\n          </header>\n          <div class=\"padding\">\n            <p>You can import up to 10,000 users at once by uploading a CSV file. It must have one row per user, each with three values in order:</p>\n            <ul class=\"list\">\n              <li>First name</li>\n              <li>Last name</li>\n              <li>The email address they will use to log in</li>\n            </ul>\n            <hr>\n            <h3 style=\"font-weight: bold\">Example CSV contents:</h3>\n            <div class=\"example\">\n              <ul>\n                <li>Bob,Smith,bob@example.com</li>\n                <li>Amy,Potter,amy@example.com</li>\n                <li>Marcellus,Baker,sonny@example.com</li>\n              </ul>\n              <img src=\"dist/img/csv-example-a64e5434a2aa708a9e13843e8a065373.png\" alt=\"\">\n            </div>\n\n            <br>\n            <label class=\"standard button upload\"> Upload CSV\n              <input type=\"file\" id=\"files\" name=\"files[]\" accept=\".csv\" multiple/>\n            </label>\n            <output id=\"list\"></output>\n          </div>\n        </section>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "          <section class=\"note\">\n            <strong>Manual User Creation Disabled.</strong>\n            <p>Skillo user creation is done elsewhere at your organization. Please contact your IT personnel or update your system of record to add users to Skillo.</p>\n          </section>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"import-view\">\n  <main id=\"js-template-container\">\n    <header>\n      <h1 id=\"import-header\">Add Users</h1>\n      <div class=\"actions\">\n      </div>\n    </header>\n\n    <div class=\"content-layout single-column\" id=\"user-import-screen\">\n      <div id=\"main-contents\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.allow_external_accounts : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "      </div>\n\n    <div id=\"no-valid-users\" class=\"hidden\">\n      <div class=\"padding\">\n        <p>Import failed. Check your file and try again.</p>\n      </div>\n      <button class=\"button neutral\" id=\"failed-button\" type=\"button\">Back</button>\n    </div>\n\n    <div id=\"import-preview\" class=\"hidden\">\n\n      <section class=\"nopadding\" id=\"import-preview\">\n        <header>\n          <h2>Sanity Check</h2>\n        </header>\n        <div class=\"padding\">\n          <p id=\"number-errors\" class=\"hidden\">  entries are incomplete or invalid, and will be ignored. <a id=\"multi-error-ref\">More info</a> </p> \n          <p id=\"single-error\" class=\"hidden\"> 1 entry is incomplete or invalid, and will be ignored. <a id=\"single-error-ref\">More Info</a> </p> \n          <section id=\"error-line-section\" class=\"hidden import-sanity-check\">\n            The following lines are either missing information or are formatted incorrectly\n            <ul id=\"error-list\">\n\n            </ul>\n          </section>\n          <p id=\"number-duplicates\"class=\"hidden\"> email addresses are duplicates or already have accounts. No duplicate accounts will be created. <a id=\"multi-dupe-ref\">More Info</a></p>\n          <p id=\"single-duplicate\" class=\"hidden\"> 1 email address is a duplicate or already has an account. No duplicate accounts will be created. <a id=\"single-dupe-ref\">More Info</a></p>\n          <section id=\"dupe-line-section\" class=\"hidden import-sanity-check\">\n            The following lines are duplicates of each other. Only the first one will be imported.\n            <ul id=\"csv-dupe-list\">\n\n            </ul>\n            <br><br>\n            Emails on the following lines match users already in the database. If the names in your\n            CSV are different, names in the database will be updated to match. \n            <ul id=\"db-dupe-list\">\n\n            </ul>\n          </section>\n          <p id=\"student-display\" class=\"hidden\"> users will be created. Here is a preview: </p>\n          <p id=\"no-creation\" class=\"hidden\"> No users will be created. </p>\n        </div>\n      <div id=\"js-roster-preview\" class=\"table padding\">\n        <header>\n          <span class=\"name\">Full Name</span>\n          <span class=\"email\">Email address</span>\n        </header>\n        <ul id=\"roster-list\">\n        </ul>\n        </div>\n      </section>\n\n      <section class=\"nopadding\">\n        <header>\n          <h2>Options</h2>\n        </header>\n        <div class=\"padding\">\n          <span>Do you want to add these users to a User List?</span>\n          <form action=\"\">\n          <label style=\"padding: 9px 0px\">\n            <input checked=\"checked\" id=\"no-team\" type=\"radio\" name=\"list-type\" value=\"true\"> Not now\n          </label>\n          <label id=\"js-existing-team-span\">\n            <input id=\"existing-team\" type=\"radio\" name=\"list-type\" value=\"false\"> Add to existing list(s)\n            <span class=\"inline-wrapper\"><select id=\"existing-team-select\"></select></span>\n          </label>\n          <label id=\"new-team-label\">\n          <input id=\"new-team\" type=\"radio\" name=\"list-type\" value=\"false\"> Add to a new list\n            <span class=\"inline-wrapper\"><input type=\"text\" id=\"new-team-text\" placeholder=\"name the list\"></span>\n          </label>\n\n          </form>\n          <button class=\"button standard\" id=\"submit-button\" type=\"button\"> Do it! </button>\n          <button class=\"button neutral\" id=\"cancel-button\">Cancel</button>\n        </div>\n      </section>\n\n    </div>\n\n    <div>\n      <section class=\"nopadding\">\n        <p id=\"import-progress-bar-text\" class=\"hidden\"> Importing Users Progress: </p> \n        <p id=\"update-progress-bar-text\" class=\"hidden\"> Updating Users Text: </p>\n      </section>\n      \n      <section id=\"progress-section\" class=\"hidden\">\n        <p id=\"import-progress-text\">Importing users...</p>\n        <div class=\"meter\" id=\"import-progress-meter\">\n          <div id=\"inner-meter\" style=\"width: 0%\">\n          </div>\n          <div id=\"inner-text\">\n            0% \n          </div>\n        </div>\n      </section>\n\n    </div>\n      <section id=\"import-success\" class=\"hidden\">\n        <h1 class=\"big-text\"> Success :D </h1>\n        <p id=\"success-users-count\"> Users created</p>\n        <p>The first time they attempt to sign in with the correct email address, they will be emailed a link to let them create a password.</p>\n      </section>\n    </div>\n  </main>\n</div>";
},"useData":true});

this["JST"]["app/templates/people_view/learner-status-select.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<select id=\"status-select\">\n  <option value=\"any\">Any</option><!-- selected by default, and doesn't do anything -->\n	<option value=\"overdue\">Overdue</option><!-- has overdue assignments -->\n	<option value=\"todo\">Todo</option><!-- has assignments to do -->\n	<option value=\"done\">Done</option><!-- has no assignments to do or overdue -->\n</select>";
},"useData":true});

this["JST"]["app/templates/people_view/monthly-stats-explanation.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div data-outer-class=\"monthly-stats-explanation\">\n  <div class=\"contents\">\n    <h2>About Monthly Stats</h2>\n	<p>Each stat shows the recent activity across your organization (not just your team). The highlighted number shows the last 30 days. The small number below counts only yesterday.</p>\n  </div>\n</div>";
},"useData":true});

this["JST"]["app/templates/people_view/my-team.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "				<section class=\"student-filters\" id=\"js-student-filters\">\n					<header>\n						<div id=\"js-filter-buttons\" class=\"button-group\">\n							<label>\n								<input type=\"radio\" name=\"student-scope\" value=\"everyone\">\n								<span class=\"button-group-item\">Everyone</span>\n							</label>\n							<label>\n								<input type=\"radio\" name=\"student-scope\" value=\"team\">\n								<span class=\"button-group-item\">My Team</span>\n							</label>\n							<label>\n								<input type=\"radio\" name=\"student-scope\" value=\"custom\">\n								<span class=\"button-group-item\">Custom</span>\n							</label>\n						</div>\n					</header>\n					<div id=\"filter-area\" class=\"hidden\">\n						<div id=\"filter-group\"></div>\n						<button id=\"add-filter\" class=\"neutral\">\n							<i class=\"fa fa-plus\"></i>\n							Add Filter\n						</button>\n					</div>\n				</section>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "				<h2>My Team</h2>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div id=\"lists-view\">\n	<main id=\"js-template-container\">\n		<header>\n			<h1 id=\"roster-header\">People</h1>\n			<div class=\"actions\">\n				<span id=\"search-bar-container\" ></span>\n			</div>\n		</header>\n\n		<div class=\"content-layout single-column\" id=\"my-team\">\n\n			<div style=\"display: none\">\n				<h2>Your Organization's Monthly Stats <i id=\"stats-help-button\" class=\"fa fa-question-circle-o help-button\"></i></h2>\n				<section id=\"js-stats\" class=\"nopadding monthly-insights\">\n				</section>\n			</div>\n\n			\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.admin : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.admin : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n			<section class=\"nopadding\">\n				<div class=\"table\">\n					<header id=\"people-headers\">\n						<span class=\"roster-header user\" data-sortAttr=\"last_name\">Name</span>\n						<span class=\"roster-header status\" data-sortAttr=\"status\">Status <i id=\"question-button\" class=\"fa fa-question-circle-o help-button\"></i></span>\n					</header>\n					<ul id=\"roster-list\">\n					</ul>\n				</div>\n			</section>\n			<div class=\"hidden\" id=\"js-lazy-load\" style=\"text-align:center\">\n				<i class=\"fa fa-spinner fa-spin fa-3x fa-fw center\"></i>\n			</div>\n\n		</div>\n	</main>\n</div>";
},"useData":true});

this["JST"]["app/templates/people_view/people-view.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"people-view\">\n	<main id=\"js-template-container\">\n	</main>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/people_view/person.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"name\">"
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "</span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li>\n	<a href=\"#person-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n		"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.last_name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		<span class=\"email\">"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</span>\n	</a>\n</li>";
},"useData":true});

this["JST"]["app/templates/people_view/quick-search.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header>\n	<h1 id=\"roster-header\">Find User</h1>\n</header>\n\n<div class=\"content-layout single-column\">\n	\n	<h1 class=\"big-text\">View anyone's progress.</h1>\n	<p class=\"one-line-explanation\">Quickly look up ANY user matching the specified name, email, leader, course, or user list.</p>\n	<section>\n		<label>\n			<select id=\"user-search\"></select>\n		</label>\n	</section>\n\n	<div class=\"table\">\n		<ul id=\"roster-list\">\n		</ul>\n	</div>\n\n</div>";
},"useData":true});

this["JST"]["app/templates/people_view/team-screen-explanation.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div data-outer-class=\"status-explanation\">\n  <div class=\"contents\">\n    <h2>About Learner Status</h2>\n    <p>The status indicator shows whether each learner is done with everything they've been assigned.</p>\n    <p class=\"status done\"><span class=\"status done\">Done</span> The learner has no unfinished courses to work on. For every course they've been assigned, either they have completed all available content or have been marked Complete in the course by an instructor. </p>\n    <p class=\"status todo\"><span class=\"status todo\">To Do</span> There is at least one course in the learner's To Do list, but none are overdue.</p>\n    <p class=\"status overdue\"><span class=\"status overdue\">Overdue</span> The learner has at least one course which is both unfinished and overdue.</p>\n    <p class=\"status done\"> Note: course assignments more than a year old or more than 90 days overdue don't count here.</p>\n  </div>\n</div>";
},"useData":true});

this["JST"]["app/templates/people_view/team-view-person.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"name\">"
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "</span>";
},"3":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"status overdue\">Overdue</span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.todo : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"status todo\">To Do</span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"status done\">Done</span>\n    ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li>\n	<a href=\"#person-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <span class=\"user\">\n      "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.last_name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n      <span class=\"email\">"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</span>\n    </span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.overdue : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "	</a>\n</li>";
},"useData":true});

this["JST"]["app/templates/people_view/user-list-person.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"name\">"
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "</span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li>\n	<a href=\"#person-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n		"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.last_name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		<span class=\"email\">"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</span>\n	</a>\n	<button id=\"js-remove-user\" class=\"remove-list-item\"><i class=\"fa fa-times\"></i></button>\n</li>";
},"useData":true});

this["JST"]["app/templates/people_view/user-list.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id =\"list-view\">\n	<main id=\"js-template-container\">\n		<header>\n			<h1 id=\"roster-header\" class=\"title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n			<div class=\"actions\">\n				<button id=\"js-user-adder\"\n						class=\"standard primary-action\">Add User</button>\n			</div>\n		</header>\n\n		<div class=\"content-layout single-column\">\n\n			<h1 class=\"big-text\">\n				<span id=\"js-list-title\"></span>\n				<i id=\"js-edit-list-title\" class=\"fa fa-pencil hide-unless instructs-courses\"></i>\n			</h1>\n\n			<section class=\"nopadding\">\n				<div class=\"table\">\n					<ul id=\"roster-list\"></ul>\n				</div>\n			</section>\n\n			<section id=\"js-delete-list-section\" class=\"tile-settings content delete-area\">\n				<button type=\"button\" id=\"js-delete-list-button\" class=\"warning delete\">\n					<i class=\"fa fa-exclamation-circle\"></i> Delete List\n				</button>\n				<span>You can't undo this.</span>\n			</section>\n		</div>\n	</main>\n</div>";
},"useData":true});

this["JST"]["app/templates/people_view/user-lists-item.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.creator : depth0)) != null ? stack1.full_name : stack1), depth0))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "				Automated\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li>\n	<a href=\"#list-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n		<span class=\"name\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n		<span class=\"population\">"
    + alias4(((helper = (helper = helpers.team_member_count || (depth0 != null ? depth0.team_member_count : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"team_member_count","hash":{},"data":data}) : helper)))
    + "\n			<i class=\"fa fa-user\"></i>\n		</span>\n		<span class=\"creator\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.creator : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "		</span>\n		<span class=\"timestamp\">"
    + alias4(((helper = (helper = helpers.updated_at || (depth0 != null ? depth0.updated_at : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"updated_at","hash":{},"data":data}) : helper)))
    + "</span>\n	</a>\n</li>";
},"useData":true});

this["JST"]["app/templates/people_view/user-lists.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"lists-view\">\n	<main id=\"js-template-container\">\n		<header>\n			<span class=\"select-label-text\">User Lists:</span>\n			<span class=\"button-look\">\n				<select id=\"js-which-lists\" class=\"naked\">\n					<option>Mine</option>\n					<option>All</option>\n				</select>\n			</span>\n\n\n			<div class=\"actions\">\n				<span id=\"search-bar-container\" class=\"search-bar responsive\">\n						<input class=\"tile-search\" id=\"js-find-list-input\" placeholder=\"Find List\">\n						<button type=\"submit\" class=\"tile-search-btn\">\n								<i class=\"fa fa-search\"></i>\n						</button>\n				</span>\n				<button class=\"standard primary-action\" id=\"js-create-list\">\n					<span class=\"desktop-hide\">+</span>\n					<span class=\"mobile-hide\"> Create List</span>\n				</button>\n			</div>\n		</header>\n\n		<div class=\"content-layout\" id=\"list-of-lists\">\n			<h1 class=\"big-text\">User Lists</h1>\n			<p class=\"one-line-explanation\">View and manage global lists of users. A user can be on multiple lists.</p>\n\n			<div class=\"table\">	\n				<header>\n					<span class=\"name\">List Name</span>\n					<span class=\"population\">People</span>\n					<span class=\"creator\">Creator</span>\n					<span class=\"timestamp\">Changed</span>\n				</header>\n				<ul id=\"js-user-lists\">\n				</ul>\n			</div>\n		</div>\n\n		<div class=\"hidden\" id=\"js-lazy-load\">\n			<i class=\"fa fa-spinner fa-spin fa-3x fa-fw center\"></i>\n		</div>\n</main>\n</div>";
},"useData":true});

this["JST"]["app/templates/person_view/course.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " archived";
},"3":function(container,depth0,helpers,partials,data) {
    return "			<a id=\"js-course-thumb\" class=\"thumbnail-area\">\n				<img class=\"thumb\" src=\"dist/img/courseview/archived-c21c12d43a1f2c99965cd1a985274144.png\">\n			</a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<a id=\"js-course-thumb\" class=\"thumbnail-area "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.thumbnail : depth0),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.thumbnail : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</a>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"color","hash":{},"data":data}) : helper)));
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<img class=\"thumb\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.thumbnail || (depth0 != null ? depth0.thumbnail : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"thumbnail","hash":{},"data":data}) : helper)))
    + "\" />\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<a>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<a class=\"status done\">\n			<span id=\"js-course-status\" class=\"hidden\"></span> <!-- stupid -->\n			Archived "
    + container.escapeExpression((helpers.timestamp || (depth0 && depth0.timestamp) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"timestamp","hash":{},"data":data}))
    + "\n		</a>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<a class=\"status "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.done : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n			<span id=\"js-course-status\" class=\"status-text\"></span>\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.done : depth0),{"name":"unless","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</a>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "done";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<span class=\"status-badge\">\n				<num>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tiles_todo : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "")
    + "				</num>\n			</span>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						"
    + container.escapeExpression(((helper = (helper = helpers.tiles_todo || (depth0 != null ? depth0.tiles_todo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tiles_todo","hash":{},"data":data}) : helper)))
    + "\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "						To Do\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<li class=\"learn-course course"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "	<div class=\"text\">\n		<a id=\"js-course-title\"><span\n				class=\"course-title\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span></a>\n		<span class=\"creator\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.creator : stack1)) != null ? stack1.first_name : stack1), depth0))
    + " "
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.creator : stack1)) != null ? stack1.last_name : stack1), depth0))
    + "</span>\n		<a id=\"js-course-description\" class=\"description\">"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</a>\n		<span class=\"tags\" id=\"js-tags\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</span>\n	</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "")
    + "</li>";
},"useData":true});

this["JST"]["app/templates/person_view/person_view_header.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <h2>Courses in "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.firstname : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " To Do list as a learner:</h2>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"firstname","hash":{},"data":data}) : helper)))
    + "'s";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.star_learn : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <h2>Courses "
    + container.escapeExpression(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"firstname","hash":{},"data":data}) : helper)))
    + " Starred as a learner:</h2>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.done_learn : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <h2>Courses "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.firstname : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " done with as a learner:</h2>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"firstname","hash":{},"data":data}) : helper)))
    + " is";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.all_learn : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <h2>All courses "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.firstname : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " assigned to as a learner:</h2>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"firstname","hash":{},"data":data}) : helper)))
    + " has been";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.mine_instruct : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <h2>All of the courses "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.firstname : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + "</h2>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"firstname","hash":{},"data":data}) : helper)))
    + " instructs:";
},"19":function(container,depth0,helpers,partials,data) {
    return "they instruct:";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.star_instruct : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(24, data, 0),"data":data})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <h2>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.firstname : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " Starred courses they instruct:</h2>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.reports_instruct : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <h2>Courses instructed by someone who reports to"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.firstname : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.program(28, data, 0),"data":data})) != null ? stack1 : "")
    + ":</h2>\n    ";
},"26":function(container,depth0,helpers,partials,data) {
    var helper;

  return " "
    + container.escapeExpression(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"firstname","hash":{},"data":data}) : helper)))
    + " ";
},"28":function(container,depth0,helpers,partials,data) {
    return " them";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"course-group\">\n  <header id=\"js-mode-header\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.todo_learn : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "  </header>\n  <ul id=\"js-courses\" class=\"card-style\">\n    <!--append courses here-->\n  </ul>\n</div>";
},"useData":true});

this["JST"]["app/templates/person_view/person_view_sidebar.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<a id=\"js-learn-link\" href=\"#person-"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "-learn\" class=\"courses learn\">\n			Learner Courses\n		</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<a id=\"js-instruct-link\" href=\"#person-"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "-instruct\" class=\"courses instruct\">\n			Instructor Courses\n		</a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<a id=\"js-edit-link\" href=\"#editperson-"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"courses edit\">\n			Edit User\n		</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<a href=\"#people\" class=\"button white\" id=\"back-button\">\n		People\n	</a>\n	<h1>"
    + ((stack1 = container.invokePartial(partials.username,depth0,{"name":"username","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</h1>\n	<nav role=\"navigation\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instructs_courses : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</nav>";
},"usePartial":true,"useData":true});

this["JST"]["app/templates/person_view/person_view.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "					<option value=\"mine\">Theirs</option>\n					<option value=\"reports\" class=\"hide-unless has-reports\">Reports</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "					<option value=\"todo\">To Do</option>\n					<option value=\"done\">Done</option>\n					<option value=\"all\">All</option>\n					<option value=\"archived\">Archived</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<main class=\"card-style learn-view person-view\" id=\"course-list\">\n	<header>\n		<span class=\"button-look\">\n			<select class=\"naked\" id=\"js-which-courses\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruct : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "			</select>\n		</span>\n		<div class=\"actions\">\n			<span id=\"search-bar-container\" class=\"dark search-bar responsive\">\n				<input id=\"js-course-search\" class=\"tile-search\"\n				placeholder=\"Search courses\">\n				<button type=\"submit\">\n					<i class=\"fa fa-search\"></i>\n				</button>\n			</span>\n		</div>	\n	</header>\n\n	<div class=\"main-content-container\" id=\"main-content-container\">\n		\n	</div>\n</main>\n";
},"useData":true});

this["JST"]["app/templates/quiz_editor/attempt-in-progress.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div data-outer-class=\"attempt-in-progress-lightbox\">\n	<p>This quiz is currently being attempted by at least one student.  Please try editing again in a few minutes.  You must also lock this tile immediately to prevent future attempts.</p>\n</div>";
},"useData":true});

this["JST"]["app/templates/quiz_editor/new_quiz_answer.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div data-outer-class=\"new-quiz-answer\">\n	<input type=\"text\" id=\"\" />\n	<button class=\"cancel standard\">Cancel</button>&nbsp;\n	<button class=\"done-button standard\">Done</button>\n</div>";
},"useData":true});

this["JST"]["app/templates/quiz_editor/question_editor.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.video : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.audio : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.image : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<p><span id=\"status\"></span><span id=\"counter\"></span></p>\n					<video controls id=\"video-player\" class=\"video-js vjs-default-skin\"\n					   preload=\"auto\">\n					<source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" type='video/mp4' />\n					Your browser does not support HTML5 video.\n					</video>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<audio controls id=\"audio-player\"\n						   preload=\"auto\">\n						<source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" type='audio/mpeg' />\n						Your browser does not support HTML5 audio.\n					</audio>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<img src="
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.url : stack1), depth0))
    + ">\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.quiz_answer,depth0,{"name":"quiz_answer","data":data,"indent":"\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "					<tr><td colspan=\"3\">No Answers yet.</td></tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div data-outer-class=\"quiz-answer-editor-box\">\n	<section id=\"question-editor\" class=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.question_type : stack1), depth0))
    + "-box\">\n\n		<h2>Question</h2>\n		<div class=\"question\">\n			<label class=\"text-question-item\">\n				<textarea id=\"question-input\" placeholder=\"Enter question text.\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.question : stack1), depth0))
    + "</textarea>\n			</label>\n			<button type=\"button\" class=\"neutral video-question-item\"\n					id=\"record\" >\n				Add Video/Audio\n			</button>\n			<button type=\"button\" class=\"neutral video-question-item\"\n					id=\"add-image\" >\n				Add Image\n			</button>\n		</div>\n		<div class=\"edit-quiz-media\">\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n		<div class=\"answer\">\n			<h2 id=\"js-answer-title\">Answer Type:</h2>\n			<select id=\"js-answer-type\">\n				<option value=\"multiple\">Multiple Choice</option>\n			</select>\n			<div class=\"scrolling-table\" id=\"multiple-answer\">\n				<table class=\"choices\">\n					<thead>\n						<tr><th>Choice</th><th>Correct</th><th>Delete</th></tr>\n					</thead>\n					<tbody>\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.quiz_answers : stack1),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "					</tbody>\n				</table>\n				<button type=\"button\"\n						class=\"add-answer quiz-add-button neutral\">\n					Add Choice</button>\n			</div>\n			<div id=\"video-answer\" class=\"hidden\">\n				<p>\n					The student must give an answer via their webcam or\n					microphone.\n				</p>\n				Limit answer to <input type=\"text\" size=\"2\" style=\"width: auto\" id=\"time-limit\"\n					value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.firstAnswer : depth0)) != null ? stack1.time_limit : stack1), depth0))
    + "\"/> Seconds\n				<br />\n			</div>\n		</div>\n		<div>\n		<button type=\"button\" class=\"quiz-done-button standard\" style=\"margin-top: 20px\">Save Question</button>\n		<button type=\"button\" class=\"delete-question warning\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" style=\"margin-top: 16px\">Delete Question</button>\n		</div>\n	</section>\n</div>\n";
},"usePartial":true,"useData":true});

this["JST"]["app/templates/quiz_editor/quiz_editor.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<ol id=\"quiz-questions-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.questions : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</ol>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<li class=\"question-item\" id=\"question-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-question-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n				<span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.question : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</span>\n				<button type=\"button\" class=\"delete-question\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n					<i class=\"fa fa-trash\"></i>\n				</button>\n			</li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					"
    + container.escapeExpression(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"question","hash":{},"data":data}) : helper)))
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "					No Question Text\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					"
    + container.escapeExpression(((helper = (helper = helpers.displayText || (depth0 != null ? depth0.displayText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayText","hash":{},"data":data}) : helper)))
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "		<p>This quiz has no questions yet.</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"content\">\n	<div class=\"quiz-options\">\n		<h2 id=\"edit-quiz-header\">Quiz Options</h2>\n		<label>\n			<input id=\"quiz-percentage-checkbox\" type=\"checkbox\">\n			To pass, learners must score at least\n			<input class=\"edit-quiz-input inline short\" type=\"text\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.min_score : stack1), depth0))
    + "\">\n			percent.\n		</label>\n		<label>\n			<input id=\"attempts-checkbox\" type=\"checkbox\">\n			Learners may only attempt the quiz\n			<input class=\"edit-quiz-input inline short\" type=\"text\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.attempt_limit : stack1), depth0))
    + "\">\n			time(s).\n		</label>\n		<label style=\"padding-top: 15px\"><input type=\"checkbox\" id=\"js-instant-feedback\" "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.instant_feedback : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " /> Display \"correct\" or \"incorrect\" as questions are answered.</label>\n		<label style=\"padding-top: 15px\"><input type=\"checkbox\" id=\"js-summary-feedback\" "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.summary_feedback : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " /> Display summary with correct answers after final attempt.</label>\n		<label style=\"padding-top: 15px\"><input type=\"checkbox\" id=\"js-shuffle-answers\" "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.shuffle_answers : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " /> Shuffle choices on multiple choice questions.</label>\n		<label style=\"padding-top: 15px\"><input type=\"checkbox\" id=\"js-shuffle-questions\" "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.shuffle_questions : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " /> Shuffle question order when taking quiz.</label>\n	</div>\n	<hr>\n	<h2>Quiz Questions</h2>\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.questions : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "	<button type=\"button\" class=\"new-question quiz-add-button standard\">\n		Add Question\n	</button>\n	<br />\n</div>";
},"useData":true});

this["JST"]["app/templates/quiz_editor/recorder.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"js-preview-container\" data-outer-class=\"record-audio-question\"></div>\n<canvas id=\"js-audio-indicator\" width=\"800\" height=\"400\"></canvas>\n<div id=\"simple-recording-indicator\" class=\"hidden\">\n	<span>Recording</span>\n</div>\n<button id=\"js-record\" class=\"standard\">Record</button>\n";
},"useData":true});

this["JST"]["app/templates/quiz_player/quiz.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.audio : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<div class=\"question show-all-whitespace\">"
    + ((stack1 = ((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video_answer : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "			<p class=\"quiz-feedback\"></p>\n			<button type=\"button\" class=\"standard\">Submit</button>\n			<button type=\"button\" class=\"standard hidden\">Record/Stop</button>\n			<button type=\"button\" class=\"standard hidden\">Next</button>\n		\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<video controls id=\"video-player\" class=\"video-js vjs-default-skin\" preload=\"auto\">\n					<source src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)))
    + "\" type='video/mp4'/>\n					Your browser does not support HTML5 video.\n				</video>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<p>Audio Question</p>\n				<audio controls id=\"audio-player\" preload=\"auto\">\n					<source src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)))
    + "\" type='audio/wav'/>\n					Your browser does not support HTML5 audio.\n				</audio>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<img src="
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)))
    + ">\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "				<p><span id=\"status\"></span><span id=\"counter\"></span></p>\n				<video id=\"video-recorder\" class=\"video-js vjs-default-skin hidden\" preload=\"auto\">\n					<source src=\"\" type='video/mp4'/>\n					Your browser does not support HTML5 video.\n				</video>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.audio_answer : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "				<p><span id=\"status\"></span><span id=\"counter\"></span></p>\n				<audio id=\"audio-recorder\" class=\"hidden\" preload=\"auto\">\n					<source src=\"\" type='audio/wav'/>\n					Your browser does not support HTML5 audio.\n				</audio>\n				<canvas id=\"js-audio-indicator\"></canvas>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n			<ul id=\"multiple-answer\"> \n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.quiz_answers : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "			</ul>\n			";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "				<li>\n					<label>\n						<input type=\"radio\" name=\"response\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"/>\n						<span class=\"input\"></span>\n						<span class=\"choice-text\">"
    + ((stack1 = ((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"answer","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\n				</label>\n				</li>\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "				<li>No Answers Available, please speak to your instructor.</li>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<h2> Summary </h2>\n			<ul>\n				<li>Number Correct:</li>\n				<li>Total:</li>\n				<li>Percent Correct:</li>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.min_score : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</ul>\n			<div id=\"js-coaching-report\" class=\"simple-table\"></div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<li>A score of "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.min_score : stack1), depth0))
    + "% is required to pass this quiz.\n						<button type=\"button\" class=\"standard\"\n								id=\"retake-button\">Retake</button>\n					</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"quiz-wrapper\" class=\"content-layout single-column\">\n	<section class=\"mono\">\n	<form>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "")
    + "	</form>\n	</section>\n</div>";
},"useData":true});

this["JST"]["app/templates/reader_view/assignment-instructor.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.sound : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.media : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "						<div id='video-container' class=\"media-container\">\n							<video id=\"video-player\" class=\"video-js vjs-default-skin\" controls preload=\"auto\" playsinline>\n								<source src=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.url : depth0), depth0))
    + "\" type=\"video/mp4\"/>\n							</video>\n						</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "						<div id='audio-container' class=\"media-container\">\n							<audio id=\"audio-player\" preload=\"auto\" controls=\"controls\">\n								<source type=\"audio/mpeg\" src=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.url : depth0), depth0))
    + "\" />\n								Your browser does not support HTML5 audio.\n							</audio>\n						</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "					<div>\n						<div class=\"image-container media-container\">\n							<a href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\"_blank\"><img src=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" /></a>\n						</div>\n					</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.file_name : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "							<div id='files-container'>\n								<button class='download-file standard' value='"
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "'><i class=\"fa fa-download\"></i> "
    + alias2(alias1((depth0 != null ? depth0.file_name : depth0), depth0))
    + "</button>\n							</div>\n							<br>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "<div class=\"tile-view-content\">\n	<div class=\"content-layout single-column\">\n		<section class=\"nopadding discussion-post\">\n			<header>\n				<span class=\"author\">\n					Assignment Description (I)\n				</span>\n			</header>\n			<div class=\"padding\">\n				<div class=\"show-all-whitespace\">"
    + ((stack1 = ((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.assignment_contents : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</section>\n		<section class=\"note\">\n			<p>Learners will see the above description and have a chance to respond. You can respond to and score each learner in separate conversations from the View Results screen.</p>\n			<a href=\"#tileedit-"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-results\" class=\"button standard\">Take Me To the Results</a>\n		</section>\n	</div>\n</div>\n<!--<div class=\"controls mobile-hide\">-->\n<!--</div>-->";
},"useData":true});

this["JST"]["app/templates/reader_view/assignment-results.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <h2>"
    + container.escapeExpression(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"first_name","hash":{},"data":data}) : helper)))
    + "'s Results</h2>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <h2>User's Results</h2>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                Minimum passing score: "
    + alias4(((helper = (helper = helpers.min_score || (depth0 != null ? depth0.min_score : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"min_score","hash":{},"data":data}) : helper)))
    + "%.\n                <div>Change "
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + "'s score to: <input class=\"score-input inline short\" type=\"text\" value="
    + alias4(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score","hash":{},"data":data}) : helper)))
    + ">%\n                </div>\n                <button class=\"score-assignment standard\">Update Score</button>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                Score Assignment:\n                <input class=\"score-input\" type=\"radio\" name=\"pass-fail\" value=\"pass\">Pass\n                <input class=\"score-input\" type=\"radio\" name=\"pass-fail\" value=\"fail\">Fail\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    Allow new submissions from "
    + container.escapeExpression(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"first_name","hash":{},"data":data}) : helper)))
    + ":\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "                    Allow new submissions from user:\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"content-layout single-column\">\n\n    <section class=\"assignment-controls nopadding\">\n        <header>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.first_name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        </header>\n        <div class=\"padding\">\n            <!-- grading goes here -->\n            <h2 class=\"score\"></h2>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.min_score : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.pass_fail : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            "
    + container.escapeExpression(((helper = (helper = helpers.last_scored || (depth0 != null ? depth0.last_scored : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"last_scored","hash":{},"data":data}) : helper)))
    + "\n\n            <hr>\n            <div class=\"allow-replies\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.first_name : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "                <input type=\"radio\" name=\"allow\" value=\"yes\">Yes\n                <input type=\"radio\" name=\"allow\" value=\"no\">No\n            </div>\n        </div>\n    </section>\n</div>";
},"useData":true});

this["JST"]["app/templates/reader_view/assignment-student.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.sound : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.media : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "					<div id='video-container' class=\"media-container\">\n						<video id=\"video-player\" class=\"video-js vjs-default-skin\" controls preload=\"auto\" playsinline>\n							<source src=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.url : depth0), depth0))
    + "\" type=\"video/mp4\"/>\n						</video>\n					</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "					<div id='audio-container' class=\"media-container\">\n						<audio id=\"audio-player\" preload=\"auto\" controls=\"controls\">\n							<source type=\"audio/mpeg\" src=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.url : depth0), depth0))
    + "\" />\n							Your browser does not support HTML5 audio.\n						</audio>\n					</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "				<div>\n					<div class=\"image-container media-container\">\n						<a href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\"_blank\"><img src=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" /></a>\n					</div>\n				</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.file_name : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "						<div id='files-container'>\n							<button class='download-file standard' value='"
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "'><i class=\"fa fa-download\"></i> "
    + alias2(alias1((depth0 != null ? depth0.file_name : depth0), depth0))
    + "</button>\n						</div>\n						<br>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "				<p>This is a pass/fail assignment.</p>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<p>You must score at least "
    + container.escapeExpression(((helper = (helper = helpers.min_score || (depth0 != null ? depth0.min_score : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"min_score","hash":{},"data":data}) : helper)))
    + "% to pass.</p>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "		<p>New submissions disabled.</p>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "	<section class=\"note\">\n		<i class=\"fa fa-info-circle\"></i> This course has been archived, so new submissions are closed.\n	</section>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n			Your submission has been graded.  Your score: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.get_assignment_score : stack1), depth0))
    + "\n		";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"tile-view-content content-layout single-column\">\n	<section class=\"nopadding discussion-post\">\n		<header>\n			<span class=\"author\">\n				Assignment Description (L)\n			</span>\n		</header>\n		<div class=\"padding\">\n			<div class=\"show-all-whitespace\">"
    + ((stack1 = ((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.assignment_contents : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.pass_fail : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "		</div>\n	</section>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.no_submissions : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<!--"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.get_assignment_score : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "-->\n</div>";
},"useData":true});

this["JST"]["app/templates/reader_view/audio.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"audio-size-wrapper tile-view-content\">\n	<audio id=\"audio-player\" preload=\"auto\" controls=\"controls\">\n		<source type=\"audio/mpeg\" src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" />\n		Your browser does not support HTML5 audio.\n	</audio>\n	<div class=\"audio-transcription\">"
    + alias4(((helper = (helper = helpers.transcription || (depth0 != null ? depth0.transcription : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"transcription","hash":{},"data":data}) : helper)))
    + "</div>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/reader_view/comment.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<video width=\"320\" height=\"240\" controls>\n		<source src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "?"
    + alias4(((helper = (helper = helpers.secure_url || (depth0 != null ? depth0.secure_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secure_url","hash":{},"data":data}) : helper)))
    + "\" type=\"video/mp4\" />\n		Your browser does not support the video tag.\n	</video>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.secure_url : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<q>"
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</q>\n	<span class=\"author\">"
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.full_name_with_title : stack1), depth0))
    + "</span>\n	<time>"
    + alias4(((helper = (helper = helpers.comment_date || (depth0 != null ? depth0.comment_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comment_date","hash":{},"data":data}) : helper)))
    + "</time>\n	<button><img src=\"dist/img/X_triangle-62b26d2ae18542ec6ea48db10c429d7a.png\"></button>\n</li>\n";
},"useData":true});

this["JST"]["app/templates/reader_view/discussion.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p id=\"tile-description\"></p>\n<form>\n\n	<div id=\"discussion-video-container\"><!--video container--></div>\n	<textarea placeholder=\"Comments...\"></textarea>\n	<button type=\"button\" id=\"discussion-video-record\" class=\"neutral\">\n		Add Video</button>\n	<button type=\"button\" id=\"post-comment-button\" class=\"standard\">\n		Post</button>\n	<p id='message'></p>\n</form>\n<ol>\n\n</ol>";
},"useData":true});

this["JST"]["app/templates/reader_view/hidden-instructors-placeholder.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"image-size-wrapper\" id=\"js-book-placeholder-readerview\">\n	<div class=\"placeholder info note\">\n		<a id=\"js-instructors-placeholder\">\n			<i class=\"fa fa-info-circle\"></i> This tile is locked for learners <button class=\"neutral\">Dismiss</button>\n		</a>\n	</div>\n</div>";
},"useData":true});

this["JST"]["app/templates/reader_view/live-training-list.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<li>\n		<label>\n			<input type=\"checkbox\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n				   "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tile_completed : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " />\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.user : depth0),{"name":"with","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</label>\n	</li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.username,depth0,{"name":"username","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"ruled\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"usePartial":true,"useData":true});

this["JST"]["app/templates/reader_view/live-training.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "	<section>This Course is Archived</section>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<h2 class=\"hide-unless observing-course\">Your Message to Learners:</h2>\n			<h2 class=\"hide-unless learning-course\">Training Event details:</h2>\n			<div class=\"show-all-whitespace\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.message : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"tile-view-content content-layout single-column\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<section>\n\n		<h1 class=\"hide-unless learning-course\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.message : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</section>\n	<section class=\"hide-unless observing-course\">\n		<button class=\"standard\">Click to Mark Attendance</button>\n	</section>\n</div>";
},"useData":true});

this["JST"]["app/templates/reader_view/quiz-answer.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<li>\n		<input type=\"radio\" name=\"response\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"/>\n		"
    + alias4(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"answer","hash":{},"data":data}) : helper)))
    + "\n	</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<li>No Answers Available, please speak to your instructor.</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.quiz_answers : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

this["JST"]["app/templates/reader_view/quiz-attempts.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p id=\"number-of-attempts\">\n<h3>Number of User's Attempts: "
    + container.escapeExpression(((helper = (helper = helpers.attempts || (depth0 != null ? depth0.attempts : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"attempts","hash":{},"data":data}) : helper)))
    + "</h3>\n</p>";
},"useData":true});

this["JST"]["app/templates/reader_view/quiz-container.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"content-layout single-column-wide\" id=\"js-main-quiz-container\">\n	<div class=\"quiz iframe-size-wrapper question-box tile-view-content\"></div>\n</div>";
},"useData":true});

this["JST"]["app/templates/reader_view/quiz-results-questions.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"quiz-question\" id=\"question-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.attempt_ruling : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	\n\n	<span class=\"quiz-data-question\">\n		<p class=\"quiz-question-text\">"
    + alias4(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "</p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</span>\n\n\n	<span class=\"quiz-data-answer\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.attempt_ruling : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</span>\n</li>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.correct : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "		<p><span class=\"ruling correct\">"
    + ((stack1 = container.invokePartial(partials.firstname,((stack1 = (depths[2] != null ? depths[2].user_course : depths[2])) != null ? stack1.user : stack1),{"name":"firstname","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " answered correctly.</span></p>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "		<p><span class=\"ruling incorrect\">"
    + ((stack1 = container.invokePartial(partials.firstname,((stack1 = (depths[2] != null ? depths[2].user_course : depths[2])) != null ? stack1.user : stack1),{"name":"firstname","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " answered incorrectly.</span></p>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.audio : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<video preload=\"auto\" controls=\"controls\">\n					<source src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)))
    + "\" type=\"video/mp4\" />\n					Your browser does not support HTML5 video.\n				</video>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<audio preload=\"auto\" controls=\"controls\">\n					<source src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)))
    + "\" type=\"audio/mp3\" />\n				</audio>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<img src="
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)))
    + ">\n";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "			"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.correct : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.program(19, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return " \n				<ul class=\"choices\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].quiz_answers : depths[1]),{"name":"each","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\n			";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.correct : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<li><i class=\"correct fa fa-check-circle\"></i> "
    + container.escapeExpression(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"answer","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"19":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " \n				<h2>Correct Answers</h2>\n				<ul class=\"choices\">\n"
    + ((stack1 = helpers.each.call(alias1,(depths[1] != null ? depths[1].quiz_answers : depths[1]),{"name":"each","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\n\n				<h2>"
    + ((stack1 = container.invokePartial(partials.firstname,((stack1 = (depths[2] != null ? depths[2].user_course : depths[2])) != null ? stack1.user : stack1),{"name":"firstname","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "'s Answers</h2>\n				<ul class=\"choices\">\n"
    + ((stack1 = helpers.each.call(alias1,(depths[1] != null ? depths[1].quiz_answers : depths[1]),{"name":"each","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\n";
},"20":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.attempt_response : depth0),{"name":"with","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "						<li>\n							"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].correct : depths[1]),{"name":"if","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.program(24, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + " \n							"
    + container.escapeExpression(container.lambda((depths[1] != null ? depths[1].answer : depths[1]), depth0))
    + "\n						</li>\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "<i class=\"correct fa fa-check-circle\"></i>";
},"24":function(container,depth0,helpers,partials,data) {
    return "<i class=\"incorrect fa fa-times-circle\"></i>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.quiz_questions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true});

this["JST"]["app/templates/reader_view/quiz-results.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "	<header>\n		<h1>\n			"
    + ((stack1 = container.invokePartial(partials.firstname,(depth0 != null ? depth0.user : depth0),{"name":"firstname","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " scored "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile_status_datum : depth0)) != null ? stack1.score : stack1), depth0))
    + "% \n			"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.tile_status_datum : depth0)) != null ? stack1.passed : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		</h1>\n		<h3>"
    + ((stack1 = container.invokePartial(partials.firstname,(depth0 != null ? depth0.user : depth0),{"name":"firstname","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " has attempted this quiz "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile_status_datum : depth0)) != null ? stack1.number_of_attempts : stack1), depth0))
    + " time(s). Here's their best:</h3>\n	</header>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "<span class=\"passed\" style=\"color:#baffba\">(Passed)</span>";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<header>\n		<h1>Nothing yet.</h1>\n	</header>\n	<h2 style=\"padding: 45px\">Once "
    + ((stack1 = container.invokePartial(partials.firstname,(depth0 != null ? depth0.user : depth0),{"name":"firstname","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " has attempted the quiz at least once, more details will appear here.\n	</h2>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"quiz-results\" class=\"quiz-results hide-unless observing-course vscroll\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.tile_status_datum : depth0)) != null ? stack1.number_of_attempts : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "	<div id=\"individual-answers\">\n		<ul id=\"quiz-result-table\">\n		<!-- answers go here from quiz-results-questions.us -->\n		</ul>\n	</div>\n	<footer>\n		<button class=\"warning reset-quiz\">Reset "
    + ((stack1 = container.invokePartial(partials.firstname,(depth0 != null ? depth0.user : depth0),{"name":"firstname","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "'s Data</button>\n	</footer>\n</div>";
},"usePartial":true,"useData":true});

this["JST"]["app/templates/reader_view/quiz-resumepage.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"content-layout single-column-slim\">\n    <section class=\"note\">\n        <p>It appears that you have a quiz in progress, click the button below to pick up where you left off.</p>\n        <button id=\"js-start-button\" class=\"standard\">Resume Quiz</button>\n    </section>\n</div>";
},"useData":true});

this["JST"]["app/templates/reader_view/quiz-startpage.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			This quiz can be attempted "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.attempt_limit : stack1), depth0))
    + " time(s).<br />\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"content-layout single-column-slim\">\n	<section class=\"note\">\n		<p>\n			This is a quiz with "
    + container.escapeExpression(((helper = (helper = helpers.question_count || (depth0 != null ? depth0.question_count : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"question_count","hash":{},"data":data}) : helper)))
    + " question(s).<br />\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.attempt_limit : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			There is no time limit, and if you exit the quiz you can pick up\n			where you left off.\n		</p>\n		<button id=\"js-start-button\" class=\"standard\">Start Quiz</button>\n	</section>\n</div>";
},"useData":true});

this["JST"]["app/templates/reader_view/quiz-summary.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<tr>\n			<td>\n				"
    + container.escapeExpression(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "\n				"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.image_question : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n				"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video_question : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n			</td>\n\n			<td>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.quiz_answers : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</td>\n\n			<td>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.image_answer : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "			</td>\n\n		</tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " (Picture Question)";
},"4":function(container,depth0,helpers,partials,data) {
    return " (Video Question)";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.quiz_responses : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						"
    + container.escapeExpression(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"answer","hash":{},"data":data}) : helper)))
    + "<br />\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "					(Picture Answer)\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.video_answer : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "						(Video Answer)\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.quiz_answers : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.correct : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "								"
    + container.escapeExpression(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"answer","hash":{},"data":data}) : helper)))
    + "<br />\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table>\n	<thead>\n		<tr>\n			<th>Question</th>\n			<th>Your Answer(s)</th>\n			<th>Correct Answer(s)</th>\n		</tr>\n	</thead>\n	<tbody>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.quiz_questions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</tbody>\n</table>";
},"useData":true});

this["JST"]["app/templates/reader_view/reader-view-footer.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer>\n	<div class=\"other-tools\">\n		<button class=\"print-tile text\">Print</button>\n		<button class=\"download-tile mobile-hide text\">Download</button>\n		<button  class=\"discussion discussion-item icon\">\n			<img src=\"dist/img/comment-right-63e986a180a0e9031b38bfd85c41620b.png\"></img>\n		</button>\n	</div>\n</footer>\n";
},"useData":true});

this["JST"]["app/templates/reader_view/reader-view-print-preview.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"print-preview\">\n	<iframe id=\"print-preview-frame\" src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n		#document\n		<html>\n			<body marginwidth=\"0\" marginheight=\"0\" style=\"background-color: rgb(38,38,38)\">\n				<embed width=\"100%\" height=\"100%\" name=\"plugin\" src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" type=\"application/pdf\">\n			</body>\n		</html>\n	</iframe>\n</div>";
},"useData":true});

this["JST"]["app/templates/reader_view/reader-view-tile.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"image-size-wrapper tile-view-content\">\n	<img alt=\" "
    + container.escapeExpression(((helper = (helper = helpers.transcription || (depth0 != null ? depth0.transcription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"transcription","hash":{},"data":data}) : helper)))
    + "\"src=\"dist/img/blank-1ff398927dfe4259ddf8a2c9e2ae545a.png\"></img>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/reader_view/reader-view.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<main>\n	<header>\n		<a id=\"back-button\" href=\"#topic-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.topic : depth0)) != null ? stack1.id : stack1), depth0))
    + "-"
    + alias2(((helper = (helper = helpers.userCourseId || (depth0 != null ? depth0.userCourseId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"userCourseId","hash":{},"data":data}) : helper)))
    + "-\"\n		   class=\"button neutral\"> Topic\n		</a>\n		<h1 style=\"margin-left: 0px;\" id=\"item-title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>\n		<div class=\"actions\">\n			<button><i class=\"fa fa-download\"></i></button>\n			<button><i class=\"fa fa-print\"></i></button>\n			<button><i class=\"fa fa-comment\"></i></button>\n			<button id=\"next-item\" class=\"neutral\">Next</button>\n		</div>\n		<div class=\"overflow-menu\">\n			<button>\n				<i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n			</button>\n			<ul class=\"simple-dropdown-menu hidden right\">\n				<li>Download</li>\n				<li>Print</li>\n				<li>Comments</li>\n				<li>Next Item</li>\n			</ul>\n		</div>\n	</header>\n\n	<div id=\"readerview-content\" class='sidebar-open'>\n		<div id=\"reader-tile-container\">\n			<!-- tiles -->\n		</div>\n	</div>\n	<div id=\"discussion\" class=\"discussion-item\"></div>\n</main>";
},"useData":true});

this["JST"]["app/templates/reader_view/results_moved.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div>\n	<p>We've moved and improved the results area. It's now a separate tab on the tile edit screen, which you can get to by clicking the <i style=\"color: red\" class=\"fa fa-pencil\"></i> button on the tile.</p>\n	<br>\n	<a href=\"#course-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.id : stack1), depth0))
    + "--results-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"button standard\">\n			Take me there</a>\n</div>";
},"useData":true});

this["JST"]["app/templates/reader_view/scorm-container.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"scorm iframe-size-wrapper question-box tile-view-content\"></div>";
},"useData":true});

this["JST"]["app/templates/reader_view/scorm-failure.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <p>Error: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.message : stack1), depth0))
    + "</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <p>Replacing the file may fix this.</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"content-layout single-column-slim\">\n    <div class=\"placeholder note\">\n        <h1>Unavailable</h1>\n        <p class=\"status-message\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.status_message : stack1), depth0))
    + "</p>\n        <div class=\"hide-unless editing-course\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.message : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "            <a href=\"#tileedit-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.id : stack1), depth0))
    + "-editor\" class=\"button standard\">Manage Tile</a>\n        </div>\n        <p class=\"hide-unless learning-course\">\n            You may want to tell your instructor about this.\n        </p>\n    </div>\n</div>";
},"useData":true});

this["JST"]["app/templates/reader_view/scorm-placeholder.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"content-layout single-column-slim\">\n	<div class=\"placeholder note\">\n		<h1>Processing SCORM file...</h1>\n		<p class=\"hide-unless editing-course\">You uploaded a SCORM file, and we're unpacking it and setting it up for you. Even a large file should only take a few minutes, so check back here then.</p>\n		<p class=\"hide-unless learning-course\">This item was recently uploaded and is still processing. Please check back in a few minutes.</p>\n	</div>\n</div>";
},"useData":true});

this["JST"]["app/templates/reader_view/scorm-result.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li>\n<span class=\"scorm-data-key\">"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "</span>\n<span class=\"scorm-data-value\">"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</span>\n</li>";
},"useData":true});

this["JST"]["app/templates/reader_view/unavailable-instructors-placeholder.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"image-size-wrapper\" id=\"js-book-placeholder-readerview\">\n	<div class=\"placeholder hide-unless learning-course\">\n		<h1>This tile has a prerequisite.</h1>\n		<p>Please complete the Prerequisite before viewing this tile.</p>\n	</div>\n	<div class=\"placeholder info note\">\n		<a id=\"js-instructors-placeholder\"> <!-- unnecessary js? -->\n			<i class=\"fa fa-info-circle\"></i> Learners must complete a prerequisite before viewing this. <button class=\"neutral\">Dismiss</button>\n		</a>\n	</div>\n</div>";
},"useData":true});

this["JST"]["app/templates/reader_view/unavailable-tile-placeholder.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "			<p>Your instructor doesn't want learners to see this content yet. You'll have to wait for them to unlock it.</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.available_in : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<h1>This tile is not available yet.</h1>\n				<p>This tile will unlock in "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.available_in : stack1), depth0))
    + " day(s).</p>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "				<h1>This tile has a prerequisite.</h1>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.days_til_available : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "				<p>Your instructor may need to review your work if you have completed the prerequisite, but can not access this tile.</p>\n				<a class=\"button standard\"\n				   href=\"#reader-"
    + alias2(container.lambda(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.prerequisite_id : stack1), depth0))
    + "-"
    + alias2(((helper = (helper = helpers.courseId || (depth0 != null ? depth0.courseId : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias1,{"name":"courseId","hash":{},"data":data}) : helper)))
    + "-"
    + alias2(((helper = (helper = helpers.userCourseId || (depth0 != null ? depth0.userCourseId : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias1,{"name":"userCourseId","hash":{},"data":data}) : helper)))
    + "-1\">\n					Go To Prerequisite\n				</a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "				<p>This tile will unlock "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.days_til_available : stack1), depth0))
    + " day(s) after you complete "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.prerequisite_title : stack1), depth0))
    + ".</p>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<p>Please complete \""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.prerequisite_title : stack1), depth0))
    + "\" before viewing this tile.</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"content-layout single-column\" id=\"book-placeholder-readerview\">\n	<div class=\"placeholder note\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.hidden : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"placeholder info\">\n	</div>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/reader_view/video-discussion.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<video controls>\n	<source src=\""
    + alias4(((helper = (helper = helpers.videoUrl || (depth0 != null ? depth0.videoUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"videoUrl","hash":{},"data":data}) : helper)))
    + "\" type=\"video/mp4\" />\n	Your browser does not support the video tag.\n</video>\n<input type=\"hidden\" id=\"video-url-input\" name=\"video_url\" value=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" />";
},"useData":true});

this["JST"]["app/templates/reader_view/video-placeholder.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "		<p style=\"color: red\">Error: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.get_info_filepicker : depth0)) != null ? stack1.error : stack1), depth0))
    + "</p>\n		<p style=\"color: red\">Status: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.get_info_filepicker : depth0)) != null ? stack1.message : stack1), depth0))
    + "</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<p style=\"color: #DCDCDC\"> Depending on the size of your video, this can take\n			anywhere from a few minutes to a few hours.</p>\n		<p style=\"color: #DCDCDC\">Please check back in a few minutes. </p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"video-size-wrapper\">\n	<div class=\"placeholder\">\n		<h1 style=\"margin-left: 106px; color: #DCDCDC\">Video is being Encoded</h1>\n\n		<!--<p>Status: "
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.get_info_filepicker : depth0)) != null ? stack1.message : stack1), depth0))
    + "</p>-->\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.get_info_filepicker : depth0)) != null ? stack1.error : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"video-transcription\">"
    + alias1(((helper = (helper = helpers.transcription || (depth0 != null ? depth0.transcription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"transcription","hash":{},"data":data}) : helper)))
    + "</div>\n</div>";
},"useData":true});

this["JST"]["app/templates/reader_view/video.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<video id=\"video-player\" class=\"video-js vjs-default-skin vjs-big-play-centered\"\n		preload=\"auto\" controls=\"controls\">\n	<source src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" type='video/mp4' />\n	Your browser does not support HTML5 video.\n</video>\n<div class=\"video-transcription\">"
    + alias4(((helper = (helper = helpers.transcription || (depth0 != null ? depth0.transcription : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"transcription","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"useData":true});

this["JST"]["app/templates/reader_view/viewer-container.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"viewer tile-view-content\"></div>\n<div class=\"controls\">\n    <button class=\"scroll-previous\"><img src=\"dist/img/readerview/up-4ac9e15db757a76fe3e6adeaf78dddd6.png\"></img></button>\n    <span class=\"page\">?  /  ?</span>\n    <button class=\"scroll-next\"><img src=\"dist/img/readerview/down-870e9d1bde69b78c7b206f916b6aa465.png\"></img></button>\n    <button class=\"zoom-out\"><img src=\"dist/img/readerview/minus-809950d431531374111ddcdf28276ad4.png\"></img></button>\n    <button class=\"zoom-in\"><img src=\"dist/img/readerview/plus-0183704624de8a48b169dbb36f1e80db.png\"></img></button>\n	<label>Go To:<input type=\"text\" class=\"goto-page\" placeholder=\"page\" /></label>\n</div>";
},"useData":true});

this["JST"]["app/templates/reader_view/webclip-placeholder.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"content-layout single-column slim\">\n    <section>\n        <h1>\n            "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n        </h1>\n        <p>This website's content isn't shown here because the site either does not allow embedding, or it does not support Skillo's level of security (HTTPS encrypted connection). Either way, you can view it in a separate browser tab or window without problems. </p>\n        <br>\n        <a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"standard button\" target=\"_blank\"> View in New Tab </a>\n    </section>\n</div>";
},"useData":true});

this["JST"]["app/templates/results_viewer/results_viewer.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "					<div class=\"pass-rate\">\n						<span class=\"num percent\"></span>\n						<span class=\"label\">Pass Rate</span>\n					</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<section class=\"locked-filter note\">\n			<i class=\"fa fa-info-circle\"></i>\n			In this course, you can see and instruct:\n			<span class=\"scope\" style=\"font-weight: bold\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.staff_only : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "			</span>\n		</section>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "					Your Staff Only\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.custom_categories : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(data && data.first),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "\n"
    + ((stack1 = helpers.unless.call(alias1,(data && data.last),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "							your staff, and \n";
},"10":function(container,depth0,helpers,partials,data) {
    return "							in\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "	<section class=\"nopadding\">\n		<div id=\"roster-controls\">\n			<button class=\"neutral\" id=\"js-toggle-all-complete\">Mark All Below</button> \n			or <strong>click each learner</strong> to mark attendance.\n		</div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "					<span id=\"score-text\" class=\"score\" data-sortAttr=\"percentage\">Score (%)</span>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.attendanceType : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    return "						<span id=\"score-text\" class=\"score\" data-sortAttr=\"completion\">Present?</span>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "						<span id=\"score-text\" class=\"score\" data-sortAttr=\"completion\">Done?</span>\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "	</section>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<div class=\"content-layout single-column\">\n	<section class=\"student-filters\" id=\"js-student-filters\">\n		<header>\n			<div id=\"js-filter-buttons\" class=\"button-group\">\n			  <label>\n			    <input type=\"radio\" name=\"student-scope\" value=\"everyone\">\n			    <span class=\"button-group-item\">Everyone</span>\n			  </label>\n			  <label>\n			    <input type=\"radio\" name=\"student-scope\" value=\"team\">\n			    <span class=\"button-group-item\">My Team</span>\n			  </label>\n			  <label>\n			    <input type=\"radio\" name=\"student-scope\" value=\"custom\">\n			    <span class=\"button-group-item\">Custom</span>\n			  </label>\n			</div>\n			<div class=\"statistics\" id=\"js-statistics\">\n				<div class=\"learner-count\">\n					<span class=\"num\"></span>\n					<span class=\"label\">Learners</span>\n				</div>\n				<div class=\"completion-rate\">\n					<span class=\"num percent\"></span>\n					<span class=\"label\">Completion Rate</span>\n				</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.clickableStudent : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n			<a class=\"button csv hint--left hint--info\" id=\"js-csv-button\"\n			   data-hint=\"Download a filtered CSV report\" href=\"FILTERED CSV URL\">\n				<i class=\"fa fa-download\"></i>\n				<span>CSV</span>\n			</a>\n		</header>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.custom_categories : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<div id=\"filter-area\" class=\"hidden\">\n			<div id=\"filter-group\"></div>\n			<button id=\"add-filter\" class=\"neutral add-filter\">\n				<i class=\"fa fa-plus\"></i>\n				Add Filter\n			</button>\n		</div>\n	</section>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.attendanceType : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		<div id=\"tile-roster\" class=\"table\">\n			<header id=\"roster-header\">\n				<span id=\"name-text\" class=\"name\" data-sortAttr=\"name\">Name</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.clickableStudent : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "			</header>\n			<ul id=\"js-student-list\" class=\"nopadding\">\n\n			</ul>\n			<p class=\"note js-no-students hidden\">\n							<strong>No learners in this course match that criteria.</strong>\n					</p>\n		</div>\n		<div class=\"hidden\" id=\"js-lazy-load\" style=\"text-align:center\">\n			<i class=\"fa fa-spinner fa-spin fa-3x fa-fw center\"></i>\n		</div>\n	<!-- sorry -->\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.attendanceType : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n</div>";
},"useData":true});

this["JST"]["app/templates/results_viewer/scorm_results.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<ul style=\"margin: 30px 0px;\">\n			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.score_raw : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.location : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completion_status : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.success_status : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.score_scaled : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		</ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<li>Score: "
    + container.escapeExpression(((helper = (helper = helpers.score_raw || (depth0 != null ? depth0.score_raw : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"score_raw","hash":{},"data":data}) : helper)))
    + "\n			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.score_max : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n			</li>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return " out of "
    + container.escapeExpression(((helper = (helper = helpers.score_max || (depth0 != null ? depth0.score_max : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"score_max","hash":{},"data":data}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li>Location: "
    + container.escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"location","hash":{},"data":data}) : helper)))
    + "</li>";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li>Completion: "
    + container.escapeExpression(((helper = (helper = helpers.completion_status || (depth0 != null ? depth0.completion_status : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"completion_status","hash":{},"data":data}) : helper)))
    + "</li>";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li>Success: "
    + container.escapeExpression(((helper = (helper = helpers.success_status || (depth0 != null ? depth0.success_status : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"success_status","hash":{},"data":data}) : helper)))
    + "</li>";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li>Scaled Score: "
    + container.escapeExpression(((helper = (helper = helpers.score_scaled || (depth0 != null ? depth0.score_scaled : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"score_scaled","hash":{},"data":data}) : helper)))
    + "</li>";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<h2 style=\"margin:30px 0px\">Interactions</h2>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.scorm_interactions : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(19, data, 0),"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<ul style=\"margin-top: 30px; border: 2px solid #ccc\">\n				<li>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + "				</li>\n				<li>Learner Response: "
    + alias4(((helper = (helper = helpers.learner_response || (depth0 != null ? depth0.learner_response : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"learner_response","hash":{},"data":data}) : helper)))
    + "</li>\n				<li>Result: "
    + alias4(((helper = (helper = helpers.result || (depth0 != null ? depth0.result : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"result","hash":{},"data":data}) : helper)))
    + "</li>\n			</ul>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						Description:"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper)))
    + "\n";
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						ID: "
    + container.escapeExpression(((helper = (helper = helpers.external_scorm_id || (depth0 != null ? depth0.external_scorm_id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"external_scorm_id","hash":{},"data":data}) : helper)))
    + "\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "			<ul>\n				<li>No Interactions Reported</li>\n			</ul>\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "			<p> No interactions have been made </p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div style=\"overflow-y: scroll; max-height: calc(90vh - 60px)\">\n<h1>"
    + ((stack1 = container.invokePartial(partials.firstname,((stack1 = (depth0 != null ? depth0.userCourse : depth0)) != null ? stack1.user : stack1),{"name":"firstname","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "'s SCORM Results</h1>\n<div class=\"filter\">\n	<div class=\"table\" id=\"scorm-results\">\n	<h2>Summary</h2>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completion_status : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.scorm_interactions : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n	<div id=\"no-interactions\">\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.scorm_interactions : depth0),{"name":"unless","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n	<button class=\"neutral\" id=\"download-student-button\">Download Individual CSV</button>\n	<button class=\"neutral hidden\" id=\"download-simple-student-button\">Download Individual CSV (simple)</button>\n	<button class=\"warning reset-scorm\">Reset This Person's Data</button>\n</div>\n</div>";
},"usePartial":true,"useData":true});

this["JST"]["app/templates/roster_view/date-filter.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input class=\"start-date-filter\" type=\"text\"/>";
},"useData":true});

this["JST"]["app/templates/roster_view/datebox.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div data-outer-class=\"datebox\">\n	<label>"
    + container.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"label","hash":{},"data":data}) : helper)))
    + "<input id=\"js-date\" type=\"text\"/></label>\n	<button id=\"js-button\" class=\"standard\">Save</button>\n</div>";
},"useData":true});

this["JST"]["app/templates/roster_view/instructor-item.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.username,depth0,{"name":"username","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.title : stack1), depth0))
    + " ";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "	<span class=\"scope\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.staff_only : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.program(11, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "	</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.userIsMe : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + " Staff Only\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "		My\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "		Their\n		";
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.custom_categories : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.program(20, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(data && data.first),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "\n"
    + ((stack1 = helpers.unless.call(alias1,(data && data.last),{"name":"unless","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].userIsMe : depths[1]),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.program(16, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + " Staff, and \n";
},"14":function(container,depth0,helpers,partials,data) {
    return "				My\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "				Their\n				";
},"18":function(container,depth0,helpers,partials,data) {
    return "				in\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "			Anyone\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<li class=\"instructor tr\">\n	<span class=\"name\">\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.user : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</span>\n	<!--<span class=\"title\">\n		"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.title : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	</span>-->\n	<span class=\"permission\">"
    + container.escapeExpression(((helper = (helper = helpers.instructor_user_course_role || (depth0 != null ? depth0.instructor_user_course_role : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"instructor_user_course_role","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasCategories : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<span class=\"edit hide-unless admin\">\n		<button><i class=\"fa fa-pencil\"></i></button>\n	</span>\n	<span class=\"remove hide-unless editing-course\">\n		<button><i class=\"fa fa-times\"></i></button>\n	</span>\n</li>";
},"usePartial":true,"useData":true,"useDepths":true});

this["JST"]["app/templates/roster_view/instructor-roster.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "		<section class=\"note\">\n			<i class=\"fa fa-info-circle\"></i> You are looking at an archived course, but you can still add instructors who can then access its records.\n		</section>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "				<span class=\"scope\">Scope</span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.username,depth0,{"name":"username","data":data,"indent":"\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.owner : depth0)) != null ? stack1.title : stack1), depth0))
    + " ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<span class=\"scope\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.orgStaffOnly : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "					</span>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ownerIsMe : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + " Staff Only\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "						My\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "						Their\n						";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.orgFlat : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    return "						Anyone\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ownerIsAdmin : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(19, data, 0),"data":data})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.ownerIsMe : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + " Staff\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.ownerScope : depth0),{"name":"each","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(data && data.first),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "\n"
    + ((stack1 = helpers.unless.call(alias1,(data && data.last),{"name":"unless","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    return "						, and\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "						in\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<main>\n	<header>\n		<h1 id=\"roster-header\">Instructors for "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>\n		<div class=\"actions\">\n			<button id=\"js-instructor-adder\" class=\"standard primary-action hide-unless editing-course\">\n				<span class=\"desktop-hide\">+</span>\n				<span class=\"mobile-hide\"> Add Instructors</span>\n			</button>\n		</div>\n	</header>\n\n	<div class=\"content-layout single-column\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<div id=\"instructors\" class=\"table\">\n			<header style=\"padding: 0px 20px;\">\n				<span class=\"name\">Name</span>\n				<span class=\"permission\">Permission</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasCategories : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<span class=\"remove hide-unless editing-course\">Remove</span>\n			</header>\n			<ul>\n				<li>\n					<span class=\"name\">\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.owner : depth0),{"name":"with","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					</span>\n					<!--<span class=\"title\">\n						"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.owner : depth0)) != null ? stack1.title : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n					</span>-->\n					<span class=\"permission\">Owner</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasCategories : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					<span class=\"remove\"></span>\n				</li>\n			</ul>\n			<ul id=\"instructor-list\" class=\"table\">\n			</ul>\n			<br style=\"clear: both\">\n		</div>\n	</div>\n</main>\n";
},"usePartial":true,"useData":true});

this["JST"]["app/templates/roster_view/no-students.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p class=\"roster-view-no-students-yet note\">\n	<strong>No learners in this course match that criteria.</strong> <br> You can add learners with the button in the upper right.\n</p> ";
},"useData":true});

this["JST"]["app/templates/roster_view/roster_view.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<main id=\"js-main-container\" class=\"main-content-container\">\n</main>";
},"useData":true});

this["JST"]["app/templates/roster_view/status-select.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<select id=\"status-select\">\n	<option value=\"any\">Any</option><!-- selected by default, and doesn't do anything -->\n	<option value=\"not_started_yet\">Not started yet</option><!-- hasn't even looked at the course -->\n	<option value=\"not_finished\">Not finished yet</option><!-- neither marked complete nor finished all tiles -->\n	<option value=\"tiles_done\">All tiles done</option><!-- completion is 100%, regardless of marked complete or not -->\n	<option value=\"passed\">Marked Complete in course</option><!-- marked complete (formerly called passed), regardless of progress percent -->\n\n	<!-- <option value=\"failed\">Failed</option> -->\n</select>\n";
},"useData":true});

this["JST"]["app/templates/roster_view/student-item.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.username,depth0,{"name":"username","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.user_course : depth0)) != null ? stack1.user : stack1)) != null ? stack1.title : stack1), depth0))
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.user_course : depth0)) != null ? stack1.completion_percentage : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "				<span id=\"js-completion\" class=\"completion\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user_course : depth0)) != null ? stack1.completion_percentage : stack1), depth0))
    + "%</span>\n				<span class=\"progress-meter\"><span style=\"width: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user_course : depth0)) != null ? stack1.completion_percentage : stack1), depth0))
    + "%\"></span></span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "				<span id=\"js-completion\" class=\"completion\">0%</span>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<span id=\"js-completion\" class=\"completion\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.user_course : depth0)) != null ? stack1.marked_complete : stack1), depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<li class=\"student tr\">\n	<label class=\"select-student\">	\n		<input type=\"checkbox\" class=\"js-user-checkbox\"\n			   value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user_course : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n	</label>\n	<a>\n		<span class=\"name\">\n"
    + ((stack1 = helpers["with"].call(alias3,((stack1 = (depth0 != null ? depth0.user_course : depth0)) != null ? stack1.user : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</span>\n		<span class=\"title\">\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.user_course : depth0)) != null ? stack1.user : stack1)) != null ? stack1.title : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</span>\n		<span class=\"start-date\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user_course : depth0)) != null ? stack1.start_date : stack1), depth0))
    + "</span>\n		<span class=\"date-range-hyphen\"> - </span>\n		<span class=\"end-date\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user_course : depth0)) != null ? stack1.end_date : stack1), depth0))
    + "</span>\n\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.user_course : depth0)) != null ? stack1.active : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "	</a>\n</li>";
},"usePartial":true,"useData":true});

this["JST"]["app/templates/roster_view/student-roster.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<section class=\"note\">\n		<i class=\"fa fa-info-circle\"></i> You are looking at an archived course. You can browse the records, but new learners can't be added.\n	</section>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<section class=\"locked-filter note\">\n			<i class=\"fa fa-info-circle\"></i>\n			In this course, you can see and instruct:\n			<span class=\"scope\" style=\"font-weight: bold\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.staff_only : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "			</span>\n		</section>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "					Your Staff Only\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.custom_categories : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(data && data.first),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "\n"
    + ((stack1 = helpers.unless.call(alias1,(data && data.last),{"name":"unless","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "							your staff, and \n";
},"12":function(container,depth0,helpers,partials,data) {
    return "							in\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<main>\n<header>\n	<h1 id=\"roster-header\">Learners assigned to "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>\n	<div class=\"actions\">\n		<span id=\"search-bar-container\" class=\"search-bar-s2 responsive\">\n		</span>\n\n		<button id=\"user-adder\" class=\"standard primary-action hide-unless editing-course\" "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n			<span class=\"desktop-hide\">+</span>\n			<span class=\"mobile-hide\"> Add Learners</span>\n		</button>\n	</div>\n</header>\n<div class=\"content-layout single-column\">\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<section class=\"student-filters\" id=\"js-student-filters\">\n		<header>\n			<div class=\"button-group\">\n			  <label>\n			    <input type=\"radio\" name=\"student-scope\" value=\"everyone\">\n			    <span class=\"button-group-item\">Everyone</span>\n			  </label>\n			  <label>\n			    <input type=\"radio\" name=\"student-scope\" value=\"team\">\n			    <span class=\"button-group-item\">My Team</span>\n			  </label>\n			  <label>\n			    <input type=\"radio\" name=\"student-scope\" value=\"custom\">\n			    <span class=\"button-group-item\">Custom</span>\n			  </label>\n			</div>\n			<div class=\"statistics\">\n				<div class=\"learner-count\">\n					<span class=\"num\"></span>\n					<span class=\"label\">Learners</span>\n				</div>			\n				<div class=\"completion-count\">\n					<span class=\"num\"></span>\n					<span class=\"label\">Complete</span>\n				</div>			\n				<div class=\"average-progress\">\n					<span class=\"num\"></span>\n					<span class=\"label\">Avg. Progress</span>\n				</div>\n			</div>\n			<a class=\"csv button hint--left hint--info\"\n			   data-hint=\"Download a filtered CSV report\" id=\"csv-download\"\n			   href=\"/courses/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.id : stack1), depth0))
    + "/results_csv.csv\">\n				<i class=\"fa fa-download\"></i>\n				<span>CSV</span>\n			</a>\n		</header>\n\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.custom_categories : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	</section>\n\n\n	<section class=\"nopadding\" id=\"students\">\n\n		<div id=\"summary\" class=\"summary\" style=\"display:none\"><!-- delete later -->\n		</div>\n\n		<div id=\"roster-controls\">\n			<button id=\"js-select-all-button\" class=\"neutral\">\n				Select All\n			</button>\n\n			<div id=\"js-edit-assignments\" class=\"edit-assignments\">\n				<button class=\"neutral\">Edit </button>\n				<ul class=\"simple-dropdown-menu left\" id=\"js-dropdown-actions\">\n					<li>Set Start Date</li>\n					<li>Set Deadline</li>\n					<li>Mark as Complete</li>\n					<!-- <li>Mark as failed</li> -->\n					<li>Mark as Not Complete</li>\n					<li class=\"danger\">Remove</li>\n				</ul>\n			</div>\n\n			<!-- <button class=\"neutral\">Create User List</button> -->\n\n		</div>\n		<div id=\"table-div\" class=\"table\">\n			<header id=\"student-headers\">\n				<span id=\"name-text\" data-sortAttr=\"name\" class=\"name\">Name</span>\n				<span id=\"title-text\" data-sortAttr=\"title\" class=\"title\">Title</span>\n				<span id=\"start-date-button\" data-sortAttr=\"start-date\" class=\"start-date\">Start Date</span>\n				<span id=\"end-date-button\" data-sortAttr=\"deadline\" class=\"end-date\">Deadline</span>\n				<span id=\"progress-text\" data-sortAttr=\"progress\" class=\"completion\">Progress</span>\n			</header>\n			<ul id=\"student-list\" class=\"nopadding\"></ul>\n		</div>\n\n	</section>\n	<div class=\"hidden\" id=\"js-lazy-load\" style=\"text-align:center\">\n		<i class=\"fa fa-spinner fa-spin fa-3x fa-fw center\"></i>\n	</div>\n\n</div>\n\n</main>\n";
},"useData":true});

this["JST"]["app/templates/select-2-builder/select2-assigner.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<select multiple></select>";
},"useData":true});

this["JST"]["app/templates/sidebar/account.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "			<label id=\"digest-emails\">\n				<input type=\"checkbox\" id=\"js-daily-digest-emails\"\n					   name=\"digest_emails\" />\n				Email me about things I need to do in Skillo.\n			</label>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"account-settings\">\n\n<main id=\"account-view\" data-outer-class=\"account-settings\">\n	<header>\n		<h1>Account Settings</h1>\n		<div class=\"actions\">\n			<button id=\"update-settings\" class=\"standard\">\n				Save\n			</button>\n		</div>\n	</header>\n	<div class=\"content-layout single-column-slim\">\n		<section id=\"personal-info\">\n			<h2>Profile Info</h2>\n			<!--<label id=\"account-instructor-prefix\">\n				<input type=\"text\" name=\"name_title\" placeholder=\"prefix\">\n			</label>-->\n			<label id=\"account-instructor-firstname\">\n				<input type=\"text\" name=\"first_name\" placeholder=\"First Name\">\n			</label>\n\n			<label id=\"account-instructor-lastname\">\n				<input type=\"text\" name=\"last_name\" placeholder=\"Last Name\">\n			</label>\n\n			<label id=\"account-instructor-email\">\n				<input type=\"text\" name=\"email\" placeholder=\"Email Address\">\n			</label>\n"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.organization : depth0)) != null ? stack1.disable_notification_email : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<button id=\"update-settings\" class=\"standard\" style=\"display:none\">\n					Update Profile\n				</button>\n			<!--<div class=\"right\">\n				<button id=\"change-password\" class=\"standard\">\n					Change Password\n				</button>\n			</div>-->\n		</section>\n\n		<section id=\"password-change\">\n				<div id=\"password-change-box\" class=\"hide-from-external-account\">\n					<h2>Change Password</h2>\n					<label>\n						<input type=\"password\" name=\"old_password\" placeholder=\"Current Password\">\n					</label>\n\n					<label>\n						<input type=\"password\" name=\"password\" placeholder=\"New Password\">\n					</label>\n\n					<label>\n						<input type=\"password\" name=\"password_confirmation\" placeholder=\"Confirm New Password\">\n					</label>\n\n					<button id=\"change-password\" class=\"standard\" style=\"display:none\">\n						Change Password\n					</button>\n\n				</div>\n		</section>\n\n		<section>\n			<p>\n				You have Agreed to our latest <a class=\"external-link\" target=\"blank\"\n				   href=\"http://tryskillo.com/privacy.html\">Privacy Policy</a> and <a class=\"external-link\" target=\"blank\"\n				   href=\"http://tryskillo.com/tos.html\">Terms of Service</a>.\n			</p>\n		</section>\n	</div>\n</main>\n\n\n</div>\n";
},"useData":true});

this["JST"]["app/templates/sidebar/help-feedback.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " new";
},"3":function(container,depth0,helpers,partials,data) {
    return "				<p>Submit a help request here.</p>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"hi\">\n					<h2 style=\"font-size: 1.25rem\" class=\"back\">Hello - we're here to help!</h2>\n					<p style =\"font-size: 1rem;\">If you've got a question about your training or are running into an issue, send us a message below. Please be as descriptive as you can, so that we can provide the best response. Thanks!</p>\n				</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<label>\n					<select id=\"support-email\" name=\"Support_Email\">\n						<option value=\"null\">Who should we send your message to?</option>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.organization : depth0)) != null ? stack1.support_emails : stack1),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					</select>\n				</label>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"help-feedback\">\n<main>\n	<header>\n		<h1>Support</h1>\n	</header>\n	<div class=\"content-layout single-column-slim\">\n\n		<section id=\"app-news\" class=\"note hide-unless instructs-courses"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.cs_message : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n			<h2>New Auto-Assign Rules + Remote Leadership Tips</h2>\n			<p>Read about how the new Auto-Assign Rules screen works, and see practical ways Skillo can help you be a better leader while everyone is working from home.</p>\n			<a href=\"https://medium.com/skillo\" target=\"_blank\" class=\"button neutral\">Read More</a>\n		</section>\n\n		<section>\n			<div id=\"support-form\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.organization_support : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\n				<label>\n					<input id=\"feedback-name\" name=\"Name\" type=\"text\"\n						   placeholder=\"Name\"\n						   value=\""
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "\" />\n				</label>\n				<label>\n					<input id=\"feedback-email\" name=\"Email Address\" type=\"email\"\n						   value=\""
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Email\" />\n				</label>\n				<label>\n					<textarea id=\"feedback-message\" name=\"message\"\n							  placeholder=\"Message\" autofocus></textarea>\n				</label>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.organization_support : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n				<div class=\"right\">\n					<button id=\"send-feedback-button\" type=\"button\" class=\"standard\">Send</button>\n				</div>\n			</div>\n		</section>\n\n		<section class=\"hide-unless instructs-courses\">\n			<div id=\"faq-view\">\n				<p style=\"font-size: 0.9rem;\">We've put together some helpful tutorials and answers to common questions.</p>\n				<a class=\"standard button\" href=\"http://support.tryskillo.com/\" target=\"_blank\">View FAQ</a>\n			</div>\n		</section>\n\n	</div>\n</main>\n";
},"useData":true});

this["JST"]["app/templates/sidebar/main-sidebar-content.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "		<a class=\"courses\" href=\"#electives\">\n			<span>Electives</span>\n		</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "			<span class=\"new hide-unless instructs-courses\"></span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<div id=\"sidebar-logo\"><!-- image set in branding.css --></div>\n\n	<nav>\n\n		<a class=\"courses learn\" href=\"#learn\">\n			<span>Learn</span>\n		</a>\n		<a class=\"courses hide-unless instructs-courses\" href=\"#instruct\">\n			<span>Instruct</span>\n		</a>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.electives_enabled : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<br>\n		<a class=\"people hide-unless new-people-view-access\" href=\"#people\">\n			<span>People</span>\n		</a>\n		<a class=\"people hide-unless admin\" href=\"#import\">\n			<span>Add Users</span>\n		</a>\n		</a>\n		<a class=\"people hide-unless instructs-courses\" href=\"#lists\">\n			<span>User Lists</span>\n		</a>\n		<br>\n		<a class=\"account\" href=\"#account\">\n			<span>Account</span>\n		</a>\n		<a class=\"support\" id=\"help\" href=\"#support\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.cs_message : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<span>Support</span>\n		</a>\n		<a class=\"logout\">\n			<span>Logout</span>\n		</a>\n	</nav>";
},"useData":true});

this["JST"]["app/templates/sidebar/side-bar-shadow.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<i class=\"fa fa-bars\" id=\"nav-toggle\"></i>\n<span class=\"mobile-sidebar-shadow\"></span>\n<nav id=\"app-navigation\">\n  \n</nav>";
},"useData":true});

this["JST"]["app/templates/spark_editor/spark_editor.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<ol id=\"spark-questions-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.questions : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ol>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li class=\"spark-question-item\" id=\"question-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-question-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n				<span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.question : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</span>\n			<button type=\"button\" class=\"delete-question\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n				<i class=\"fa fa-trash\"></i>\n			</button>\n		</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					"
    + container.escapeExpression(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"question","hash":{},"data":data}) : helper)))
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "					No Question Text\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					"
    + container.escapeExpression(((helper = (helper = helpers.displayText || (depth0 != null ? depth0.displayText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayText","hash":{},"data":data}) : helper)))
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "	<p>This spark has no questions yet.</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"content\">\n	<!--<div class=\"quiz-options\">\n		<h2 id=\"edit-quiz-header\">Spark Options</h2>\n		<label>\n			<input id=\"quiz-percentage-checkbox\" type=\"checkbox\">\n			To pass, learners must score at least\n			<input class=\"edit-quiz-input inline short\" type=\"text\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.min_score : stack1), depth0))
    + "\">\n			percent.\n		</label>\n	</div>\n	<hr>-->\n	<h2>Spark Questions</h2>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.questions : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "	<button type=\"button\" class=\"new-question quiz-add-button standard\">\n		Add Question\n	</button>\n	<br />\n</div>";
},"useData":true});

this["JST"]["app/templates/spark_editor/spark_question_editor.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " webcam.";
},"3":function(container,depth0,helpers,partials,data) {
    return " microphone.";
},"5":function(container,depth0,helpers,partials,data) {
    return "				<button type=\"button\" class=\"neutral video-question-item\"\n						id=\"record-video\" >\n					Record Video\n				</button>\n				<button type=\"button\" class=\"neutral video-question-item\"\n						id=\"upload-video\" >\n					Upload Video\n				</button>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "				<button type=\"button\" class=\"neutral video-question-item\"\n						id=\"record-audio\" >\n					Record Audio\n				</button>\n				<button type=\"button\" class=\"neutral video-question-item\"\n						id=\"upload-audio\" >\n					Upload Audio\n				</button>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<p><span id=\"status\"></span><span id=\"counter\"></span></p>\n			<video controls id=\"video-player\" class=\"video-js vjs-default-skin\"\n				   preload=\"auto\">\n				<source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" type='video/mp4' />\n				Your browser does not support HTML5 video.\n			</video>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<audio controls id=\"audio-player\"\n				   preload=\"auto\">\n				<source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" type='audio/mpeg' />\n				Your browser does not support HTML5 audio.\n			</audio>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div data-outer-class=\"quiz-answer-editor-box\">\n	<section id=\"question-editor\" class=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.question_type : stack1), depth0))
    + "-box\">\n\n		<h2>Question</h2>\n		<div class=\"question\">\n			<label class=\"text-question-item\">\n				<input type=\"text\" id=\"question-input\" placeholder=\"Title\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.question : stack1), depth0))
    + "\" />\n			</label>\n			<p>\n				The student must give an answer via their\n				"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.videoSpark : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "  \n			</p>\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.videoSpark : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "		</div>\n		<div class=\"edit-quiz-media\" id=\"js-quiz-media-container\">\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.video : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.audio : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n		<div class=\"answer\">\n			<h2 id=\"js-answer-title\">Response Length:</h2>\n			<select id=\"time-limit\">\n				<option value=\"15\">15 seconds</option>\n				<option value=\"30\" selected>30 seconds</option>\n				<option value=\"60\">1 minute</option>\n				<option value=\"120\">2 minutes</option>\n				<option value=\"180\">3 minutes</option>\n				<option value=\"240\">4 minutes</option>\n				<option value=\"300\">5 minutes</option>\n			</select>\n		</div>\n		<button type=\"button\" class=\"quiz-done-button standard\" style=\"margin-top: 20px\">Save</button>\n	</section>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/spark_player/spark_response.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<section class=\"spark-response\">\n    <div class=\"spark-data-question\">\n        <!-- <h1>Question</h1> -->\n        <h2>"
    + container.escapeExpression(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "</h2>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <!-- <hr> -->\n    <div class=\"spark-data-answer\">\n        <h2>Learner's Response</h2>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video_answer : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.audio_answer : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <br />\n    </div>\n    <!-- <hr> -->\n    <div class=\"spark-data-correct\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.spark_responses : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.attempted : depth0),{"name":"unless","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <!-- <hr> -->\n    <div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.spark_responses : depth0),{"name":"each","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</section>\n<hr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.audio : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <video preload=\"auto\" controls=\"controls\">\n            <source src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)))
    + "\" type=\"video/mp4\" />\n            Your browser does not support HTML5 video.\n        </video>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <audio preload=\"auto\" controls=\"controls\">\n            <source src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)))
    + "\" type=\"audio/mp3\" />\n        </audio>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <video preload=\"auto\" controls=\"controls\">\n            <source src=\""
    + container.escapeExpression(((helper = (helper = helpers.response_url || (depth0 != null ? depth0.response_url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"response_url","hash":{},"data":data}) : helper)))
    + "\" type='video/mp4' />\n            Your browser does not support HTML5 video.\n        </video>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <audio preload=\"auto\" controls=\"controls\">\n            <source src=\""
    + container.escapeExpression(((helper = (helper = helpers.response_url || (depth0 != null ? depth0.response_url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"response_url","hash":{},"data":data}) : helper)))
    + "\" type='audio/mp3' />\n            Your browser does not support HTML5 audio.\n        </audio>\n";
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.program(15, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "        <br />\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <!--<input type=\"checkbox\"-->\n               <!--class=\"js-correct-check\" data-response-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"-->\n               <!--"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.correct : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "-->\n        <!--/>-->\n        <h2>Grade</h2>\n        <select class=\"js-correct-select\" data-response-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <option value=\"null\">Not Graded</option>\n            <option value=\"1\">1 - Very Poor</option>\n            <option value=\"2\">2 - Poor</option>\n            <option value=\"3\">3 - Fair</option>\n            <option value=\"4\">4 - Good</option>\n            <option value=\"5\">5 - Excellent</option>\n            <!--<option value=\"true\">Correct</option>\n            <option value=\"false\">Not Correct</option>-->\n        </select>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "-->\n               <!--checked-->\n               <!--";
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].correct : depths[1]),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(18, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    return "        Correct\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "        Incorrect\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "        Not Attempted\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <div data-response-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                <h2>Your feedback</h2>\n                <textarea id=\"js-spark-feedback-text\" placeholder=\"Optionally explain the grade or leave coaching notes\"> "
    + alias4(((helper = (helper = helpers.text_feedback || (depth0 != null ? depth0.text_feedback : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text_feedback","hash":{},"data":data}) : helper)))
    + "</textarea>\n\n                <button class=\"neutral\" id=\"js-video-feedback\">Record Video</button>\n                <div class=\"js-video-feedback-player "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.video_feedback : depth0),{"name":"unless","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                    <video preload=\"auto\" controls=\"controls\">\n                    <source src=\""
    + alias4(((helper = (helper = helpers.video_feedback || (depth0 != null ? depth0.video_feedback : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"video_feedback","hash":{},"data":data}) : helper)))
    + "\" type='video/mp4' />\n                    Your browser does not support HTML5 video.\n                    </video>\n                </div>\n            </div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    return " hidden ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

this["JST"]["app/templates/spark_player/spark_results.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"quiz-results\" class=\"quiz-results hide-unless observing-course\">\n    <section>\n        <h1>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.first_name : stack1), depth0))
    + "'s Spark Results</h1>\n    </section>\n        <div id=\"individual-answers\">\n\n        </div>\n    <section>\n        <button class=\"warning reset-quiz\">Reset This Person's Data</button>\n    </section>\n</div>";
},"useData":true});

this["JST"]["app/templates/spark_player/spark_startpage.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "	<section class=\"note\"><i class=\"fa fa-info-circle\"></i> Since this course has been archived, you can't attempt this assessment anymore.</section>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "			<h2>Video Roleplay Assessment</h2>\n			<p>This will simulate a video chat. A pre-recorded question will play. Respond as best you can in the alotted time. Your response will be recorded with your device's camera and microphone.</p> \n";
},"5":function(container,depth0,helpers,partials,data) {
    return "			<h2>Audio Roleplay Assessment</h2>\n			<p>This will simulate a phone conversation. A pre-recorded question will play. Respond as best you can in the alotted time. Your response will be recorded with your device's microphone.</p>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"9":function(container,depth0,helpers,partials,data) {
    return " Camera + ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"content-layout single-column-slim\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<section>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isVideo : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "		<p>There may be several questions like this in a row, so we suggest a quiet room with no distractions. Good luck!</p>\n		<button id=\"js-test-mic-button\" class=\"standard\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Test"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isVideo : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " Mic</button>\n	</section>\n</div>";
},"useData":true});

this["JST"]["app/templates/spark_player/spark_testpage.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "			<h2>Camera + Mic Check</h2>\n			<p>\n				<strong>Heads Up: iOS and Safari don't yet support recording video in the browser.</strong>\n				<br>\n				For best results, use Chrome or Firefox on Windows, Mac or Android.\n				<i class=\"fa fa-chrome\"></i>\n				<i class=\"fa fa-firefox\"></i>\n				<i class=\"fa fa-windows\"></i>\n				<i class=\"fa fa-android\"></i>\n			</p>\n			<p>You should see your face here.</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "			<h2>Mic Check</h2>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"content-layout single-column-slim\">\n	<section>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.isVideo : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "		<video id=\"js-preview-camera\" playsinline></video>\n		<p>This bar should move when you speak.</p>\n		<canvas id=\"js-preview-canvas\"></canvas>\n		<button id=\"js-start-button\" class=\"standard\">I'm Ready!</button>\n	</section>\n</div>";
},"useData":true});

this["JST"]["app/templates/spark_player/spark-final-results.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section class=\"spark-response\">\n    <div class=\"spark-data-question\">\n        <h2>Question</h2>\n        <p>"
    + container.escapeExpression(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "</p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <hr>\n    <div class=\"spark-data-answer\">\n        <h2>Student's Answer</h2>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video_answer : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.audio_answer : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <br />\n    </div>\n    <hr>\n    <div class=\"spark-data-correct\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.spark_responses : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.attempted : depth0),{"name":"unless","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <hr>\n    <div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.spark_responses : depth0),{"name":"each","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</section>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.audio : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <video preload=\"auto\" controls=\"controls\">\n            <source src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)))
    + "\" type=\"video/mp4\" />\n            Your browser does not support HTML5 video.\n        </video>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <audio preload=\"auto\" controls=\"controls\">\n            <source src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)))
    + "\" type=\"audio/mp3\" />\n        </audio>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <video preload=\"auto\" controls=\"controls\">\n            <source src=\""
    + container.escapeExpression(((helper = (helper = helpers.response_url || (depth0 != null ? depth0.response_url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"response_url","hash":{},"data":data}) : helper)))
    + "\" type='video/mp4' />\n            Your browser does not support HTML5 video.\n        </video>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <audio preload=\"auto\" controls=\"controls\">\n            <source src=\""
    + container.escapeExpression(((helper = (helper = helpers.response_url || (depth0 != null ? depth0.response_url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"response_url","hash":{},"data":data}) : helper)))
    + "\" type='audio/mp3' />\n            Your browser does not support HTML5 audio.\n        </audio>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.scored : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.not_graded : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <br />\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <!--<input type=\"checkbox\"-->\n               <!--class=\"js-correct-check\" data-response-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"-->\n               <!--"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.correct : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "-->\n        <!--/>-->\n        <h2>Grade</h2>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "-->\n               <!--checked-->\n               <!--";
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            "
    + container.escapeExpression(((helper = (helper = helpers.spark_response_score || (depth0 != null ? depth0.spark_response_score : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"spark_response_score","hash":{},"data":data}) : helper)))
    + "\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "        Not Graded\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "        Not Attempted\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.display_feedback : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div data-response-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                    <h2>Your feedback</h2>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.text_feedback : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video_feedback : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                        <p>"
    + ((stack1 = ((helper = (helper = helpers.text_feedback || (depth0 != null ? depth0.text_feedback : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text_feedback","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                        <div>\n                            <video preload=\"auto\" controls=\"controls\">\n                            <source src=\""
    + container.escapeExpression(((helper = (helper = helpers.video_feedback || (depth0 != null ? depth0.video_feedback : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"video_feedback","hash":{},"data":data}) : helper)))
    + "\" type='video/mp4' />\n                            Your browser does not support HTML5 video.\n                            </video>\n                        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["app/templates/spark_player/spark.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "				<p>"
    + container.escapeExpression(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "</p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video_answer : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "				<p class=\"quiz-feedback\"></p>\n				<button type=\"button\" class=\"standard\">Submit</button>\n				<button type=\"button\" class=\"standard hidden\">Record/Stop</button>\n				<button type=\"button\" class=\"standard hidden\">Next</button>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<video controls id=\"video-player\" preload=\"auto\" playsinline>\n						<source src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)))
    + "\" type='video/mp4'/>\n						Your browser does not support HTML5 video.\n					</video>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.audio : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<p>Audio Question</p>\n					<audio controls id=\"audio-player\" preload=\"auto\">\n						<source src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data}) : helper)))
    + "\" type='audio/wav'/>\n						Your browser does not support HTML5 audio.\n					</audio>\n				";
},"7":function(container,depth0,helpers,partials,data) {
    return "					<p><span id=\"status\"></span><span id=\"counter\"></span></p>\n					<video id=\"video-recorder\" class=\"hidden\" preload=\"auto\">\n						<source src=\"\" type='video/mp4'/>\n						Your browser does not support HTML5 video.\n					</video>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.audio_answer : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "					<p><span id=\"status\"></span><span id=\"counter\"></span></p>\n					<audio id=\"audio-recorder\" class=\"hidden\" preload=\"auto\">\n						<source src=\"\" type='audio/wav'/>\n						Your browser does not support HTML5 audio.\n					</audio>\n					<canvas id=\"js-audio-indicator\" class=\"whhyyy\" width=\"800\" height=\"400\"></canvas>\n				";
},"12":function(container,depth0,helpers,partials,data) {
    return "				<p> Once your instructor reviews your work, your scores will be posted here. </p>\n				<ul>\n					<li>Number Correct:</li>\n					<li>Total Questions:</li>\n					<li>Percent Correct:</li>\n				</ul>\n				<div id=\"spark-final-results\"></div>\n				<div id=\"js-coaching-report\" class=\"simple-table\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"quiz-wrapper\" class=\"content-layout single-column\">\n	<section>\n		<form>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "		</form>\n	</section>\n</div>";
},"useData":true});

this["JST"]["app/templates/tile_creator/add-video-container.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"upload-webclip-container\" data-outer-class=\"video\" style=\"visibility: visible; opacity: 1;\">\n	<div style=\"opacity: 0; height: 0;\" class=\"tile-saving-notification\">Saving</div>\n	<div class=\"info\">\n		<label id=\"upload-webclip-title-label\">\n			<input type=\"text\" id=\"upload-webclip-title\" aria-required=\"true\" maxlength=\"80\" placeholder=\"Enter title\">\n		</label>\n		<select>\n			<option>No Scroll Point</option>\n		</select>\n	</div>\n	<iframe id=\"js-video-iframe\" style=\"width: 100%; height: 260px;\"></iframe>\n	<div class=\"right\">\n		<button style=\"margin-top: 15px;\" id=\"upload-media-done-button\" class=\"done-button standard\">Add This Video</button>\n	</div>\n\n</div>";
},"useData":true});

this["JST"]["app/templates/tile_creator/add-webclip-container.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"upload-webclip-container\" data-outer-class=\"webclip\" style=\"visibility: visible; opacity: 1;\">\n	<div style=\"opacity: 0; height: 0;\" class=\"tile-saving-notification\">Saving</div>\n	<div id=\"webclip-thumbnail\" class=\"file-upload-box\"></div>\n	<div class=\"info\">\n		<label id=\"upload-webclip-title-label\">\n			Title\n			<input id=\"upload-webclip-title\" aria-required=\"true\"\n				   maxlength=\"80\" autofocus>\n		</label>\n		<label id=\"scroll-point-picker\">\n			Scroll to\n			<span class=\"select-wrapper\">\n			<select>\n				<option>No Scroll Point</option>\n			</select>\n			</span>\n		</label>\n	</div>\n	<button id=\"upload-media-done-button\" class=\"done-button standard\">Add This Web Page</button>\n	<iframe style=\"width: 100%; height: 260px;\"></iframe>\n</div>";
},"useData":true});

this["JST"]["app/templates/tile_creator/file-box.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"file-box\" data-outer-class=\"add-a-document\" style=\"visibility: visible; opacity: 1;\">\n	<div class=\"contents\">\n		<div id=\"file-data\">\n			<label id=\"input-1\">"
    + alias4(((helper = (helper = helpers.input1 || (depth0 != null ? depth0.input1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"input1","hash":{},"data":data}) : helper)))
    + "<input type=\"text\" aria-required=\"true\" autofocus maxlength=\"80\"></label>\n			<button id=\"file-box-button\" class=\"done-button standard\">"
    + alias4(((helper = (helper = helpers.filetype_text || (depth0 != null ? depth0.filetype_text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"filetype_text","hash":{},"data":data}) : helper)))
    + "</button>\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/tile_creator/quiz-creator-box.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "create-spark";
},"3":function(container,depth0,helpers,partials,data) {
    return "add-a-quiz";
},"5":function(container,depth0,helpers,partials,data) {
    return "				<label id=\"spark-type\">\n					Scenario Type\n					<div class=\"button-group\">\n						<label>\n							<input type=\"radio\" value=\"audio-spark\" checked class=\"audio\" name=\"spark-type\">\n							<span class=\"button-group-item\">Audio</span>\n						</label>\n						<label>\n							<input type=\"radio\" value=\"video-spark\" class=\"video\" name=\"spark-type\">\n							<span class=\"button-group-item\">Video</span>\n						</label>\n					</div>\n					<p class=\"choice-explanation\">\n						<span class=\"audio\">\n							Simulate a phone conversation. \n							<br>\n						</span>\n						<span class=\"video hidden\">Simulate a face-to-face conversation. <br>\n							<span style=\"font-size: .9em; margin-top: 5px; display: block; color: #cc4d4d\">NOTE: If you or a learner are using iOS or Safari, only audio will be recorded, since Apple doesn't yet support video recording in the browser.</span>\n						</span>\n					</p>\n				</label>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div id=\"file-box\" data-outer-class=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isSpark : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" style=\"visibility: visible; opacity: 1;\">\n	<div class=\"contents\">\n		<div id=\"file-data\">\n			<label id=\"input-1\">Title<input type=\"text\" aria-required=\"true\" autofocus maxlength=\"80\"></label>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isSpark : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<button id=\"file-box-button\" class=\"standard\">Create</button>\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/tile_creator/record-box.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "			<video id=\"preview\" autoplay></video>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "			<audio id=\"preview\" autoplay></audio>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"record-box\" data-outer-class=\"record-video\" style=\"visibility: visible; opacity: 1;\">\n	<div class=\"contents\">\n		<div id=\"file-data\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.video : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/tile_creator/tile-owner-box.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"add-content-box\" data-outer-class=\"add-content\" id=\"tile-creator\">\n	<div class=\"contents\">\n		<div class=\"search-area\">\n			<label for=\"discovery-search\">\n				Add webpage or video from URL <a class=\"hint--right\" data-hint=\"Fetch a webpage or video by pasting the URL here.\"><i class=\"fa fa-question-circle\"></i></a>\n			</label>\n			<div class=\"text-input-with-button\">		\n				<input type=\"text\" id=\"discovery-search\" autofocus placeholder=\"Enter a URL\">\n				<button class=\"standard go\">GO</button>\n			</div>\n		</div>\n		<div class=\"buttons\" style=\"clear: both\">\n			<button class=\"document\">\n				<i class=\"fa fa-upload\"></i>\n				<span>Upload File</span>\n			</button>\n			<button class=\"record-video\">\n				<i class=\"fa fa-video-camera\"></i>\n				<span>Record Video</span>\n			</button>\n			<button class=\"quiz\">\n				<i class=\"fa fa-pencil-square-o\"></i>\n				<span>Create Quiz</span>\n			</button>\n			<button class=\"assignent\">\n				<i class=\"fa fa-check-square-o\"></i>\n				<span>Create Assignment</span>\n			</button>\n			<button class=\"quiz\">\n				<i class=\"fa fa-fire\"></i>\n				<span>Create Spark</span>\n			</button>\n			<button class=\"quiz\">\n				<i class=\"fa fa-id-card-o\"></i>\n				<span>In-Person Training</span>\n			</button>\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/tile_manager.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "class=\"ungraded\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<main id=\"js-tile-manager\" class=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.type : stack1), depth0))
    + "\">\n	<header>\n		<h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.title : stack1), depth0))
    + " </h1>\n		<div class=\"actions\">\n			<!-- <button type=\"button\" id=\"done-button\" class=\"standard\">Done Editing</button> -->\n			<a class=\"button neutral\" href=\"#course-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.id : stack1), depth0))
    + "--topics-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.topic_id : stack1), depth0))
    + "\">Done</a>\n\n		</div>\n\n	</header>\n\n	<!-- maybe i should move this so that the current thing can be selected? -->\n	<div class=\"tile-nav hide-unless editing-course\">\n		<a href=\"#course-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.id : stack1), depth0))
    + "--editor-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"hide-unless editing-course\">Edit Tile</a>\n		<a href=\"#course-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.id : stack1), depth0))
    + "--results-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.has_ungradings : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">View Results</a>\n	</div>\n\n	<div id=\"js-manager-body\">\n	<!-- the widget is appended here -->\n	</div>\n</main>";
},"useData":true});

this["JST"]["app/templates/tile_view/add-tile-item.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"add-tile-item tile-item hide-unless editing-course\" data-original-title=\"\">\n	<div class=\"add-tile-plus-image\"></div>\n</div>";
},"useData":true});

this["JST"]["app/templates/tile_view/book-delete-dismiss.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"delete-tile\" data-outer-class=\"delete-box\">\n	<p>Sorry, you cannot delete publisher content when the course has already started</p>\n	<button id=\"cancel-delete-button\">Close</button>\n</div>";
},"useData":true});

this["JST"]["app/templates/tile_view/book-delete-prompt.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"delete-tile\" data-outer-class=\"book-delete-box\">\n	<p>This chapter is part of a textbook. Since this publisher does not offer per-chapter pricing, you cannot remove individual chapters. Do you want to remove all the chapters in this book?</p>\n	<button id=\"nevermind-delete-button\" class=\"neutral\">Nevermind</button>\n	<button id=\"removeall-delete-button\" class=\"warning\">Remove All</button>\n</div>";
},"useData":true});

this["JST"]["app/templates/tile_view/content-container.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<main class=\"main-content-container\">\n	<header>\n		<!-- do not put any whitespace in this h1 because it created weird new\n		lines in the title when saved-->\n		<h1 id=\"js-course-title\" class=\"main-view-title main-view-title-editable\"\n			>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>\n		\n\n\n		<div class=\"actions\">\n			<span id=\"search-bar-container\" class=\"search-bar responsive\">\n				<input class=\"tile-search\" placeholder=\"Find Content\">\n				<button type=\"submit\" class=\"tile-search-btn\">\n					<i class=\"fa fa-search\"></i>\n				</button>\n			</span>\n			<button id=\"add-content-button\" class=\"standard primary-action hide-unless editing-course\">\n				<span class=\"desktop-hide\">+</span>\n				<span class=\"mobile-hide\"> Add Content</span>\n			</button>\n		</div>\n\n	</header>\n\n	<!-- do not put whitespace in this\n	p tag because it breaks the placehodler-->\n	<div class=\"content-layout tiles\">\n		<div class=\"topic-info-container\">\n			<h2 id=\"js-topic-title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.topic : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h2>\n			<i id=\"js-edit-topic-title\" class=\"fa fa-pencil hide-unless editing-course edit-title\"></i>\n\n			<p placeholder=\"Describe this topic\"\n			class=\"topic-description\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.topic : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n		</div>\n\n\n		<div class=\"course-tile-container\"></div>\n\n		<div class=\"topic-bottom\">\n			<button class=\"section-title-delete-button hide-unless editing-course warning\">\n				<i class=\"fa fa-exclamation-circle\"></i>\n				Delete Topic \n			</button>\n		</div>\n\n	</div>\n</main>\n";
},"useData":true});

this["JST"]["app/templates/tile_view/course-info.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"percent\">("
    + container.escapeExpression(((helper = (helper = helpers.completion_percentage || (depth0 != null ? depth0.completion_percentage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"completion_percentage","hash":{},"data":data}) : helper)))
    + "%)</span>";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return " by "
    + container.escapeExpression(((helper = (helper = helpers.adder_name || (depth0 != null ? depth0.adder_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"adder_name","hash":{},"data":data}) : helper)));
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return " on "
    + container.escapeExpression(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"created_at","hash":{},"data":data}) : helper)));
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<h2 id=\"js-course-status\" class=\"course-status\">Archived on "
    + container.escapeExpression((helpers.timestamp || (depth0 && depth0.timestamp) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"timestamp","hash":{},"data":data}))
    + "</h2>\n				<section class=\"note\">\n					<i class=\"fa fa-info-circle\"></i> Heads up: this course has been archived by an instructor. You don't need to complete it, and the content might be outdated.\n				</section>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<h1 id=\"js-course-status\" class=\"course-status\">"
    + ((stack1 = container.invokePartial(partials.course_status,depth0,{"name":"course_status","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</h1>\n";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<div class=\"topic\">\n				<h2><a href=\"#topic-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(container.lambda((depths[1] != null ? depths[1].userCourseId : depths[1]), depth0))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></h2>\n				<ol class=\"nopadding\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tiles : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</ol>\n			</div>\n";
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "					<li class=\"tile\">\n						<div class=\"status "
    + alias4(((helper = (helper = helpers.statusClass || (depth0 != null ? depth0.statusClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"statusClass","hash":{},"data":data}) : helper)))
    + "\">\n							<span class=\"score\">\n								"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.statusData : depth0)) != null ? stack1.score : stack1), depth0))
    + "\n							</span>\n							<span class=\"pending\">\n								Pending\n							</span>\n							<span class=\"checkmark\">\n								<i class=\"fa fa-check\"></i>\n							</span>\n						</div>\n						<div class=\"title\">\n							<a href=\"#reader-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(alias5(((stack1 = (depths[2] != null ? depths[2].course : depths[2])) != null ? stack1.id : stack1), depth0))
    + "-"
    + alias4(alias5((depths[2] != null ? depths[2].userCourseId : depths[2]), depth0))
    + "-1\">\n							"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n							</a>\n						</div>\n					</li>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "			<button class=\"warning\" id=\"js-drop-elective\">Drop Course</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "<main class=\"main-content-container\">\n	<div class=\"course-info\">\n		<div class=\"content-layout single-column-slim\">\n			<h1>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.title : stack1), depth0))
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0.done : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</h1> <!--jank -->\n			<p class=\"description\">"
    + alias1(((helper = (helper = helpers.courseDescription || (depth0 != null ? depth0.courseDescription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"courseDescription","hash":{},"data":data}) : helper)))
    + "</p>\n			<span class=\"details\">\n				Assigned\n				"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.adder_name : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n				"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.created_at : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n			</span>\n		</div>\n	</div>\n\n	<div class=\"course-progress\">\n		<div class=\"content-layout single-column-slim\">\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.archived : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.topics : stack1),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.elected : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n</main>";
},"usePartial":true,"useData":true,"useDepths":true});

this["JST"]["app/templates/tile_view/course-title.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div style=\"display: none\" class=\"course-title\">\n	<span id=\"course-title\"></span>\n	<span id=\"floated-container\">\n		<span id=\"search-bar-container\">\n			<input class=\"tile-search\" placeholder=\"Search course\">\n			<button type=\"submit\" class=\"tile-search-btn standard\"><i class=\"fa fa-search\"></i></button>\n		</span>\n	</span>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/tile_view/edit_assignment.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.sound : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.media : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "			<div id='video-container' class=\"media-container\">\n				<video id=\"video-player\" class=\"video-js vjs-default-skin\" controls preload=\"auto\" playsinline>\n					<source src=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" type=\"video/mp4\"/>\n				</video>\n				<button class='delete-contents standard' id='delete-contents-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "'><i class=\"fa fa-times\"></i></button>\n			</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "			<div id='audio-container' class=\"media-container\">\n				<audio id=\"audio-player\" preload=\"auto\" controls=\"controls\">\n					<source type=\"audio/mpeg\" src=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" />\n					Your browser does not support HTML5 audio.\n				</audio>\n				<button class='delete-contents standard' id='delete-contents-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "'><i class=\"fa fa-times\"></i></button>\n			</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "		<div>\n			<div class=\"image-container media-container\">\n				<a href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\"_blank\"><img src=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\"/></a>\n				<button class='delete-contents' id='delete-contents-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "'><i class=\"fa fa-times\"></i></button>\n			</div>\n		</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.file_name : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "				<div id='files-container'>\n					<button class='download-file standard' value='"
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "'><i class=\"fa fa-download\"></i> "
    + alias2(alias1((depth0 != null ? depth0.file_name : depth0), depth0))
    + "</button>\n					<button class='delete-contents' id='delete-contents-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "'><i class=\"fa fa-times\"></i></button>\n				</div>\n				<br>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div>\n	<h2>Assignment Description (Learners see this)</h2>\n	<p>Tell learners what they need to do to complete the assignment. You can upload files or record videos as part of the description.</p>\n	<textarea id=\"assignment-details\" placeholder=\"Tell learners what they are supposed to do.\">"
    + alias4(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "</textarea>\n	<div id='response-contents-container'>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.assignment_contents : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n	<button id=\"video-description\" class=\"neutral\" type=\"button\"><i class=\"fa fa-video-camera\"></i></button>\n	<button id=\"upload-description\" class=\"neutral\" type=\"button\"><i class=\"fa fa-upload\"></i></button>\n	<hr>\n	<h2>Learner responses can be:</h2>\n	<label>\n		<input type=\"radio\" name=\"content-type\" value=\"media\"> Text, files, or recordings <br>\n	</label>\n	<label>\n		<input type=\"radio\" name=\"content-type\" value=\"text\"> Text only\n	</label>\n	<h2 style=\"margin-top: 20px\">Scoring</h2>\n	<label>\n		<input id=\"assignment-pass-fail\" type=\"radio\" value=\"pass-fail\" name=\"grading\">Pass/Fail <br>\n		<input id=\"assignment-scored\" type=\"radio\" value=\"scored\" name=\"grading\">Percent - minimum passing score:\n		<input class=\"assignment-min-score inline short\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.min_score || (depth0 != null ? depth0.min_score : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"min_score","hash":{},"data":data}) : helper)))
    + "\">%\n	</label>\n		<p class=\"note\" style=\"margin-bottom: 0;\"><span style=\"font-weight:bold\">Tip: </span>Assignments are a way to give learners open-ended tasks, which are then manually reviewed by an instructor. They're great for coaching your team through practice scenarios. <a href=\"https://medium.com/skillo/why-assignments-are-awesome-7cef032688c6\" target=\"_blank\" style=\"font-weight: bold\">Read more here.</a></p>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/tile_view/edit_live_training.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div>\n	<label class=\"event-details\">Event details\n		<textarea name=\"message\" id=\"event-details\"\n				  placeholder=\"Enter important info such as meeting times and subject matter.\"\n		>"
    + container.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"message","hash":{},"data":data}) : helper)))
    + "</textarea>\n	</label>\n</div>";
},"useData":true});

this["JST"]["app/templates/tile_view/elective-drop-prompt.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"drop-elective\" data-outer-class=\"delete-box prompt-lightbox\">\n	<p>Are you sure you want to drop this course?  Your current progress will be lost.</p>\n	<button id=\"confirm-drop-elective-button\">Drop Course</button>\n	<button id=\"cancel-drop-elective-button\">Cancel</button>\n</div>";
},"useData":true});

this["JST"]["app/templates/tile_view/replace-tile.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n	<button type=\"button\" class=\"neutral\" id=\"replace-button\">Replace File</button>\n	<span>This won't change anyone's completion data.</span>\n<hr>\n</div>";
},"useData":true});

this["JST"]["app/templates/tile_view/scorm-hacks.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "checked";
},"3":function(container,depth0,helpers,partials,data) {
    return " disabled ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div id=\"scorm-hacks\">\n	<p><strong>SCORM Overrides:</strong><br>It is recommended to use your SCORM authoring tool to configure all SCORM settings. However, the settings below can be used to override the file's settings when needed.</p>\n	<label>\n		<input  type=\"checkbox\" id=\"js-score-override\"\n		"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.min_score : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		/>\n		<strong>Ignore the file's <em>Passing Score</em> value </strong> and set to:\n		<input type=\"text\" id=\"score-override-value\" style=\"width: 3em;\"\n			   value=\""
    + container.escapeExpression(((helper = (helper = helpers.min_score || (depth0 != null ? depth0.min_score : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"min_score","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.min_score : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " \n			   />\n	</label>\n	<label>\n		<input  type=\"checkbox\" id=\"js-review-mode-button\"\n				"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.review_mode : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		/>\n		<strong>Ignore the file's <em>Review</em> mode</strong>\n		<p>If a user revisits the tile after completing it, instead of using the file's Review Mode, simply show the lesson again without recording their interaction with it. This is useful for SCORM files that don't support Review Mode, or don't support it correctly.</p>\n	</label>\n	<label>\n		<input type=\"checkbox\" id=\"js-score-only-improve\"\n			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.scorm_score_can_only_improve : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		 />\n		<strong>Report only the highest score</strong>\n		<p>Scores reported by the file that are lower than scores previously reported will be discared</p>\n	</label>\n</div>";
},"useData":true});

this["JST"]["app/templates/tile_view/search-results.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<main class=\"main-content-container search-results-container current\">\n	<header>\n		<h1>Search Results</h1>\n		<div class=\"actions\">\n			<span id=\"search-bar-container\" class=\"search-bar\">\n				<input id=\"search-again\" class=\"tile-search\" placeholder=\"Find Content\">\n				<button type=\"submit\" class=\"tile-search-btn\"><i class=\"fa fa-search\"></i></button>\n			</span>\n		</div>\n	</header>\n	<div class=\"content-layout tiles search-results\">\n		<div class=\"no-results-container hidden\">\n			<p>No Items Found</p>\n		</div>\n		<div id=\"js-searching-container\">\n			<p>Searching...</p>\n		</div>\n	</div>\n</main>";
},"useData":true});

this["JST"]["app/templates/tile_view/student-no-access.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"tile-view-before-course-notice\"></div>";
},"useData":true});

this["JST"]["app/templates/tile_view/tile-edit-box.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"3":function(container,depth0,helpers,partials,data) {
    return " checked=\"checked\" ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.days_til_available : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    return " 7 ";
},"9":function(container,depth0,helpers,partials,data) {
    return " disabled ";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.assignment : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.livetraining : depth0),{"name":"unless","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.quiz : depth0),{"name":"unless","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.scormclip : depth0),{"name":"unless","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.spark : depth0),{"name":"unless","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.webclip : depth0),{"name":"unless","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.audio : depth0),{"name":"unless","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    return "                    <label for=\"download-settings\">\n                        <input type=\"checkbox\" id=\"download-settings\" checked=\"checked\">\n                        Download this\n                    </label>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.video : depth0),{"name":"unless","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    return "                    <label for=\"printing-settings\">\n                        <input type=\"checkbox\" id=\"printing-settings\" checked=\"checked\">\n                        Print this\n                    </label>\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "SCORM";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.type : stack1), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"content-layout single-column\" id=\"edit-contents\">\n	<form id=\"edit-form\">\n		<section class=\"tile-settings content\">\n			<div class=\"select-container\">\n				Title: <div id=\"tile-input-container\">\n				<input type=\"text\" id=\"tile-edit-input\" placeholder=\"Edit Title\">\n				</div>\n			</div>\n\n			<input type=\"hidden\" id=\"file-url\" name=\"file_url\" />\n			<input type=\"hidden\" id=\"file-key\" name=\"file_key\" />\n			<!--<button id=\"update-thumbnail\" class=\"neutral\" type=\"button\">Update Thumbnail</button>-->\n			<h2>Thumbnail (250x180)</h2>\n			<div id=\"edit-thumb-container\" style=\"cursor: pointer\">\n				<img class=\"tile-item-image\" alt=\"\" />\n				<img class=\"replace-hover\" src=\"dist/img/replace-tile-thumb-221998d785418de4a7103fa6ce1d7613.png\" alt=\"replace\">\n			</div>\n\n			<div style=\"clear: both\">\n				<div class=\"checkbox-with-explanation\">\n				<label for=\"hidden-status\">\n					<input type=\"checkbox\" id=\"hidden-status\" style=\"margin-top: 15px\">Lock tile\n				</label>\n				<p>This will prevent learners from viewing content, even if the prerequisite is met.</p>\n				</div>\n				<label for=\"reporting-status\">\n					<input type=\"checkbox\" id=\"reporting-status\" checked=\"checked\" style=\"margin-top: 15px\">Include in reports and statistics\n				</label>\n			</div>\n		</section>\n		<section>\n			<h2>Prerequisite</h2>\n			<div class=\"select-container\">\n				<div id=\"prereq-select-container\">\n					<label>\n					<p>What must learners complete before they can look at this?</p>\n					<select id=\"prereq-selector\">\n						<option value=\"No Prerequisite\">\n							Nothing\n						</option>\n					</select>\n					</label>\n					<label id=\"require-pass-label\" class=\"hidden\">\n					<input type=\"checkbox\" name=\"require_pass\"\n						   id=\"require-pass\"\n					"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.require_pass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " />\n					Learners must have a <em>passing score</em> on the above</label>\n					<hr class=\"js-when-to-unlock hidden\">\n					<div id=\"when-to-unlock\" class=\"js-when-to-unlock hidden\">\n						<p>Once they do, unlock this tile:</p>\n						<label><input id=\"js-days-til-available-off\"type=\"radio\" name=\"days_til_available\" value=\"false\" "
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.days_til_available : stack1),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Immediately</label>\n						<label><input id=\"js-days-til-available\" type=\"radio\" name=\"days_til_available\" value=\"true\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.days_til_available : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Days later \n						<input type=\"number\" id=\"js-days-til-available-value\" value=\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.days_til_available : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.days_til_available : stack1),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " />\n						</label>\n					</div>\n				</div>\n			</div>\n		</section>\n		<section id=\"student-tile-permissions\">\n			<div style=\"clear: both\">\n				<p style=\"margin-top: 0\">Allow learners to...</p>\n"
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.no_print_and_download : stack1),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<label for=\"discussion-settings\">\n					<input type=\"checkbox\" id=\"discussion-settings\" checked=\"checked\">\n					Comment on this\n				</label>\n			</div>\n		</section>\n\n		<section id=\"tile-content\" class=\"content\">\n		</section>\n		\n		<section class=\"tile-settings content delete-area\">				\n			<button type=\"button\" id=\"confirm-delete-button\"><i class=\"fa fa-exclamation-circle\"></i> Delete "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.changeToSCORM : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(24, data, 0),"data":data})) != null ? stack1 : "")
    + "</button>\n			<span>You can't undo this.</span>\n		</section>\n	</form>		\n</div>\n";
},"useData":true});

this["JST"]["app/templates/tile_view/tile-item.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			"
    + container.escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"score","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<span class=\"comment-count\">"
    + container.escapeExpression(((helper = (helper = helpers.comment_count || (depth0 != null ? depth0.comment_count : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"comment_count","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"tile-item tile-tooltip "
    + alias4(((helper = (helper = helpers.statusClass || (depth0 != null ? depth0.statusClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"statusClass","hash":{},"data":data}) : helper)))
    + "\" id=\"tile-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"status-overlay\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.status_data_by_user : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n	<img class=\"tile-item-image\" alt=\"\" />\n	<button class=\"manage-tile-button manage-tile standard hide-unless observing-course\">\n		<span class=\"hide-unless observing-course only\">Results</span>\n		<i class=\"fa fa-pencil hide-unless editing-course\"></i>\n	</button>\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.no_discussion : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<div class=\"tile-inset-text\"></div>\n	<div class=\"tile-title\">\n		 <h3>\n			<span class=\"title\">\n				"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n			</span>\n			<br>\n		</h3>\n		<span id=\"type\" style=\"display: none\">\n		</span>\n	</div>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/tile_view/tile-view-left-sidebar.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<a id=\"topic_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n				   href=\"#topic-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(container.lambda((depths[1] != null ? depths[1].userCourseId : depths[1]), depth0))
    + "\"\n				   class=\"ui-droppable\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.ungradings_count : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</a>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						<span class=\"count\">"
    + container.escapeExpression(((helper = (helper = helpers.ungradings_count || (depth0 != null ? depth0.ungradings_count : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ungradings_count","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n	<a href=\"#learn\" class=\"button white hide-unless learning-course\" id=\"back-button\">\n		Learn\n	</a>\n	<a href=\"#instruct\" class=\"button white hide-unless observing-course\" id=\"back-button\">\n		Instruct\n	</a>\n\n		<div class=\"user-groups hide-unless observing-course\">\n			<nav id=\"groups\" role=\"navigation\"\n				 aria-label=\"People assigned to this course\">\n				<a href=\"#roster-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" id=\"js-roster-view\">\n					Learner List\n				</a>\n				<a href=\"#courseinstructors-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.id : stack1), depth0))
    + "\"  id=\"js-instructors-view\">\n					Instructor List\n				</a>\n				<a href=\"#autoassign-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"hide-unless editing-course\" id=\"js-autoassign-view\">\n					Auto-Assign Rules\n				</a>\n				<a href=\"#courseoptions-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.id : stack1), depth0))
    + "\"  class=\"hide-unless editing-course\" id=\"js-course-editor\">\n					Options\n				</a>\n			</nav>\n		</div>\n\n		<hr class=\"hide-unless observing-course\">\n\n		<div class=\"topics\">\n			<nav id=\"topics\" role=\"navigation\"\n				 aria-label=\"Topics in this course\">\n				<a id=\"courseinfo\" href=\"#courseinfo-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.id : stack1), depth0))
    + "-"
    + alias2(((helper = (helper = helpers.userCourseId || (depth0 != null ? depth0.userCourseId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias3,{"name":"userCourseId","hash":{},"data":data}) : helper)))
    + "\" class=\"course-info hide-unless learning-course\">Course Overview</a>\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.topics : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</nav>\n			<a id=\"new-topic\" class=\"hide-unless editing-course new-list-item\">\n				<i class=\"fa fa-plus\"></i> New Topic\n			</a>\n		</div>\n";
},"useData":true,"useDepths":true});

this["JST"]["app/templates/tileedit_view/tile_manager.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "class=\"ungraded\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<main id=\"js-tile-manager\" class=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.type : stack1), depth0))
    + "\">\n	<header>\n		<h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.title : stack1), depth0))
    + " </h1>\n		<div class=\"actions\">\n		 \n			<span id=\"search-bar-container\" class=\"search-bar-s2 responsive\">\n			</span>\n			<a class=\"button neutral\" href=\"#topic-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.topic_id : stack1), depth0))
    + "\">Done</a>\n\n		</div>\n\n	</header>\n\n	<!-- maybe i should move this so that the current thing can be selected? -->\n	<div class=\"tile-nav hide-unless editing-course\">\n		<a href=\"#tileedit-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.id : stack1), depth0))
    + "-editor\" class=\"hide-unless editing-course\">Edit Tile</a>\n		<a href=\"#tileedit-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.id : stack1), depth0))
    + "-results\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.has_ungradings : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">View Results</a>\n	</div>\n\n	<div id=\"js-manager-body\">\n	<!-- the widget is appended here -->\n	</div>\n</main>";
},"useData":true});

this["JST"]["app/templates/tileedit_view/tile-delete-prompt.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"delete-tile\" data-outer-class=\"delete-box\">\n	<p>Are you sure you want to delete this course material?</p>\n	<button id=\"cancel-delete-button\">Cancel</button>\n	<button id=\"confirm-delete-button\">Delete</button>\n</div>";
},"useData":true});

this["JST"]["app/templates/tileedit_view/tile-edit-box.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"3":function(container,depth0,helpers,partials,data) {
    return " checked=\"checked\" ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.days_til_available : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    return " 7 ";
},"9":function(container,depth0,helpers,partials,data) {
    return " disabled ";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.assignment : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.livetraining : depth0),{"name":"unless","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.quiz : depth0),{"name":"unless","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.scormclip : depth0),{"name":"unless","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.spark : depth0),{"name":"unless","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.webclip : depth0),{"name":"unless","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.audio : depth0),{"name":"unless","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    return "                    <label for=\"download-settings\">\n                        <input type=\"checkbox\" id=\"download-settings\" checked=\"checked\">\n                        Download this\n                    </label>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.video : depth0),{"name":"unless","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    return "                    <label for=\"printing-settings\">\n                        <input type=\"checkbox\" id=\"printing-settings\" checked=\"checked\">\n                        Print this\n                    </label>\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "SCORM";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.type : stack1), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<div class=\"content-layout single-column\" id=\"edit-contents\">\n	<form id=\"edit-form\">\n		<section class=\"tile-settings content\">\n			<div class=\"select-container\">\n				Title: <div id=\"tile-input-container\">\n				<input type=\"text\" id=\"tile-edit-input\" placeholder=\"Edit Title\">\n				</div>\n			</div>\n\n			<input type=\"hidden\" id=\"file-url\" name=\"file_url\" />\n			<input type=\"hidden\" id=\"file-key\" name=\"file_key\" />\n			<!--<button id=\"update-thumbnail\" class=\"neutral\" type=\"button\">Update Thumbnail</button>-->\n			<h2>Thumbnail (250x180)</h2>\n			<div id=\"edit-thumb-container\" style=\"cursor: pointer\">\n				<img class=\"tile-item-image\" alt=\"\" />\n				<img class=\"replace-hover\" src=\"dist/img/replace-tile-thumb-221998d785418de4a7103fa6ce1d7613.png\" alt=\"replace\">\n			</div>\n\n			<div style=\"clear: both\">\n				<div class=\"checkbox-with-explanation\">\n				<label for=\"hidden-status\">\n					<input type=\"checkbox\" id=\"hidden-status\" style=\"margin-top: 15px\">Lock tile\n				</label>\n				<p>This will prevent learners from viewing content, even if the prerequisite is met.</p>\n				</div>\n				<label for=\"reporting-status\">\n					<input type=\"checkbox\" id=\"reporting-status\" checked=\"checked\" style=\"margin-top: 15px\">Include in reports and statistics\n				</label>\n			</div>\n		</section>\n		<section>\n			<h2>Prerequisite</h2>\n			<div class=\"select-container\">\n				<div id=\"prereq-select-container\">\n					<label>\n					<p>What must learners complete before they can look at this?</p>\n					<select id=\"prereq-selector\">\n						<option value=\"No Prerequisite\">\n							Nothing\n						</option>\n					</select>\n					</label>\n					<label id=\"require-pass-label\" class=\"hidden\">\n					<input type=\"checkbox\" name=\"require_pass\"\n						   id=\"require-pass\"\n					"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.require_pass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " />\n					Learners must have a <em>passing score</em> on the above</label>\n					<hr class=\"js-when-to-unlock hidden\">\n					<div id=\"when-to-unlock\" class=\"js-when-to-unlock hidden\">\n						<p>Once they do, unlock this tile:</p>\n						<label><input id=\"js-days-til-available-off\"type=\"radio\" name=\"days_til_available\" value=\"false\" "
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.days_til_available : stack1),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Immediately</label>\n						<label><input id=\"js-days-til-available\" type=\"radio\" name=\"days_til_available\" value=\"true\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.days_til_available : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Days later \n						<input type=\"number\" id=\"js-days-til-available-value\" value=\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.days_til_available : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.tile : depth0)) != null ? stack1.days_til_available : stack1),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " />\n						</label>\n					</div>\n				</div>\n			</div>\n		</section>\n		<section id=\"student-tile-permissions\">\n			<div style=\"clear: both\">\n				<p style=\"margin-top: 0\">Allow learners to...</p>\n"
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.no_print_and_download : stack1),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<label for=\"discussion-settings\">\n					<input type=\"checkbox\" id=\"discussion-settings\" checked=\"checked\">\n					Comment on this\n				</label>\n			</div>\n		</section>\n\n		<section id=\"tile-content\" class=\"content\">\n		</section>\n		\n		<section class=\"tile-settings content delete-area\">				\n			<button type=\"button\" id=\"confirm-delete-button\"><i class=\"fa fa-exclamation-circle\"></i> Delete "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.changeToSCORM : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(24, data, 0),"data":data})) != null ? stack1 : "")
    + "</button>\n			<span>You can't undo this.</span>\n		</section>\n	</form>		\n</div>\n";
},"useData":true});

this["JST"]["app/templates/tileedit_view/tileedit_view.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"js-main-container\" class=\"main-content-container\">\n</div>";
},"useData":true});

this["JST"]["app/templates/tileedit_view/video_info.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<h2>Video Format &amp; Quality</h2>\n<ul class=\"video-meta-info\">\n    <li>Resolution: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.get_info : depth0)) != null ? stack1.width : stack1), depth0))
    + " x "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.get_info : depth0)) != null ? stack1.height : stack1), depth0))
    + "</li>\n    <li>Length: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.get_info : depth0)) != null ? stack1.length : stack1), depth0))
    + " </li>\n    <li>Bitrate: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.get_info : depth0)) != null ? stack1.avg_bitrate : stack1), depth0))
    + " </li>\n    <li>Format: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.get_info : depth0)) != null ? stack1.file_type : stack1), depth0))
    + " </li>\n    <li>File size: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.get_info : depth0)) != null ? stack1.file_size : stack1), depth0))
    + "</li>\n</ul>\n<p class=\"note\"><strong>Optimizing Videos: </strong>The lower the video's bitrate, the faster it will load, especially on slow connections. Even on a very fast connection, we suggest keeping the bitrate below 8000kbps. You can optimize your videos to your liking before uploading with a free app called <a href=\"https://handbrake.fr/downloads.php\" target=\"_blank\">Handbrake</a>.</p>";
},"useData":true});

this["JST"]["app/templates/topic_view/topic_view.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"js-main-container\" class=\"main-content-container\">\n</div>";
},"useData":true});

this["JST"]["app/templates/user_assigner/group-delete-prompt.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"delete-tile\" data-outer-class=\"delete-box\">\n	<p>Are you sure you want to delete this course?</p>\n	<button id=\"cancel-delete-button\">Cancel</button>\n	<button id=\"confirm-delete-button\">Delete</button>\n</div>";
},"useData":true});

this["JST"]["app/templates/user_assigner/group.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "		<li>"
    + alias2(alias1((depth0 != null ? depth0.first_name : depth0), depth0))
    + ", "
    + alias2(alias1((depth0 != null ? depth0.last_name : depth0), depth0))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li>\n	<span>Instructors:</span>\n	<ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.instructors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n	<span>"
    + alias4(((helper = (helper = helpers.start_date || (depth0 != null ? depth0.start_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"start_date","hash":{},"data":data}) : helper)))
    + "</span> - <span>"
    + alias4(((helper = (helper = helpers.end_date || (depth0 != null ? depth0.end_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"end_date","hash":{},"data":data}) : helper)))
    + "</span>\n	<a href=\"#roster-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">Roster</a>\n</li>";
},"useData":true});

this["JST"]["app/templates/user_assigner/instructor_assigner.us"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<main>\n    <header>\n        Add Instructors\n        <div class=\"actions\">\n            <button id=\"js-cancel\" class=\"neutral\">Cancel</button>\n        </div>\n    </header>\n    <div class=\"content-layout single-column\">\n        <section id=\"instructor-adder\">\n            <h2>Instructors to add</h2>\n            <div class=\"subsection\">\n                <select></select>\n            </div>\n\n            <p id=\"js-new-accounts-count\"></p>\n\n            <div id=\"js-permission-editor\"></div>\n\n            <label id=\"js-email-users\"><input type=\"checkbox\"/>\n                Notify these instructors via email\n            </label>\n            <button id=\"js-add-people\" class=\"lightbox-done standard\">Add Instructors</button>\n        </section>\n    </div>\n</main>\n";
},"useData":true});

this["JST"]["app/templates/user_assigner/user_assigner.us"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.organization : stack1)) != null ? stack1.allow_external_accounts : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return " You can also copy and\n				paste email addresses from another source such as a spreadsheet or\n				Outlook. To add a user who does not have a Skillo account, enter their email address in the box; a Skillo signup email message will be automatically sent, and the new user will be added to the course.";
},"4":function(container,depth0,helpers,partials,data) {
    return "			<label id=\"js-email-users\" class=\"lone-checkbox\"><input type=\"checkbox\"/>\n				Notify learners by email as soon as they can start this course.\n			</label>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "		<section>\n			<label class=\"course-link\">Course Signup Link <a class=\"hint--bottom-left hint--rounded\" aria-label=\"Anyone with this URL can join this course as a learner.\"><i class=\"fa fa-question-circle\"></i></a><br>\n				<input type=\"text\" id=\"course-share-url\" value=\"http://"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.organization : stack1)) != null ? stack1.subdomain : stack1), depth0))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.organization : stack1)) != null ? stack1.subdomain : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "myskillo.com#section="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.uuid : stack1), depth0))
    + "\" />\n				<button style=\"display: none\" class=\"neutral copy\" data-clipboard-action=\"copy\" data-clipboard-target=\"#course-share-url\">Copy</button>\n			</label>\n		</section>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return ".";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<main>\n	<header>\n		<h1>Assign learners to this course</h1>\n		<div class=\"actions\">\n			<button  id=\"js-cancel\" class=\"neutral\">Cancel</button>\n		</div>\n	</header>\n	<div id=\"assign-students\" class=\"content-layout single-column-slim\">\n\n		<h2>Select Learners</h2>\n		<section>\n			<p>To add learners to this course, use the field below\n				to search for and select their names."
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.organization : stack1)) != null ? stack1.on_the_fly_user_creation : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</p>\n			<label><select></select></label>\n			<label id=\"js-skip-passed\"><input type=\"checkbox\"/>\n				Skip learners who have completed this course already.\n			</label>\n			<label id=\"js-skip-failed\" class=\"hidden\"><input type=\"checkbox\"/>\n				Skip learners who <strong>failed</strong> this course already.\n			</label>\n		</section>\n\n		<h2 id=\"sanity-check-header\">Sanity Check</h2>\n		<section id=\"sanity-check\" class=\"note\">\n			<p id=\"js-new-accounts-count\"></p>\n			<p class=\"js-retakes-count\"></p>\n			<p class=\"js-retakes-count\"></p>\n			<p id=\"js-skips-count\"></p>\n			<p id=\"js-large-add\"></p>\n		</section>\n\n		<h2>Timeline</h2>\n		<section>\n			<label class=\"date\">When can they start?\n				<input id=\"js-start-date\" type=\"text\" value=\"Now\" />\n			</label>\n			<label class=\"date\">When should they finish?\n				<input id=\"js-end-date\" type=\"text\" value=\"No Deadline\" />\n			</label>\n"
    + ((stack1 = helpers.unless.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.organization : stack1)) != null ? stack1.disable_notification_email : stack1),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<!-- Sanity Check should only show if there is something to report -->\n			<button id=\"js-add-people\" class=\"lightbox-done standard\">Add People</button>\n			<p id=\"js-import-status\"></p>\n		</section>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.signup_link : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</main>\n";
},"useData":true});