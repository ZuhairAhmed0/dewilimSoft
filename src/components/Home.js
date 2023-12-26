import About from "./About";
import Services from "./Services";
function Home() {
  return (
    <>
      <header>
        <div className="container">
          <h2>شركة Dewilim لتطوير البرمجيات</h2>
          <p>
            نركز دائما على الابتكار والابداع في تقديم الخدمات ونجعل نشاطك
            التجاري اكثر سهولة في الاستخدام والانتشار
          </p>
        </div>
      </header>
      <About />
      <Services />
    </>
  );
}

export default Home;
