import Services from "./Services";

function Blog() {
  return (
    <div className="blogs">
      <div className="container search d-flex">
        <input type="search" />
        <button type="submit">بحث</button>
      </div>
      <Services />
    </div>
  );
}

export default Blog;
