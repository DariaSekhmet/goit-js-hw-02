function formatMessage(message, maxLength) {
  const abbreviatedMessage = message.slice(0, maxLength);
  if (message.length <= maxLength) {
    console.log(message);
  } else {
    console.log(`${abbreviatedMessage}...`);
  }
  return;
}
formatMessage("Curabitur ligula sapien", 16);
formatMessage("Curabitur ligula sapien", 23);
formatMessage("Vestibulum facilisis purus nec", 20);
formatMessage("Vestibulum facilisis purus nec", 30);
formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);
