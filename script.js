const methods = document.querySelectorAll('#methods img');
let selected = null;

methods.forEach(img => {
  img.addEventListener('click', () => {
    methods.forEach(i => i.classList.remove('selected'));
    img.classList.add('selected');
    selected = img.dataset.method;
  });
});

document.getElementById('payBtn').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const number = document.getElementById('number').value.trim();
  const expiry = document.getElementById('expiry').value.trim();
  const cvv = document.getElementById('cvv').value.trim();
  const amount = document.getElementById('amount').value.trim();
  const result = document.getElementById('result');

  if (!selected || !name || !number || !expiry || !cvv || !amount) {
    result.style.color = 'red';
    result.textContent = 'Error: please fill all fields and select a payment method.';
    return;
  }

  const success = Math.random() > 0.2;
  if (success) {
    result.style.color = 'green';
    result.textContent = `✔ Payment of $${parseFloat(amount).toFixed(2)} with ${selected} was successful.`;
  } else {
    result.style.color = 'red';
    result.textContent = '✘ Payment failed. Please try again.';
  }
});
