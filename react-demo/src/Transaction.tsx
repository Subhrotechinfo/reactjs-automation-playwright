import React from "react";

export const Transaction = () => {
  return (
    <div className="container" style={{ height: "90vh" }}>
      <div className="row">
        <div className="col-xxl-12">
          <div className="card" style={{ width: "80rem" }}>
            <div className="card-body">
              <h5 className="card-title">Account Details</h5>
              <h6
                className="card-subtitle mb-2 text-body-secondary"
                data-testid="accountnumber"
              >
                Account Number
              </h6>
              <p className="card-text">Total Debit</p>
              <p className="card-text">Total Credit</p>
            </div>
          </div>
          <h3 className="m-2" data-testid="lastTransactionHeader">
            Transaction Details
          </h3>
          <table className="table border" data-testid="recent-transaction">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">User Name</th>
                <th scope="col">transaction Reference </th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>037123456789</td>
                <td>5000 AED</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>037127596789</td>
                <td>10000AED</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>John</td>
                <td>03712368789</td>
                <td>9000 AEd</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>John</td>
                <td>03712415789</td>
                <td>8900 AEd</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>John</td>
                <td>03712526789</td>
                <td>6800 AEd</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>John</td>
                <td>03712258789</td>
                <td>5500 AEd</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>John</td>
                <td>03712201789</td>
                <td>1600 AEd</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>John</td>
                <td>03714528789</td>
                <td>2000 AEd</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
