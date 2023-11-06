import { FunctionComponent } from "react";
import styles from "./JobDescriptionCard.module.css";

const JobDescriptionCard: FunctionComponent = () => {
  return (
    <div className={styles.jobDescriptionParent}>
      <div className={styles.jobDescription}>Описання роботи</div>
      <div className={styles.velstarIsA}>
        Velstar є агентством Shopify Plus, і ми співпрацюємо з брендами, щоб
        допомогти їм розвиватися, ми також робимо те саме з нашими людьми!
      </div>
      <div className={styles.velstarIsA}>
        Тут, у Velstar, ми не просто створюємо веб-сайти, ми створюємо
        винятковий цифровий досвід, який подобається споживачам. Наша команда
        дизайнерів, розробників, стратегів і творців працюють разом, щоб вивести
        бренди на новий рівень. Від міграції на платформу, взаємодії з
        користувачами та дизайну інтерфейсу користувача до цифрового маркетингу
        ми маємо підтверджену історію в наданні видатних рішень електронної
        комерції та стимулюванні продажів для наших клієнтів.
      </div>
      <div className={styles.velstarIsA}>
        Роль передбачатиме переведення специфікацій проекту в чистий, керований
        тестами код, який легко підтримувати. Ви працюватимете з командами
        проекту та розробки, а також з технічним директором, чітко дотримуючись
        планів проекту та виконуючи роботу, яка відповідає функціональним і
        нефункціональним вимогам. Ви матимете можливість створювати нові,
        інноваційні, безпечні та масштабовані функції для наших клієнтів на
        платформі Shopify
      </div>
      <div className={styles.velstarIsA}>{`Хочете працювати з нами? `}</div>
      <div className={styles.requirementsParent}>
        <div className={styles.requirements}>Вимоги</div>
        <div className={styles.greatTroubleshootingAndContainer}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              Чудові навички усунення несправностей і аналітичні навички в
              поєднанні з бажанням безпосередньо вирішувати проблеми
            </li>
            <li className={styles.li}>{`3+ роки досвіду роботи `}</li>
          </ul>
        </div>
      </div>
      <div className={styles.requirementsParent}>
        <div className={styles.requirements}>Бажано:</div>
        <div className={styles.greatTroubleshootingAndContainer}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              Практичне знання платформ електронної комерції, в ідеалі Shopify,
              а також інших, наприклад.g. Magento, WooCommerce, Visualsoft для
              безпроблемної міграції.
            </li>
            <li className={styles.li}>Робочі знання платіжних шлюзів</li>
            <li className={styles.li}>{`Досвід роботи з платформою API `}</li>
          </ul>
        </div>
      </div>
      <div className={styles.requirementsParent}>
        <div className={styles.requirements}>Переваги</div>
        <div className={styles.greatTroubleshootingAndContainer}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              Ранній фініш у п’ятницю, щоб наздогнати пропущене наприкінці тижня
              (завершення о 4:30 і напій на ваш вибір у барі)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionCard;
