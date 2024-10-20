function Email(email) {
    if (email.includes('@') && email.split('@')[1].includes('.')) {
        return true;
    }
    return false;
}

console.log(Email("marcio@gmail.com"));  
console.log(Email("email_invalido.com")); 
