import Card from "./Card";

const ListingsPage = () => {
  return (
    <div className="p-6 font-sans text-gray-900 bg-azure">
      <div className="max-w-4xl mx-auto mt-8 px-8 pt-16 flex flex-col items-center">
        <h1 className="text-4xl text-primary-green text-center mb-6">
          Movers Companies Based in Nairobi
        </h1>
        <p className="text-center text-gray-600 leading-[30px] text-md">
          At Movers we pride in offering the best moving solutions based on your
          needs and location. We have partnered with some of the best movers,
          with very high ratings in Nairobi. To get you started choose from the
          list below and click book now button.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;
