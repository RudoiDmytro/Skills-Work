import { FunctionComponent, useState, useCallback } from "react";
import Pricing2 from "../components/Pricing2";
import PortalPopup from "../components/PortalPopup";
import EN from "../components/EN";
import Pagination from "../components/Pagination";
import Breadcrumb from "../components/Breadcrumb";
import { useNavigate } from "react-router-dom";
import Property1Intern1 from "../components/Property1Intern1";
import EmployersGoogleSizeMedium1 from "../components/EmployersGoogleSizeMedium1";
import Header from "../components/Header";
import AdvancedFilterForm from "../components/AdvancedFilterForm";
import FormContainer3 from "../components/FormContainer3";
import styles from "./JobList.module.css";

const JobList: FunctionComponent = () => {
  const [isPricing2Open, setPricing2Open] = useState(false);
  const [isENOpen, setENOpen] = useState(false);
  const navigate = useNavigate();

  const onFrameContainer20Click = useCallback(() => {
    navigate("/job-detail2");
  }, [navigate]);

  const onNavLinkContainerClick = useCallback(() => {
    navigate("/homepage2");
  }, [navigate]);

  const onNavLinkContainer1Click = useCallback(() => {
    navigate("/assessment2");
  }, [navigate]);

  const onNavLinkContainer3Click = useCallback(() => {
    navigate("/employers2");
  }, [navigate]);

  const openPricing2 = useCallback(() => {
    setPricing2Open(true);
  }, []);

  const closePricing2 = useCallback(() => {
    setPricing2Open(false);
  }, []);

  const openEN = useCallback(() => {
    setENOpen(true);
  }, []);

  const closeEN = useCallback(() => {
    setENOpen(false);
  }, []);

  return (
    <>
      <div className={styles.jobList2}>
        <Pagination
          fiarrowRight="/fiarrowright.svg"
          paginationPosition="absolute"
          paginationTop="1354px"
          paginationLeft="784px"
          paginationBackgroundColor="#d14d72"
          paginationBoxSizing="border-box"
          paginationBoxSizing1="border-box"
        />
        <Breadcrumb
          label="Пошук роботи"
          prop="/"
          label2="Знайти роботу"
          showLabel
          breadcrumbPosition="absolute"
          breadcrumbTop="138px"
          breadcrumbLeft="0px"
          breadcrumbWidth="1920px"
          breadcrumbAlignSelf="unset"
        />
        <div className={styles.frameParent} onClick={onFrameContainer20Click}>
          <div className={styles.jobParent}>
            <div className={styles.job}>
              <div className={styles.heading}>
                <div className={styles.techicalSupportSpecialist}>
                  Techical Support Specialist
                </div>
                <div className={styles.typeParent}>
                  <Property1Intern1 internship="Неповний робочий день" />
                  <div className={styles.testLibrary}>
                    Зарплата: $20 000 - $25 000
                  </div>
                </div>
              </div>
              <div className={styles.company}>
                <EmployersGoogleSizeMedium1
                  employersGoogleSizeMediumPadding="12px"
                  employersGoogleSizeMediumBoxSizing="border-box"
                />
                <div className={styles.info}>
                  <div className={styles.googleInc}>Google Inc.</div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
                <img
                  className={styles.bookmarksimpleIcon}
                  alt=""
                  src="/bookmarksimple.svg"
                />
              </div>
            </div>
            <div className={styles.job}>
              <div className={styles.heading}>
                <div className={styles.techicalSupportSpecialist}>
                  Senior UX Designer
                </div>
                <div className={styles.typeParent}>
                  <Property1Intern1 internship="Повний день" />
                  <div className={styles.testLibrary}>
                    Зарплата: $20 000 - $25 000
                  </div>
                </div>
              </div>
              <div className={styles.company}>
                <EmployersGoogleSizeMedium1
                  employersGoogleSizeMediumPadding="12px"
                  employersGoogleSizeMediumBoxSizing="border-box"
                />
                <div className={styles.info}>
                  <div className={styles.googleInc}>Google Inc.</div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
                <img
                  className={styles.bookmarksimpleIcon}
                  alt=""
                  src="/bookmarksimple.svg"
                />
              </div>
            </div>
            <div className={styles.job2}>
              <div className={styles.heading}>
                <div className={styles.techicalSupportSpecialist}>
                  Marketing Officer
                </div>
                <div className={styles.typeParent}>
                  <Property1Intern1 internship="Стажування" />
                  <div className={styles.testLibrary}>
                    Зарплата: $20 000 - $25 000
                  </div>
                </div>
              </div>
              <div className={styles.company}>
                <EmployersGoogleSizeMedium1
                  employersGoogleSizeMediumPadding="12px"
                  employersGoogleSizeMediumBoxSizing="border-box"
                />
                <div className={styles.info}>
                  <div className={styles.googleInc}>Google Inc.</div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
                <img
                  className={styles.bookmarksimpleIcon}
                  alt=""
                  src="/bookmarksimple.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.jobParent}>
            <div className={styles.job2}>
              <div className={styles.heading}>
                <div className={styles.techicalSupportSpecialist}>
                  Junior Graphic Designer
                </div>
                <div className={styles.typeParent}>
                  <Property1Intern1 internship="Стажування" />
                  <div className={styles.testLibrary}>
                    Зарплата: $20 000 - $25 000
                  </div>
                </div>
              </div>
              <div className={styles.company}>
                <EmployersGoogleSizeMedium1
                  employersGoogleSizeMediumPadding="12px"
                  employersGoogleSizeMediumBoxSizing="border-box"
                />
                <div className={styles.info}>
                  <div className={styles.googleInc}>Google Inc.</div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
                <img
                  className={styles.bookmarksimpleIcon}
                  alt=""
                  src="/bookmarksimple.svg"
                />
              </div>
            </div>
            <div className={styles.job2}>
              <div className={styles.heading}>
                <div className={styles.techicalSupportSpecialist}>
                  Interaction Designer
                </div>
                <div className={styles.typeParent}>
                  <Property1Intern1 internship="Неповний робочий день" />
                  <div className={styles.testLibrary}>
                    Зарплата: $20 000 - $25 000
                  </div>
                </div>
              </div>
              <div className={styles.company}>
                <EmployersGoogleSizeMedium1
                  employersGoogleSizeMediumPadding="12px"
                  employersGoogleSizeMediumBoxSizing="border-box"
                />
                <div className={styles.info}>
                  <div className={styles.googleInc}>Google Inc.</div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
                <img
                  className={styles.bookmarksimpleIcon}
                  alt=""
                  src="/bookmarksimple.svg"
                />
              </div>
            </div>
            <div className={styles.job2}>
              <div className={styles.heading}>
                <div className={styles.techicalSupportSpecialist}>
                  Project Manager
                </div>
                <div className={styles.typeParent}>
                  <Property1Intern1 internship="Повний день" />
                  <div className={styles.testLibrary}>
                    Зарплата: $20 000 - $25 000
                  </div>
                </div>
              </div>
              <div className={styles.company}>
                <EmployersGoogleSizeMedium1
                  employersGoogleSizeMediumPadding="12px"
                  employersGoogleSizeMediumBoxSizing="border-box"
                />
                <div className={styles.info}>
                  <div className={styles.googleInc}>Google Inc.</div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
                <img
                  className={styles.bookmarksimpleIcon}
                  alt=""
                  src="/bookmarksimple.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.jobParent}>
            <div className={styles.job2}>
              <div className={styles.heading}>
                <div className={styles.techicalSupportSpecialist}>
                  Software Engineer
                </div>
                <div className={styles.typeParent}>
                  <Property1Intern1 internship="Повний день" />
                  <div className={styles.testLibrary}>
                    Зарплата: $20 000 - $25 000
                  </div>
                </div>
              </div>
              <div className={styles.company}>
                <EmployersGoogleSizeMedium1
                  employersGoogleSizeMediumPadding="12px"
                  employersGoogleSizeMediumBoxSizing="border-box"
                />
                <div className={styles.info}>
                  <div className={styles.googleInc}>Google Inc.</div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
                <img
                  className={styles.bookmarksimpleIcon}
                  alt=""
                  src="/bookmarksimple.svg"
                />
              </div>
            </div>
            <div className={styles.job2}>
              <div className={styles.heading}>
                <div className={styles.techicalSupportSpecialist}>
                  Visual Designer
                </div>
                <div className={styles.typeParent}>
                  <Property1Intern1 internship="Повний день" />
                  <div className={styles.testLibrary}>
                    Зарплата: $20 000 - $25 000
                  </div>
                </div>
              </div>
              <div className={styles.company}>
                <EmployersGoogleSizeMedium1
                  employersGoogleSizeMediumPadding="12px"
                  employersGoogleSizeMediumBoxSizing="border-box"
                />
                <div className={styles.info}>
                  <div className={styles.googleInc}>Google Inc.</div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
                <img
                  className={styles.bookmarksimpleIcon}
                  alt=""
                  src="/bookmarksimple.svg"
                />
              </div>
            </div>
            <div className={styles.job}>
              <div className={styles.heading}>
                <div className={styles.techicalSupportSpecialist}>
                  Project Manager
                </div>
                <div className={styles.typeParent}>
                  <Property1Intern1 internship="Повний день" />
                  <div className={styles.testLibrary}>
                    Зарплата: $20 000 - $25 000
                  </div>
                </div>
              </div>
              <div className={styles.company}>
                <EmployersGoogleSizeMedium1
                  employersGoogleSizeMediumPadding="12px"
                  employersGoogleSizeMediumBoxSizing="border-box"
                />
                <div className={styles.info}>
                  <div className={styles.googleInc}>Google Inc.</div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
                <img
                  className={styles.bookmarksimpleIcon}
                  alt=""
                  src="/bookmarksimple.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.jobParent}>
            <div className={styles.job2}>
              <div className={styles.heading}>
                <div className={styles.techicalSupportSpecialist}>
                  UI/UX Designer
                </div>
                <div className={styles.typeParent}>
                  <Property1Intern1 internship="Повний день" />
                  <div className={styles.testLibrary}>
                    Зарплата: $20 000 - $25 000
                  </div>
                </div>
              </div>
              <div className={styles.company}>
                <EmployersGoogleSizeMedium1
                  employersGoogleSizeMediumPadding="12px"
                  employersGoogleSizeMediumBoxSizing="border-box"
                />
                <div className={styles.info}>
                  <div className={styles.googleInc}>Google Inc.</div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
                <img
                  className={styles.bookmarksimpleIcon}
                  alt=""
                  src="/bookmarksimple.svg"
                />
              </div>
            </div>
            <div className={styles.job2}>
              <div className={styles.heading}>
                <div className={styles.techicalSupportSpecialist}>
                  Product Designer
                </div>
                <div className={styles.typeParent}>
                  <Property1Intern1 internship="Повний день" />
                  <div className={styles.testLibrary}>
                    Зарплата: $20 000 - $25 000
                  </div>
                </div>
              </div>
              <div className={styles.company}>
                <EmployersGoogleSizeMedium1
                  employersGoogleSizeMediumPadding="12px"
                  employersGoogleSizeMediumBoxSizing="border-box"
                />
                <div className={styles.info}>
                  <div className={styles.googleInc}>Google Inc.</div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
                <img
                  className={styles.bookmarksimpleIcon}
                  alt=""
                  src="/bookmarksimple.svg"
                />
              </div>
            </div>
            <div className={styles.job2}>
              <div className={styles.heading}>
                <div className={styles.techicalSupportSpecialist}>
                  Networking Engineer
                </div>
                <div className={styles.typeParent}>
                  <Property1Intern1 internship="Стажування" />
                  <div className={styles.testLibrary}>
                    Зарплата: $20 000 - $25 000
                  </div>
                </div>
              </div>
              <div className={styles.company}>
                <EmployersGoogleSizeMedium1
                  employersGoogleSizeMediumPadding="12px"
                  employersGoogleSizeMediumBoxSizing="border-box"
                />
                <div className={styles.info}>
                  <div className={styles.googleInc}>Google Inc.</div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
                <img
                  className={styles.bookmarksimpleIcon}
                  alt=""
                  src="/bookmarksimple.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.jobParent}>
            <div className={styles.job2}>
              <div className={styles.heading}>
                <div className={styles.techicalSupportSpecialist}>
                  Front End розробник
                </div>
                <div className={styles.typeParent}>
                  <Property1Intern1 internship="Неповний робочий день" />
                  <div className={styles.testLibrary}>
                    Зарплата: $20 000 - $25 000
                  </div>
                </div>
              </div>
              <div className={styles.company}>
                <EmployersGoogleSizeMedium1
                  employersGoogleSizeMediumPadding="12px"
                  employersGoogleSizeMediumBoxSizing="border-box"
                />
                <div className={styles.info}>
                  <div className={styles.googleInc}>Google Inc.</div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
                <img
                  className={styles.bookmarksimpleIcon}
                  alt=""
                  src="/bookmarksimple.svg"
                />
              </div>
            </div>
            <div className={styles.job2}>
              <div className={styles.heading}>
                <div className={styles.techicalSupportSpecialist}>
                  Старший дизайнер UX
                </div>
                <div className={styles.typeParent}>
                  <Property1Intern1 internship="Повний день" />
                  <div className={styles.testLibrary}>
                    Зарплата: $20 000 - $25 000
                  </div>
                </div>
              </div>
              <div className={styles.company}>
                <EmployersGoogleSizeMedium1
                  employersGoogleSizeMediumPadding="12px"
                  employersGoogleSizeMediumBoxSizing="border-box"
                />
                <div className={styles.info}>
                  <div className={styles.googleInc}>Google Inc.</div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
                <img
                  className={styles.bookmarksimpleIcon}
                  alt=""
                  src="/bookmarksimple.svg"
                />
              </div>
            </div>
            <div className={styles.job2}>
              <div className={styles.heading}>
                <div className={styles.techicalSupportSpecialist}>
                  Менеджер з маркетингу
                </div>
                <div className={styles.typeParent}>
                  <Property1Intern1 internship="Стажування" />
                  <div className={styles.testLibrary}>
                    Зарплата: $20 000 - $25 000
                  </div>
                </div>
              </div>
              <div className={styles.company}>
                <EmployersGoogleSizeMedium1
                  employersGoogleSizeMediumPadding="12px"
                  employersGoogleSizeMediumBoxSizing="border-box"
                />
                <div className={styles.info}>
                  <div className={styles.googleInc}>Google Inc.</div>
                  <div className={styles.loaction}>
                    <img
                      className={styles.mappinIcon}
                      alt=""
                      src="/mappin.svg"
                    />
                    <div className={styles.ukraineKyiv}>Україна, Київ</div>
                  </div>
                </div>
                <img
                  className={styles.bookmarksimpleIcon}
                  alt=""
                  src="/bookmarksimple.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <Header />
        <AdvancedFilterForm
          searchByJobTittlePosition="Пошук за: назвою посади, посадою, ключовим словом..."
          city="Місто"
          primary={["Фільтри", "Знайти роботу"]}
          adbanceFilterTop="250px"
          adbanceFilterGap="12px"
          inputFieldBackgroundColor="#fff"
        />
        <div className={styles.frameGroup}>
          <div className={styles.navLinkParent}>
            <div className={styles.navLink} onClick={onNavLinkContainerClick}>
              <div className={styles.testLibrary}>Домашня сторінка</div>
            </div>
            <div className={styles.navLink} onClick={onNavLinkContainer1Click}>
              <div className={styles.testLibrary}>Бібліотека тестів</div>
            </div>
            <div className={styles.navLink2}>
              <b className={styles.testLibrary}>Пошук роботи</b>
            </div>
            <div className={styles.navLink} onClick={onNavLinkContainer3Click}>
              <div className={styles.testLibrary}>Роботодавці</div>
            </div>
            <div className={styles.navLink} onClick={openPricing2}>
              <div className={styles.testLibrary}>Цінові плани</div>
            </div>
            <div className={styles.navLink5}>
              <div className={styles.testLibrary}>Підтримка клієнтів</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.phonecallParent}>
              <img
                className={styles.bookmarksimpleIcon}
                alt=""
                src="/phonecall.svg"
              />
              <div className={styles.div}>+380-63-619-04-36</div>
            </div>
            <div className={styles.navLink6} onClick={openEN}>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-12@2x.png"
              />
              <div className={styles.englishParent}>
                <div className={styles.testLibrary}>Українська</div>
                <img
                  className={styles.fichevronDownIcon}
                  alt=""
                  src="/fichevrondown.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <FormContainer3 />
      </div>
      {isPricing2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePricing2}
        >
          <Pricing2 />
        </PortalPopup>
      )}
      {isENOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEN}
        >
          <EN />
        </PortalPopup>
      )}
    </>
  );
};

export default JobList;
