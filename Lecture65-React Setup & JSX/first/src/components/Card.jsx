import "../css/card.css";

function Card(props) {
  const obj = props.obj;
  console.log(obj);

  return (
    <div className="flex flex-wrap gap-4 p-4 shadow-xl">
      {obj.map((person, idx) => {
        return (
          <div
            className="w-[190px] rounded-2xl px-4 py-3 bg-gradient-to-br from-gray-600 to-gray-700 shadow-xl hover:scale-105 transition-transform"
            key={idx}
          >
            <div className="text-sm uppercase tracking-wide text-gray-300">
              Person
            </div>
            <h3 className="mt-2 text-lg font-semibold capitalize text-gray-300">
              {person.name}
            </h3>
            <h3 className="mt-1 text-sm text-gray-300 ">Age:{person.age}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
