export function HeroView() {
    const titleCasino = "Bienvenidos al Casino Vgran";
    const subtitle = "Todos ganamos !!";
    const descriptionCasino = "Donde tus sueños se hacen realidad";


    //*TODO : CAMBIAR LA IMAGEN POR OTRA DE SLOTS */
    return (
        <>
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l bg-hero-pattern bg-cover"></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 ">
                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl text-neutral-50">
                        {titleCasino}
                        <strong className="block font-extrabold text-rose-700">
                            {subtitle}
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                        {descriptionCasino}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            href="#"
                            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto hover:bg-gray"
                        >
                            Vamos a jugar
                        </a>

                        <a
                            href="#"
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Reglas
                        </a>
                    </div>
                </div>
            </div>
        </>
    );

}