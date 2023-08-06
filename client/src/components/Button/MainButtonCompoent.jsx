const MainButtonComponent = ({ text }) => {
  return (
    <button
      style={{
        margin: "0px 4px 0px auto",
        fontWeight: 400,
        MozBoxFlex: 0,
        flexGrow: 0,
        borderWidth: "0.7px",
        borderColor: "rgb(34, 34, 34)",
        borderStyle: "none",
        borderRadius: "0px",
        padding: "12px 80.5px 11px",
        pointerEvents: "auto",
        fontSize: "14px",
        fontFamily: '"Maison Neue Book", sans-serif',
        color: "rgb(34, 34, 34)",
        letterSpacing: "0.1em",
        width: "auto",
        backgroundColor: "rgb(255, 255, 255)",
        textAlign: "center",
        height: "auto",
        lineHeight: "16.8px",
        boxSizing: "border-box",
        flexShrink: 0,
        position: "relative",
        MozBoxAlign: "stretch",
        alignItems: "stretch",
        flexDirection: "column",
        display: "flex",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default MainButtonComponent;
