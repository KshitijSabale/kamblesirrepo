const {
    ipcRenderer
} = require('electron');
const path = require('path');



document.getElementById("submit").addEventListener('click', (event) => {
    event.preventDefault();
    console.log('button clicked')
    let mess = "";
    mess = document.getElementById("message").value;
    console.log(mess);
    ipcRenderer.send("runpyfile", ['./py/prime.py',mess]);
    ipcRenderer.on('getAns',(event,args)=>{
        console.log(args);
        console.log(typeof(args));
        document.getElementById("para").innerText = args;
    });
    // u = document.getElementById("username").value
    // p = document.getElementById("password").value
    // console.warn(`login-${u}`);
    // console.warn(`login-${p}`);
    // if (u !== "" && p !== "") {
    //     ipcRenderer.send("setValue", ["username", u]);
    //     ipcRenderer.send("setValue", ["password", p]);
    //     document.getElementById("submit").disabled = true;
    //     console.log('form submitted');
    // }
});