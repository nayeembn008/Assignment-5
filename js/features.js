buttonFeatureFunctionality("btn-history", "history");
buttonFeatureFunctionality("btn-donation", "donation");
clickFeatureButton("btn-history", "btn-donation");
clickFeatureButton("btn-donation", "btn-history");

// Donate Noakhali
document
  .getElementById("btn-donate-noakhali")
  .addEventListener("click", function () {
    const donateCardTitle = document.getElementById(
      "donate-title-noakhali"
    ).innerText;

    const currentBalance = getCurrentBalance();

    const donatedAmountInCard = donatedAmountCardById("donated-noakhali");

    const donationInput = donateInputInCardById("donation-amount-noakhali");

    // Show an alert if invalid data is found and stop the transaction.
    if (isNaN(donationInput) || donationInput === "" || donationInput < 0) {
      alert("Invalid data is found");
      return;
    }

    if (donationInput > currentBalance) {
      alert("donation amount is greater than the account balance");
      return;
    }
    // The donation input will be deducted from the total account balance, and the updated balance will be shown.
    const newCurrentBalance = currentBalance - donationInput;
    document.getElementById("currentBalance").innerHTML = newCurrentBalance;

    // Current donation amount with increase
    const newDonatedAmountInCard = donatedAmountInCard + donationInput;
    document.getElementById("donated-noakhali").innerText =
      newDonatedAmountInCard;

    //   - A meaningful notification will be added to the History section.
    transaction(donationInput, donateCardTitle);
    document.getElementById("donation-amount-noakhali").value = "";
    openModal();
  });

// Donate Feni
document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function () {
    const donateCardTitle =
      document.getElementById("donate-title-feni").innerText;

    const currentBalance = getCurrentBalance();

    const donatedAmountInCard = donatedAmountCardById("donated-feni");

    const donationInput = donateInputInCardById("donation-amount-feni");

    // Show an alert if invalid data is found and stop the transaction.
    if (isNaN(donationInput) || donationInput === "" || donationInput < 0) {
      alert("Invalid data is found");
      return;
    }

    if (donationInput > currentBalance) {
      alert("donation amount is greater than the account balance");
      return;
    }
    // The donation input will be deducted from the total account balance, and the updated balance will be shown.
    const newCurrentBalance = currentBalance - donationInput;
    document.getElementById("currentBalance").innerHTML = newCurrentBalance;

    // Current donation amount with increase
    const newDonatedAmountInCard = donatedAmountInCard + donationInput;
    document.getElementById("donated-feni").innerText = newDonatedAmountInCard;

    //   - A meaningful notification will be added to the History section.
    transaction(donationInput, donateCardTitle);
    document.getElementById("donation-amount-feni").value = "";
    openModal();
  });

// Donate quota
document
  .getElementById("btn-donate-quota")
  .addEventListener("click", function () {
    const donateCardTitle =
      document.getElementById("donate-title-quota").innerText;

    const currentBalance = getCurrentBalance();

    const donatedAmountInCard = donatedAmountCardById("donated-quota");

    const donationInput = donateInputInCardById("donation-amount-quota");

    // Show an alert if invalid data is found and stop the transaction.
    if (isNaN(donationInput) || donationInput === "" || donationInput < 0) {
      alert("Invalid data is found");
      return;
    }

    if (donationInput > currentBalance) {
      alert("donation amount is greater than the account balance");
      return;
    }
    // The donation input will be deducted from the total account balance, and the updated balance will be shown.
    const newCurrentBalance = currentBalance - donationInput;
    document.getElementById("currentBalance").innerHTML = newCurrentBalance;

    // Current donation amount with increase
    const newDonatedAmountInCard = donatedAmountInCard + donationInput;
    document.getElementById("donated-quota").innerText = newDonatedAmountInCard;

    //   - A meaningful notification will be added to the History section.
    transaction(donationInput, donateCardTitle);
    document.getElementById("donation-amount-quota").value = "";
    openModal();
  });

//   close modal
document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("modal").classList.add("hidden");
});
