import Card from "./Card";

const ListingsPage = () => {
  return (
    <div className="p-6 font-sans text-gray-900 bg-azure">
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
