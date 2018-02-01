var bio = {
	"name": "Laert Alickolli",
	"role": "Front End Web Developer",
	"contacts": {
		"mobile": "773-971-8434",
		"email": "laertalickolli@gmail.com",
		"github": "github.com/laertos",
		"location": "Chicago, IL"
	},
	"pictureURL": "images/me.jpg",
	"welcomeMessage": "Hi, I am Laert and I like to code. Thanks for checking out my resume.",
	"skills": ["HTML5", "CSS3", "Javascript", "React.js"]
}

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").prepend(formattedLocation);
$("#footerContacts").prepend(formattedLocation);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").prepend(formattedGithub);
$("#footerContacts").prepend(formattedGithub);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").prepend(formattedEmail);
$("#footerContacts").prepend(formattedEmail);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").prepend(formattedMobile);
$("#footerContacts").prepend(formattedMobile);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#header").append(formattedPicture);

var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcome);

if(bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
$("#header").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
$("#header").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
$("#header").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
$("#header").append(formattedSkills);
}

var work = {
	"jobs": [
	{
	"title": "Front End Web Developer",
	"employer": "Tok Digital Agency",
	"datesWorked": "2017 - Present",
	"location": "Tirana, Albania",
	"jobDescription": "Using markup languages like HTML to create user-friendly web pages. Maintaining and improving website. Optimizing applications for maximum speed."
	},
	{
	"title": "AML Analyst",
	"employer": "US Bank",
	"datesWorked": "2016 - 2017",	
	"location": "Chicago, IL",
	"jobDescription": "Ensure compliance with all AML, information security, and suspicious activity reporting requirements, policies, and procedures. Remain current on legal, regulatory AML and OFAC requirements."
	}
  ],
display: function(){
	$("#workExperience").append(HTMLworkStart);
	work.jobs.forEach(workFunction);
  }
};
function workFunction(item,index){
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
	var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[index].datesWorked);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
	var formattedJobDesc = HTMLworkDescription.replace("%data%", work.jobs[index].jobDescription);

	$(".work-entry").append(formattedEmployer,formattedTitle,formattedDatesWorked,formattedLocation,formattedJobDesc);
};
work.display();  

var project = {
	"projects": [
	{
		"title": "My Reads",
		"dates": "2017",
		"description": "Created a React application from scratch and utilize React components to manage the user interface. MyReads is a virtual bookcase to store your books and track what you're reading. Using the provided Books API, searched for books and added them to a bookshelf as a React component. Used React's setState to build the functionality to move books from one shelf to another.", 
		"image": "images/myreads.jpg"
	},
	{
		"title": "Classic Arcade Game",
		"dates": "2017",
		"description": "After being provided visual assets and a game loop engine, used these tools to add a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger.",
		"image" : "images/frooger.png"
	}
  ],
display: function() {
	$("#projects").append(HTMLprojectStart);
	project.projects.forEach(projectFunction);
 }	
};
function projectFunction(item,index){
	var formattedtitle = HTMLprojectTitle.replace("%data%",project.projects[index].title);
	var formatteddates = HTMLprojectDates.replace("%data%",project.projects[index].dates);
	var formatteddescription = HTMLprojectDescription.replace("%data%",project.projects[index].description);
	var formattedimage = HTMLprojectImage.replace("%data%",project.projects[index].image);

	$(".project-entry").append(formattedtitle,formatteddates,formatteddescription,formattedimage);
};
project.display();

var education = {
	"schools": [
	{
	"name": "University of Illinois at Chicago",
	"degree": "Bachelor of Science",
	"dates": "2012 - 2015",
	"location": "Chicago, IL",
	"majors": "Finance"
	}
	],
	"onlineCourses": [
    {
	"title": "Front End Web Developer Nanodegree",
	"school": "Udacity",
	"dates": "2017",
	"url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"	
	},
	{
	"title": "React Nanodegree",
	"school": "Udacity",
	"dates": "2017",
	"url": "https://www.udacity.com/course/react-nanodegree--nd019"	
	}
  ],

display: function(){
	education.schools.forEach(educationSchoolFunction);
	$("#education").append(HTMLonlineClasses);
	education.onlineCourses.forEach(educationOnlineFunction);

  }
};	

function educationSchoolFunction(item,index){
	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[index].name);
	var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[index].majors);
	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(formattedSchoolName + formattedschoolDegree,formattedSchoolDates,formattedSchoolLocation,formattedMajor);
}
function educationOnlineFunction(item,index){	
	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);
	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
	var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
	var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[index].url);
	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(formattedOnlineTitle,formattedOnlineSchool,formattedOnlineDates, formattedOnlineURL);
}
education.display();

function inName (name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});




