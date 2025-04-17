import React from "react";

export const Transaction = () => {
  return (
    <div className="container" style={{ height: "90vh" }}>
      <div className="row m-2">
        <div className="col-xxl-12">
          <div className="card" style={{ width: "80rem" }}>
            <div className="card-body">
              <h5 className="card-title">Transaction Details</h5>
              <h6
                className="card-subtitle mb-2 text-body-secondary"
                data-testid="accountnumber"
              >
                Account Number
              </h6>
              <div className="row">
                <div className="col-lg-10">
                  <p className="card-text">Total Debit</p>
                  <p className="card-text">Total Credit</p>
                </div>
                <div className="col-lg-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-testid="button-modal"
                  >
                    Click Me
                  </button>
                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    // tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Automation
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          The modal has been successfully launched
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            data-testid="modal-close-button"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="m-2" data-testid="lastTransactionHeader">
            Transaction Details
          </h3>
          <table
            id="transaction-data"
            className="table border"
            data-testid="recent-transaction"
          >
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
                <td>Mason</td>
                <td>03712258789</td>
                <td>5500 AEd</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Rose</td>
                <td>03712201789</td>
                <td>1600 AEd</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>John</td>
                <td>03856528789</td>
                <td>2000 AEd</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>William</td>
                <td>03034528789</td>
                <td>5200 AEd</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Jack</td>
                <td>03493528789</td>
                <td>4900 AEd</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
