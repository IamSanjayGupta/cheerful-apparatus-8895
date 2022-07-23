const topHeader = () => {
   return `<div class="topHeader">
   <div class="topHeader-rhs">
      <li>
         <span>Contact</span>
         <div class="contactDrop">
            <h4>Toll Free</h4>
            <a href="tel:+18887209500"><strong>US:</strong> +1 888 720 9500</a>
            <a href="tel:+18887911189"><strong>US:</strong> +1 888 791 1189</a>
            <a href="tel:+18334200996"><strong>US Sales:</strong> +1 833-420-0996</a>
            <a href="tel:+18334160441"><strong>CA Sales:</strong> +1 833-416-0441</a>
            <a href="tel:1800631268"><strong>Aus:</strong> 1800 631 268</a>
            <a href="tel:08000286590"><strong>UK:</strong> 0800 028 6590</a>
            <a href="tel:18005726673"><strong>IN:</strong> 1800 572 6673</a>
            <h4>Tel</h4>
            <a href="tel:+19259249500"><strong>Intl:</strong> +1 925 924 9500</a>
            <a href="tel:+864006608680"><strong>CN:</strong> +86 400 660 8680</a>
            <a href="tel:+15146739946"><strong>CA:</strong> +1 514 673 9946</a>
            <h4>Email</h4>
            <a href="mailto:sales@manageengine.com">sales@manageengine.com</a>
         </div>
      </li>
      <li>
         <a href="./storePage.html">Store</a>
      </li>
      <li>Partners</li>
      <li>Affiliate</li>
      <li>
         <span><i class="fa-solid fa-user"></i></span>
         <div class="userDrop">
            <a href="#">Login</a>
            <a>|</a>
            <a href="#">Register</a>
         </div>
      </li>
      <li>
         <span> <i class="fa-solid fa-magnifying-glass"> </i> </span>
         <div class="searchDrop">
            <input type="search" placeholder="Search..." id="advanceSearch" />
            <div class="searchSuggestions">
               <a href="#">Desktop Management</a>
               |
               <a href="#">On-premises</a>
               |
               <a href="#">OS Deployment</a>
               |
               <a href="#">Remote Access Software</a>
               |
               <a href="#">Asset Management</a>
               |
               <a href="#">Customer Support Software</a>
               |
               <a href="#">Help Desk Software</a>
               |
               <a href="#">Remote Support Software</a>
               |
               <a href="#">Active Directory Management and Reporting</a>
               |
               <a href="#">Active Directory Auditing</a>
               |
               <a href="#">Identity Password Management &amp;IT Self-Service</a>
               |
               <a href="#">Exchange Server Auditing &amp;Reporting</a>
               |
               <a href="#">Active Directory Backup &amp;Recovery Tool</a>
               |
               <a href="#">SharePoint Reporting &amp;Auditing</a>
               |
               <a href="#">File server auditing &amp;data discovery</a>
               |
               <a href="#">Active Directory Identity Management (AD360)</a>
               |
               <a href="#">Application Performance Monitoring (APM)</a>
               |
               <a href="#">Website Monitoring &amp;Server Monitoring (Cloud)</a>
               |
               <a href="#">Network Monitoring Software</a>
               |
               <a href="#">Bandwidth Monitoring &amp;Traffic Analysis</a>
               |
               <a href="#">Microsoft 365 Management and Reporting</a>
               |
               <a href="#">Mobile device management</a>
               |
               <a href="#">Browser security &amp;management</a>
               |
               <a href="#">Privileged Access Management</a>
            </div>
         </div>
      </li>
   </div>
</div>`;
};

