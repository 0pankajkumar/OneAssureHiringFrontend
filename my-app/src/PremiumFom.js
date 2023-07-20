import "./App.css";
import { useState } from "react";
import makeTable from "./makeTable";

export default function PremiumFom({ cartValue, setCartValue }) {
  const [sumInsured, setSumInsured] = useState(300000);
  const [tierID, setTierID] = useState(1);
  const [tenure, setTenure] = useState(1);
  const [ages, setAges] = useState([0]);
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://oneassure-hiring.onrender.com/rates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          SumInsured: sumInsured,
          TierID: tierID,
          Tenure: tenure,
          Ages: ages,
        }),
      });

      if (res.status === 200) {
        setSumInsured(300000);
        setTierID(1);
        setTenure(1);
        setAges([0]);

        let resJson = await res.json();

        if (res.length === 0) {
          setMessage("Some error in input");
        } else if (resJson.hasOwnProperty("errorMsg")) {
          setMessage(resJson.errorMsg);
        } else {
          setMessage(makeTable(resJson, cartValue, setCartValue));
        }
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  function handleAgeInput(i, e) {
    let newAges = [...ages];
    newAges[newAges.length - 1] = parseInt(e.target.value) || 0;
    setAges(newAges);
  }

  function removeFormFields(i) {
    let newFormValues = [...ages];
    newFormValues.splice(i, 1);
    setAges(newFormValues);
  }

  function addFormFields() {
    setAges([...ages, 0]);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Sum Insured :
          <select
            name="sumInsured"
            defaultValue="300000"
            onChange={(e) => setSumInsured(parseInt(e.target.value))}
          >
            <option value="300000">300000</option>
            <option value="400000">400000</option>
            <option value="500000">500000</option>
          </select>
        </label>
        <br />

        <label>
          City Tier :
          <select
            name="tierID"
            defaultValue="1"
            onChange={(e) => setTierID(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </label>
        <br />

        <label>
          Tenure :
          <select
            name="tenure"
            defaultValue="1"
            onChange={(e) => setTenure(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <br />

        {ages.map((element, index) => (
          <div className="form-inline" key={index}>
            <label>Age</label>

            <input
              type="text"
              name="age"
              value={element >= 0 ? element : ""}
              onChange={(e) => handleAgeInput(index, e)}
            />
            {index ? (
              <button
                type="button"
                className="button remove"
                onClick={() => removeFormFields(index)}
              >
                Remove Member
              </button>
            ) : null}
          </div>
        ))}

        <button className="" type="button" onClick={() => addFormFields()}>
          Add Member
        </button>

        <div className="button-section">
          <br />
          <br />
          <button className="button submit" type="submit">
            Calculate Premium
          </button>
        </div>

        <div className="message">
          {message ? <section>{message}</section> : null}
        </div>
      </form>
    </div>
  );
}
