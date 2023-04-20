import Card from "./Card";
// import CardReview from "./CardReview";

const ListingsPage = () => {
  return (
    <div className="p-6 font-sans text-gray-900 bg-azure">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <Card />
          <Card />
          <Card />
          <Card />
          {/* <CardReview />
          <CardReview />
          <CardReview />
          <CardReview />
          <CardReview /> */}
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;
