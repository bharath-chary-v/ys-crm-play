export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
console.log(currentPage,totalPages,`pageNumbers` )
    return (
        <div className=" items-center justify-between border-t border-gray-200 px-4 sm:px-0">

        <div className="mt-4 flex justify-center">
            {pageNumbers?.map((number) => (
                <button
                    key={number}
                    className={`mx-2 px-3 py-1 rounded ${
                        number === currentPage ? 'bg-orange-500' : 'bg-white'
                    }`}
                    onClick={() => onPageChange(number)}
                >
                    {number}
                </button>
            ))}
        </div>
        </div>
    );
}
