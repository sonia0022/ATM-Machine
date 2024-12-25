var pass = 1234;
var balance = 10000; // Initial balance
var authenticated = false;

function enter() {
    var userPass = parseInt(document.getElementById('input').value);

    if (isNaN(userPass)) {
        document.getElementById('display').innerText = 'Please enter a valid PIN';
    } else if (userPass === pass) {
        document.getElementById('display').innerText = 'Your PIN is correct!';
        authenticated = true;
    } else {
        document.getElementById('display').innerText = 'Your PIN is incorrect!';
    }
}

function withdraw() {
    if (authenticated) {
        document.getElementById('withdraw-amount').style.display = 'block';
        document.getElementById('display').innerText = 'Enter withdrawal amount';
    } else {
        document.getElementById('display').innerText = 'Please enter your PIN first';
    }
}

function confirmWithdrawal() {
    var amount = parseInt(document.getElementById('withdraw-input').value);

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('display').innerText = 'Invalid amount';
    } else if (amount > balance) {
        document.getElementById('display').innerText = 'Insufficient balance';
    } else {
        balance -= amount;
        document.getElementById('display').innerText = `Withdrawal successful. New balance: ` + balance;
        document.getElementById('withdraw-amount').style.display = 'none';
    }
}

function cancelWithdrawal() {
    document.getElementById('withdraw-amount').style.display = 'none';
}


function balanceInquiry() {
    if (authenticated) {
        document.getElementById('display').innerText = `Your balance: ` + balance;
    } else {
        document.getElementById('display').innerText = 'Please enter your PIN first';
    }
}

function deposit() {
    if (authenticated) {
        document.getElementById('deposite-amount').style.display = 'block';
        document.getElementById('display').innerText = 'Enter deposite amount';
    } else {
        document.getElementById('display').innerText = 'Please enter your PIN first';
    }
}

function confirmDeposite() {
    var amount = parseInt(document.getElementById('deposite-input').value);
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('display').innerText = 'Invalid amount';
    }else{       
    balance += amount;
    document.getElementById('display').innerText = `Add new balance: ` + balance;
    document.getElementById('deposite-amount').style.display = 'none';
    }

}

function cancelDeposite() {
    document.getElementById('deposite-amount').style.display = 'none';
}
