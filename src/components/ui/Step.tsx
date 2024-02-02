
const Step = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="flex items-center justify-center basis-full">
      {children}
    </div>
  );
};

export default Step;
