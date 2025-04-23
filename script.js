document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box');
  const addToCartButton = document.querySelector('.add-to-cart');

  boxes.forEach(box => {
    box.addEventListener('click', () => {
      
      boxes.forEach(otherBox => {
        if (otherBox !== box) {
          otherBox.classList.remove('expanded');
        }
      });
      
      box.classList.toggle('expanded');
    });

    
    const content = box.querySelector('.box-content');
    if (content) {
      content.addEventListener('click', e => e.stopPropagation());
    }
  });

  
  addToCartButton.addEventListener('click', () => {
    let alertMessage = "Product added successfully!\n\n";

    boxes.forEach((box, index) => {
      const unit = box.querySelector('.unit').textContent;
      const options = box.querySelectorAll('.option');
      
      alertMessage += `${unit}:\n`;
      options.forEach((option, optIndex) => {
        const size = option.querySelector('select[name="size"]').value;
        const color = option.querySelector('select[name="color"]').value;
        alertMessage += `  #${optIndex + 1}: Size - ${size}, Color - ${color}\n`;
      });
    });

    alertMessage += "\nTotal: $24.00 USD";
    alert(alertMessage);
  });
});