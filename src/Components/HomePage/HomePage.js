import { pageLayout } from "../../Configs/config"
import Card from "../Card/Card";

export default function HomePage(){
    let cards = pageLayout;
    return (
        <>
        {
           
            cards.map(card=>{
                return <Card cardData={card}></Card>
            })
        }
        </>
    )
}