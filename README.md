
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/tsg-iitkgp/web-frontend">
    <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/86282911/293505563-4c4ecabf-bbee-4cc3-86bc-0500f890f867.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA/20231231/us-east-1/s3/aws4_request&X-Amz-Date=20231231T123604Z&X-Amz-Expires=300&X-Amz-Signature=a3645b7ca15972407adbba4131f12f86922a5213688aaacb05db73d6ff60d213&X-Amz-SignedHeaders=host&actor_id=86282911&key_id=0&repo_id=406055266" alt="Logo" width="80" height="80">
  </a>


  <h3 align="center">
    TSG Site Frontend
  </h3>

  <p align="center">
    <!-- <a href="https://github.com/tsg-iitkgp/web-frontend"><strong>Explore the docs »</strong></a> -->
    <!-- <br /> -->
    <!-- <a href="https://github.com/tsg-iitkgp/web-frontend">
    View Demo
    </a>
    · -->
    <a href="https://github.com/tsg-iitkgp/web-frontend/issues">
    Report Bug
    </a>
    ·
    <a href="https://github.com/tsg-iitkgp/web-frontend/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details>

<summary>
Table of Contents
</summary>

- [Development](#development)
  - [Libraries/Frameworks Used](#librariesframeworks-used)
  - [File Structure](#file-structure)
  - [Setting Up Locally](#setting-up-locally)
    - [Bare metal](#bare-metal)
    - [Docker](#docker) 
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)
- [Additional Documentation](#additional-documentaiton)

</details>

<!-- Development -->
## Development

#### Libraries/Frameworks Used

This project has been built with the following technologies.

- [Next.js](https://nextjs.org/) (App Router)
- [React 18](https://react.dev)
- [Bootstrap / React-Bootstrap](https://react-bootstrap.netlify.app/)
- [Material-UI v4](https://v4.mui.com/)
- [FullCalendar](https://fullcalendar.io/)
- [Nivo Charts](https://nivo.rocks/)

#### File Structure

```
.
├── public/          # Static assets & data
├── src/
│   ├── app/         # Next.js App Router pages & layouts
│   ├── components/  # Reusable React components
│   ├── constants/   # API endpoints & constants
│   ├── data/        # Static data files (JSON, JS)
│   ├── images/      # Image assets
│   ├── routes/      # Route helpers
│   ├── Societies/   # Society profile components
│   ├── styles/      # Global & component CSS
│   └── views/       # Page-level view components
├── next.config.js   # Next.js configuration
├── Dockerfile       # Docker build
└── docker-compose.yml
```

- `public`: Contains static assets (images, data files, HTML fallbacks).
- `src`: Contains all source code
  - `app`: Next.js App Router — pages, layouts, and route segments.
  - `components`: Reusable React components (Navbar, Footer, Cards, etc.).
  - `constants`: API endpoint definitions.
  - `data`: Static data (contacts, elections, societies).
  - `images`: Image and icon assets.
  - `routes`: Route helpers (e.g. PrivateRoute).
  - `Societies`: Society profile page components.
  - `styles`: Global and component-level CSS.
  - `views`: Full-page view components.

#### Setting Up Locally

> **Prerequisites:** [Node.js](https://nodejs.org/) v18+ and npm (bundled with Node.js).

##### Using npm (recommended)

```sh
# Clone the repository
git clone https://github.com/tsg-iitkgp/web-frontend.git
cd web-frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:3000`.

##### Available Scripts

| Command              | Description                        |
| -------------------- | ---------------------------------- |
| `npm run dev`        | Start Next.js dev server           |
| `npm run build`      | Create a production build          |
| `npm start`          | Serve the production build         |
| `npm run lint`       | Run ESLint checks                  |
| `npm run format`     | Format code with Prettier          |
| `npm run format:check` | Check formatting without changes |

##### Docker

- Install [docker](https://www.docker.com/get-started) and `docker-compose`. For ubuntu, follow the comamnds below:
  ```sh
  sudo apt install docker.io docker-compose
  ```
- Start the container using `docker-compose.yml` file
  ```sh
  sudo docker-compose up -d
  ```
- The site will be hosted at `http://localhost:8000`

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

> [!Note]
> For any ideas, suggestions or queries regarding the website, mail us at <tech.coordi@iitkgp.ac.in>

#### Present Technology Coordinator(s)

Name|Email|Phone No.
-----|-----|---------
[Daksh Yadav](https://github.com/dakshyadav1810) | <dakshyadav.iitkgp@gmail.com> | +91-8795675974
[Devansh Soni](https://github.com/indenigrate) | <devanshsoni.iitkgp@gmail.com> | +91-7999892181

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)

<p align="right">(<a href="#top">back to top</a>)</p>

## Additional Documentation

- [Changelogs](/.github/CHANGELOG.md)
- [License](/LICENSE)
- [Security Policy](/.github/SECURITY.md)
- [Code of Conduct](/.github/CODE_OF_CONDUCT.md)
- [Contribution Guidelines](/.github/CONTRIBUTING.md)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/tsg-iitkgp/web-frontend.svg?style=for-the-badge
[contributors-url]: https://github.com/tsg-iitkgp/web-frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tsg-iitkgp/web-frontend.svg?style=for-the-badge
[forks-url]: https://github.com/tsg-iitkgp/web-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/tsg-iitkgp/web-frontend.svg?style=for-the-badge
[stars-url]: https://github.com/tsg-iitkgp/web-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/tsg-iitkgp/web-frontend.svg?style=for-the-badge
[issues-url]: https://github.com/tsg-iitkgp/web-frontend/issues
[license-shield]: https://img.shields.io/github/license/tsg-iitkgp/web-frontend.svg?style=for-the-badge
[license-url]: https://github.com/tsg-iitkgp/web-frontend/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/technology-students-gymkhana-iit-kharagpur/
