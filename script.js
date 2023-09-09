// Sample expenses data
let expenses = [];

function addExpense(event) {
  event.preventDefault();

  const description = document.getElementById("description").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const category = document.getElementById("category").value;

  const newExpense = {
    description,
    amount,
    category,
  };

  expenses.push(newExpense);
  updateExpensesList();
  updateChart();

  document.getElementById("expenseForm").reset();
}

function updateExpensesList() {
  const expensesList = document.getElementById("expensesList");
  expensesList.innerHTML = "";

  for (const expense of expenses) {
    const listItem = document.createElement("li");
    listItem.textContent = `${expense.description} - $${expense.amount} (${expense.category})`;
    expensesList.appendChild(listItem);
  }
}

function updateChart() {
  const chartContainer = document.getElementById("chartContainer");
  chartContainer.innerHTML = "";

  // Implement chart visualization (e.g., using libraries like Chart.js)
}

document.getElementById("expenseForm").addEventListener("submit", addExpense);
