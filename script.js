document.getElementById('expense-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const description = document.getElementById('description').value;
  const value = parseFloat(document.getElementById('value').value);
  const category = document.getElementById('category').value;

  if (!description || !value || !category) return;

  const expenseList = document.getElementById('expense-list');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${description}</td>
    <td class="${value > 100 ? 'high-value' : ''}">R$ ${value.toFixed(2)}</td>
    <td>${category}</td>
    <td><button class="delete-btn">Excluir</button></td>
  `;

  expenseList.appendChild(row);

  updateTotal();

  row.querySelector('.delete-btn').addEventListener('click', function () {
    row.remove();
    updateTotal();
  });

  this.reset();
});

function updateTotal() {
  const rows = document.querySelectorAll('#expense-list tr');
  let total = 0;

  rows.forEach(row => {
    const value = parseFloat(row.children[1].textContent.replace('R$', '').trim());
    total += value;
  });

  document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;
}