const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      checkbox.nextElementSibling.style.textDecoration = 'line-through';
      checkbox.nextElementSibling.style.color = 'gray';
    } else {
      checkbox.nextElementSibling.style.textDecoration = 'none';
      checkbox.nextElementSibling.style.color = '#c3aa1e';
    }

    let allChecked = true;
    checkboxes.forEach(function(box) {
      if (!box.checked) {
        allChecked = false;
      }
    });

    if (allChecked) {
      window.location.href = 'index2.html';
    }
  });
});

