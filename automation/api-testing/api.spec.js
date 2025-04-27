// @ts-check
import { test, expect } from "@playwright/test";

test("it should be able to test the api for transaction list after successfully logged in", async ({
  page,
  request,
}) => {
  const loginParams = {
    email: "Benny.Johnson@gmail.com",
    password: "DefaultUser@123",
  };
  const loginUrl = "http://localhost:5001/login";
  const loginRequest = await request.post(loginUrl, {
    data: loginParams,
  });
  await expect(loginRequest.status()).toBe(200);
  const responseHeaders = await loginRequest.headers();

  const strArr = responseHeaders["set-cookie"].split(";");
  const objects = strArr.map((str) => {
    const [key, value] = str.split("=").map((s) => s.trim());
    return { [key]: value };
  });
  //once jwt received
  const jwt = objects.filter((item) => Object.keys(item).includes("jwt"))[0]
    .jwt;

  //set the request header
  const headers = {
    "x-auth-token": jwt,
  };
  //make the api call
  const transactionUrl = "http://localhost:5001/transaction-list";
  const response = await request.post(transactionUrl, {
    headers: headers,
  });
  let resp = [
    {
      Id: "TSX001",
      UserName: "Benny",
      TRNSREF: "037123456789",
      Amount: "5000",
      Currency: "AED",
    },
    {
      Id: "TSX002",
      UserName: "Dave",
      TRNSREF: "037127596789",
      Amount: "7000",
      Currency: "AED",
    },
    {
      Id: "TSX003",
      UserName: "Rico",
      TRNSREF: "03712368789",
      Amount: "4100",
      Currency: "AED",
    },
    {
      Id: "TSX004",
      UserName: "Marta",
      TRNSREF: "03712415789",
      Amount: "5200",
      Currency: "AED",
    },
    {
      Id: "TSX005",
      UserName: "Jeremy",
      TRNSREF: "03712526789",
      Amount: "2500",
      Currency: "AED",
    },
    {
      Id: "TSX006",
      UserName: "Mason",
      TRNSREF: "03712258789",
      Amount: "7412",
      Currency: "AED",
    },
    {
      Id: "TSX007",
      UserName: "Rose",
      TRNSREF: "03712201789",
      Amount: "2001",
      Currency: "AED",
    },
    {
      Id: "TSX008",
      UserName: "John",
      TRNSREF: "03856528789",
      Amount: "9512",
      Currency: "AED",
    },
    {
      Id: "TSX009",
      UserName: "William",
      TRNSREF: "03034528789",
      Amount: "7536",
      Currency: "AED",
    },
    {
      Id: "TSX010",
      UserName: "Jack",
      TRNSREF: "03493528789",
      Amount: "4592",
      Currency: "AED",
    },
  ];
  await expect(response.status()).toBe(200);

  //once status 200 received make the assertion
  const responseText = JSON.parse(await response.text());
  await expect(responseText).toEqual(resp);
});
