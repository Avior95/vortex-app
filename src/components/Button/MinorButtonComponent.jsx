const MinorButtonComponent = ({ text, homePageProductClick }) => {
  return (
    <button
      style={{
        gridColumn: "1 / -1",
        gridRow: "1 / -1",
        marginTop: 200,
        backgroundColor: "rgb(255, 255, 255)",
        letterSpacing: "0.1em",
        padding: "5px 24.5px",
        color: "rgb(38, 38, 38)",
        fontFamily: '"Maison Neue Book", sans-serif',
        fontSize: "12px",
        pointerEvents: "auto",
        borderColor: "rgb(255, 255, 255)",
      }}
      onClick={homePageProductClick}
    >
      {text}
    </button>
  );
};

export default MinorButtonComponent;
