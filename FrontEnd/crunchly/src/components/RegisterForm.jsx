function RegisterForm(){
    return(
            <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                <div class="text-center mb-5">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-person-fill"></i>
                    </div>
                    <h1 class="fw-bolder">Zarejestruj się</h1>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6">
                        <form id="contactForm">
                            <div class="form-floating mb-3 my-2">
                                <input class="form-control" id="username" type="text"
                                    placeholder="Nazwa użytkownika" />
                                <label for="username">Nazwa użytkownika</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" placeholder="Adres E-mail" />
                                <label for="email">Adres E-mail</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="message" type="date" />
                                <label for="message">Data Urodzin</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="password" type="password" placeholder="Hasło" />
                                <label for="password">Hasło</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="rpt_password" type="password"
                                    placeholder="Powtórz hasło" />
                                <label for="rpt_password">Powtórz hasło</label>
                            </div>
                            <div class="d-none" id="submitErrorMessage">
                                <div class="text-center text-danger mb-3">Błąd przy wysyłaniu formularza!</div>
                            </div>
                            <div class="d-grid"><button class="btn btn-primary btn-lg disabled" id="submitButton"
                                    type="submit">Wyślij</button></div>
                        </form>
                    </div>
                </div>
            </div>
            )
}
export default RegisterForm;