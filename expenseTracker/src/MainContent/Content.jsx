import AddTransaction from "./AddTransaction"
import Balance from "./Balance"
import Button from "./Button"
import Header from "./Header"
import IncomeExpenses from "./IncomeExpenses"
import TransactionList from "./TransactionList"



const Content = () => {
  return (
<>
<div className="bg-dark">

<div className="container  d-flex  align-items-center justify-content-center " style={{ height: "100vh" }}>
<div className="card p-5 bg-transparent ">
  <Header />
  <Balance />
  <IncomeExpenses />
  <TransactionList />
  <AddTransaction />
  <Button />
  </div>
</div>
</div>
</>
  )
}

export default Content