import "./App.css";
import PremiumFom from "./PremiumFom";
import CartValueDisplay from "./CartValueDisplay";

function Premium({ cartValue, setCartValue }) {
  return (
    <>
      <section className="AppCartValue">
        <CartValueDisplay cartValue={cartValue} />
      </section>

      <section className="AppCartValue">
        <form action="/checkout">
          <input type="submit" value="Check out" />
        </form>
      </section>

      <div className="AppForm">
        <PremiumFom cartValue={cartValue} setCartValue={setCartValue} />
      </div>
    </>
  );
}

export default Premium;
