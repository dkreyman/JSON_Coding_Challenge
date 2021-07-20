function load() {
  const json =
    '[{"fname":"esme","lname":"sanchez","id":1892038,"isTherapist":true},{"fname":"rick","lname":"jeps","id":1894024,"isTherapist":false},{"fname":"angie","lname":"lange","id":1982403,"isTherapist":false},{"fname":"renat","lname":"gros","id":1894039,"isTherapist":true},{"fname":"bettino","lname":"yang","id":3789204,"isTherapist":true}]';
  const data = JSON.parse(json);
  const ul = document.getElementById("list");
  data.forEach((element) => {
    let li = document.createElement("li");
    let lastName = element.lname[0].toUpperCase() + element.lname.substring(1);
    let firstName = element.fname[0].toUpperCase() + element.fname.substring(1);
    li.appendChild(document.createTextNode(`${lastName}, ${firstName}`));
    li.setAttribute("id", `${element.id}`);
    ul.appendChild(li);
  });
}
