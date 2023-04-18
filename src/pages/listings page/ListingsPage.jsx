import Card from "./Card";
import "./global.css";

const ListingsPage = () => {
  return (
    <div className="bg-azure text-gray-900 font-sans p-6">
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
