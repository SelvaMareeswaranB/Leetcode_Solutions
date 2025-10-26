class Bank {
  constructor(public readonly balance: number[]) {}

  transfer(account1: number, account2: number, money: number): boolean {
    const balance1 = this.balance[account1 - 1];
    const balance2 = this.balance[account2 - 1];
    if (account1 === account2 && balance1 >= money) {
      return true;
    }
    if (balance1 !== undefined && balance2 !== undefined && balance1 >= money) {
      this.balance[account1 - 1] = balance1 - money;
      this.balance[account2 - 1] = balance2 + money;
      return true;
    }
    return false;
  }

  deposit(account: number, money: number): boolean {
    const balance = this.balance[account - 1];
    if (balance !== undefined) {
      this.balance[account - 1] = balance + money;
      return true;
    }
    return false;
  }

  withdraw(account: number, money: number): boolean {
    const balance = this.balance[account - 1];
    if (balance !== undefined && balance >= money) {
      this.balance[account - 1] = balance - money;
      return true;
    }
    return false;
  }
}

