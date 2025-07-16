import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScrollToTop } from '@/components/ScrollToTop';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Portfolio from '@/pages/Portfolio';
import Products from '@/pages/Products';
import Services from '@/pages/Services';
import Careers from '@/pages/Careers';
import News from '@/pages/News';
import Blog from '@/pages/Blog';

// Service Category Pages
import WebDevelopment from '@/pages/services/WebDevelopment';
import MobileApps from '@/pages/services/MobileApps';
import AIMachineLearning from '@/pages/services/AIMachineLearning';
import DataAnalytics from '@/pages/services/DataAnalytics';
import CloudSolutions from '@/pages/services/CloudSolutions';
import DigitalMarketing from '@/pages/services/DigitalMarketing';
import SoftwareDevelopment from '@/pages/services/SoftwareDevelopment';
import CreativeDesign from '@/pages/services/CreativeDesign';
import ConsultingServices from '@/pages/services/ConsultingServices';
import DevOpsServices from '@/pages/services/DevOpsServices';
import Cybersecurity from '@/pages/services/Cybersecurity';
import QATestingServices from '@/pages/services/QATestingServices';

// Individual Service Pages
import SEOServices from '@/pages/services/SEOServices';
import UIUXDesign from '@/pages/services/UIUXDesign';
import LogoDesign from '@/pages/services/LogoDesign';
import BrochureDesign from '@/pages/services/BrochureDesign';
import WebsiteDesign from '@/pages/services/WebsiteDesign';
import SearchEngineMarketing from '@/pages/services/SearchEngineMarketing';
import SocialMediaMarketing from '@/pages/services/SocialMediaMarketing';
import PayPerClickManagement from '@/pages/services/PayPerClickManagement';
import ContentMarketing from '@/pages/services/ContentMarketing';

// Web Development
import ReactJS from '@/pages/services/web-development/ReactJS';
import Angular from '@/pages/services/web-development/Angular';
import VueJS from '@/pages/services/web-development/VueJS';
import NodeJS from '@/pages/services/web-development/NodeJS';

// Mobile Apps
import Android from '@/pages/services/mobile-apps/Android';
import IOSDevelopment from '@/pages/services/mobile-apps/iOS';
import Flutter from '@/pages/services/mobile-apps/Flutter';

// AI/ML
import MachineLearning from '@/pages/services/ai-ml/MachineLearning';
import ComputerVision from '@/pages/services/ai-ml/ComputerVision';
import NaturalLanguageProcessing from '@/pages/services/ai-ml/NaturalLanguageProcessing';

// Cloud Solutions
import AWS from '@/pages/services/cloud-solutions/AWS';
import Azure from '@/pages/services/cloud-solutions/Azure';
import GoogleCloud from '@/pages/services/cloud-solutions/GoogleCloud';

// Technology Pages
import ReactDevelopment from '@/pages/technologies/ReactDevelopment';
import NodeJSDevelopment from '@/pages/technologies/NodeJSDevelopment';
import IoTSolutions from '@/pages/technologies/IoTSolutions';
import BlockchainDevelopment from '@/pages/technologies/BlockchainDevelopment';
import ARVRDevelopment from '@/pages/technologies/ARVRDevelopment';

// Add missing consulting service imports
import NetSuiteConsultant from '@/pages/services/NetSuiteConsultant';
import SoftwareConsultant from '@/pages/services/SoftwareConsultant';
import SharePointDevelopment from '@/pages/services/SharePointDevelopment';
import ITStrategyConsulting from '@/pages/services/ITStrategyConsulting';
import RecruitmentService from '@/pages/services/RecruitmentService';

// Blog Pages
import LogisticsLeadersVehicleRelocation from '@/pages/blog/LogisticsLeadersVehicleRelocation';
import AutomationSoftwareTestingCourse from '@/pages/blog/AutomationSoftwareTestingCourse';
import AIFutureEnterpriseSolutions from '@/pages/blog/AIFutureEnterpriseSolutions';
import CloudSecurityBestPractices from '@/pages/blog/CloudSecurityBestPractices';

