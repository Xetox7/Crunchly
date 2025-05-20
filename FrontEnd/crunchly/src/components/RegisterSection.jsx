import RegisterForm from "./RegisterForm";
import Card from "./Card";

function RegisterSection() {
    return (<section className="py-5">
        <div className="container px-5 my-5"><RegisterForm />
            <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </section>)
}
export default RegisterSection;