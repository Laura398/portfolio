import "./Background.scss";

export default function Background() {
  const count = 50;
  const array = Array.from({ length: count });
  return (
    <div style={{zIndex: "1"}}>
        {array.map((_, index) => {
            return <div key={index} className="bubble"></div>;
        })}
    </div>
  )
}
