function checkForSpam(message) {
  const formatingMessage = message.toLowerCase();
  const hasSpam = formatingMessage.includes("spam");
  const hasSale = formatingMessage.includes("sale");
  if (hasSpam) {
    console.log(true);
  } else if (hasSale) {
    console.log(true);
  } else {
    console.log(false);
  }
  return;
}
checkForSpam("Latest technology news");
checkForSpam("JavaScript weekly newsletter");
checkForSpam("Get best sale offers now!");
checkForSpam("Amazing SalE, only tonight!");
checkForSpam("Trust me, this is not a spam message");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
checkForSpam("[SPAM] How to earn fast money?");
