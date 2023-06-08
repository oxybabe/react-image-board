export default function ImageList({ imageItems }) {
  console.log({ imageItems });
  return (
    <>
      <ul style={{ color: "white" }}>
        {imageItems.map((image, index) => (
          <li key={index} style={{ color: "white" }}>
            <img src={image.url} />
            <p>{image.caption}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
