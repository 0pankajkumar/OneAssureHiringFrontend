export default function Checkout({ cartValue }) {
  return (
    <>
      <h1>Checkout page</h1>
      <section style={{ marginBottom: "30px" }}>
        Please pay using credit, debit card
      </section>

      <form action="/">
        <input type="submit" value="Start again" />
      </form>
    </>
  );
}
