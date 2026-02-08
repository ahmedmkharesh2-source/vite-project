import { categories, products } from "./data";

const Home = () => {
  return (
    <>
      <h2 className="text-center ">Home page</h2>

      <div id="carouselExample" className="carousel slide mt-5">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/image/1-300x300.png"
              className="d-block w-100 slider-img"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/image/3-300x300.jpg "
              className="d-block w-100 slider-img"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img  
              src="/image/2-300x300.png"
              className="d-block w-100 slider-img"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="contaier">
        <h3 className="mt-4 mb-4 text-center">Categraies</h3>
        <div className="row cat-img">

          {
            categories.map((category)=> 
            (
              <>
              <div className="col-sm-2 col-4">
                <img src={category.img} alt="" />
                <p>{category.title}</p>
                <p>{category.price}</p>
              </div>
              </>
            )
            )
          }
        </div>

        <h2 className="mt-4 mb-4 text-center">Products</h2>
        <div className="row prodect mt-5 g-5">
          {products.map((product) => {
            return (
              <div className="col-lg-4 col-sm-6 col-12 ">
                <img src={product.img} alt="" />
                <h2 className="mt-3 mb-3">{product.title}</h2>
                <p> {product.price}</p>
                <button className="btn btn-success">By Now</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
