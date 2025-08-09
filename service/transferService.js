const { transfers } = require('../model/transferModel');
const { users } = require('../model/userModel');

function transferValue({ from, to, amount }) {
  if (!from || !to || typeof amount !== 'number') return { error: 'Missing transfer data.' };
  const sender = users.find(u => u.username === from);
  const recipient = users.find(u => u.username === to);
  if (!sender || !recipient) return { error: 'Sender or recipient not found.' };
  if (!recipient.isFavorecido && amount >= 5000) {
    return { error: 'Transfers above R$ 5.000,00 only allowed to favorecido.' };
  }
  const transfer = { from, to, amount, date: new Date() };
  transfers.push(transfer);
  return { transfer };
}

function getTransfers() {
  return transfers;
}

module.exports = { transferValue, getTransfers };
