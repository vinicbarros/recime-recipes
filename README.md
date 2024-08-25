<div align="center"><img src="https://i.imgur.com/UrtsPXR.png"></img></div>
<hr>
<h2 align=center>ReciMe Recipes</h2>
<h3 align=center>Web Application | Front-End Project</h3>
<hr>
<h4 align=center>Built with Next.js + TypeScript + Styled-components</h4>

<h4 align=center>The main goal of this coding challenge was to display a list of trending recipes and ability to filter those recipes by difficulty.</h4>

<br>

<div align=center style="display: flex; flex-direction: row; justify-content: center; gap: 5%;">
  <div>
    <img width="500px" src="https://i.imgur.com/cerbbvc.png">
  </div>
  <div>
    <img width="500px" src="https://i.imgur.com/tF58pZB.png">
  </div>
</div>

## ⭐️ Application Features:

- [x] Trending Recipes list
- [x] Filter by difficulty
- [x] Animations
- [x] Responsive Design
- [x] Loading

## 📄 Approach and Decisions:

### Project Structure
I structured the project using Next.js to take advantage of its server-side rendering capabilities, which ensure fast initial load times and SEO benefits. The components are organized in a way that promotes reusability and maintainability.

### API Simulation
I simulated an API request to fetch the recipe data on client-side. This approach mimics real-world scenarios where data would typically come from a backend service. The simulated API request allows for easy adaptation to a real API in the future.

### Filtering Logic
For the filtering by difficulty, I implemented a system where:

- All recipes are displayed, but those matching the selected difficulty are highlighted with a distinct border color and ordered first in the list. This decision was made to meet the challenge requirements while enhancing the user's ability to visually differentiate recipes based on difficulty.

### UI/UX Design
- Styled-components: I used styled-components to meet the challenge requirements and also to encapsulate the styles within the components, ensuring a modular and maintainable design. It also allowed me to inject keyframe animations easily.
- Responsiveness: The application is fully responsive, with media queries and flexible layouts to ensure it looks great on both desktop and mobile devices.
- Animations: I implemented animations for the difficulty filter and recipe cards to create a more engaging user experience. The animations are subtle but add a dynamic feel to the interactions.

### Challenges Encountered
One of the challenges I faced was ensuring that the page content was styled correctly even during the initial load. To address this:

- I leveraged Next.js's built-in CSS handling and optimized the styled-components setup to prevent any flash of unstyled content (FOUC) by adding a spinner when the data is being fetched. This approach ensured a smooth and visually consistent user experience.

## ⚙️ How to run the application

1. Clone the project

```bash
  git clone https://github.com/vinicbarros/recime-recipes.git
```

2. Go to the project folder

```bash
  cd recime-recipes
```

3. Install dependencies

```bash
  npm install
```

4. Run the application :)

```bash
  npm run dev
```

5. Access by
```bash
  http://localhost:3000/
```

## 🛠️ Technologies:

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Styled-Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Eslint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
