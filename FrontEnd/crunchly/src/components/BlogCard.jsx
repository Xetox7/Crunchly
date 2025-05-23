function BlogCard(){
    return(<div class="col-lg-4 mb-5">
        <div class="card h-100 shadow border-0">
            <img class="card-img-top" src="https://dummyimage.com/600x350/6c757d/343a40" alt="..." />
            <div class="card-body p-4">
                <div class="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                <a class="text-decoration-none link-dark stretched-link" href="#!"><h5 class="card-title mb-3">The last blog post title is a little bit longer than the others</h5></a>
                <p class="card-text mb-0">Some more quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                <div class="d-flex align-items-end justify-content-between">
                    <div class="d-flex align-items-center">
                        <img class="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                        <div class="small">
                            <div class="fw-bold">Evelyn Martinez</div>
                            <div class="text-muted">April 2, 2023 &middot; 10 min read</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default BlogCard;