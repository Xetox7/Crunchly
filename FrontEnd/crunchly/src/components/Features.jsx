function Features(){
    return(<section className="py-5" id="features">
        <div className="container px-5 my-5">
            <div className="row gx-5">
                <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0">Sposób żeby osiągnąć swoją wymarzoną sylwetkę.</h2></div>
                <div className="col-lg-8">
                    <div className="row gx-5 row-cols-1 row-cols-md-2">
                        <div className="col mb-5 h-100">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                            <h2 className="h5">Wielka baza produktów</h2>
                            <p className="mb-0">Zapewniany ogromną bazę produktów wraz z dokładnymi danymi związnymi z ich zawartością.</p>
                        </div>
                        <div className="col mb-5 h-100">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>
                            <h2 className="h5">Zdrowa dieta</h2>
                            <p className="mb-0">Dostarczymy dopasowaną zbilansowaną dietę dopasowaną do waszych potrzeb.</p>
                        </div>
                        <div className="col mb-5 mb-md-0 h-100">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                            <h2 className="h5">Kalkulator Kalorii</h2>
                            <p className="mb-0">Obliczymy kaloryczność zjedzonego przez was jedzenia oraz zawarte w nich mikro i makro składniki.</p>
                        </div>
                        <div className="col h-100">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                            <h2 className="h5">Wielka Społeczność</h2>
                            <p className="mb-0">Posiadamy oddaną społeczość, która pomaga sobie nawzajem w osiąganiu celów.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
};
export default Features;