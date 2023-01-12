let funnyPasswordList = [
    'Password',
    '1234567',
    'MonaLisa',
    'HaHaHaHa',
    'Incorrect',
    'MyPassword',
    'HelloWorld',
    'MyLove',
    'BillieEillish'
]

const showPasword = (password) => {
    result.innerHTML = `Your Generated password is <span>${password}</span>`;
}

const randomStringGen = (len, digitBool) => {
    let stringRecipe = 'abcdefghijklmnopqrstuvwxyz';
    let digitRecipe = '0123456789';
    let sTRINGRecipe = stringRecipe.toUpperCase();
    let mixString = stringRecipe + sTRINGRecipe;
    let symbolRecipe = '@$%^&*'
    let targetString = digitBool? mixString + digitRecipe + symbolRecipe: mixString;
    let password = '';
    for(let i=0; i<len; i++) {
        password += targetString.charAt(Math.floor(100*Math.random() % targetString.length))
    }
    return password;
}

funnyPassword.addEventListener('click', (e) => {
    let newPassword = funnyPasswordList[Math.floor(10 * Math.random()) % funnyPasswordList.length];
    showPasword(newPassword);
});

weakPassword.addEventListener('click', (e) => {
    let newPassword = Math.floor(100000000 * Math.random());
    showPasword(newPassword);
});

mediumPassword.addEventListener('click', (e) => {
    let newPassword= randomStringGen(8, false);
    showPasword(newPassword);
});

strongPassword.addEventListener('click', (e) => {
    let newPassword= randomStringGen(16, true);
    showPasword(newPassword);
});



