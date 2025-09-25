'use strict';

// write code here
function sortBySalary(desc = false) {
  const ul = document.querySelector('ul');

  if (!ul) {
    return;
  }

  const items = Array.from(ul.querySelectorAll('li'));

  const sorted = items.sort((a, b) => {
    const salaryA = parseInt(a.dataset.salary.replace(/[^\d]/g, ''), 10);
    const salaryB = parseInt(b.dataset.salary.replace(/[^\d]/g, ''), 10);

    return desc ? salaryA - salaryB : salaryB - salaryA;
  });

  ul.innerHTML = '';
  sorted.forEach((item) => ul.appendChild(item));
}

sortBySalary();
