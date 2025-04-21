import CartWork from "@/shared/components/cart-work";

export default function WorkingSection() {
    return (
        <section className="flex flex-col  items-center  px-10 py-20 gap-8 w-full min-h-screen">
            <h1 className="text-5xl font-bold text-center text-blue-500">
                Working
            </h1>
            <CartWork></CartWork>
        </section>
    )
}