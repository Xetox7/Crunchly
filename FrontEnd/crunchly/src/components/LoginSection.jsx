import LoginForm from "./LoginForm";
import Card from "./Card";

function LoginSection() {
    return (<section className="py-5">
        <div className="container px-5 my-5"><LoginForm />
            <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </section>)
}
export default LoginSection;