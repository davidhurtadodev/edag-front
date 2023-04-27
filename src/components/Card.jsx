import Link from 'next/link';
import Image from 'next/image';

export default function Card({ squad, url_imagen, squad_id }) {
  return (
    <>
      <Link key={squad.id} href={`/teams/${squad_id}`}>
        <div className="card w-60 m-6 bg-base-100 shadow-xl flex items-center">
          <figure className="w-50 rounded-full mt-6 ">
            <Image
              src={url_imagen}
              width={100}
              height={100}
              alt="https://1.bp.blogspot.com/-lFabe6aeWd4/X-6HCsArJcI/AAAAAAAAFDA/PVuAyVCwRe8pvlP6hktOaO7pDwsYw3y8wCLcBGAsYHQ/s2048/alhamacf.png"
            />
          </figure>
          <div className="card-body">
            <h1 className="card-title">{squad}</h1>
          </div>
        </div>
      </Link>
    </>
  );
}
