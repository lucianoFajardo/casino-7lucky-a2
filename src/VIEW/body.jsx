import { FooterView } from "./footer";
import { HeroView } from "./hero";
import { RulesViewCustom } from "../COMPONENTS/bonus_casino";
import { GamesViewCustom } from "../COMPONENTS/games";
import { Space, FloatButton } from "antd";
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { CardCustomCasinoGames } from "../COMPONENTS/card_custom_games";

export function BodyView() {
    return (

        <body>
            <div>
                <section>
                    <HeroView />
                </section>

                <Space
                    direction="vertical"
                    size="large"
                    style={{
                        display: 'flex',
                        border: '2px solid #2E2E2E',
                    }}
                >
                    <div className="bg-gray-dark p-10 opacity-75">
                        <h1 className="text-center text-2xl text-white">
                            Plataforma de Juegos
                        </h1>
                    </div>
                </Space>

                <section>
                    <CardCustomCasinoGames />
                </section>

                <Space
                    direction="vertical"
                    size="large"
                    style={{
                        display: 'flex',
                        border: '2px solid #2E2E2E',
                    }}
                >
                    <div className="bg-gray-dark p-10 opacity-75">
                        <h1 className="text-center text-2xl text-white dark:text-blue">
                            Contactanos
                        </h1>
                    </div>
                </Space>

                <section>
                    <div className="flex justify-center">
                        <a className="btn btn-active btn-accent btn-lg" href="https://wa.me/954375228?text=hola,%20quiero%20saber%20mas.." target="_blank"> WhatsApp <AiOutlineWhatsApp className="m-2" size={30} /></a>
                    </div>
                </section>

                <Space
                    direction="vertical"
                    size="large"
                    style={{
                        display: 'flex',
                        border: '2px solid #2E2E2E',
                    }}
                >
                    <div className="bg-gray-dark p-10 opacity-75">
                        <h1 className="text-center text-2xl text-white dark:text-blue">
                            Reglamento
                        </h1>
                    </div>
                </Space>

                <section>
                    <RulesViewCustom />
                </section>

                <Space
                    direction="vertical"
                    size="large"
                    style={{
                        display: 'flex',
                        border: '2px solid #2E2E2E',
                    }}
                >
                    <div className="bg-gray-dark p-10 opacity-75">
                        <h1 className="text-center text-2xl text-white">
                            Juegos gratis
                        </h1>
                    </div>
                </Space>

                <section>
                    <GamesViewCustom />
                </section>

                <section>
                    <FooterView />
                </section>

            </div>
        </body>
    );
}

