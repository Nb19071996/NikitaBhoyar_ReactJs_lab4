
import IExpenseItem from "../models/expense";
import {getGrandTotalExpenses, getTotalContributedAmount, getAllPayeeNames} from "../services/expense-utils";

import {Table} from "react-bootstrap"

type PendingExpensesByPayeesModel = {

  expenseItems : IExpenseItem[];
}

const PendingExpensesByPayees = ({expenseItems} : PendingExpensesByPayeesModel) => {

  const getPendingAmount = (payeeName : string) => {

    const grandTotal = getGrandTotalExpenses(expenseItems);

    const splitUpAmount = grandTotal / 2;

    const totalContributionByPayee = getTotalContributedAmount(payeeName, expenseItems);

    if (totalContributionByPayee >= splitUpAmount){

      return 0;
    }else{
      return (splitUpAmount - totalContributionByPayee);
    }

  }

  return (
    <div>

        <h3>Pending Amount - View</h3>

    <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: 'black', color: 'white' }}>Sr.No.</th>
              <th style={{ backgroundColor: 'black', color: 'white' }}>Payee Name</th>
              <th style={{ backgroundColor: 'black', color: 'white' }}>Pending Amount</th>
            </tr>
          </thead>
          
          <tbody>
            {
              getAllPayeeNames(expenseItems).map( (payeeName, index) => {

                  return (
                    <tr>
                      <td style={{ padding: '10px', backgroundColor: "lightseagreen" }}>{(index + 1)}</td>
                      <td style={{ padding: '10px', backgroundColor: "lightseagreen" }}>{payeeName}</td>
                      <td style={{ padding: '10px', backgroundColor: "lightseagreen" }}>{getPendingAmount(payeeName)}</td>
                    </tr>
                  )
              })
            }

          </tbody>

        </Table>   
    </div>
  )
}

export {PendingExpensesByPayees}