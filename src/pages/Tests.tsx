import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import Breadcrumb from "../components/Breadcrumb";
import FormContainer1 from "../components/FormContainer1";
import Property1Intern1 from "../components/Property1Intern1";
import EmployersGoogleSizeMedium1 from "../components/EmployersGoogleSizeMedium1";
import AdvancedFilterForm from "../components/AdvancedFilterForm";
import Header3 from "../components/Header3";
import styles from "./Tests.module.css";

const Tests: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNavLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavLinkContainer2Click = useCallback(() => {
    navigate("/job-list");
  }, [navigate]);

  const onNavLinkContainer3Click = useCallback(() => {
    navigate("/employers");
  }, [navigate]);

  const onFrameContainer20Click = useCallback(() => {
    navigate("/assessment");
  }, [navigate]);

  return (
    <div className={styles.tests}>
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
        label="Find Job"
        label1="Home"
        prop="/"
        label2="Find job"
        showLabel
        breadcrumbPosition="absolute"
        breadcrumbTop="138px"
        breadcrumbLeft="0px"
        breadcrumbWidth="1920px"
        breadcrumbAlignSelf="unset"
      />
      <FormContainer1
        callNow="Call now:"
        prop="000 -00-000-00-00"
        quickLink="Quick Link"
        about="About"
        contact="Contact"
        pricing="Pricing"
        blog="Blog"
        candidate="Candidate"
        browseJobs="Browse Jobs"
        browseEmployers="Browse Employers"
        skillsTesting="Skills testing"
        savedJobs="Saved Jobs"
        employers="Employers"
        postAJob="Post a Job"
        browseCandidates="Browse Candidates"
        assessment="Assessment"
        applications="Applications"
        support="Support"
        faqs="Faqs"
        privacyPolicy="Privacy Policy"
        termsConditions={`Terms & Conditions`}
        skillsWorkAllRightsRser={`@ 2023 Skills&Work. All rights Rserved`}
      />
      <div className={styles.frameParent} onClick={onFrameContainer20Click}>
        <div className={styles.jobParent}>
          <div className={styles.job}>
            <div className={styles.heading}>
              <div className={styles.techicalSupportSpecialist}>
                Techical Support Specialist
              </div>
              <div className={styles.typeParent}>
                <Property1Intern1 internship="Part-time" />
                <div className={styles.salary20000}>
                  Salary: $20,000 - $25,000
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
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.ukraineKyiv}>Ukraine, Kyiv</div>
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
                <Property1Intern1 internship="Full-Time" />
                <div className={styles.salary20000}>
                  Salary: $20,000 - $25,000
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
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.ukraineKyiv}>Ukraine, Kyiv</div>
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
                <Property1Intern1 internship="Internship" />
                <div className={styles.salary20000}>
                  Salary: $20,000 - $25,000
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
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.ukraineKyiv}>Ukraine, Kyiv</div>
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
                <Property1Intern1 internship="Internship" />
                <div className={styles.salary20000}>
                  Salary: $20,000 - $25,000
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
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.ukraineKyiv}>Ukraine, Kyiv</div>
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
                <Property1Intern1 internship="Part-time" />
                <div className={styles.salary20000}>
                  Salary: $20,000 - $25,000
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
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.ukraineKyiv}>Ukraine, Kyiv</div>
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
                <Property1Intern1 internship="Full-Time" />
                <div className={styles.salary20000}>
                  Salary: $20,000 - $25,000
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
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.ukraineKyiv}>Ukraine, Kyiv</div>
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
                <Property1Intern1 internship="Full-Time" />
                <div className={styles.salary20000}>
                  Salary: $20,000 - $25,000
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
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.ukraineKyiv}>Ukraine, Kyiv</div>
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
                <Property1Intern1 internship="Full-Time" />
                <div className={styles.salary20000}>
                  Salary: $20,000 - $25,000
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
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.ukraineKyiv}>Ukraine, Kyiv</div>
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
                <Property1Intern1 internship="Full-Time" />
                <div className={styles.salary20000}>
                  Salary: $20,000 - $25,000
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
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.ukraineKyiv}>Ukraine, Kyiv</div>
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
                <Property1Intern1 internship="Full-Time" />
                <div className={styles.salary20000}>
                  Salary: $20,000 - $25,000
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
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.ukraineKyiv}>Ukraine, Kyiv</div>
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
                <Property1Intern1 internship="Full-Time" />
                <div className={styles.salary20000}>
                  Salary: $20,000 - $25,000
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
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.ukraineKyiv}>Ukraine, Kyiv</div>
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
                <Property1Intern1 internship="Internship" />
                <div className={styles.salary20000}>
                  Salary: $20,000 - $25,000
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
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.ukraineKyiv}>Ukraine, Kyiv</div>
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
                Front End Developer
              </div>
              <div className={styles.typeParent}>
                <Property1Intern1 internship="Part-time" />
                <div className={styles.salary20000}>
                  Salary: $20,000 - $25,000
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
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.ukraineKyiv}>Ukraine, Kyiv</div>
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
                Senior UX Designer
              </div>
              <div className={styles.typeParent}>
                <Property1Intern1 internship="Full-Time" />
                <div className={styles.salary20000}>
                  Salary: $20,000 - $25,000
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
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.ukraineKyiv}>Ukraine, Kyiv</div>
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
                Marketing Manager
              </div>
              <div className={styles.typeParent}>
                <Property1Intern1 internship="Internship" />
                <div className={styles.salary20000}>
                  Salary: $20,000 - $25,000
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
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.ukraineKyiv}>Ukraine, Kyiv</div>
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
      <AdvancedFilterForm
        searchByJobTittlePosition="Search by: Job tittle, Position, Keyword..."
        city="City"
        primary={["Filters", "Find Job"]}
        adbanceFilterTop="238px"
        adbanceFilterGap="12px"
        inputFieldBackgroundColor="#fff"
      />
      <Header3
        pageTitles="Home"
        testLibraryTitle="Test library"
        jobSearchTitle="Find job"
        employerNames="Employers"
        pricingPlansTitle="Pricing Plans"
        customerSupportTitle="Customer Supports"
        pageTitleDimensions="/image-1@2x.png"
        languageOptions="English"
        countryName="Ukraine"
        jobInfoKeywords="Job tittle, keyword, company"
        propJustifyContent="space-between"
        propGap="unset"
        propWidth="1920px"
        propAlignSelf="unset"
        propWidth1="unset"
        propBoxShadow="0px -2px 0px #0a65cc inset"
        propColor="#0a65cc"
        propFontWeight="bold"
        propWidth2="59px"
        propWidth3="55px"
        propFlexShrink="0"
        propBoxShadow1="unset"
        propCursor="pointer"
        propColor1="#5e6670"
        propFontWeight1="unset"
        propWidth4="104px"
        propCursor1="unset"
        onNavLinkContainerClick={onNavLinkContainerClick}
        onNavLinkContainer2Click={onNavLinkContainer2Click}
        onNavLinkContainer3Click={onNavLinkContainer3Click}
      />
    </div>
  );
};

export default Tests;
