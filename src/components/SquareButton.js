const SquareButton = ({ color, children, isdisabled, f }) => {
  const buttonStyle = {
    backgroundColor: isdisabled ? lightenColor(color, 0.5) : color,
    boxShadow: isdisabled ? "none" : "0 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: isdisabled ? "not-allowed" : "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  function lightenColor(col, amt) {
 
  }

  return (
    <button
      className="button"
      style={buttonStyle}
      disabled={isdisabled}
      onClick={() => {
        f();
      }}
    >
      {children}
    </button>
  );
};

export default SquareButton;
