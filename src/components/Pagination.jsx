import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../css/Pagination.css'
// import { Loading } from './Loading';

function useSearchProduct(products) {
  const [query, setQuery] = useState("")
  const [filterProduct, setFilterProduct] = useState(products)

  React.useMemo(() => {
    const resultado = products.filter((product) => {
      return `${product.product_name}`.toLowerCase().includes(query.toLowerCase())
    })
    setFilterProduct(resultado)
  }, [products, query])

  return [query, setQuery, filterProduct]
}

export const Pagination = (props) => {
  const { data } = props
  console.log(props);
  const { query, setQuery, filterProduct } = useSearchProduct(data)
  const [currentItems, setCurrentItems] = useState([]);

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  // console.log(
  //   currentItems.map((products) => {

  //   })
  // );

  return (
    <>
      <div className="row justify-content-center p-4 gap-4">
        {

          currentItems.map((products) => {
            return (
                  
                  <div className="card-body border border-2 text-danger col-2 pt-2">
                    <img src={products.image} width="300" height="300" alt="product" />
                    <h4 className="card-title">{products.product_name}</h4>
                    <h5 className="card-title">{products.price}</h5>
                    <p className="card-text text-secondary">{products.description}</p>
                    <a href="#" className="btn btn-outline-secondary" target="_blank">Go to buy</a>
                  </div>
            );
          })

        }
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}