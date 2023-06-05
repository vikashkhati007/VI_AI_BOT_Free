const Input = ({ onChange, value, onKeyDown }: any) => {
  return (
    <div>
      <input
        onKeyDown={onKeyDown}
        onChange={onChange}
        value={value}
        placeholder="Enter Your Query?"
        className="w-full outline-none text-black rounded-lg h-10 text-lg p-3 shadow-sm shadow-red-50"
        type="text"
        name="query"
      />
    </div>
  );
};

export default Input;
