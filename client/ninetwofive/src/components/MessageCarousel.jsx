import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const MessageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const messages = [
    ' שלום , ברוכים הבאים לאתר קטלוג החנות של תכשיטי הכסף הטובה בצפון',
    'הנחה מיוחדת למגיעים דרף האתר ',
    'קולאציות ייחודיות , חדשניות , ומתעדכנות כל הזמן',
    ' הרגשיו חופשי ליצור איתנו קשר , להשאיר פניות ובקשות מיוחדות  ',
    // Add more messages as needed
  ];

  return (
    <Slider {...settings} className="">
      {messages.map((message, index) => (
        <div key={index} className="text-center">
          <div className="shadow p-4 rounded mx-auto" style={{ maxWidth: '600px' }}>
            <p className="fs-4">{message}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};