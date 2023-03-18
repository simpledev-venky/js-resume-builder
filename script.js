let resume = document.querySelector(".resume");
let prevBtn = document.querySelector("button");
let inputFields = document.querySelector(".input-fields");
console.log(resume);
console.log(inputFields["fname"].value);
let isinputshown = true;

function toggle() {
  if (isinputshown) {
    isinputshown = false;
    inputFields.style.display = "none";
    let file = inputFields["pic"].files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    resume.innerHTML = `
       <div class="res">
        <div class="header">
            <img src="" id="pic" width="200" height="200" style="border-radius:100px" />
            <h1>${inputFields["fname"].value} ${inputFields["lname"].value}</h1>
        </div>
        <div class="grid">
            <div class="grid1">
                <div class="profile">
                    <h4>PROFILE</h4>
                    <p>
                       ${inputFields["summary"].value}
                    </p>
                </div>
                <div class="contacts">
                    <h4>CONTACTS</h4>
                    <h5>${inputFields["pno"].value}</h5>
                    <p>${inputFields["email"].value}</p>
                    <h5>${inputFields["add"].value}</h5>
                </div>
                <div class="skill">
                    <h4>SKILLS</h4>
                    <li>${inputFields["skill1"].value}-${inputFields["skill-level1"].value}</li>
                    <li>${inputFields["skill2"].value}-${inputFields["skill-level2"].value}</li>
                    
                </div>
            </div>
            <div class="grid2">
                <div class="exp">
                    <h4>WORK EXPERIENCE</h4>
                    <h6>${inputFields["cname"].value}</h6>
                    <h3>${inputFields["position"].value}</h3>
                    <p class = "grey">${inputFields["expyear"].value}</p>
                    <p class="desc">${inputFields["desc"].value}</p>
                </div>
                <div class="edu">
                    <h4>EDUCATIONAL QUALIFICATION</h4>
                    <h3>${inputFields["education"].value}
                    <h3 class="grey">Bachelors:${inputFields["btechper"].value}</h3>
                    
                    <h5 class="grey">${inputFields["btech"].value}</h5>
                    <h3 class="grey">Intermediate:${inputFields["inter"].value}-${inputFields["interper"].value}</h3>
                    <h3 class="grey">school:${inputFields["sch"].value}-${inputFields["schper"].value}
                    

                </div>
            </div>
            <button onclick = "print()" class="down-btn"
            ><i>Download</i></button>
        </div>
        </div>
        
     `;
    reader.onloadend = () => {
      document.getElementById("pic").src = reader.result;
    };
  } else {
    isinputshown = true;
    inputFields.style.display = "block";
    resume.innerHTML = "";
  }
}
