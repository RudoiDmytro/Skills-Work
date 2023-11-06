import { FunctionComponent } from "react";
import styles from "./JobDescriptionFormContainer.module.css";

const JobDescriptionFormContainer: FunctionComponent = () => {
  return (
    <div className={styles.jobDescriptionParent}>
      <div className={styles.jobDescription}>Job Description</div>
      <div className={styles.velstarIsA}>
        Velstar is a Shopify Plus agency, and we partner with brands to help
        them grow, we also do the same with our people!
      </div>
      <div
        className={styles.velstarIsA}
      >{`Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.`}</div>
      <div
        className={styles.velstarIsA}
      >{`The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platform`}</div>
      <div className={styles.velstarIsA}>
        Want to work with us? You're in good company!
      </div>
      <div className={styles.requirementsParent}>
        <div className={styles.requirements}>Requirements</div>
        <div className={styles.greatTroubleshootingAndContainer}>
          <ul className={styles.greatTroubleshootingAndAnal}>
            <li className={styles.greatTroubleshootingAnd}>
              Great troubleshooting and analytical skills combined with the
              desire to tackle challenges head-on
            </li>
            <li className={styles.greatTroubleshootingAnd}>
              3+ years of experience in back-end development working either with
              multiple smaller projects simultaneously or large-scale
              applications
            </li>
            <li className={styles.greatTroubleshootingAnd}>
              Experience with HTML, JavaScript, CSS, PHP, Symphony and/or
              Laravel
            </li>
            <li className={styles.greatTroubleshootingAnd}>
              Working regularly with APIs and Web Services (REST, GrapthQL,
              SOAP, etc)
            </li>
            <li className={styles.greatTroubleshootingAnd}>
              Have experience/awareness in Agile application development,
              commercial off-the-shelf software, middleware, servers and
              storage, and database management.
            </li>
            <li className={styles.greatTroubleshootingAnd}>
              Familiarity with version control and project management systems
              (e.g., Github, Jira)
            </li>
            <li className={styles.greatTroubleshootingAnd}>
              Great troubleshooting and analytical skills combined with the
              desire to tackle challenges head-on
            </li>
            <li>
              Ambitious and hungry to grow your career in a fast-growing agency
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.requirementsParent}>
        <div className={styles.requirements}>Desirable:</div>
        <div className={styles.greatTroubleshootingAndContainer}>
          <ul className={styles.greatTroubleshootingAndAnal}>
            <li className={styles.greatTroubleshootingAnd}>
              Working knowledge of eCommerce platforms, ideally Shopify but also
              others e.g. Magento, WooCommerce, Visualsoft to enable seamless
              migrations.
            </li>
            <li className={styles.greatTroubleshootingAnd}>
              Working knowledge of payment gateways
            </li>
            <li>API platform experience / Building restful APIs</li>
          </ul>
        </div>
      </div>
      <div className={styles.requirementsParent}>
        <div className={styles.requirements}>Benefits</div>
        <div className={styles.greatTroubleshootingAndContainer}>
          <ul className={styles.greatTroubleshootingAndAnal}>
            <li className={styles.greatTroubleshootingAnd}>
              Early finish on Fridays for our end of week catch up (4:30 finish,
              and drink of your choice from the bar)
            </li>
            <li className={styles.greatTroubleshootingAnd}>
              28 days holiday (including bank holidays) rising by 1 day per year
              PLUS an additional day off on your birthday
            </li>
            <li className={styles.greatTroubleshootingAnd}>
              Generous annual bonus.
            </li>
            <li className={styles.greatTroubleshootingAnd}>
              Healthcare package
            </li>
            <li className={styles.greatTroubleshootingAnd}>
              Paid community days to volunteer for a charity of your choice
            </li>
            <li className={styles.greatTroubleshootingAnd}>
              £100 contribution for your own personal learning and development
            </li>
            <li className={styles.greatTroubleshootingAnd}>
              Free Breakfast on Mondays and free snacks in the office
            </li>
            <li className={styles.greatTroubleshootingAnd}>
              Access to Perkbox with numerous discounts plus free points from
              the company to spend as you wish.
            </li>
            <li className={styles.greatTroubleshootingAnd}>
              Cycle 2 Work Scheme
            </li>
            <li className={styles.greatTroubleshootingAnd}>
              Brand new MacBook Pro
            </li>
            <li>
              Joining an agency on the cusp of exponential growth and being part
              of this exciting story.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionFormContainer;
