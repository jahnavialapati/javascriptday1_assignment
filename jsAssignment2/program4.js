class BankAccount
{
   constructor(accountNumber,accountHolderName,accountBalance)
   {
      this.accountNumber=accountNumber;
      this.accountHolderName=accountHolderName;
      this.accountBalance=accountBalance;
      this.print=function(){
          console.log(this.accountNumber,this.accountHolderName,this.accountBalance);
      }
   }
   deposit(amount)
   {
    this.accountBalance+=amount;
   }
}
class Savings extends BankAccount
{
   constructor(accountNumber,accountHolderName,accountBalance,isSalary)
   {
       super(accountNumber,accountHolderName,accountBalance);
       this.isSalary=isSalary;
       this.print=function(){
        console.log(this.accountNumber,this.accountHolderName,this.accountBalance,this.isSalary);
    }
   }
   withdraw(amount)
   {
       if(this.accountBalance<parseInt(amount))
           console.log("Insufficient amount to withdraw");
       else
       {
            this.accountBalance-=amount;
       } 
   }
   getaccountBalance()
   {
       console.log(this.accountBalance);
   }
}
class Current extends BankAccount
{
    constructor(accountNumber,accountHolderName,accountBalance,odLimit)
    {
        super(accountNumber,accountHolderName,accountBalance);
        this.odLimit=odLimit;
        this.print=function(){
            console.log(this.accountNumber,this.accountHolderName,this.accountBalance,this.odLimit);
        }
        
    }
    withdraw(amount)
    {
      if(this.accountBalance+this.odlimit<parseInt(amount))
          console.log("cannot withdraw");
      else
      {
          this.accountBalance-=amount;
      } 
    }
    getaccountBalance()
    {
        console.log(this.accountBalance);
    }
}

var savings=new Savings("23456789","amitabh bachchan",100000,true);
var current=new Current("87654321","abhishek bachchan",50000,200000);
savings.withdraw(1000);
savings.getaccountBalance();
current.deposit(2000);
current.getaccountBalance();
