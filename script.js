// let json = require('jobs.json');

let jobs = [
    {company: "Paraquad", 
     date: "July 2021 - present",
     position: "Part-time - LaunchCode Computer Tutor",
     description: "As the computer tutor for Paraquad's LaunchCode students, I collaborate with both Paraquad and LaunchCode to support our students in their dreams of becoming employed in the technology field. I teach the studio portion of class, breaking down and explaining difficult concepts. I focus on problem-solving strategies, and goal setting to help our students succeed in their chosen field. I also maintain a high degree of classroom management and case management to ensure student progress, and collaborate to connect students with additional supports and services as needed.",
     location: "St. Louis, MO"   
    },
    {
        company: "LaunchCode",
        date: "December 2020 - July 2021",
        position: "Part-time - Tech Leadership Fellow",
        description: "As a TA for LaunchCode's LC101 course, I was responsible for creating a safe, open space for learning as well as organizing and leading studio groups in community building. I assisted students with learning problem solving and language. I also had to break down and explain technical concepts to students with varying levels of experience. It was my responsibility to grade students assignments, target problem areas, and help students who were struggling.",
        location: "St. Louis, MO"
    },
    {
        company: "Storyville",
        date: "January 2020 - present",
        position: "Part-time - Web Designer and Social Media Manager",
        description: "As the web designer for Storyville, I was responsible not only for designing the website, but designing and troubleshooting the set up of the store and payment systems to allow for different payment plans. I also implement and maintain discounts targeted to diverse groups, write and edit copy for the website, Proofread product for spelling, grammatical errors, clarity, and brevity. I design graphics, curate and schedule content for social media.",
        location: "Chicago, IL - Remote"
    },
    {
        company: "Books-A-Million",
        date: "August 2014 - August 2015",
        position: "Customer Service Specialist",
        description: "I was promoted from bookseller to Customer Service Specialist at six months, the earliest possible date after hire. I was also named one of the top sales people in the region.",
        location: "Johnson City, TN"
    }   
];

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

window.addEventListener("load", function() {
    // this.fetch("personal-website/jobs.json").then(function(response) {
    //     response.json().then(function(json) {

    //         console.log(json);

            for (let i = 0; i < jobs.length; i++) {
                const div = document.getElementById("careers");

                let jobElement = document.createElement('div');
                jobElement.className = 'job';

                jobElement.innerHTML = `
                    <div class="flex-container">
                        <div class="item item-1">
                            <h3 style="color: #6f4e37;"><strong>${jobs[i].company}</strong></h3>
                            <p>${jobs[i].date}</p>
                        </div>
                        <div class="item item-2">
                            <h3 style="color: #6f4e37;"><strong>${jobs[i].position}</strong></h3>
                            <p>${jobs[i].description}</p>
                            <p>${jobs[i].location}</p>
                        </div>
                    </div>  
                    <br>          
                `;

                div.append(jobElement);
            }

            for (let i = 0; i < jobs.length; i ++) {
                const eduDiv = document.getElementById("education");

                let eduElement = document.createElement('eduDiv');
                eduElement.className = 'learning';
                console.log(schools[i].image);

                eduElement.innerHTML = `
                    <div class="flex-container">
                        <div class="item item-1>
                            <img src="${schools[i].image}" alt="A logo" style="width: 100px; height:100 px;">
                            <h3 style="color: #6f4e37;"><strong>${schools[i].institution}</strong></h3>
                            <p>${schools[i].location}</p>
                        </div>
                        <div class="item item-2>
                            <h3 style="color: #6f4e37;"><strong>${schools[i].degree}</strong></h3>
                            <p>${schools[i].description}</p>
                        </div>
                    </div>        
                `;

                eduDiv.append(eduElement);
            }
        })
//     })
// })
