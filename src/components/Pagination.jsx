import "./Pagination.css"

export default function Pagination({ userPerPage, totalUsers, paginate }) {
  const pageNumber = [];

  for (let i = 0; i <= Math.ceil(totalUsers / userPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className="pagination-container">
        {pageNumber.map((number) => (
          <li key={number}>
            <a href="!#" onClick={() => paginate(number)}>
                {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}