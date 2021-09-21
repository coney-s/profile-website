let schools = [
    {
        image: "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/341/original/launchcode-20logo.jpeg",
        institution: "LaunchCode",
        location: "St. Louis, MO",
        degree: "LC101 Full Stack Web Development",
        description: "JavaScript and Java",
        date: "2020 - 2020"
    },
    {
        image: "https://cdn.freelogovectors.net/wp-content/uploads/2020/12/east-tennessee-state-university-logo.png",
        institution: "East Tennessee State University",
        location: "Johnson City, TN",
        degree: "Master of Arts - MA, Clinical Psychology",
        description: "Vice President of the Psychology Graduate Student Association. Member of Psi-Chi. Chancellor's List",
        date: "2005 - 2007"
    }
];

let skills = [
    {abilityOne: "Java",
     starsOne: "&starf;&starf;&starf;&star;&star;",
     abilityTwo: "JavaScript",
     starsTwo: "&starf;&starf;&starf;&star;&star;"   
    },
    {
     abilityOne: "HTML/CSS",
     starsOne: "&starf;&starf;&starf;&star;&star;",
     abilityTwo: "Typescript",
     starsTwo: "&starf;&starf;&starf;&star;&star;"
    },
    {
     abilityOne: "SpringBoot",
     starsOne: "&starf;&starf;&starf;&star;&star;",
     abilityTwo: "Hibernate",
     starsTwo: "&starf;&starf;&starf;&star;&star;",
    },
    {
     abilityOne: "Angular",
     starsOne: "&starf;&starf;&starf;&star;&star;",
     abilityTwo: "Bootstrap",
     starsTwo: "&starf;&starf;&starf;&star;&star;",
    },
    {
     abilityOne: "JSON",
     starsOne: "&starf;&starf;&starf;&starf;&star;",
     abilityTwo: "jQuery (Next)",
     starsTwo: "&star;&star;&star;&star;&star;",
    },
    {
     abilityOne: "MySQL",
     starsOne: "&starf;&starf;&star;&star;&star;",
     abilityTwo: "MongoDB (Next)",
     starsTwo: "&star;&star;&star;&star;&star;",
    },
    {
     abilityOne: "GitHub",
     starsOne: "&starf;&starf;&starf;&starf;&star;",
     abilityTwo: "IntelliJ IDEA",
     starsTwo: "&starf;&starf;&starf;&star;&star;",
    },
    {
     abilityOne: "Slack",
     starsOne: "&starf;&starf;&starf;&starf;&starf;",
     abilityTwo: "Trello",
     starsTwo: "&starf;&starf;&starf;&starf;&star;",
    },
    {
     abilityOne: "Leadership",
     starsOne: "&starf;&starf;&starf;&starf;&star;",
     abilityTwo: "Troubleshooting",
     starsTwo: "&starf;&starf;&starf;&starf;&star;",
    },
    {
     abilityOne: "Mentoring",
     starsOne: "&starf;&starf;&starf;&starf;&starf;",
     abilityTwo: "Test-Driven Development",
     starsTwo: "&starf;&starf;&starf;&starf;&star;",
    },
    {
     abilityOne: "Object-Oriented Programming",
     starsOne: "&starf;&starf;&starf;&star;&star;",
     abilityTwo: "MVC",
     starsTwo: "&starf;&starf;&starf;&star;&star;",
    },
    {
     abilityOne: "Written Communication",
     starsOne: "&starf;&starf;&starf;&starf;&starf;",
     abilityTwo: "Oral Communication",
     starsTwo: "&starf;&starf;&starf;&starf;&star;",
    }
]



function navFunction() {
    let links = document.getElementById("myLinks");
    if (links.style.display === "none") {
      links.style.display = "block";
    } else {
      links.style.display = "none";
    }
  }

window.addEventListener("load", function() {
    this.fetch("https://coney-s.github.io/profile-website/jobs.json", {cache: "no-cache"}).then(function(response) {
        response.json().then(function(json) {

            console.log(json);

            for (let i = 0; i < json.length; i++) {
                const div = document.getElementById("careers");

                let jobElement = document.createElement('div');
                jobElement.className = 'job';

                jobElement.innerHTML = `
                    <div class="flex-container">
                        <div class="item item-1">
                            <h3 style="color: #6f4e37;"><strong>${json[i].company}</strong></h3>
                            <p>${json[i].date}</p>
                        </div>
                        <div class="item item-2">
                            <h3 style="color: #6f4e37;"><strong>${json[i].position}</strong></h3>
                            <p>${json[i].description}</p>
                            <p>${json[i].location}</p>
                        </div>
                    </div>  
                    <br>          
                `;

                div.append(jobElement);
            }
        })
    })

    for (let i = 0; i < schools.length; i ++) {
        const eduDiv = document.getElementById("education");

        let eduElement = document.createElement('eduDiv');
        eduElement.className = 'learning';
        console.log(schools[i].image);

        eduElement.innerHTML = `
            <div class="flex-container">
                <div class="item item-1">
                    <img src="${schools[i].image}" alt="A logo" style="width: 100px; height:100px;">
                    
                    <p>${schools[i].location}</p>
                </div>
                <div class="item item-2">
                <h3 style="color: #6f4e37; margin-bottom: 0px"><strong>${schools[i].institution}</strong></h3>
                <p style="margin-top: 5px">${schools[i].degree}</p>
                </div>
            </div>        
        `;

        eduDiv.append(eduElement);
  
    }

    this.fetch("https://coney-s.github.io/profile-website/publications.json", {cache: "no-cache"}).then(function(response) {
        response.json().then(function(json) {

        for (let i = 0; i < json.length; i++){
                
            const pubDiv = document.getElementById("pubs");

            let pubElement = document.createElement("pubDiv");
            pubElement.className = "publication";

            pubElement.innerHTML = `
            <div class="flex-container">
                <div class="item item-1">
                    <img src="${json[i].image}" alt="Book Cover" style="wwidth: 100px;
                    height: 150px; max-width: 25%; min-width: 100px; justify-contents: center";>
                </div>
                <div class="item item-2 pubDetail">
                    <h3 style="color:#6f4e37;">${json[i].title}</h3>
                    <p>In <em>${json[i].publishedIn}</em> edited by ${json[i].editors}. ${json[i].year}. ${json[i].pages}</p>
                    <div id="awards">
                        <p>${json[i].awards}</p>
                    </div>
                </div>    
            `;

            pubDiv.append(pubElement);

            

        }
    })
})

    for (let i = 0; i < skills.length; i++) {
        const skillDiv = document.getElementById("mySkills");

        let skillElement = document.createElement('skillDiv');
        skillElement.className = 'skill';
        

        skillElement.innerHTML = `
            <div class="flex-container">
            <div class="item item-1"">
                <ul style="list-style-type:none;">
                    <li id="aSkill">
                        <span class="skillTitle" style="font-family: 'Roboto'; color:#6f4e37;"><strong>${skills[i].abilityOne}</strong></span>
                        <span class="stars">${skills[i].starsOne}</span>
                    </li>    
                </ul>
            </div>
            <div class="item item-2">
                <ul style="list-style-type:none">
                <li id="anotherSkill">
                    <span class="skillTitle" style="font-family: 'Roboto'; color:#6f4e37;"><strong>${skills[i].abilityTwo}</strong></span>
                    <span class="stars">${skills[i].starsTwo}</span>
                </li>    
                </ul>
            </div>    
            </div>  
            
        `;

        skillDiv.append(skillElement);
        
    }
    
})

            

