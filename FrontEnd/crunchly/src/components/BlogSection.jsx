import BlogCard from "./BlogCard";
function BlogSection(){
    return(<section class="py-5">
        <div class="container px-5 my-5">
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-8 col-xl-6">
                    <div class="text-center">
                        <h2 class="fw-bolder">Z naszego forum</h2>
                        <p class="lead fw-normal text-muted mb-5">Dołącz do naszego forum, gdzie możesz wymieniać się swoimi pomysłami z innymi użytkownikami!</p>
                    </div>
                </div>
            </div>
            <div class="row gx-5">
               <BlogCard/>
               <BlogCard/>
               <BlogCard/>
            </div>
        </div>
    </section>);
};
export default BlogSection;