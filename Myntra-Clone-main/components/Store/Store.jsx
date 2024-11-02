import FilterContainer from "./FilterContainer";
import ProductsContainer from "./ProductsContainer";
import "./Store.css";
function Store() {
  return (
    <main>
      <div className="container-fluid buy-section ">
        <div className="row">
          {/* <!-- breadcrumbs  --> */}
          <div className="breadcrumbs-container">
            <ul className="breadcrumb-list">
              <li className="breadcrumb-item">
                <a href=""> Home </a>
              </li>
              <li className="breadcrumb-item">
                <a href=""> Home Furnishing </a>
              </li>
              <li className="breadcrumb-item">
                <a href=""> Bedding</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col title-container">
            <h1 className="title-title">Bedding</h1>
            <span className="title-count"> - 5527 items</span>
          </div>
        </div>
        <div className="row">
          <div className=" col-2 search-left-container  ">
            <span className="filter-header filter-filter">FILTERs</span>
            {/* <!-- gender filter --> */}
            <div className="filter-gender-section filter-section">
              <ul className="gender-list">
                <li>
                  {" "}
                  <input type="radio" />
                  <span>Men</span>
                </li>
                <li>
                  {" "}
                  <input type="radio" />
                  <span>Women</span>
                </li>
                <li>
                  {" "}
                  <input type="radio" />
                  <span>Boys</span>
                </li>
                <li>
                  {" "}
                  <input type="radio" />
                  <span>Girls</span>
                </li>
              </ul>
            </div>
            {/* <!-- category filter --> */}

            <FilterContainer heading="category" />
            {/* <!-- brand filter --> */}

            <FilterContainer heading="brand" />

            {/* <!-- price category --> */}

            <FilterContainer heading="price" />

            {/* <!-- color category --> */}

            <FilterContainer heading="color" />

            {/* <!-- discount category --> */}

            <FilterContainer heading="discount range" />
          </div>

          {/* search right */}
          <div className=" col-10 search-right-container ">
            <div className="row  bg-red">
              <div className="col-9 ">
                <ul className="d-flex search-filter">
                  <li>
                    <h4 className="search-filter-title">Bundles</h4>
                    <span className="search-filter-downarrow">&#x2B9F;</span>
                  </li>
                  <li>
                    <h4 className="search-filter-title">Country Origin</h4>
                    <span className="search-filter-downarrow">&#x2B9F;</span>
                  </li>
                  <li>
                    <h4 className="search-filter-title">Size</h4>
                    <span className="search-filter-downarrow">&#x2B9F;</span>
                  </li>
                </ul>
              </div>
              <div className="col-3 ">
                <div className="sortby">
                  <span>sort by :</span>
                  <span className="recommended">Recommended</span>
                  <span className="sortby-arrow">&#x2B9F;</span>
                </div>
              </div>
            </div>
            <div className="row search-product-container">
              <div className="col p-2">
                <ProductsContainer itemcount={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Store;
