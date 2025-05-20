import BlogCard from "./BlogCard";
function BlogSection(){
    return(<section className="py-5">
        <div className="container px-5 my-5">
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-6">
                    <div className="text-center">
                        <h2 className="fw-bolder">Z naszego forum</h2>
                        <p className="lead fw-normal text-muted mb-5">Dołącz do naszego forum, gdzie możesz wymieniać się swoimi pomysłami z innymi użytkownikami!</p>
                    </div>
                </div>
            </div>
            <div className="row gx-5">
               <BlogCard/>
               <BlogCard/>
               <BlogCard/>
            </div>
        </div>
    </section>);
};
export default BlogSection;