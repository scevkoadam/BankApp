var accBtn = document.querySelector("#accBtn");
var addAccBtn = document.querySelector('#addAccBtn');
var editDelBtn = document.querySelector('#editDelBtn');
var mainView = document.querySelector('#mainView');
var mainBody = document.querySelector('#mainBody');
var formView = document.querySelector('#formView');
var saveBtn = document.querySelector('#saveBtn');
var accId = document.querySelector('#accId');
var accName = document.querySelector('#accName');
var accDep = document.querySelector('#accDep');
var accCard = document.querySelector('#accCard');
var editView = document.querySelector('#editView');
var editBody = document.querySelector('#editBody');
var editFormView = document.querySelector('#editFormView');
var eaccId = document.querySelector('#eaccId');
var eaccName = document.querySelector('#eaccName');
var eaccDep = document.querySelector('#eaccDep');
var eaccCard = document.querySelector('#eaccCard');
var editBtn = document.querySelector('#editBtn');
var id;

var db = [
  {
    id: "1",
    name: "Marko",
    deposit: 12000,
    card: "Visa"
  },
  {
    id: "2",
    name: "Maria",
    deposit: 20000,
    card: "Master"
  }
];

addAccBtn.addEventListener('click',showForm);
accBtn.addEventListener('click',showMainView);
saveBtn.addEventListener('click', saveAccount);
editDelBtn.addEventListener('click', showEditView);
editBtn.addEventListener('click',changeAccount);

createTable();

function createTable() {
  var text = '';
  for (var i = 0; i < db.length; i++) {
    text += '<tr>';
    text += '<td>'+db[i].id+'</td>';
    text += '<td>'+db[i].name+'</td>';
    text += '<td>'+db[i].deposit+'</td>';
    text += '<td>'+db[i].card+'</td>';
    text += '</tr>';
  }
  mainBody.innerHTML = text;
}

function createEditTable() {
  var text = '';
  for (var i = 0; i < db.length; i++) {
    text += '<tr>';
    text += '<td>'+db[i].id+'</td>';
    text += '<td>'+db[i].name+'</td>';
    text += '<td>'+db[i].deposit+'</td>';
    text += '<td>'+db[i].card+'</td>';
    text += '<td><button data-id="'+i+'" class="btn btn-warning edit">Edit</button></td>';
    text += '<td><button id="'+i+'" class="btn btn-danger delete">Delete</button></td>';
    text += '</tr>';
  }
  editBody.innerHTML = text;

  var deleteBtns = document.querySelectorAll('.delete');
  for (var i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', deleteAccount);
  }

  var editBtns = document.querySelectorAll('.edit');
  for (var i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener('click', editAccount)
  }
}

function changeAccount() {
  var accId = eaccId.value;
  var accName = eaccName.value;
  var accDep = eaccDep.value;
  var accCard = eaccCard.value;

  db [id] = {
    id: accId,
    name: accName,
    deposit: accDep,
    card: accCard
  };
  createTable();
  showMainView();
}

function editAccount() {
  mainView.style.display = "none";
  formView.style.display = "none";
  editView.style.display = "none";
  editFormView.style.display = "block";

  id = this.getAttribute('data-id');
  eaccId.value = db[id].id;
  eaccName.value = db[id].name;
  eaccDep.value = db[id].deposit;
  eaccCard.value = db[id].card;
}

function deleteAccount() {
  var id = this.id;
  db.splice(id,1);
  createTable();
  showMainView();
}

function showEditView() {
  createEditTable();
  mainView.style.display = "none";
  formView.style.display = "none";
  editFormView.style.display = "none";
  editView.style.display = "block";
}

function showForm() {
  formView.style.display = "block";
  mainView.style.display = "none";
  editView.style.display = "none";
  editFormView.style.display = "none";
}

function showMainView() {
  mainView.style.display = "block";
  formView.style.display = "none";
  editView.style.display = "none";
  editFormView.style.display = "none";
}

function saveAccount() {
  var id = accId.value;
  var name = accName.value;
  var deposit = accDep.value;
  var card = accCard.value;

  var newAcc = {
    id: id,
    name: name,
    deposit: deposit,
    card: card,
  };

  db.push(newAcc);
  createTable();
  showMainView();
}
