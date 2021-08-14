// Handle Js Deposit Button
document.getElementById('deposit').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-money');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    const depositTotal = document.getElementById('deposit-total');
    const currentDepositText = depositTotal.innerText;
    const currentDeposit = parseFloat(currentDepositText);
    const newDeposit = depositAmount + currentDeposit;
    // console.log(currentDeposit, newDeposit);
    depositTotal.innerText = newDeposit;
    depositInput.value = '';
    // update balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const newBalance = previousBalance + depositAmount;
    balanceTotal.innerText = newBalance;
});


// Handle Withdraw js
document.getElementById('withdraw').addEventListener('click', function () {
    // get the previous withdraw amount
    const withdrawInput = document.getElementById('withdraw-money');
    const withdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawText);
    // get the new withdraw amount
    const withdraw = document.getElementById('total-withdraw');
    const previousWithdrawText = withdraw.innerText;
    const previousWithdraw = parseFloat(previousWithdrawText);
    const totalWithdraw = previousWithdraw + newWithdrawAmount;
    withdraw.innerText = totalWithdraw;
    // Update the balance for withdraw
    const withdrawTotal = document.getElementById('balance-total');
    const beforeWithdrawText = withdrawTotal.innerText;
    const beforeWithdraw = parseFloat(beforeWithdrawText);
    const totalWithdrawBalance = beforeWithdraw - newWithdrawAmount;
    withdrawTotal.innerText = totalWithdrawBalance;
});