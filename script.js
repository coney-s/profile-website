

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

function navFunction() {
    let links = document.getElementById("myLinks");
    if (links.style.display === "none") {
      links.style.display = "block";
    } else {
      links.style.display = "none";
    }
  }

window.addEventListener("load", function() {
    this.fetch("https://coney-s.github.io/profile-website/jobs.json").then(function(response) {
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

        this.fetch("https://coney-s.github.io/profile-website/publications.json").then(function(response) {
        response.json().then(function(json) {

            console.log(json);

            for (let i = 0; i < json.length; i++){
                let award = document.getElementById("awards");

                if (json[i].awards !== "") {
                    award.style.display = "block";
                } else {
                    award.style.display = "none !important";
                }
                const pubDiv = document.getElementById("pubs");

                let pubElement = document.createElement("pubDiv");
                pubElement.className = "publication";

                pubElement.innerHTML = `
                <div class="flex-container">
                    <div class="item item-1">
                        <img src="${json[i].image}" alt="Book Cover" style="wwidth: 100px;
                        height: 150px;">
                    </div>
                    <div class="item item-2">
                        <h3>${json[i].title}</h3>
                        <p>In ${json[i].publishedIn} edited by ${json[i].editors}. ${json[i].year}. ${json[i].pages}</p>
                        <div id="awards">
                            <p>${json[i].awards}</p>
                        </div>
                    </div>    
                `;

                pubDiv.append(pubElement);

            }
        })  
    })

    
}})
