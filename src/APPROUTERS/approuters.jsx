import {
    Router,
    Routers,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import { Badge, Drawer, Image, List, Space, Typography } from "antd"
import { FooterView } from "../VIEW/footer";
import { BodyView } from "../VIEW/body";
import { HeaderView } from "../VIEW/header";

export function RouterRouts () {
    return (
        <Routers>
            <Router path="/header" element={<HeaderView/>}></Router>
            <Router path="/body" element={<BodyView/>}></Router>
            //* this part add element hero
            <Router path="/footer" element={<FooterView/>}></Router>
            <Router path="/footer" element={<FooterView/>}></Router>
            <Router path="/footer" element={<FooterView/>}></Router>
        </Routers>
    );
}