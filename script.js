document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Expense saved successfully!');
});

document.querySelector('.cancel-btn').addEventListener('click', function() {
    alert('Cancelled');
});
