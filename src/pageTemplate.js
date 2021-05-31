const generatePage = (data) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
        />
        <title>My Team</title>
    </head>
    <body>
        <nav>
            <div class="nav-wrapper black">
                <a href="#" class="brand-logo center">My Team</a>
            </div>
        </nav>
        <div class="container" style="display: flex">
            <div class="row">
                ${data
                  .map((data) => {
                    return `                  
                  <div class="col s12 m6">
                  <div class="card black darken-2">
                    <div class="card-content white-text">
                      <span class="card-title">${data.name}</span>
                      <span class="card-title">
                        <span class="material-icons">
                        ${
                          data.getRole() === "Manager"
                            ? "coffee"
                            : data.getRole() === "Intern"
                            ? "school"
                            : "miscellaneous_services"
                        }  
                        </span>${data.getRole()}</span
                      >
                    </div>
                    <div class="card-content white">
                      <p>ID: ${data.id}</p>
                
                      <p>Email: <a href="mailto:${data.email}">${
                      data.email
                    }</a></p>
                
                      <p>${
                        data.getRole() === "Manager"
                          ? "Office Number: " + data.officeNumber
                          : data.getRole() === "Intern"
                          ? "School: " + data.school
                          : `GitHub: 
                      <a href="https://github.com/${data.github}" target="blank">` +
                            data.github +
                            "</a>"
                      }
                      </p>
                    </div>
                  </div>
                </div>
                `;
                  })
                  .join("")}
                
            </div>
        </div>
    </body>
    </html>
    `;
};

module.exports = generatePage;
