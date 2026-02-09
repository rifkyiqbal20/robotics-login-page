document.addEventListener('DOMContentLoaded', () => {
    const switchBtn = document.getElementById('switchBtn');
    const authTitle = document.getElementById('auth-title');
    const btnText = document.getElementById('btnText');
    const switchText = document.getElementById('switchText');
    const nameField = document.getElementById('name-field');
    
    let isLogin = false;

    // Fungsi Switch Login <-> Register
    switchBtn.addEventListener('click', () => {
        isLogin = !isLogin;
        
        if(isLogin) {
            authTitle.innerText = "Welcome Back!";
            btnText.innerText = "Log In";
            switchText.innerText = "Don't have an account?";
            switchBtn.innerText = "Register";
            nameField.classList.add('hidden');
        } else {
            authTitle.innerText = "Create Account";
            btnText.innerText = "Create Account";
            switchText.innerText = "Already have an account?";
            switchBtn.innerText = "Log in";
            nameField.classList.remove('hidden');
        }
    });

    // Toggle Mata Password
    const toggleEye = document.getElementById('toggleEye');
    const passInput = document.getElementById('passInput');

    toggleEye.addEventListener('click', () => {
        const type = passInput.type === 'password' ? 'text' : 'password';
        passInput.type = type;
        toggleEye.classList.toggle('fa-eye');
        toggleEye.classList.toggle('fa-eye-slash');
    });
});