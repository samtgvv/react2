import s from './Catalog.module.css'
import item from '/item.png'

export function Catalog() {
    return (
        <section>
            <div className={s.container}>


                <div className={s.catalog__block}>
                    <div className={s.title}>
                        <h2>Каталог товаров</h2>
                    </div>

                    <div className={s.category}>
                        <p>Категории:</p>

                        <div className={s.btns}>
                            <button className={s.active}>Все товары</button>
                            <button>Шины/колеса</button>
                            <button>Масла</button>
                            <button>Ароматизаторы</button>
                        </div>
                    </div>

                    <div className={s.items}>
                        <div className={s.item}>
                            <img src={item} alt="" />

                            <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>

                            <div className={s.price__btn}>
                                <p><span>335</span> ₽</p>

                                <button className={s.active}>Добавить в корзину</button>
                            </div>
                        </div>
                        <div className={s.item}>
                            <img src={item} alt="" />

                            <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>

                            <div className={s.price__btn}>
                                <p><span>335</span> ₽</p>

                                <button className={s.active}>Добавить в корзину</button>
                            </div>
                        </div>
                        <div className={s.item}>
                            <img src={item} alt="" />

                            <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>

                            <div className={s.price__btn}>
                                <p><span>335</span> ₽</p>

                                <button className={s.active}>Добавить в корзину</button>
                            </div>
                        </div>
                        <div className={s.item}>
                            <img src={item} alt="" />

                            <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>

                            <div className={s.price__btn}>
                                <p><span>335</span> ₽</p>

                                <button className={s.active}>Добавить в корзину</button>
                            </div>
                        </div>
                        <div className={s.item}>
                            <img src={item} alt="" />

                            <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>

                            <div className={s.price__btn}>
                                <p><span>335</span> ₽</p>

                                <button className={s.active}>Добавить в корзину</button>
                            </div>
                        </div>
                        <div className={s.item}>
                            <img src={item} alt="" />

                            <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>

                            <div className={s.price__btn}>
                                <p><span>335</span> ₽</p>

                                <button className={s.active}>Добавить в корзину</button>
                            </div>
                        </div>
                        <div className={s.item}>
                            <img src={item} alt="" />

                            <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>

                            <div className={s.price__btn}>
                                <p><span>335</span> ₽</p>

                                <button className={s.active}>Добавить в корзину</button>
                            </div>
                        </div>
                        <div className={s.item}>
                            <img src={item} alt="" />

                            <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>

                            <div className={s.price__btn}>
                                <p><span>335</span> ₽</p>

                                <button className={s.active}>Добавить в корзину</button>
                            </div>
                        </div>
                        <div className={s.item}>
                            <img src={item} alt="" />

                            <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>

                            <div className={s.price__btn}>
                                <p><span>335</span> ₽</p>

                                <button className={s.active}>Добавить в корзину</button>
                            </div>
                        </div>
                    </div>

                    <div className={s.add__more}>
                        <button>Загрузить еще товары</button>
                    </div>
                </div>
            </div>


        </section>
    )
}