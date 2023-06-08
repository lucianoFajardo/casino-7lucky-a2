import { FooterView } from "./footer";
import { HeroView } from "./hero";
import { RulesViewCustom } from "../COMPONENTS/bonus_casino";
import { GamesViewCustom } from "../COMPONENTS/games";
import { Space, FloatButton } from "antd";
import { StarOutlined, StarFilled, StarTwoTone, MessageOutlined } from '@ant-design/icons';
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

                <FloatButton
                    icon={
                        <MessageOutlined style={{fontSize:20}}/>
                    }
                    onClick={() => { console.log('ir a wasa') }}
                    style={{
                        height: 60,
                        width: 60,
                    }}
                    className="hover:bg-yellow"
                />

            </div>
        </body>
    );
}

