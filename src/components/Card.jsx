export function Card({ squad, url_imagen }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        {/* <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        /> */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{squad}</h2>
      </div>
    </div>
  );
}
