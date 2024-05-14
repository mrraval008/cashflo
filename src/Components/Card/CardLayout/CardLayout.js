import styles from './Cardlayout.module.css'
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';
export default function CardLayout({data}){
    return (
        <>
            <div>

         {data.bigTitle && <h1 className={styles.bigTitle}>{data.bigTitle}</h1>}
         {data.smallTitle && <h2 className={styles.smallTitle}>{data.smallTitle}</h2>}
                                    {data.subTitle && <p>{data.subTitle}</p>}
                                    {data.button && <button>{data.button}</button>}
                                    {data.list && <div>
                                            <ul>
                                                {data.list.map((item)=>{
                                                    return <li>
                                                            <DoneIcon className={styles.listIcon}></DoneIcon>  
                                                            <span className={styles.listItem}>{item}</span>
                                                    </li>
                                                })}
                                            </ul>
                                        </div>}
                                        {data.img && <img src={data.img}/>}
                                        {data.hyperLink && <Link>{data.hyperLink}</Link>}
            </div>

        </>
    )
}