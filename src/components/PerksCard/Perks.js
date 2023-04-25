const Perks = () =>{

    const perksContent = [
        {
            title: "What we do.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            title: "Why us?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            title: "Perk 3.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        }
    ]

    return(
        <div className="allPerks -mt-12 relative flex flex-col items-center justify-center gap-8 lg:absolute lg:bottom-12 lg:flex lg:flex-row">
            {
                perksContent.map(perk => {
                    return(
                        <div className="perksCard flex flex-col">
                            <h1 className="text-2xl lg:text-3xl font-semibold tracking-wide lg:mt-2">{perk.title}</h1>
                            <div className="h-0.5 w-32 lg:w-56 bg-gray-500 mb-2 lg:mt-6 lg:mb-4"></div>
                            <p className="text-center mb-2">{perk.desc}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Perks