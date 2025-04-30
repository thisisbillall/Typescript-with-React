import "./styles.css";
import Counter from "../components/Counter";

export default function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        alignItems: "center",
        height: "100vh",
        gap: "1rem",
      }}
    >
      <Counter initialValue={0} steps={2} />
    </div>
  );
}
