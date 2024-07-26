"use client";
import React, { useEffect } from "react";
import $ from "jquery";
import "./style.scss";

const Timeline = () => {
  useEffect(() => {
    (function ($) {
      $.fn.timeline = function () {
        var selectors = {
          id: $(this),
          item: $(this).find(".timeline-item"),
          activeClass: "timeline-item--active",
          img: ".timeline__img",
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
          "background-image",
          "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
        );
        var itemLength = selectors.item.length;
        $(window).scroll(function () {
          var max, min;
          var pos = $(this).scrollTop();
          selectors.item.each(function (i) {
            min = $(this).offset().top;
            max = $(this).height() + $(this).offset().top;
            if (i === itemLength - 2 && pos > min + $(this).height() / 2) {
              selectors.item.removeClass(selectors.activeClass);
              selectors.id.css(
                "background-image",
                "url(" +
                  selectors.item.last().find(selectors.img).attr("src") +
                  ")"
              );
              selectors.item.last().addClass(selectors.activeClass);
            } else if (pos <= max - 40 && pos >= min) {
              selectors.id.css(
                "background-image",
                "url(" + $(this).find(selectors.img).attr("src") + ")"
              );
              selectors.item.removeClass(selectors.activeClass);
              $(this).addClass(selectors.activeClass);
            }
          });
        });
      };
    })($); // Nota el uso de $ aquí en lugar de jQuery

    // Inicializa el timeline
    $("#timeline-1").timeline();

    // Cleanup function
    return () => {
      $(window).off("scroll");
    };
  }, []);

  return (
    <div id="timeline-1" className="timeline-container">
      <div className="timeline-header">
        <h2 className="timeline-header__title">Towers Cem</h2>
        <h3 className="timeline-header__subtitle">
          CONSTRUYENDO CIUDADES QUE RESPIRAN
        </h3>
      </div>
      <div className="timeline">
        <div className="timeline-item" data-text="NUESTROS INICIOS">
          <div className="timeline__content">
            <img
              className="timeline__img filter"
              src="/images/team/carlos.svg"
              alt="1881"
            />
            <h2 className="timeline__content-title">2018</h2>
            <p className="timeline__content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              nisi et molestiae, libero, fuga obcaecati a, nesciunt dolores
              nulla consequuntur perferendis animi! Impedit assumenda aliquam
              perspiciatis voluptatibus obcaecati, laboriosam dignissimos.
            </p>
          </div>
        </div>
        <div className="timeline-item" data-text="QUIENES SOMOS">
          <div className="timeline__content">
            <img
              className="timeline__img"
              src="/images/team/2022.svg"
              alt="1893"
            />
            <h2 className="timeline__content-title">2019</h2>
            <p className="timeline__content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              sunt amet. Quos, labore maxime deserunt dignissimos praesentium
              saepe, eos voluptatibus nam corrupti nisi beatae cum fugit aliquam
              quae recusandae. Maiores!
            </p>
          </div>
        </div>
        <div className="timeline-item" data-text="NUESTRO ADN">
          <div className="timeline__content">
            <img
              className="timeline__img"
              src="/images/team/2022.svg"
              alt="1905"
            />
            <h2 className="timeline__content-title">2020</h2>
            <p className="timeline__content-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              reprehenderit nisi iure omnis rem, ratione obcaecati sed sit
              debitis laudantium nulla aliquid. Expedita repellat, deleniti
              necessitatibus voluptates earum doloremque quo?
            </p>
          </div>
        </div>
        <div className="timeline-item" data-text="X-CEM">
          <div className="timeline__content">
            <img
              className="timeline__img"
              src="/images/team/2019.svg"
              alt="1908"
            />
            <h2 className="timeline__content-title">2021</h2>
            <p className="timeline__content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem et
              exercitationem vitae eligendi soluta. Voluptatem a totam ducimus,
              rem asperiores nostrum laudantium est, ut, dolorum fugiat
              veritatis? Vitae, nesciunt temporibus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

{
  /* <div className="demo-footer">
  <a
    href="http://www.turkishnews.com/Ataturk/life.htm"
    target="_blank"
    rel="noopener noreferrer"
  >
    Source/Kaynak
  </a>
</div> */
}
{
  /* <div className="timeline-item" data-text="FATHER OF THE TURKS">
    <div className="timeline__content">
            <img className="timeline__img" src="http://ataturk.istanbul.gov.tr/GalleryLibrary/12.jpg" alt="1915" />
            <h2 className="timeline__content-title">1915</h2>
            <p className="timeline__content-desc">
              In 1915, when Dardanelles campaign was launched, Colonel Mustafa Kemal became a national hero by winning successive victories and finally repelling the invaders.
            </p>
          </div>
        </div> */
}
{
  /* <div className="timeline-item" data-text="FATHER OF THE TURKS">
          <div className="timeline__content">
            <img className="timeline__img" src="https://vision-digital.com.mx/wp-content/uploads/2018/03/foto1-1.jpg" alt="1916" />
            <h2 className="timeline__content-title">1916</h2>
            <p className="timeline__content-desc">
              Promoted to general in 1916, at age 35, he liberated two major provinces in eastern Turkey that year. In the next two years, he served as commander of several Ottoman armies in Palestine, Aleppo, and elsewhere, achieving another major victory by stopping the enemy advance at Aleppo.
            </p>
          </div>
        </div>
        <div className="timeline-item" data-text="FATHER OF THE TURKS">
          <div className="timeline__content">
            <img className="timeline__img" src="https://vision-digital.com.mx/wp-content/uploads/2018/03/foto1-1.jpg" alt="1919" />
            <h2 className="timeline__content-title">1919</h2>
            <p className="timeline__content-desc">
              On May 19, 1919, Mustafa Kemal Pasha landed in the Black Sea port of Samsun to start the War of Independence. In defiance of the Sultan's government, he rallied a liberation army in Anatolia and convened the Congress of Erzurum and Sivas which established the basis for the new national effort under his leadership.
            </p>
          </div>
        </div>
        <div className="timeline-item" data-text="FATHER OF THE TURKS">
          <div className="timeline__content">
            <img className="timeline__img" src="https://vision-digital.com.mx/wp-content/uploads/2018/03/foto1-1.jpg" alt="1920" />
            <h2 className="timeline__content-title">1920</h2>
            <p className="timeline__content-desc">
              On April 23, 1920, the Grand National Assembly was inaugurated. Mustafa Kemal Pasha was elected to its Presidency. Fighting on many fronts, he led his forces to victory against rebels and invading armies. Following the Turkish triumph at the two major battles at Inonu in Western Turkey, the Grand National Assembly conferred on Mustafa Kemal Pasha the title of Commander-in-Chief with the rank of Marshal.
            </p>
          </div>
        </div>
        <div className="timeline-item" data-text="FATHER OF THE TURKS">
          <div className="timeline__content">
            <img className="timeline__img" src="https://vision-digital.com.mx/wp-content/uploads/2018/03/foto1-1.jpg" alt="1922" />
            <h2 className="timeline__content-title">1922</h2>
            <p className="timeline__content-desc">
              At the end of August 1922, the Turkish armies won their ultimate victory. Within a few weeks, the Turkish mainland was completely liberated, the armistice signed, and the rule of the Ottoman dynasty abolished.
            </p>
          </div>
        </div>
        <div className="timeline-item" data-text="FATHER OF THE TURKS">
          <div className="timeline__content">
            <img className="timeline__img" src="https://vision-digital.com.mx/wp-content/uploads/2018/03/foto1-1.jpg" alt="1923" />
            <h2 className="timeline__content-title">1923</h2>
            <p className="timeline__content-desc">
              In July 1923, the national government signed the Lausanne Treaty with Great Britain, France, Greece, Italy, and others. In mid-October, Ankara became the capital of the new Turkish State. On October 29, the Republic was proclaimed and Mustafa Kemal Pasha was unanimously elected President of the Republic.
            </p>
          </div>
        </div>
        <div className="timeline-item" data-text="FATHER OF THE TURKS">
          <div className="timeline__content">
            <img className="timeline__img" src="https://vision-digital.com.mx/wp-content/uploads/2018/03/foto1-1.jpg" alt="1934" />
            <h2 className="timeline__content-title">1934</h2>
            <p className="timeline__content-desc">
              The account of Atatürk's fifteen year Presidency is a saga of dramatic modernization. With indefatigable determination, he created a new political and legal system, abolished the Caliphate and made both government and education secular, gave equal rights to women, changed the alphabet and the attire, and advanced the arts and the sciences, agriculture and industry. In 1934, when the surname law was adopted, the national parliament gave him the name <strong>Atatürk</strong> (Father of the Turks).
            </p>
          </div>
        </div>
        <div className="timeline-item" data-text="FATHER OF THE TURKS">
          <div className="timeline__content">
            <img className="timeline__img" src="https://vision-digital.com.mx/wp-content/uploads/2018/03/foto1-1.jpg" alt="1938" />
            <h2 className="timeline__content-title">1938</h2>
            <p className="timeline__content-desc">
              On November 10, 1938, following an illness of a few months, the national liberator and the Father of modern Turkey died. But his legacy to his people and to the world endures.
            </p>
          </div>
        </div> */
}
