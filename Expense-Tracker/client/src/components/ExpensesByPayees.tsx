
import {Table} from "react-bootstrap"
import IExpenseItem from "../models/expense";

import {getAllPayeeNames, getTotalContributedAmount, getGrandTotalExpenses} from "../services/expense-utils"

type ExpensesByPayeesModel = {

  expenseItems : IExpenseItem[];

}

const ExpensesByPayees = ({expenseItems} : ExpensesByPayeesModel) => {

  return (
    <div>

        <h3>Payee View</h3>

      <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: 'black', color: 'white' }}>Sr.No.</th>
              <th style={{ backgroundColor: 'black', color: 'white' }}>Payee Name</th>
              <th style={{ backgroundColor: 'black', color: 'white' }}>Price</th>
            </tr>
          </thead>
          
          <tbody>
            {
              getAllPayeeNames(expenseItems).map( (payeeName, index) => {

                  return (
                    <tr>
                      <td style={{ padding: '10px', backgroundColor: "lightsteelblue" }}>{(index + 1)}</td>
                      <td style={{ padding: '10px', backgroundColor: "lightsteelblue" }}>{payeeName}</td>
                      <td style={{ padding: '10px', backgroundColor: "lightsteelblue" }}>{getTotalContributedAmount(payeeName, expenseItems)}</td>
                    </tr>
                  )
              })
            }

            <tr>
              <td style={{ padding: '10px', backgroundColor: "steelblue" }}></td>
              <td style={{ padding: '10px', backgroundColor: "steelblue",fontWeight: "bold" }}>Grand Total</td>
              <td style={{ padding: '10px', backgroundColor: "steelblue",fontWeight: "bold" }}>{getGrandTotalExpenses(expenseItems)}</td>
            </tr>
          </tbody>

        </Table>     

    </div>
  )

}

export {ExpensesByPayees}