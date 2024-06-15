import Header from "./Header";

const BaseLayout = ({ children }) => {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col">
        <Header />
        {children}
      </div>
    </>
  );
};

export default BaseLayout;
