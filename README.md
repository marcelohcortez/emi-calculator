# EMI Calculator

App to calculate the Equated Monthly Installment taking into account any down payment done.

*(From Forbes: EMI is a monthly sum of the principal amount plus the interest rate to repay the loan over a period of time.)*

EMI formula: P x R x (1+R)^N / [(1+R)^N-1]

P = Total loan amount minus any down payment

N = Loan tenure in months

R = Interest rate per month

The project also includes a field for 'processing fees' that will calculate the value of the fee using the total loan amount (total loan - down payment)

## How to run the project:
- Clone the repository
- Run:

```bash
npm install
npm run dev
```
*(Project should be loaded in you port 3000 on localhost, check the log to confirm)*