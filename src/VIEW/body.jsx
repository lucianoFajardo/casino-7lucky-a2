import { FooterView } from "./footer";
import { HeroView } from "./hero";

import { RulesViewCustom } from "../COMPONENTS/bonus_casino";
import { GamesViewCustom } from "../COMPONENTS/games";
import img1 from "../IMG/img1.jpg";
import img2 from "../IMG/imagen2juego.jpg";
import { Space, FloatButton } from "antd";
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import { ReglamentCustomCasino } from "../COMPONENTS/reglament_casino";
import { CardCustomCasinoGames } from "../COMPONENTS/card_custom_games";

const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
};

export function BodyView() {
    return (

        <body class="h-screen w-screen">
            <div>
                <section className="dark:bg-black">
                    <HeroView />
                </section>

                <Space
                    direction="vertical"
                    size="large"
                    style={{
                        display: 'flex',
                        borderRadius: '20px',
                        border: '5px solid #2E2E2E',
                    }}
                >
                    <div className="p-10 bg-gray-custom opacity-75">
                        <h1 className="text-center text-2xl text-white">
                            Vgran Games Casino
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
                        borderRadius: '20px',
                        border: '2px solid #2E2E2E',
                    }}
                >
                    <div className="p-10">
                        <h1 className="text-center text-2xl text-white dark:text-blue">
                            Reglas
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
                        borderRadius: '20px',
                        border: '2px solid #2E2E2E',
                    }}
                >
                    <div className="p-10">
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

                <FloatButton
                    onClick={() => { console.log('ir a wasa') }}
                    style={{
                        height: 80,
                        width: 80,
                    }}
                />
            </div>
        </body>
    );
}

