import { FunctionComponent } from "react";
import Tracker from "./Tracker";
import styles from "./TestimonialCard.module.css";

const TestimonialCard: FunctionComponent = () => {
  return (
    <section className={styles.testimonial}>
      <div className={styles.clientsTestimonial}>Clients Testimonial</div>
      <div className={styles.testimonial1}>
        <div className={styles.testimonial2}>
          <div className={styles.testimonial3}>
            <div className={styles.testimonialCard}>
              <div className={styles.top}>
                <div className={styles.rating}>
                  <img className={styles.star1Icon} alt="" src="/star-1.svg" />
                  <img className={styles.star1Icon} alt="" src="/star-1.svg" />
                  <img className={styles.star1Icon} alt="" src="/star-1.svg" />
                  <img className={styles.star1Icon} alt="" src="/star-1.svg" />
                  <img className={styles.star1Icon} alt="" src="/star-1.svg" />
                </div>
                <div className={styles.utUllamcorperHendrerit}>
                  “Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui.
                  Maecenas ac placerat metus, in faucibus est.”
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.customer}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className={styles.info}>
                    <div className={styles.robertFox}>Robert Fox</div>
                    <div className={styles.uiuxDesigner}>UI/UX designer</div>
                  </div>
                </div>
                <img className={styles.quoteIcon} alt="" src="/quote.svg" />
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.top}>
                <div className={styles.rating}>
                  <img className={styles.star1Icon} alt="" src="/star-1.svg" />
                  <img className={styles.star1Icon} alt="" src="/star-1.svg" />
                  <img className={styles.star1Icon} alt="" src="/star-1.svg" />
                  <img className={styles.star1Icon} alt="" src="/star-1.svg" />
                  <img className={styles.star1Icon} alt="" src="/star-1.svg" />
                </div>
                <div className={styles.utUllamcorperHendrerit}>
                  “Mauris eget lorem odio. Mauris convallis justo molestie metus
                  aliquam lacinia. Suspendisse ut dui vulputate augue
                  condimentum ornare. Morbi vitae tristique ante”
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.customer}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image1@2x.png"
                  />
                  <div className={styles.info}>
                    <div className={styles.robertFox}>Bessi Cuper</div>
                    <div className={styles.uiuxDesigner}>Creative director</div>
                  </div>
                </div>
                <img className={styles.quoteIcon} alt="" src="/quote.svg" />
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.top}>
                <div className={styles.rating}>
                  <img className={styles.star1Icon} alt="" src="/star-1.svg" />
                  <img className={styles.star1Icon} alt="" src="/star-1.svg" />
                  <img className={styles.star1Icon} alt="" src="/star-1.svg" />
                  <img className={styles.star1Icon} alt="" src="/star-1.svg" />
                  <img className={styles.star1Icon} alt="" src="/star-1.svg" />
                </div>
                <div className={styles.utUllamcorperHendrerit}>
                  “Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Suspendisse et magna quis nibh
                  accumsan venenatis sit amet id orci. Duis vestibulum bibendum
                  dapibus.”
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.customer}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image2@2x.png"
                  />
                  <div className={styles.info}>
                    <div className={styles.robertFox}>Jein Kuper</div>
                    <div className={styles.uiuxDesigner}>Photographer</div>
                  </div>
                </div>
                <img className={styles.quoteIcon} alt="" src="/quote.svg" />
              </div>
            </div>
          </div>
          <div className={styles.arrow}>
            <div className={styles.iconButton}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright1.svg"
              />
            </div>
            <div className={styles.iconButton1}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <Tracker
        div
        div1
        divBackgroundColor="#c0dbea"
        divBackgroundColor1="#c0dbea"
        divBackgroundColor2="#d14d72"
        divBackgroundColor3="#c0dbea"
        divBackgroundColor4="#c0dbea"
      />
    </section>
  );
};

export default TestimonialCard;
