document.getElementById('fileUpload').addEventListener('change', function(event) {
    const files = event.target.files;
    if (files.length > 5) {
        alert("You can upload a maximum of 5 files.");
        event.target.value = ''; // Clear file input
    }
});

document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can handle the form submission logic
    const formData = new FormData(event.target);
    console.log('Form data submitted:', Object.fromEntries(formData.entries()));

    alert('Expense saved successfully!');
});

document.getElementById('cancelButton').addEventListener('click', function() {
    if (confirm("Are you sure you want to cancel?")) {
        document.getElementById('expenseForm').reset();
    }
});
