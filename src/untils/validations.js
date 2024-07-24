

export const checkValidData = (userName,email,password) =>{
    const isNameValid=/^[a-zA-Z.-]*(?: [a-zA-Z.-]*){0,1}[a-zA-Z.-]{3,}$/.test(userName);
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isNameValid) return "enter full name"
    if(!isEmailValid)return " Invalid Email Address. Please enter a valid email address";
    if(!isPasswordValid)return "Invalid Password. Please ensure your password contains at least 8 characters, one uppercase, lowercase, numbers, and special characters each.";
    return null;
}