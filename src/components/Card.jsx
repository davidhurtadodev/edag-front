import Link from "next/link";

export function Card({ squad, url_imagen }) {
  return (
    <>
      {/*       <Link key={squad.id} href={`/RecipeDetail/${squad.id}`}> */}
      <div className='card w-60 m-6 bg-base-100 shadow-xl flex items-center'>
        <figure className='w-50 rounded-full mt-6 '>
          {/*  <img
          src='url_imagen'
          alt=`${squad}`
        /> */}
        </figure>
        <div className='card-body'>
          <h1 className='card-title'>{squad}</h1>
        </div>
      </div>
      {/*       </Link> */}
    </>
  );
}