const bottomHeader = () => {
   return ` <div class="bottomHeader">
   <div class="companyLogo">
      <img src="https://www.manageengine.com/images/logo/manageengine-logo.svg" alt="" />
      <img src="https://www.manageengine.com/images/me-20.png" alt="" />
   </div>
   <div class="navMenu">
      <li id="ProductMenu">
         <span>Products</span>
         <ul class="productOptions navMenuOptions">
            <li>
               <a>
                  <div class="tabIcon"><i class="fa-regular fa-id-badge"></i></div>
                  <div class="tabContent">
                     <p>Identity and access management</p>
                     <p class="subTitle">Active Directory & M365 management&nbsp; | &nbsp;MFA & SSO | Zero Trust | PAM</p>
                  </div>
               </a>
               <div class="optionSubOption1">
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Active Directory <br />management </a>
                        <span class="hdng-desc">Manage, track, and secure Active Directory.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="javascript:void(0);">
                              <span>ADManager Plus</span>
                              <p>Active Directory, Microsoft 365, and Exchange management and reporting</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/products/active-directory-audit/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>ADAudit Plus</span>
                              <p>Real-time Active Directory, file, and Windows server change auditing</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/products/self-service-password/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>ADSelfService Plus</span>
                              <p>Password self-service, endpoint MFA, conditional access, and enterprise SSO</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/products/exchange-reports/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>Exchange Reporter Plus</span>
                              <p>Reporting, auditing, and monitoring for hybrid Exchange and Skype</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/ad-recovery-manager/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>RecoveryManager Plus</span>
                              <p>Active Directory, Microsoft 365, and Exchange backup and recovery</p>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Identity governance <br />and administration</a>
                        <span class="hdng-desc">Orchestrate user identity management and access controls for Zero Trust.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="product.html">
                              <span>AD360</span>
                              <p>Workforce identity and access management for hybrid ecosystems</p>
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://www.manageengine.com/microsoft-365-management-reporting/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM"
                           >
                              <span>M365 Manager Plus</span>
                              <p>Microsoft 365 management, reporting, and auditing</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/identity-management/index.html?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>Identity Manager Plus</span>
                              <p>Secure single sign-on for enterprise applications</p>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Identity governance <br />and administration</a>
                        <span class="hdng-desc">Orchestrate user identity management and access controls for Zero Trust.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/privileged-access-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>PAM360</span>
                              <p>Complete privileged access security for enterprises</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/products/passwordmanagerpro/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>Password Manager Pro</span>
                              <p>Privileged password management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/privileged-session-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>Access Manager Plus</span>
                              <p>Secure remote access and privileged session management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/key-manager/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>Key Manager Plus</span>
                              <p>SSH key and SSL/TLS certificate management</p>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </li>
            <li>
               <a>
                  <div class="tabIcon" style="color: green"><i class="fa-solid fa-headphones-simple"></i></div>
                  <div class="tabContent">
                     <p>Enterprise service management</p>
                     <p class="subTitle">IT service delivery | Customer support | IT asset management</p>
                  </div>
               </a>
               <div class="optionSubOption1">
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Enterprise and IT service <br />management</a>
                        <span class="hdng-desc">Deliver a consistent employee experience across business functions.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/products/service-desk/?pos=MEhome&amp;loc=ProdMenu&amp;cat=servicemgmt">
                              <span>ServiceDesk Plus</span>
                              <p>Full-stack service management for enterprises</p>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Customer service <br />management</a>
                        <span class="hdng-desc">Build a one-stop portal for customers with efficient account management.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/products/support-center/?pos=MEhome&amp;loc=ProdMenu&amp;cat=servicemgmt">
                              <span>SupportCenter Plus</span>
                              <p>Customer support with built-in billing for businesses</p>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">IT asset <br />management</a>
                        <span class="hdng-desc">Centralize and automate the complete IT asset life cycle.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/products/asset-explorer/?pos=MEhome&amp;loc=ProdMenu&amp;cat=servicemgmt">
                              <span>AssetExplorer</span>
                              <p>IT asset management with an integrated CMDB</p>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </li>
            <li>
               <a>
                  <div class="tabIcon" style="color: rgb(255, 119, 0)"><i class="fa-solid fa-tv"></i></div>
                  <div class="tabContent">
                     <p>Unified endpoint management and security</p>
                     <p class="subTitle">Desktops | Laptops | Servers | Mobile devices | Browsers</p>
                  </div>
               </a>
               <div class="optionSubOption1">
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Endpoint management</a>
                        <span class="hdng-desc">Automate OS deployment, patching, MDM, and other asset management routines.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/products/desktop-central/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Endpoint Central<span class="dcnamechange">(formerly Desktop Central)</span> </span>
                              <p>Unified endpoint management and security</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/mobile-device-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Mobile Device Manager Plus</span>
                              <p>Comprehensive mobile device management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/patch-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Patch Manager Plus</span>
                              <p>Automated multi-OS patch management</p>
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://www.manageengine.com/sccm-third-party-patch-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS"
                           >
                              <span>Patch Connect Plus</span>
                              <p>Automatic patching of third-party software</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/products/os-deployer/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>OS Deployer</span>
                              <p>OS imaging and deployment</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/remote-desktop-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Remote Access Plus</span>
                              <p>Enterprise remote access</p>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Endpoint security</a>
                        <span class="hdng-desc">Proactively secure all your endpoints and browsers from cyberattacks.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/vulnerability-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Vulnerability Manager Plus</span>
                              <p>Prioritization-focused enterprise vulnerability management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/device-control/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Device Control Plus</span>
                              <p>Data loss prevention for peripheral devices</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/application-control/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Application Control Plus</span>
                              <p>Software discovery and endpoint privilege management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/browser-security/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Browser Security Plus</span>
                              <p>Browser security and management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/endpoint-dlp/index.html?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Endpoint DLP Plus</span>
                              <p>Advanced data loss prevention for endpoints</p>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </li>
            <li>
               <a>
                  <div class="tabIcon" style="color: orange"><i class="fa-solid fa-server"></i></div>
                  <div class="tabContent">
                     <p>IT operations management</p>
                     <p class="subTitle">Network monitoring | Server monitoring | Applications management</p>
                  </div>
               </a>
               <div class="optionSubOption1">
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Network and server <br />performance monitoring</a>
                        <span class="hdng-desc">Manage and optimize network, server, and application performance.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/it-operations-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=ITOM">
                              <span>OpManager Plus</span>
                              <p>Unified network, server, and application management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/network-monitoring/?pos=MEhome&amp;loc=ProdMenu&amp;cat=ITOM">
                              <span>OpManager</span>
                              <p>Network performance monitoring</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/products/netflow/?pos=MEhome&amp;loc=ProdMenu&amp;cat=ITOM">
                              <span>NetFlow Analyzer</span>
                              <p>Bandwidth monitoring and traffic analysis</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/network-configuration-manager/?pos=MEhome&amp;loc=ProdMenu&amp;cat=ITOM">
                              <span>Network Configuration Manager</span>
                              <p>Network change and configuration management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/products/firewall/?pos=MEhome&amp;loc=ProdMenu&amp;cat=ITOM">
                              <span>Firewall Analyzer</span>
                              <p>Firewall rule, configuration, and log management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/products/oputils/?pos=MEhome&amp;loc=ProdMenu&amp;cat=ITOM">
                              <span>OpUtils</span>
                              <p>IP address and switch port management</p>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Application performance <br />monitoring</a>
                        <span class="hdng-desc">Monitor, manage, and troubleshoot application performance.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/products/applications_manager/?pos=MEhome&amp;loc=ProdMenu&amp;cat=ITOM">
                              <span>Applications Manager</span>
                              <p>Server and application performance monitoring</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.site24x7.com/?pos=MEhome&amp;loc=ProdMenu&amp;cat=ITOM" target="_blank">
                              <span>Site24x7</span>
                              <p>Full-stack monitoring for IT admins, DevOps, and SREs</p>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">IT incident <br />management </a>
                        <span class="hdng-desc">Get instant alerts for critical incidents and provide real-time status updates.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/alarmsone/?pos=MEhome&amp;loc=ProdMenu&amp;cat=ITOM">
                              <span>AlarmsOne</span>
                              <p>Centralized IT alert management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.site24x7.com/statusiq/?pos=MEhome&amp;loc=ProdMenu&amp;cat=ITOM" target="_blank">
                              <span>Site24x7 StatusIQ</span>
                              <p>Status pages for real-time status and incident communication</p>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </li>
            <li>
               <a>
                  <div class="tabIcon" style="color: orangered"><i class="fa-solid fa-shield-halved"></i></div>
                  <div class="tabContent">
                     <p>Security information and event management</p>
                     <p class="subTitle">Log management | Security auditing | Threat detection and<br />response | UEBA</p>
                  </div>
               </a>
               <div class="optionSubOption1">
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">SIEM </a>
                        <span class="hdng-desc">Spot, investigate, and neutralize security threats.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/log-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=SIEM">
                              <span>Log360</span>
                              <p>Integrated SIEM with advanced threat analytics and ML-driven UEBA</p>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Log and compliance management</a>
                        <span class="hdng-desc">Gain deeper visibility into security events and ensure compliance.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/products/eventlog/?pos=MEhome&amp;loc=ProdMenu&amp;cat=SIEM">
                              <span>EventLog Analyzer</span>
                              <p>Comprehensive log and IT compliance management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/products/firewall/?pos=MEhome&amp;loc=ProdMenu&amp;cat=SIEM">
                              <span>Firewall Analyzer</span>
                              <p>Firewall rule, configuration, and log management</p>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Security auditing</a>
                        <span class="hdng-desc">Audit Active Directory, cloud platforms and files to enhance your security posture.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/products/active-directory-audit/?pos=MEhome&amp;loc=ProdMenu&amp;cat=SIEM">
                              <span>ADAudit Plus</span>
                              <p>Real-time Active Directory, file, and Windows server change auditing</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/sharepoint-management-reporting/?pos=MEhome&amp;loc=ProdMenu&amp;cat=SIEM">
                              <span>SharePoint Manager Plus</span>
                              <p>SharePoint reporting and auditing</p>
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://www.manageengine.com/microsoft-365-security-protection/?pos=MEhome&amp;loc=ProdMenu&amp;cat=SIEM"
                           >
                              <span>M365 Security Plus</span>
                              <p>Microsoft 365 security</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/cloud-security/?pos=MEhome&amp;loc=ProdMenu&amp;cat=SIEM">
                              <span>Cloud Security Plus</span>
                              <p>Cloud security monitoring and analytics</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/data-security/?pos=MEhome&amp;loc=ProdMenu&amp;cat=SIEM">
                              <span>DataSecurity Plus</span>
                              <p>File auditing, data leak prevention, and data risk assessment</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/file-analysis/index.html?pos=MEhome&amp;loc=ProdMenu&amp;cat=SIEM">
                              <span>FileAnalysis</span>
                              <p>File security and storage analysis</p>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </li>
            <li>
               <a>
                  <div class="tabIcon" style="color: rgb(253, 95, 253)"><i class="fa-solid fa-chart-pie"></i></div>
                  <div class="tabContent">
                     <p>Advanced IT analytics</p>
                     <p class="subTitle">IT operational analytics | Predictive analytics | Augmented analytics</p>
                  </div>
               </a>
               <div class="optionSubOption1">
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">IT analytics</a>
                        <span class="hdng-desc">Connect to your IT applications and visualize all facets of your IT.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/analytics-plus/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IT_analytics">
                              <span>Analytics Plus</span>
                              <p>AI-enabled IT analytics for enterprises</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.site24x7.com/cloudspend/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IT_analytics" target="_blank">
                              <span>Site24x7 CloudSpend</span>
                              <p>Cloud cost management for modern software teams</p>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </li>
            <li>
               <a>
                  <div class="tabIcon" style="color: orange"><i class="fa-solid fa-code"></i></div>
                  <div class="tabContent">
                     <p>Low-code app development</p>
                     <p class="subTitle">Business process management | Workflow automation | Custom apps</p>
                  </div>
               </a>
               <div class="optionSubOption1">
                  <h2 class="tab-title sub-heading">
                     <a href="javascript:void(0);">Custom solution builder</a>
                     <span class="hdng-desc">Build tailor-made apps to automate operations at your organization.</span>
                  </h2>
                  <ul class="products-lists">
                     <li>
                        <a href="https://www.manageengine.com/appcreator/?pos=MEhome&amp;loc=ProdMenu&amp;cat=MELowcode">
                           <span>AppCreator</span>
                           <p>Advanced low-code platform for building powerful applications</p>
                        </a>
                     </li>
                  </ul>
               </div>
            </li>
            <li>
               <a>
                  <div class="tabIcon" style="color: violet"><i class="fa-solid fa-cloud"></i></div>
                  <div class="tabContent">
                     <p>Cloud solutions for enterprise IT</p>
                     <p class="subTitle">Cloud-native applications | Zoho business applications for IT</p>
                  </div>
               </a>
               <div class="optionSubOption1">
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Cloud-native solutions for IT management</a>
                        <span class="hdng-desc">Monitor, manage, audit, and secure your multi-cloud<br />and hybrid infrastructure.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a
                              href="https://www.manageengine.com/identity-management/index.html?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions"
                           >
                              <span>Identity Manager Plus</span>
                              <p>Secure single sign-on for enterprise applications</p>
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://www.manageengine.com/products/service-desk/?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions"
                           >
                              <span>ServiceDesk Plus</span>
                              <p>Full-stack service management for enterprises</p>
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://www.manageengine.com/products/desktop-central/cloud/index.html?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions"
                           >
                              <span>Endpoint Central<span class="dcnamechange">(formerly Desktop Central)</span></span>
                              <p>Unified endpoint management and security</p>
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://www.manageengine.com/mobile-device-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions"
                           >
                              <span>Mobile Device Manager Plus</span>
                              <p>Comprehensive mobile device management</p>
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://www.manageengine.com/remote-desktop-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions"
                           >
                              <span>Remote Access Plus</span>
                              <p>Enterprise remote access</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/patch-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions">
                              <span>Patch Manager Plus</span>
                              <p>Automated multi-OS patch management</p>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.site24x7.com/?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions" target="_blank">
                              <span>Site24x7</span>
                              <p>Full-stack monitoring for IT admins, DevOps, and SREs</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.site24x7.com/statusiq/?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions" target="_blank">
                              <span>Site24x7 StatusIQ</span>
                              <p>Status pages for real-time status and incident communication</p>
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://www.site24x7.com/cloudspend/?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions"
                              target="_blank"
                           >
                              <span>Site24x7 CloudSpend</span>
                              <p>Cloud cost management for modern software teams</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/alarmsone/?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions">
                              <span>AlarmsOne</span>
                              <p>Centralized IT alert management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/cloud-log-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions">
                              <span>Log360 Cloud</span>
                              <p>Secure log management from the cloud</p>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Business applications for IT</a>
                        <span class="hdng-desc">Boost productivity and improve team collaboration.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/analytics.html?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions">
                              <span>Zoho Analytics</span>
                              <p>Advanced IT analytics</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/creator.html?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions">
                              <span>Zoho Creator</span>
                              <p>Low-code application development platform</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/assist.html?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions">
                              <span>Zoho Assist</span>
                              <p>Remote support software</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/projects.html?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions">
                              <span>Zoho Projects</span>
                              <p>Collaborative project management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/sprints.html?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions">
                              <span>Zoho Sprints</span>
                              <p>Agile project management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/workplace.html?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions">
                              <span>Zoho Workplace</span>
                              <p>All-in-one collaboration tool for unified communication</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/mail.html?pos=MEhome&amp;loc=ProdMenu&amp;cat=MECloudsolutions">
                              <span>Zoho Mail</span>
                              <p>Secure email hosting solution for businesses</p>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </li>
            <li>
               <a>
                  <div class="tabIcon" style="color: orangered"><i class="fa-regular fa-chart-bar"></i></div>
                  <div class="tabContent">
                     <p>IT management for MSPs</p>
                     <p class="subTitle">RMM | UEM | ITSM | ITOM | IAM</p>
                  </div>
               </a>
               <div class="optionSubOption1">
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Solutions for MSPs</a>
                        <span class="hdng-desc">Grow your MSP business with scalable and secure IT management solutions.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/remote-monitoring-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IT_MSPs">
                              <span>RMM Central </span>
                              <p>Unified network monitoring and endpoint management for MSPs</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/active-directory-manager-msp/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IT_MSPs">
                              <span>ADManager Plus MSP </span>
                              <p>Unified Active Directory management and reporting solution for MSPs</p>
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://www.manageengine.com/privileged-access-management-msp/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IT_MSPs"
                           >
                              <span>PAM360</span>
                              <p>Complete privileged access security for enterprises</p>
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://www.manageengine.com/products/passwordmanagerpro/password-management-msp.html?pos=MEhome&amp;loc=ProdMenu&amp;cat=IT_MSPs"
                           >
                              <span>Password Manager Pro</span>
                              <p>Privileged password management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/products/service-desk-msp/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IT_MSPs">
                              <span>ServiceDesk Plus MSP</span>
                              <p>Full-stack service management for enterprises</p>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/desktop-management-msp/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IT_MSPs">
                              <span>Endpoint Central MSP<span class="dcnamechange">(formerly Desktop Central MSP)</span></span>
                              <p>Unified endpoint management and security</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/mobile-device-management-msp/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IT_MSPs">
                              <span>Mobile Device Manager Plus MSP</span>
                              <p>Comprehensive mobile device management</p>
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://www.manageengine.com/network-monitoring-msp/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IT_MSPs"
                              target="_blank"
                           >
                              <span>OpManager MSP</span>
                              <p>Network performance monitoring</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.site24x7.com/msp.html?pos=MEhome&amp;loc=ProdMenu&amp;cat=IT_MSPs" target="_blank">
                              <span>Site24x7</span>
                              <p>Full-stack monitoring for IT admins, DevOps, and SREs</p>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </li>
         </ul>
      </li>
      <li id="SolutionMenu">
         <span>Solutions</span>
         <ul class="solutionOptions navMenuOptions">
            <li>
               <a> Key solutions </a>
               <div class="optionSubOption1" style="display: flex">
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Active Directory <br />management </a>
                        <span class="hdng-desc">Manage, track, and secure Active Directory.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="javascript:void(0);">
                              <span>ADManager Plus</span>
                              <p>Active Directory, Microsoft 365, and Exchange management and reporting</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/products/active-directory-audit/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>ADAudit Plus</span>
                              <p>Real-time Active Directory, file, and Windows server change auditing</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/products/self-service-password/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>ADSelfService Plus</span>
                              <p>Password self-service, endpoint MFA, conditional access, and enterprise SSO</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/products/exchange-reports/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>Exchange Reporter Plus</span>
                              <p>Reporting, auditing, and monitoring for hybrid Exchange and Skype</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/ad-recovery-manager/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>RecoveryManager Plus</span>
                              <p>Active Directory, Microsoft 365, and Exchange backup and recovery</p>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Identity governance <br />and administration</a>
                        <span class="hdng-desc">Orchestrate user identity management and access controls for Zero Trust.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/active-directory-360/index.html?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>AD360</span>
                              <p>Workforce identity and access management for hybrid ecosystems</p>
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://www.manageengine.com/microsoft-365-management-reporting/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM"
                           >
                              <span>M365 Manager Plus</span>
                              <p>Microsoft 365 management, reporting, and auditing</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/identity-management/index.html?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>Identity Manager Plus</span>
                              <p>Secure single sign-on for enterprise applications</p>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Identity governance <br />and administration</a>
                        <span class="hdng-desc">Orchestrate user identity management and access controls for Zero Trust.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/privileged-access-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>PAM360</span>
                              <p>Complete privileged access security for enterprises</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/products/passwordmanagerpro/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>Password Manager Pro</span>
                              <p>Privileged password management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/privileged-session-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>Access Manager Plus</span>
                              <p>Secure remote access and privileged session management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/key-manager/?pos=MEhome&amp;loc=ProdMenu&amp;cat=IAM">
                              <span>Key Manager Plus</span>
                              <p>SSH key and SSL/TLS certificate management</p>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </li>
            <li>
               <a> Industry solutons </a>
               <div class="optionSubOption1">
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Enterprise and IT service <br />management</a>
                        <span class="hdng-desc">Deliver a consistent employee experience across business functions.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/products/service-desk/?pos=MEhome&amp;loc=ProdMenu&amp;cat=servicemgmt">
                              <span>ServiceDesk Plus</span>
                              <p>Full-stack service management for enterprises</p>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Customer service <br />management</a>
                        <span class="hdng-desc">Build a one-stop portal for customers with efficient account management.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/products/support-center/?pos=MEhome&amp;loc=ProdMenu&amp;cat=servicemgmt">
                              <span>SupportCenter Plus</span>
                              <p>Customer support with built-in billing for businesses</p>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">IT asset <br />management</a>
                        <span class="hdng-desc">Centralize and automate the complete IT asset life cycle.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/products/asset-explorer/?pos=MEhome&amp;loc=ProdMenu&amp;cat=servicemgmt">
                              <span>AssetExplorer</span>
                              <p>IT asset management with an integrated CMDB</p>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </li>
            <li>
               <a> IT audit compliance solution </a>
               <div class="optionSubOption1">
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Endpoint management</a>
                        <span class="hdng-desc">Automate OS deployment, patching, MDM, and other asset management routines.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/products/desktop-central/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Endpoint Central<span class="dcnamechange">(formerly Desktop Central)</span> </span>
                              <p>Unified endpoint management and security</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/mobile-device-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Mobile Device Manager Plus</span>
                              <p>Comprehensive mobile device management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/patch-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Patch Manager Plus</span>
                              <p>Automated multi-OS patch management</p>
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://www.manageengine.com/sccm-third-party-patch-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS"
                           >
                              <span>Patch Connect Plus</span>
                              <p>Automatic patching of third-party software</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/products/os-deployer/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>OS Deployer</span>
                              <p>OS imaging and deployment</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/remote-desktop-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Remote Access Plus</span>
                              <p>Enterprise remote access</p>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="tab-title sub-heading">
                        <a href="javascript:void(0);">Endpoint security</a>
                        <span class="hdng-desc">Proactively secure all your endpoints and browsers from cyberattacks.</span>
                     </h2>
                     <ul class="products-lists">
                        <li>
                           <a href="https://www.manageengine.com/vulnerability-management/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Vulnerability Manager Plus</span>
                              <p>Prioritization-focused enterprise vulnerability management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/device-control/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Device Control Plus</span>
                              <p>Data loss prevention for peripheral devices</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/application-control/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Application Control Plus</span>
                              <p>Software discovery and endpoint privilege management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/browser-security/?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Browser Security Plus</span>
                              <p>Browser security and management</p>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.manageengine.com/endpoint-dlp/index.html?pos=MEhome&amp;loc=ProdMenu&amp;cat=UEMS">
                              <span>Endpoint DLP Plus</span>
                              <p>Advanced data loss prevention for endpoints</p>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </li>
            <li class="lastoption"></li>
         </ul>
      </li>
      <li id="CompanyMenu">
         <span>Company</span>
         <ul class="companyOptions bottombrder">
            <li>
               <a>About us</a>
            </li>
            <li>
               <a>Customers &nbsp; <i class="fa-solid fa-angle-right"></i></a>
               <ul class="optionSubOption">
                  <li><a>Customer directory</a></li>
                  <li><a>Case Studies</a></li>
                  <li><a>Video testimonials</a></li>
               </ul>
            </li>
            <li>
               <a>Media &nbsp; <i class="fa-solid fa-angle-right"></i></a>
               <ul class="optionSubOption">
                  <li><a>In the news</a></li>
                  <li><a>Press releases</a></li>
                  <li><a>Product awards</a></li>
                  <li><a>Product rewiews</a></li>
                  <li><a>Product contacts</a></li>
                  <li><a>Press kit</a></li>
               </ul>
            </li>
            <li>
               <a>Analyst relations &nbsp; <i class="fa-solid fa-angle-right"></i></a>
               <ul class="optionSubOption">
                  <li><a>Schedule briefing</a></li>
                  <li><a>Analyst reports</a></li>
               </ul>
            </li>
            <li><a>Insights</a></li>
            <li><a>Academy</a></li>
            <li><a>Blogs</a></li>
            <li><a>Newsletters</a></li>
            <li><a>Partners</a></li>
            <li><a>Careers</a></li>
            <li><a>Contact us</a></li>
            <li class="lastoption"><a></a></li>
         </ul>
      </li>
      <li id="SupportMenu">
         <span>Support</span>
         <ul class="supportOptions bottombrder">
            <li>
               <a>Resources &nbsp; <i class="fa-solid fa-angle-right"></i></a>
               <ul class="optionSubOption">
                  <li><a>Knowledge base</a></li>
                  <li><a>White papers</a></li>
                  <li><a>Product documents</a></li>
                  <li><a>System requirements</a></li>
                  <li><a>Servcie packs</a></li>
               </ul>
            </li>
            <li><a>Contact support</a></li>
            <li><a>Request a demo</a></li>
            <li><a>Training & certificatations</a></li>
            <li><a>Video Loung</a></li>
            <li><a>Security Responce Center</a></li>
            <li class="lastoption"><a></a></li>
         </ul>
      </li>
      <li id="EventMenu">
         <span>Events</span>
         <ul class="eventOptions bottombrder">
            <li><a>Webinars</a></li>
            <li><a>On demand webinars</a></li>
            <li><a>Virtual events</a></li>
            <li><a>Online shopss</a></li>
            <li><a>Podcast</a></li>
            <li><a>Seminar</a></li>
            <li><a>Workshops</a></li>
            <li><a>User conferences</a></li>
            <li><a>Industry events</a></li>
            <li class="lastoption"><a>View all events</a></li>
         </ul>
      </li>
   </div>
   <div class="downloadBtn">
      <button id="FreeDownloadBtn">FREE DOWNLOADS</button>
   </div>
</div>`;
};

export { topHeader, bottomHeader };
