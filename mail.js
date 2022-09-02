
const firebaseConfig = {
    apiKey: "AIzaSyAaeUY_iRN1uAf2aSdMb51T5qHU-TV2FQo",
    authDomain: "myfirstproject-30541.firebaseapp.com",
    databaseURL: "https://myfirstproject-30541-default-rtdb.firebaseio.com",
    projectId: "myfirstproject-30541",
    storageBucket: "myfirstproject-30541.appspot.com",
    messagingSenderId: "857899099111",
    appId: "1:857899099111:web:9486285e84347730249342"
  };
// intialize firebase9
firebase.initializeApp(firebaseConfig);

//reference your database
var dataFormDB = firebase.database().ref("form");

document.getElementById('form').addEventListener('submit' , submitForm);

function submitForm(e){
    e.preventDefault();
    var name = getElementVal('name');
    var Mobile = getElementVal('Mobile');
    var Address = getElementVal('Address');
    var pincode = getElementVal('pincode');
    // var Services = getElementVal('services');
    var problem = getElementVal('problem');

    // console.log(Name,Mobile,Address,Pincode,Services,Problem);

  saveData(name, Mobile, Address, pincode,  problem );
}

const saveData = (name, Mobile, Address, pincode, problem )=>{
  var newDataForm = dataFormDB.push();


  newDataForm.set({
    name:name,
    Mobile:Mobile,
    Address:Address,
    pincode:pincode,
    // Services:Services,
    problem:problem
   })
 }

const getElementVal = (id) =>{
    return document.getElementById(id).value;
}
