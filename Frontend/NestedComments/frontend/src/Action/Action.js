const Action = ({ classname, type, handleClick }) => {
  return (
    <div className={classname} onClick={handleClick}>
      {type}
    </div>
  );
};

export default Action;
