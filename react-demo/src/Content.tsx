const Content = () => {
  return (
    <>
      <div className="container" style={{ height: "90vh" }}>
        <div className="row m-2">
          <div className="col-xxl-12">
            <div className="card" style={{ width: "80rem" }}>
              <div className="card-body">
                <h5 className="card-title" data-testid="account-header">
                  Account Details
                </h5>
                <h6
                  className="card-subtitle mb-2 text-body-secondary"
                  data-testid="account-number"
                  title="account-number"
                >
                  Account Number 65535132688
                </h6>
                <p className="card-text" data-testid="totaldebit">
                  Total Debit 20,365
                </p>
                <p className="card-text" data-testid="totalcredit">
                  Total Credit 23,526
                </p>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p data-testid="lastTransactionHeader">Last Transaction</p>
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
              </tbody>
            </table>
          </div>
          <div className="col-xxl-12">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
