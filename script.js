// Initializing global variables for storing totals and transaction history
let totalIncome = 0;
let totalExpense = 0;
let netBalance = 0;

// Event listener for form submission
document.getElementById('transactionForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission from refreshing the page

    // Getting input values from the form
    const accountNumber = document.getElementById('description').value;
    const pinNumber = document.getElementById('amount').value; // Pin number is stored here (can be used for verification)
    const amount = parseFloat(document.getElementById('amount').value);
    const transactionType = document.getElementById('type').value;

    // Basic validation for required fields
    if (!accountNumber || !pinNumber || !amount) {
        alert("Please fill in all fields.");
        return;
    }

    // Handling the transaction based on type
    if (transactionType === 'income') {
        totalIncome += amount; // Increase total income
    } else if (transactionType === 'expense') {
        totalExpense += amount; // Increase total expense
    }

    // Updating the net balance
    netBalance = totalIncome - totalExpense;

    // Adding the transaction to the transaction history
    const transactionList = document.getElementById('transactionList');
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.innerText = `${transactionType === 'income' ? 'Deposit' : 'Withdrawal'} - Account: ${accountNumber}, Amount: $${amount.toFixed(2)}`;
    transactionList.appendChild(listItem);

    // Updating the UI with the new totals
    document.getElementById('totalIncome').innerText = `$${totalIncome.toFixed(2)}`;
    document.getElementById('totalExpense').innerText = `$${totalExpense.toFixed(2)}`;
    document.getElementById('netBalance').innerText = `$${netBalance.toFixed(2)}`;

    // Resetting the form after submission
    document.getElementById('transactionForm').reset();
});
