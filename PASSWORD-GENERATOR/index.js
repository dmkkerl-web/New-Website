function generatePassword(length,uppercase,lowercase,numbers,specialchars){
    let allowedchars="";
    let password="";

    const Lowercase="abcdefghijklmnopqrstuvwxyz";
    const Uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Numbers ="0123456789";
    const Specialchars="@#$%^&*()+=-_[]";

    allowedchars += uppercase ? Uppercase :"";
    allowedchars +=lowercase ? Lowercase : "";
    allowedchars +=numbers ? Numbers : "";
    allowedchars +=specialchars ? Specialchars : "";

    if(PasswordLength<=0){
        return 'The password cant be zero';
    }
    for(let i=0; i<length; i++){
        let index= Math.floor(Math.random()*allowedchars.length);

        password += allowedchars[index] + ' ';
        
    }
    return password;
}
    



const PasswordLength=8;
const includeUppercase=true;
const includelowercase=true;
const includeSpecialchars=false;
const includeNumbers=true;


let display=document.getElementById("password");
let generatebtn=document.getElementById("generatebtn");
generatebtn.onclick =function(){
    let Password=generatePassword(PasswordLength,includeUppercase,includelowercase,includeNumbers,includeSpecialchars);
    display.textContent=`${Password}`;
}

