import React from 'react';
import './styles.scss';


function App() {
  return (
    <div className="container">
      <section className='home'>
        <div className='homePrimary'>
          <nav className='homePrimaryNavbar'>
            <p className='homePrimaryNavbarLogo'>Loruki.</p>
            <ul className='homePrimaryNavbarOptions'>
              <li>Home</li>
              <li>Features</li>
              <li>Docs</li>
            </ul>
          </nav>
          <div className='homePrimaryBody'>
            <div className='homePrimaryBodyDeployment'>
              <h1 className='homePrimaryBodyDeploymentTitle'>Easier Deployment</h1>
              <p className='homePrimaryBodyDeploymentParagraph'>Deploy web apps all of kinds,from large scale enterprise APIs to static websites for individuals.Fill out the form to try a demo of our platform.</p>
              <button>Read More</button>
            </div>
            <form className='homePrimaryBodyRequest'>
              <h3 className='homePrimaryBodyRequestTitle'>Request a Demo</h3>
              <input type='text' placeholder='Name'/>
              <input type='text' placeholder='Company Name'/>
              <input type='text' placeholder='Email'/>
              <button>Send</button>
            </form>
          </div>
        </div>  
      </section>
      
      <section className='stats'>
        <div className='statsPrimary'>
          <h4 className='statsPrimaryTitle'>Welcome to the best platform for building applications of all types with modern architecture and scaling</h4>
          <div className='statsPrimaryContent'>
            <div className='statsPrimaryContentDetails'>
              <img className='statsPrimaryContentDetailsImg' src='./outline_dns_black_24dp.png'/>
              <h3 className='statsPrimaryContentDetailsAmount'>10,349,405</h3>
              <p className='statsPrimaryContentDetailsPara'>Deployments</p>
            </div>
        
            <div className='statsPrimaryContentDetails'>
              <img className='statsPrimaryContentDetailsImg' src='./outline_upload_black_24dp.png'/>
              <h3 className='statsPrimaryContentDetailsAmount'>987 TB</h3>
              <p className='statsPrimaryContentDetailsPara'>Published</p>
            </div>
          
            <div className='statsPrimaryContentDetails'>
              <img className='statsPrimaryContentDetailsImg' src='./outline_account_tree_black_24dp.png'/>
              <h3 className='statsPrimaryContentDetailsAmount'>2,343,265</h3>
              <p className='statsPrimaryContentDetailsPara'>Projects</p>
            </div>
          </div>
        </div>
        
        <div className='statsSecondary'>
          <img className='statsSecondaryImage' src='./cli.png'/>
          <div className='statsSecondaryCard'>
            <div className='statsSecondaryCardTitle'>
              <h3>Easy to use,cross platform CLI</h3>
            </div>
            <div className='statsSecondaryCardTitle'>  
              <h3>Deploy in seconds</h3>
            </div>
          </div>  
        </div>
      </section>

      <section className='secondary'>
        <div className='secondaryCloud'>
          <div className='secondaryCloudContent'>
            <div className='secondaryCloudContentDetails'>
              <h1 className='secondaryCloudContentDetailsTitle'>Extreme Cloud Hosting</h1>
              <p>Cloud hosting like you've never seen.Fast,efficient and scalable</p>
              <button className='secondaryCloudContentDetailsButton'>Read More</button>
            </div>
            <img className='secondaryCloudContentImage' src='./cloud.png'/>
          </div>
        </div>

        <div className='secondaryBody'>
          <div className='secondaryBodyTitle'>
            <h2>Supported Languages</h2>
          </div>
          <div className='secondaryBodyLanguages'>
            <div className='secondaryBodyLanguagesLogo'>
              <p className='secondaryBodyLanguagesLogoTitle'>Node.js</p>
              <img className='secondaryBodyLanguagesLogoImg' src='./logo/node.png'/>
            </div>
            <div className='secondaryBodyLanguagesLogo'>
              <p className='secondaryBodyLanguagesLogoTitle'>Python</p>
              <img className='secondaryBodyLanguagesLogoImg' src='./logo/python.png'/>
            </div>
            <div className='secondaryBodyLanguagesLogo'>
              <p className='secondaryBodyLanguagesLogoTitle'>c#</p>
              <img className='secondaryBodyLanguagesLogoImg' src='./logo/csharp.png'/>
            </div>
            <div className='secondaryBodyLanguagesLogo'>
              <p className='secondaryBodyLanguagesLogoTitle'>Ruby</p>
              <img className='secondaryBodyLanguagesLogoImg' src='./logo/ruby.png'/>
            </div>
            <div className='secondaryBodyLanguagesLogo'>
              <p className='secondaryBodyLanguagesLogoTitle'>PHP</p>
              <img className='secondaryBodyLanguagesLogoImg' src='./logo/php.png'/>
            </div>
            <div className='secondaryBodyLanguagesLogo'>
              <p className='secondaryBodyLanguagesLogoTitle'>Scala</p>
              <img className='secondaryBodyLanguagesLogoImg' src='./logo/scala.png'/>
            </div>
            <div className='secondaryBodyLanguagesLogo'>
              <p className='secondaryBodyLanguagesLogoTitle'>Clojure</p>
              <img className='secondaryBodyLanguagesLogoImg' src='./logo/clojure.png'/>
            </div>
          </div> 
        </div>

        <div className='secondaryFooter'>
          <div className='secondaryFooterContent'>
            <div className='secondaryFooterContentTitle'>
              <h1>Loruki</h1>
              <p>Copyright &copy; 2020</p>
            </div>
            <div className='secondaryFooterContentPages'>
              <p>Home</p>
              <p>Features</p>
              <p>Docs</p>
            </div>
            <div className='secondaryFooterContentLogo'>
              <img/>
              <img/>
              <img/>
              <img/>
            </div>
          </div>
        </div>
      </section>
    </div>  
  );
}

export default App;
