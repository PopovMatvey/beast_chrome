import React from "react";
import "./css/style.css";
import imgFirst from "./images/img1.svg";
import imgSecond from "./images/img2.svg";
import imgThird from './images/znachok-avto-iz-chroma.jpg';
import imgFouth from './images/model-of-car-wheel.jpg';
import { SlideMenu } from "../../components/SlideMenu";
import { YouTubeVideo } from "../../components/YouTubeVideo";
// import { useRequestArray } from "../../hook/useRequestArray";
// import { urlPartnersApi } from "../../data/apiUrls";

// О нас
export function AboutUs() {
    // const arrayImagePartners = useRequestArray(urlPartnersApi).requestArray;
    const arraySertsImage = [
        {
            imageHref: './images/Serteficate/sert_company.png',
            docHref: './doc/SvidUchetUL_69984220aa274e3cb5f326d991cd1ccb.pdf',
        },
        {
            imageHref: './images/Serteficate/sert-sootv.png',
            docHref: './doc/Сертификат РУ.17101.pdf',
        }
    ];

    return (
        <>
            <div className="about-us-container">
                <div className="about-us-container_beginner-screen beginner-screen">
                    <SlideMenu />
                    <div className="about-us-container_beginner-screen_content">
                        <h1>О нас</h1>
                        <div className="about-us-container_beginner-screen_content__row">
                            <div className="about-us-container_beginner-screen_content__row_image-block">
                                <img src={imgFirst} alt="Изображение начального экрана" />
                            </div>
                            <span>
                                BestChrome – компания, знающая своё дело c 2016 года.
                                Технология хромирования, предлагаемая нашей компанией
                                – химическая металлизация. Технология основана на нанесении
                                зеркального декоративного защитного слоя на различные материалы
                                ( пластик, металл, дерево, гипс, керамика, стекло, МДФ и прочие).
                            </span>
                        </div>
                        <div className="about-us-container_beginner-screen_content__row">
                            <span>
                                Зеркальному покрытию можно придать различную цветовую гамму, а также выполнить его под хром, золото, медь, бронзу, латунь. Данное покрытие защищает от коррозии и ультрафиолетовых лучей.
                            </span>
                            <div className="about-us-container_beginner-screen_content__row_image-block">
                                <img src={imgSecond} alt="Изображение начального экрана" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="about-us-container_information__block">
                    <div className="about-us-container_information">
                        <div className="about-us-container_beginner-screen_content__row_image-block">
                            <img src={imgThird} alt="Изображение начального экрана" />
                        </div>
                        <div className="about-us-container_information__text">
                            <span>
                                Данная технология основана на нанесении покрытия <b>Без обжига!</b>  Что значительно упрощает работу мастера и сокращает время работы.
                            </span>
                            <span>
                                Наша компания имеет свою линейку материалов от базового до финишного покрытия (грунты, лаки, колоры).
                            </span>
                        </div>
                    </div>
                    <h3 className="title_h3">Обучение</h3>
                    <div className="about-us-container_information">
                        <span>
                            Проводим обучение как очно, так и с применением дистанционных технологий.
                            Представляем услуги по приобретению наборов серебрения, материалов, оборудования. После прохождения обучения предоставляем сертификат на услуги (только для ООО и ИП).
                            Мы рады успехам наших учеников и выполняем любой запрос клиента, ведь это свидетельство качества нашей работы.
                        </span>
                        <div className="about-us-container_beginner-screen_content__row_image-block">
                            <img src={imgFouth} alt="Изображение Обучения" />
                        </div>
                    </div>
                </div>
                <div className="abuot-us-container_video">
                    <h3>Видео о нас</h3>
                    <div className="abuot-us-container_video_component">
                        <YouTubeVideo videoId="QqgBzPfBkj0" />
                    </div>
                </div>
                <div className="about-us-container_serteficates">
                    <h3>Наши сертификаты</h3>
                    <span>
                        Лишь акционеры крупнейших компаний,
                        инициированные исключительно синтетически,
                        подвергнуты целой серии независимых исследований.
                    </span>
                    <div className="about-us-container_serteficates_images">
                        {arraySertsImage.map((element: any, index: number) => (
                            <a href={element.docHref}>
                                <img src={element.imageHref} alt="Сертефикат" key={index} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}