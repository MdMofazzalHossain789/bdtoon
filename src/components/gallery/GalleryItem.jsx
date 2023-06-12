export default function GalleryItem({ imageUrl, alt }) {
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
      <img
        src={imageUrl}
        alt={alt}
        className="h-full w-full object-cover rounded-sm active:opacity-70 transition-opacity ease-in-out"
      />
    </div>
  );
}
