import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../styles/code.css";

const Code = ({
  FullName,
  Thumbnail,
  URL,
  Description,
  KeyWords,
  FirstName,
  LastName,
  Address,
  Phone,
  Email,
  Socials,
  Experience,
  Education,
  Skills,
  Interests,
  Awards
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => { setCopied(false); }, 3000);
  };
  const Meta = {
    Facebook: ["facebook-f",""],
    WhatsApp: ["whatsapp",""],
    Instagram: ["instagram",""],
    Twitter: ["twitter",""],
    LinkedIn: ["linkedin-in",""],
    GitHub: ["github",""]
  };
  return (
    <div className="Code">
      <p>Copy the code below and paste it in your index.html file or you can test it on <a href="https://codepen.io/pen/" target="blank">Codepen</a></p>
      <pre className="box border rounded p-3">
      <CopyToClipboard text={`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="author" content="${FullName}" />
    <link rel="icon" type="image/x-icon" href="${Thumbnail}" />
    <meta property="og:title" content="${FullName}'s Portfolio" />
    <meta property="og:site_name" content="${FullName}'s Portfolio" />
    <meta property="og:url" content="${URL}" />
    <meta property="og:description" content="${Description}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${Thumbnail}" />
    <meta name="title" content="${FullName}'s Portfolio" />
    <meta name="description" content="${Description}" />
    <meta name="keywords" content="${KeyWords}" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${URL}" />
    <meta property="twitter:title" content="${FullName}'s Portfolio" />
    <meta property="twitter:description" content="${Description}" />
    <meta property="twitter:image" content="${Thumbnail}" />
    <title>${FullName}'s Portfolio</title>
    <!-- Font Awesome icons (free version)-->
    <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" crossorigin="anonymous"></script>
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="https://startbootstrap.github.io/startbootstrap-resume/css/styles.css" rel="stylesheet" />
  </head>
  <body id="page-top">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">${FullName}</span>
        <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="${Thumbnail}" alt="${FullName}" /></span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
        </ul>
      </div>
    </nav>
    <!-- Page Content-->
    <div class="container-fluid p-0">
      <!-- About-->
      <section class="resume-section" id="about">
        <div class="resume-section-content">
          <h1 class="mb-0">
            ${FirstName}
            <span class="text-primary">${LastName}</span>
          </h1>
          <div class="subheading mb-5">
            ${Address} &bull; ${Phone} &bull;
            <a href="mailto:${Email}">${Email}</a>
          </div>
          <p class="lead mb-5">${Description}</p>
          <div class="social-icons">
          ${Object.keys(Socials).map(
            soc =>
              `<a class="social-icon" href="${Meta[soc]}+${Socials[soc]}"><i class="fab fa-${Meta[soc]}"></i></a>`
          ).join(`
          `)}
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Experience-->
      <section class="resume-section" id="experience">
        <div class="resume-section-content">
          <h2 class="mb-5">Experience</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <p>${Experience}</p>
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Education-->
      <section class="resume-section" id="education">
        <div class="resume-section-content">
          <h2 class="mb-5">Education</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">${Education}</h3>
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Skills-->
      <section class="resume-section" id="skills">
        <div class="resume-section-content">
          <h2 class="mb-5">Skills</h2>
          <div class="subheading mb-3">${Skills}</div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Interests-->
      <section class="resume-section" id="interests">
        <div class="resume-section-content">
          <h2 class="mb-5">Interests</h2>
          <p>${Interests}</p>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Awards-->
      <section class="resume-section" id="awards">
        <div class="resume-section-content">
          <h2 class="mb-5">Awards & Certifications</h2>
          <ul class="fa-ul mb-0">
            <li>
              <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
              ${Awards}
            </li>
          </ul>
        </div>
      </section>
    </div>
    <!-- Bootstrap core JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Core theme JS-->
    <script src="https://startbootstrap.github.io/startbootstrap-resume/js/scripts.js"></script>
  </body>
</html>
`} onCopy={handleCopy}>
  <button id="copy" className={copied ? "copied" : ""} >
          { (copied ? "Copied!" : "Copy Code") }
        </button>
      </CopyToClipboard>
        {`<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="author" content="${FullName}" />
  <link rel="icon" type="image/x-icon" href="${Thumbnail}" />
  <meta property="og:title" content="${FullName}'s Portfolio" />
  <meta property="og:site_name" content="${FullName}'s Portfolio" />
  <meta property="og:url" content="${URL}" />
  <meta property="og:description" content="${Description}" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="${Thumbnail}" />
  <meta name="title" content="${FullName}'s Portfolio" />
  <meta name="description" content="${Description}" />
  <meta name="keywords" content="${KeyWords}" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="${URL}" />
  <meta property="twitter:title" content="${FullName}'s Portfolio" />
  <meta property="twitter:description" content="${Description}" />
  <meta property="twitter:image" content="${Thumbnail}" />
  <title>${FullName}'s Portfolio</title>
  <!-- Font Awesome icons (free version)-->
  <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" crossorigin="anonymous"></script>
  <!-- Google fonts-->
  <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
  <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
  <!-- Core theme CSS (includes Bootstrap)-->
  <link href="https://startbootstrap.github.io/startbootstrap-resume/css/styles.css" rel="stylesheet" />
</head>
<body id="page-top">
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">
      <span class="d-block d-lg-none">${FullName}</span>
      <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="${Thumbnail}" alt="${FullName}" /></span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
      </ul>
    </div>
  </nav>
  <!-- Page Content-->
  <div class="container-fluid p-0">
    <!-- About-->
    <section class="resume-section" id="about">
      <div class="resume-section-content">
        <h1 class="mb-0">
          ${FirstName}
          <span class="text-primary">${LastName}</span>
        </h1>
        <div class="subheading mb-5">
          ${Address} &bull; ${Phone} &bull;
          <a href="mailto:${Email}">${Email}</a>
        </div>
        <p class="lead mb-5">${Description}</p>
        <div class="social-icons">
          ${Object.keys(Socials).map(
            soc =>
              `<a class="social-icon" href="${Meta[soc][1]}${Socials[soc]}"><i class="fab fa-${Meta[soc][0]}"></i></a>`
          ).join(`
          `)}
        </div>
      </div>
    </section>
    <hr class="m-0" />
    <!-- Experience-->
    <section class="resume-section" id="experience">
      <div class="resume-section-content">
        <h2 class="mb-5">Experience</h2>
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <p>${Experience}</p>
          </div>
        </div>
      </div>
    </section>
    <hr class="m-0" />
    <!-- Education-->
    <section class="resume-section" id="education">
      <div class="resume-section-content">
        <h2 class="mb-5">Education</h2>
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">${Education}</h3>
          </div>
        </div>
      </div>
    </section>
    <hr class="m-0" />
    <!-- Skills-->
    <section class="resume-section" id="skills">
      <div class="resume-section-content">
        <h2 class="mb-5">Skills</h2>
        <div class="subheading mb-3">${Skills}</div>
      </div>
    </section>
    <hr class="m-0" />
    <!-- Interests-->
    <section class="resume-section" id="interests">
      <div class="resume-section-content">
        <h2 class="mb-5">Interests</h2>
        <p>${Interests}</p>
      </div>
    </section>
    <hr class="m-0" />
    <!-- Awards-->
    <section class="resume-section" id="awards">
      <div class="resume-section-content">
        <h2 class="mb-5">Awards & Certifications</h2>
        <ul class="fa-ul mb-0">
          <li>
            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
            ${Awards}
          </li>
        </ul>
      </div>
    </section>
  </div>
  <!-- Bootstrap core JS-->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  <!-- Core theme JS-->
  <script src="https://startbootstrap.github.io/startbootstrap-resume/js/scripts.js"></script>
  </body>
  </html>
   `}</pre>
   
   </div>
  );
};

export default Code;