import styles from './Card.module.css'
import CardLayout from './CardLayout/CardLayout'


export default function Card({cardData}){



        return (
                <>
                    <div className={`${styles.container} ${cardData.background && styles.background}`}>
                        <div className={styles.left_contianer}>
                                <div className={`${cardData.background && styles.list} `}>
                                    <CardLayout data={cardData.left}></CardLayout>
                                </div>
                        </div>
                        <div className={styles.right_contianer}>
                                <div className=''>
                                <CardLayout data={cardData.right}></CardLayout>
                                        </div>
                        </div>
                    </div>
                </>
        )
}

// validate the propertype