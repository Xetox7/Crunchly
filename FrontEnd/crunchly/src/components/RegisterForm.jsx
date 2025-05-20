function RegisterForm(){
    return(
            <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                <div className="text-center mb-5">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-person-fill"></i>
                    </div>
                    <h1 className="fw-bolder">Zarejestruj się</h1>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6">
                        <form id="contactForm">
                            <div className="form-floating mb-3 my-2">
                                <input className="form-control" id="username" type="text"
                                    placeholder="Nazwa użytkownika" />
                                <label for="username">Nazwa użytkownika</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" placeholder="Adres E-mail" />
                                <label for="email">Adres E-mail</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="message" type="date" />
                                <label for="message">Data Urodzin</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="password" type="password" placeholder="Hasło" />
                                <label for="password">Hasło</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="rpt_password" type="password"
                                    placeholder="Powtórz hasło" />
                                <label for="rpt_password">Powtórz hasło</label>
                            </div>
                            <div className="d-none" id="submitErrorMessage">
                                <div className="text-center text-danger mb-3">Błąd przy wysyłaniu formularza!</div>
                            </div>
                            <div className="d-grid"><button className="btn btn-primary btn-lg disabled" id="submitButton"
                                    type="submit">Wyślij</button></div>
                        </form>
                    </div>
                </div>
            </div>
            )
}
export default RegisterForm;