function getHeadings(data) {
  return Object.keys(data[0]).map((key) => {
    return <th key={key}>{key}</th>;
  });
}

function getRows(data) {
  return data.map((obj) => {
    return <tr>{getCells(obj)}</tr>;
  });
}

function getCells(obj) {
  return Object.values(obj).map((value) => {
    return <td>{value}</td>;
  });
}

function getTotalPremium(data) {
  console.log(data);
  console.log(typeof data);
  let ans = data.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue["Discounted Rate"],
    0
  );
  return ans;
}

// Simple component that gets the
// headers and then the rows
export default function makeTable(data) {
  return (
    <>
      <table>
        <tr>{getHeadings(data)}</tr>
        {getRows(data)}
      </table>
      <section>Total premium : {getTotalPremium(data)}</section>
    </>
  );
}
