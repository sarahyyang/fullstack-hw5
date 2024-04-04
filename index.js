fetch("https://randomuser.me/api/?results=5")
  .then((data) => {
    return data.json();
  })
  .then((objData) => {
    let results = objData.results
    let table = "";
    results.map((value) => {
        table += `
        <tr>
            <td>${value.name.first}</td>
            <td>${value.location.city}</td>
        </tr>`;
    }) 
    document.getElementById("tableBody").innerHTML = table;
  });
