const Alert = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => (
  <div
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      padding: "20px",
      zIndex: 1000,
    }}
  >
    <p>{message}</p>
    <button onClick={onClose}>Close</button>
  </div>
);

export default Alert;
