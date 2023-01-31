const data = [  "Harry",  "Ross",  "Bruce",  "Cook",  "Carolyn",  "Morgan",  "Albert",  "Walker",  "Randy",  "Reed",  "Larry",  "Barnes",  "Lois",  "Wilson",  "Jesse",  "Campbell",  "Ernest",  "Rogers",  "Theresa",  "Patterson",  "Henry",  "Simmons",  "Michelle",  "Perry",  "Frank",  "Butler",  "Shirley"];

function getData(callback) {
  setTimeout(() => {
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log(data);
}

getData(displayData);

//promise2

function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  }
  
  getData()
    .then(data => console.log(data))
    .catch(error => console.error(error));





    //3
    <script>
    const root = document.getElementById("root");
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          const div = document.createElement("div");
          div.innerHTML = `
            <p>ID: ${item.id}</p>
            <p>Employee Name: ${item.employee_name}</p>
            <p>Employee Salary: ${item.employee_salary}</p>
            <p>Employee Age: ${item.employee_age}</p>
          `;
          root.appendChild(div);
        });
      })
      .catch(error => console.error(error));
  </script>