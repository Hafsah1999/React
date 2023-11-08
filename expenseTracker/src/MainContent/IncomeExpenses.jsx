

const IncomeExpenses = () => {
  return (
    <div>
      

        <div className="container mt-2">
          <div className="row">
            <div className="col-md-6">
            <h4>Income</h4>
                <p  className="money-plus text-success">+₹0.00</p>
            </div>

            <div className="col-md-6">
            <h4>Expense</h4>
                <p  className="money-minus text-danger">-₹0.00</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default IncomeExpenses