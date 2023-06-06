export function HeroView() {
    const titleCasino = "Bienvenidos al Casino Vgran";
    const subtitle = "Todos ganamos !!";
    const descriptionCasino = "Donde tus sueños se hacen realidad";


    //*TODO : CAMBIAR LA IMAGEN POR OTRA DE SLOTS */
    return (
        <>
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l bg-hero-pattern bg-cover">
                
            </div>
            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 ">
                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl text-black">
                        {titleCasino}
                        <strong className="block font-extrabold text-rose-700 text-black">
                            {subtitle}
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed text-black">
                        {descriptionCasino}
                    </p>
                </div>
            </div>
        </>
    );

}