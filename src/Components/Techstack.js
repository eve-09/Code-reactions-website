import React from "react";
import "../Css/Techstack.css";

const Techstack = () => {
  return (
    <>
      <div className="tech-container">
        <div className="single-tech">
          <img
            src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
            alt="js"
            className="tech-img"
          />
          <p className="name">Javascript</p>
        </div>
        <div className="single-tech">
          <img
            src="https://webdesigntips.blog/wp-content/uploads/2019/02/TypeScript-vs-Flow-with-React-in-the-background.png"
            alt="typescript"
            className="tech-img"
          />
          <p className="name">TypeScript</p>
        </div>
        <div className="single-tech">
          <img
            src="https://i1.wp.com/eric.blog/wp-content/uploads/2015/02/react_logo.png?resize=300%2C300&strip=all&ssl=1"
            alt="react"
            className="tech-img"
          />
          <p className="name">React</p>
        </div>
        <div className="single-tech">
          <img
            src="data:image/png;base64,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"
            alt="gatsby"
            className="tech-img"
          />
          <p className="name">Gatsby</p>
        </div>
        <div className="single-tech">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMsIgnhx3piHEG3B1J-UR8mfEVSKlvbEYsaouU2R7tuVxuNeQ0Q3CxNpGXQ05v3B_Ivc&usqp=CAU"
            alt="redux"
            className="tech-img"
          />
          <p className="name">Redux</p>
        </div>
        <div className="single-tech">
          <img
            src="https://mobx.js.org/img/mobx.png"
            alt="mobx"
            className="tech-img"
          />
          <p className="name">MobX</p>
        </div>
        <div className="single-tech">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/firebase-3521427-2944871.png"
            alt="firebase"
            className="tech-img"
          />
          <p className="name">Firebase</p>
        </div>
        <div className="single-tech">
          <img
            src="https://image.pngaaa.com/681/876681-middle.png"
            alt="aws"
            className="tech-img"
          />
          <p className="name">AWS</p>
        </div>
        <div className="single-tech">
          <img
            src="https://didl.berkeley.edu/files/2019/09/Group-1.png"
            alt="gcp"
            className="tech-img"
          />
          <p className="name">Google Cloud</p>
        </div>

        <div className="single-tech">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png"
            alt="ethereum"
            className="tech-img"
          />
          <p className="name">Ethereum</p>
        </div>
        <div className="single-tech">
          <img
            src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-mongodb/events/mon.png"
            alt="mongodb"
            className="tech-img"
          />
          <p className="name">MongoDB</p>
        </div>
        <div className="single-tech">
          <img
            src="https://previews.123rf.com/images/jovanas/jovanas1612/jovanas161200791/68255878-sql-icon.jpg"
            alt="sql"
            className="tech-img"
          />
          <p className="name">SQL</p>
        </div>
        <div className="single-tech">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
            alt="postgres"
            className="tech-img"
          />
          <p className="name">PostgreSQL</p>
        </div>
        <div className="single-tech">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
            alt="node-js"
            className="tech-img"
          />
          <p className="name">Node.js</p>
        </div>
        <div className="single-tech">
          <img
            src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png"
            alt="nextjs"
            className="tech-img"
          />
          <p className="name">Next.JS</p>
        </div>
        <div className="single-tech">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
            alt="vuejs"
            className="tech-img"
          />
          <p className="name">Vue.js</p>
        </div>
        <div className="single-tech">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
            alt="svelte"
            className="tech-img"
          />
          <p className="name">Svelte</p>
        </div>
        <div className="single-tech">
          <img
            src="https://cdn.worldvectorlogo.com/logos/angular-icon.svg"
            alt="angular"
            className="tech-img"
          />
          <p className="name">Angular</p>
        </div>
        <div className="single-tech">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/4b228024863997.5633b53b3205f.png"
            alt="saas"
            className="tech-img"
          />
          <p className="name">SAAS</p>
        </div>
        <div className="single-tech">
          <img
            src="https://iconape.com/wp-content/files/qa/371510/svg/371510.svg"
            alt="storybook"
            className="tech-img"
          />
          <p className="name">Storybook</p>
        </div>
      </div>
    </>
  );
};

export default Techstack;
