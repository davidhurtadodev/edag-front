import Link from 'next/link';

export const Header = () => {
  return (
    <div>
      <div className="navbar navbar-center bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Liga femenina
          </Link>
        </div>
      </div>
    </div>
  );
};