// Newly created sub-service pages
import WindowsAppDevelopment from '@/pages/services/WindowsAppDevelopment';
import XamarinAppDevelopment from '@/pages/services/XamarinAppDevelopment';
import HybridAppDevelopment from '@/pages/services/HybridAppDevelopment';
import NativeAppDevelopment from '@/pages/services/NativeAppDevelopment';
import SEOCopywriting from '@/pages/services/SEOCopywriting';
import BrandConsulting from '@/pages/services/BrandConsulting';
import LeadManagementSystem from '@/pages/services/LeadManagementSystem';
import CRMSoftwareDevelopment from '@/pages/services/CRMSoftwareDevelopment';
import EducationalWebPortal from '@/pages/services/EducationalWebPortal';
import RestaurantWebPortal from '@/pages/services/RestaurantWebPortal';
import HealthCarePortal from '@/pages/services/HealthCarePortal';
import TravelPortal from '@/pages/services/TravelPortal';
import RealEstatePortal from '@/pages/services/RealEstatePortal';
import HRPayrollSoftware from '@/pages/services/HRPayrollSoftware';
import JewellerySoftware from '@/pages/services/JewellerySoftware';
import CRMSoftware from '@/pages/services/CRMSoftware';
import RealEstateSoftware from '@/pages/services/RealEstateSoftware';
import InventoryManagementSoftware from '@/pages/services/InventoryManagementSoftware';
import HospitalManagementSoftware from '@/pages/services/HospitalManagementSoftware';
import SchoolManagementSoftware from '@/pages/services/SchoolManagementSoftware';
import SoftwareTesting from '@/pages/services/SoftwareTesting';
import SecurityTesting from '@/pages/services/SecurityTesting';
import PerformanceTesting from '@/pages/services/PerformanceTesting';
import EcommerceDevelopment from '@/pages/services/EcommerceDevelopment';

// Technology Pages
import HtmlCss from '@/pages/technologies/HtmlCss';
import AngularJsJs from '@/pages/technologies/AngularJsJs';
import AjaxJson from '@/pages/technologies/AjaxJson';
import Jquery from '@/pages/technologies/Jquery';
import JqueryUI from '@/pages/technologies/JqueryUI';
import Drupal from '@/pages/technologies/Drupal';
import Joomla from '@/pages/technologies/Joomla';
import Wordpress from '@/pages/technologies/Wordpress';
import Php from '@/pages/technologies/Php';
import Java from '@/pages/technologies/Java';
import SqlDatabase from '@/pages/technologies/SqlDatabase';
import SqlServer from '@/pages/technologies/SqlServer';
import Oracle from '@/pages/technologies/Oracle';
import JavaTesting from '@/pages/technologies/JavaTesting';
import Shell from '@/pages/technologies/Shell';
import UnitTesting from '@/pages/technologies/UnitTesting';
import SystemTesting from '@/pages/technologies/SystemTesting';
import IntegrationTesting from '@/pages/technologies/IntegrationTesting';
import Architecture from '@/pages/technologies/Architecture';
import Sdlc from '@/pages/technologies/Sdlc';
import DeploymentAutomation from '@/pages/technologies/DeploymentAutomation';
import SoftwareTestingTech from '@/pages/technologies/SoftwareTesting';
import Iis from '@/pages/technologies/Iis';
import Tomcat from '@/pages/technologies/Tomcat';
import Apache from '@/pages/technologies/Apache';
import Jboss from '@/pages/technologies/Jboss';
import Mongodb from '@/pages/technologies/Mongodb';
import Cassandra from '@/pages/technologies/Cassandra';
import Redis from '@/pages/technologies/Redis';
import Godaddy from '@/pages/technologies/Godaddy';
import GoogleCloudTech from '@/pages/technologies/GoogleCloud';
import AwsTech from '@/pages/technologies/Aws';
import Python from '@/pages/technologies/Python';
import Perl from '@/pages/technologies/Perl';
import JspJsf from '@/pages/technologies/JspJsf';
import JavaFrameworks from '@/pages/technologies/JavaFrameworks';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 1,
//       refetchOnWindowFocus: false,
//     },
//   },
// });

