export default function GalleryItem({ size }) {
  const MyEnum = {
    VALUE1: "col-span-2",
    VALUE2: "",
  };

  function getRandomEnumValue(enumObj) {
    const enumValues = Object.values(enumObj);
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    return enumValues[randomIndex];
  }
  const randomEnumValue = getRandomEnumValue(MyEnum);

  return (
    <div className={`${randomEnumValue}`}>
      <div className="text-white bg-slate-700">{size}</div>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/002/204/260/small/four-school-friends-educational-character-free-vector.jpg"
        alt="test"
        className="h-full w-full object-cover rounded-sm active:opacity-70 transition-opacity ease-in-out"
      />
    </div>
  );
}
