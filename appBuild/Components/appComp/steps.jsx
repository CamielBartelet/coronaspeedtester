import AppCompstyle from "./appCompstyle";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Steps = () => {
  return (
    <>
      <style jsx>{AppCompstyle}</style>
      <div className="stepComp">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="stepImg">
              <img src="/icons/Reglsvoorwaarden.svg" width="55" height="55" />
            </div>
            <div className="stepTxt">
              <p>Lees en accepteer de voorwaarden</p>
            </div>
            <div className="stepNr">
              <div className="nrBorder">1</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="stepImg">
              <img src="/icons/Person.svg" width="55" height="55" />
            </div>
            <div className="stepTxt">
              <p>Meld je aan bij Renorm</p>
            </div>
            <div className="stepNr">
              <div className="nrBorder">2</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="stepImg">
              <img src="/icons/Tijd.svg" width="55" height="55" />
            </div>
            <div className="stepTxt">
              <p>Plan je test</p>
            </div>
            <div className="stepNr">
              <div className="nrBorder">3</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="stepImg">
              <img src="/icons/Test.svg" width="55" height="55" />
            </div>
            <div className="stepTxt">
              <p>Test afnemen</p>
            </div>
            <div className="stepNr">
              <div className="nrBorder">4</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="stepImg">
              <img src="/icons/Ontvangen.svg" width="55" height="55" />
            </div>
            <div className="stepTxt">
              <p>Test resultaat ontvangen</p>
            </div>
            <div className="stepNr">
              <div className="nrBorder">5</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="stepImg">
              <img src="/icons/Ticketontvangen.svg" width="55" height="55" />
            </div>
            <div className="stepTxt">
              <p>Je ticket ontvangen</p>
            </div>
            <div className="stepNr">
              <div className="nrBorder">6</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="stepImg">
              <img src="/icons/Feest.svg" width="55" height="55" />
            </div>
            <div className="stepTxt">
              <p>Feesten op het evenement!</p>
            </div>
            <div className="stepNr">
              <div className="nrBorder">7</div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <h3>Doorloop deze stappen en je ontvangt je ticket.</h3>
        <div className="stepList">
          <div className="step">
            <div>1</div>
            <div>Lees en accepteer de voorwaarden</div>
            <div>
              <img src="/icons/list-numbered.svg" width="35" height="35" />
            </div>
          </div>
          <div className="step">
            <div>2</div>
            <div>Meld je aan bij Renorm</div>
            <div>
              <img src="/icons/login-24px.svg" width="35" height="35" />
            </div>
          </div>
          <div className="step">
            <div>3</div>
            <div>Vul je persoonlijke gegevens in</div>
            <div>
              <img src="/icons/how_to_reg-24px.svg" width="35" height="35" />
            </div>
          </div>
          <div className="step">
            <div>4</div>
            <div>Verifiëer je gegevens</div>
            <div>
              <img src="/icons/verified-24px.svg" width="35" height="35" />
            </div>
          </div>
          <div className="step">
            <div>5</div>
            <div>Testlocatie kiezen</div>
            <div>
              <img src="/icons/location_on-24px.svg" width="35" height="35" />
            </div>
          </div>
          <div className="step">
            <div>6</div>
            <div>Testmoment kiezen</div>
            <div>
              <img src="/icons/calendar.svg" width="35" height="35" />
            </div>
          </div>
          <div className="step">
            <div>7</div>
            <div>Test afnemen</div>
            <div>
              <img
                src="/icons/test-tube-svgrepo-com.svg"
                width="35"
                height="35"
              />
            </div>
          </div>
          <div className="step">
            <div>8</div>
            <div>Test resultaat ontvangen</div>
            <div>
              <img src="/icons/box-add.svg" width="35" height="35" />
            </div>
          </div>
          <div className="step">
            <div>9</div>
            <div>Je ticket ontvangen</div>
            <div>
              <img src="/icons/ticket.svg" width="35px" height="35" />
            </div>
          </div>
          <div className="step">
            <div>10</div>
            <div>Feesten op het festival</div>
            <div>
              <img src="/icons/celebration.svg" width="35" height="35" />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Steps;
