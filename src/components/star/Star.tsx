
const Star = ({ filled }: { filled: boolean }) => {
  return (
    <span style={{ color: filled ? '#f8d64e' : '#e0e0e0' }}>
      {filled ? "★" : "☆"}
    </span>
  );
};

export default Star;
