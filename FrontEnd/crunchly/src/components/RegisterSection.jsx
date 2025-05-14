import RegisterForm from "./RegisterForm";
import Card from "./Card";

function RegisterSection() {
    return (<section class="py-5">
        <div class="container px-5 my-5"><RegisterForm />
            <div class="row gx-5 row-cols-2 row-cols-lg-4 py-5">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </section>)
}
export default RegisterSection;