import Apply from '@/pages/Apply';

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/apply" element={<Apply />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />

          {/* Service Category Routes */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/ai-ml" element={<AIMachineLearning />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/creative-design" element={<CreativeDesign />} />
          <Route path="/services/consulting" element={<ConsultingServices />} />
          <Route path="/services/devops" element={<DevOpsServices />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/qa-testing" element={<QATestingServices />} />

          {/* Individual Service Routes */}
          <Route path="/services/seo-services" element={<SEOServices />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/services/logo-design" element={<LogoDesign />} />
          <Route path="/services/brochure-design" element={<BrochureDesign />} />
          <Route path="/services/website-design" element={<WebsiteDesign />} />
          <Route path="/services/search-engine-marketing" element={<SearchEngineMarketing />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/pay-per-click-management" element={<PayPerClickManagement />} />
          <Route path="/services/content-marketing" element={<ContentMarketing />} />

          {/* Consulting Service Routes */}
          <Route path="/services/netsuite-consultant" element={<NetSuiteConsultant />} />
          <Route path="/services/software-consultant" element={<SoftwareConsultant />} />
          <Route path="/services/sharepoint-development" element={<SharePointDevelopment />} />
          <Route path="/services/it-strategy-consulting" element={<ITStrategyConsulting />} />
          <Route path="/services/recruitment-service" element={<RecruitmentService />} />

          {/* Web Development Technology Routes */}
          <Route path="/services/web-development/reactjs" element={<ReactJS />} />
          <Route path="/services/web-development/angular" element={<Angular />} />
          <Route path="/services/web-development/vuejs" element={<VueJS />} />
          <Route path="/services/web-development/nodejs" element={<NodeJS />} />

          {/* Mobile App Routes */}
          <Route path="/services/mobile-apps/android-development" element={<Android />} />
          <Route path="/services/mobile-apps/ios-development" element={<IOSDevelopment />} />
          <Route path="/services/mobile-apps/flutter" element={<Flutter />} />

          {/* AI/ML Routes */}
          <Route path="/services/ai-ml/machine-learning" element={<MachineLearning />} />
          <Route path="/services/ai-ml/computer-vision" element={<ComputerVision />} />
          <Route path="/services/ai-ml/natural-language-processing" element={<NaturalLanguageProcessing />} />

          {/* Cloud Solutions Routes */}
          <Route path="/services/cloud-solutions/aws" element={<AWS />} />
          <Route path="/services/cloud-solutions/azure" element={<Azure />} />
          <Route path="/services/cloud-solutions/google-cloud" element={<GoogleCloud />} />

          {/* Technology Routes */}
          <Route path="/technologies/html-css" element={<HtmlCss />} />
          <Route path="/technologies/angular-js" element={<AngularJsJs />} />
          <Route path="/technologies/ajax-json" element={<AjaxJson />} />
          <Route path="/technologies/jquery" element={<Jquery />} />
          <Route path="/technologies/jquery-ui" element={<JqueryUI />} />
          <Route path="/technologies/drupal" element={<Drupal />} />
          <Route path="/technologies/joomla" element={<Joomla />} />
          <Route path="/technologies/wordpress" element={<Wordpress />} />
          <Route path="/technologies/php" element={<Php />} />
          <Route path="/technologies/java" element={<Java />} />
          <Route path="/technologies/nodejs-development" element={<NodeJSDevelopment />} />
          <Route path="/technologies/react-development" element={<ReactDevelopment />} />
          <Route path="/technologies/iot-solutions" element={<IoTSolutions />} />
          <Route path="/technologies/blockchain-development" element={<BlockchainDevelopment />} />
          <Route path="/technologies/ar-vr-development" element={<ARVRDevelopment />} />
          <Route path="/technologies/sql-database" element={<SqlDatabase />} />
          <Route path="/technologies/sql-server" element={<SqlServer />} />
          <Route path="/technologies/oracle" element={<Oracle />} />
          <Route path="/technologies/java-testing" element={<JavaTesting />} />
          <Route path="/technologies/shell" element={<Shell />} />
          <Route path="/technologies/unit-testing" element={<UnitTesting />} />
          <Route path="/technologies/system-testing" element={<SystemTesting />} />
          <Route path="/technologies/integration-testing" element={<IntegrationTesting />} />
          <Route path="/technologies/architecture" element={<Architecture />} />
          <Route path="/technologies/sdlc" element={<Sdlc />} />
          <Route path="/technologies/deployment-automation" element={<DeploymentAutomation />} />
          <Route path="/technologies/software-testing" element={<SoftwareTestingTech />} />
          <Route path="/technologies/iis" element={<Iis />} />
          <Route path="/technologies/tomcat" element={<Tomcat />} />
          <Route path="/technologies/apache" element={<Apache />} />
          <Route path="/technologies/jboss" element={<Jboss />} />
          <Route path="/technologies/mongodb" element={<Mongodb />} />
          <Route path="/technologies/cassandra" element={<Cassandra />} />
          <Route path="/technologies/redis" element={<Redis />} />
          <Route path="/technologies/godaddy" element={<Godaddy />} />
          <Route path="/technologies/google-cloud" element={<GoogleCloudTech />} />
          <Route path="/technologies/aws" element={<AwsTech />} />
          <Route path="/technologies/python" element={<Python />} />
          <Route path="/technologies/perl" element={<Perl />} />
          <Route path="/technologies/jsp-jsf" element={<JspJsf />} />
          <Route path="/technologies/java-frameworks" element={<JavaFrameworks />} />

          {/* Blog Routes */}
          <Route path="/blog/logistics-leaders-vehicle-relocation" element={<LogisticsLeadersVehicleRelocation />} />
          <Route path="/blog/automation-software-testing-course" element={<AutomationSoftwareTestingCourse />} />
          <Route path="/blog/ai-future-enterprise-solutions" element={<AIFutureEnterpriseSolutions />} />
          <Route path="/blog/cloud-security-best-practices" element={<CloudSecurityBestPractices />} />

          {/* Newly created sub-service routes */}
          <Route path="/services/windows-app-development" element={<WindowsAppDevelopment />} />
          <Route path="/services/xamarin-app-development" element={<XamarinAppDevelopment />} />
          <Route path="/services/hybrid-app-development" element={<HybridAppDevelopment />} />
          <Route path="/services/native-app-development" element={<NativeAppDevelopment />} />
          <Route path="/services/seo-copywriting" element={<SEOCopywriting />} />
          <Route path="/services/brand-consulting" element={<BrandConsulting />} />
          <Route path="/services/lead-management-system" element={<LeadManagementSystem />} />
          <Route path="/services/crm-software-development" element={<CRMSoftwareDevelopment />} />
          <Route path="/services/educational-web-portal" element={<EducationalWebPortal />} />
          <Route path="/services/restaurant-web-portal" element={<RestaurantWebPortal />} />
          <Route path="/services/healthcare-portal" element={<HealthCarePortal />} />
          <Route path="/services/travel-portal" element={<TravelPortal />} />
          <Route path="/services/real-estate-portal" element={<RealEstatePortal />} />
          <Route path="/services/hr-payroll-software" element={<HRPayrollSoftware />} />
          <Route path="/services/jewellery-software" element={<JewellerySoftware />} />
          <Route path="/services/crm-software" element={<CRMSoftware />} />
          <Route path="/services/real-estate-software" element={<RealEstateSoftware />} />
          <Route path="/services/inventory-management-software" element={<InventoryManagementSoftware />} />
          <Route path="/services/hospital-management-software" element={<HospitalManagementSoftware />} />
          <Route path="/services/school-management-software" element={<SchoolManagementSoftware />} />
          <Route path="/services/software-testing" element={<SoftwareTesting />} />
          <Route path="/services/security-testing" element={<SecurityTesting />} />
          <Route path="/services/performance-testing" element={<PerformanceTesting />} />
          <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
        </Routes>
      </Router>
    // </QueryClientProvider>
  );
}

export default App;
