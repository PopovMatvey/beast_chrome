import React from "react";
import { SlideMenu } from "../../components/SlideMenu";
import "./css/style.css";
import sertificate from "./images/sertificates.svg";
import time from "./images/time.svg";
import hends from "./images/hends.svg";
import businessKey from './images/business-key.png';
import support from './images/support.webp';
import mobileLibrary from "./images/mobile-library.png";
import individual from './images/individual.png';
import officeBuilding from './images/office-building.png';
// import { ImageSlider } from "../../components/ImageSlider";
// import { useRequestArray } from "../../hook/useRequestArray";
// import { urlStudentsApi } from "../../data/apiUrls";

// Обучение
export function Learning() {
    // const arrayStudents = useRequestArray(urlStudentsApi).requestArray;

    return (
        <>
            <div className="learning-container">
                <div className="learning-container_beginner-screen beginner-screen">
                    <SlideMenu />
                    <div className="learning-container_beginner-screen_container">
                        <h1>Обучение</h1>
                        <div className="learning-container_beginner-screen_text">
                            <span>
                                Проводим обучение по технологии, собственная разработка зеркального покрытия и своя линейка материалов от базового до финишного покрытия.
                            </span>
                            <span>
                                Обучаем желающих как уже знакомых с химической металлизацией, но по какой-то причине не получается, так и тех, кто хочет начать свой бизнес с нуля, иметь дополнительный зароботок или как основной.
                            </span>
                            <span>
                                Обучение проходит по алгоритму, отработанному годами. Если вы будете придерживаться нашей технологии, то ваше зеркальное покрытие не будет иметь желтоватый оттенок, муары, коричневые подтёки и прочий брак на поверхности.
                            </span>
                            <span>
                                Наши ученики получают советы, рекомендации от выбора и обустройства помещения, до сфер направлений бизнеса, где наша технология позволяет принести наибольшую прибыль!
                            </span>
                            <span>
                                Ученик после прохождения обучения не останется один, наш технолог по телефону (с 10 до 22 по МСК), проконсультирует, если возникнут какие-то вопросы!
                            </span>
                            <span>
                                Также у нас вы можете приобрести наборы серебрения для самостоятельного нанесения, оборудование,
                                установку для получения дистиллированной воды, на которой работают наши растворы, установку по
                                очистке воздуха от конденсата и масел, выходящих с компрессора.
                            </span>
                            <span>
                                PS. Обучение может проходить как в нашем тех. центре, так и дистанционно, это всё обсуждается по телефону или WhatsApp.
                            </span>
                            <span>
                                Работаем по всей России!
                            </span>
                            <span>
                                Наши ученики всегда получают Результат!
                            </span>
                        </div>
                    </div>
                </div>
                <div className="learning-container_beginner-screen_benifits">
                    <h3>Преимущества обучения у нас:</h3>
                    <div className="learning-container_beginner-screen_benifits_container">
                        <div className="learning-container_beginner-screen_benifits_item">
                            <div className="learning-container_beginner-screen_benifits_item_image">
                                <img src={hends} alt="Иконка преимущества" />
                            </div>
                            <h6>
                                Востребованная
                                профессия
                            </h6>
                        </div>
                        <div className="learning-container_beginner-screen_benifits_item">
                            <div className="learning-container_beginner-screen_benifits_item_image">
                                <img src={time} alt="Иконка преимущества" />
                            </div>
                            <h6>
                                Быстрое
                                обучение
                            </h6>
                        </div>
                        <div className="learning-container_beginner-screen_benifits_item">
                            <div className="learning-container_beginner-screen_benifits_item_image">
                                <img src={sertificate} alt="Иконка преимущества" />
                            </div>
                            <h6>
                                Получение
                                сертификата
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="learning-container_busnes-on-key">
                    <h3>Бизнес под ключ</h3>
                    <div className="learning-container_busnes-on-key__row">
                        <span>
                            Бизнес под ключ - приезжаете к нам на базу на 5 дней (проживание входит в стоимость обучения), за эти дни вы проходите курс обучения по технологии, от подготовки детали до конечного результата, не важно имели ли вы до этого
                            какое-либо отношение к малярным работам или нет, мы вас научим всему. Вы получаете формулу изготовления растворов, мы показываем как работать с этой формулой, приготовить расстворы и их концентрат, оборудование для получения
                            дистиллированной воды Best Water, оборудование для очистки воздуха Best Air, профессиональное оборудование для нанесения растворов
                            и ингридиенты для приготовления растворов на 100 м2, лак на 100 м2. Поможем с выбором помещения и как его обустроить. Подскажем в каких направлениях лучше работать, где прибыль выше.
                        </span>
                        <img src={businessKey} alt="Изображение обучения под ключ" />
                    </div>
                    <div className="learning-container_busnes-on-key__row">
                        <img src={support} alt="Изображение обучения под ключ" />
                        <span>
                            Постоянная техническая поддержка, если возникнут какие-либо вопросы. По окончанию обучения выдается Сертификат на услуги ( для ООО и ИП)– <b>1500 000 рублей</b>. Так же после приобритения вами навыков
                            работы по нашей технологии, нашей проверки качества вашего покрытия,
                            вы можете стать партнером нашей компании Best Chrome в вашем городе. Если есть необходимость провести обучение на вашем рабочем месте, цена оговаривается индивидуально.
                            Обучение возможно дистанционно.
                            Заказ на оборудование производится при 100% предоплате за 1-1.5 месяца.
                            P.S. Технология разработки лаков, грунтов и колеров в обучение не входит (внутренний секрет компании Best Chrome).
                        </span>
                    </div>
                </div>
                <div className="our-offer-container">
                    <h3>Что мы предлагаем</h3>
                    <div className="our-offer-container-offers">
                        <div className="our-offer-container-offers_item">
                            <img src={mobileLibrary} alt="Изображение предложения" />
                            <span>
                                Однодневное обучение или мастер класс (приезжаете к нам на базу и мы вас знакомим с нашей технологией) –<b> 30000 рублей</b>.
                                Если есть необходимость провести мастер класс на вашем рабочем месте, цена оговаривается индивидуально.
                            </span>
                        </div>
                        <div className="our-offer-container-offers_item">
                            <img src={individual} alt="Изображение предложения" />
                            <span>
                                Обучение для физических лиц - приезжаете к нам на базу на 5 дней (проживание входит в стоимость обучения),
                                за эти дни вы проходите курс обучения по технологии BEST CHROME, от подготовки детали до конечного результата,
                                не важно имели ли вы до этого какое-либо отношение к малярным работам или нет, мы вас научим всему.
                                Вы получаете формулу изготовления растворов, мы показываем как работать с этой формулой,
                                приготовить расстворы и их концентрат. Поможем с выбором помещения и как его обустроить.
                                Подскажем в каких направлениях лучше работать, где прибыль выше.
                                Постоянная техническая поддержка, если возникнут какие-либо вопросы. – <b> 450 000 рублей</b>.
                                Если есть необходимость провести обучение на вашем рабочем месте, цена оговаривается индивидуально.
                            </span>
                        </div>
                        <div className="our-offer-container-offers_item">
                            <img src={officeBuilding} alt="Изображение предложения" />
                            <span>
                                Обучение для ООО и ИП (Сертификат) - приезжаете к нам на базу на 5 дней (проживание входит в стоимость обучения),
                                за эти дни вы проходите курс обучения по технологии BEST CHROME, от подготовки детали до конечного результата,
                                не важно имели ли вы до этого какое-либо отношение к малярным работам или нет, мы вас научим всему.
                                Вы получаете формулу изготовления растворов, мы показываем как работать с этой формулой, приготовить расстворы
                                и их концентрат. Поможем с выбором помещения и как его обустроить. Подскажем в каких направлениях лучше работать,
                                где прибыль выше. Постоянная техническая поддержка, если возникнут какие-либо вопросы. По окончанию обучения выдается
                                Сертификат на услуги –<b> 500 000 рублей</b>. Если есть необходимость провести обучение на вашем рабочем месте,
                                цена оговаривается индивидуально. Обучение возможно дистанционно
                            </span>
                        </div>
                    </div>
                </div>
                {/* <div className="learning-container_students">
                    <h3>Наши ученики:</h3>
                    <div className="learning-container_students_contaiiner">
                        <ImageSlider items={arrayStudents} />
                    </div>
                </div> */}
            </div>
        </>
    )
}