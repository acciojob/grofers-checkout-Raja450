const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  // Select all elements with class "prices"
  const priceElements = document.querySelectorAll(".prices");
  let total = 0;

  // Loop through price elements and sum their values
  priceElements.forEach((element) => {
    total += parseFloat(element.textContent); // Convert to float for accurate sum
  });

  // Create a new row for the total
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2"); // Span the entire width of the table
  totalCell.textContent = "Total Price: Rs " + total.toFixed(2); // Display the total price
  newRow.appendChild(totalCell);

  // Append the new row to the table
  const table = document.querySelector("table");
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);