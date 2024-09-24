// Section selection
function buttonFeatureFunctionality(buttonName, sectionId) {
  document.getElementById(buttonName).addEventListener("click", function () {
    // Hiding all section
    document.getElementById("donation").classList.add("hidden");
    document.getElementById("history").classList.add("hidden");
    // Making the selected section active
    document.getElementById(sectionId).classList.remove("hidden");
  });
}

// Button selection
function clickFeatureButton(selectedBtnId, unselectedBtnId) {
  document.getElementById(selectedBtnId).addEventListener("click", function () {
    // removing btn history classes
    document
      .getElementById(selectedBtnId)
      .classList.remove(
        "border",
        "border-neut-30",
        "text-neut-70",
        "bg-transparent"
      );
    // adding btn history classed
    document
      .getElementById(selectedBtnId)
      .classList.add("bg-primary", "text-neut");
    // removing btn donation classes
    document
      .getElementById(unselectedBtnId)
      .classList.remove("bg-primary", "text-neut");
    document
      .getElementById(unselectedBtnId)
      .classList.add(
        "border",
        "border-neut-30",
        "text-neut-70",
        "bg-transparent"
      );
  });
}

// Donated amount in card
function donatedAmountCardById(Id) {
  const donatedAmount = document.getElementById(Id).innerText;
  const donatedAmountToNumber = parseInt(donatedAmount);
  return donatedAmountToNumber;
}

// Number input in card
function donateInputInCardById(Id) {
  const donation = document.getElementById(Id).value;
  const donatedAmountToNumber = parseInt(donation);
  return donatedAmountToNumber;
}

// Get currentBalance
function getCurrentBalance() {
  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceToNumber = parseInt(currentBalance);
  return currentBalanceToNumber;
}

// Transaction card
function transaction(donationInput, donateCardTitle) {
  document.getElementById("history").innerHTML += `
<div class="p-8 border border-neut-10 rounded-2xl">
      <h3 class="text-neut font-bold text-xl mb-4">
        ${donationInput} Taka is Donated for ${donateCardTitle}
      </h3>
      <p class="text-neut-70 font-light text-base p-2 bg-neut-5 rounded">
        Date: ${new Date()}
      </p>
    </div>`;
}

// Modal
function openModal() {
  document.getElementById("modal").classList.remove("hidden");
}
