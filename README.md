# REST Countries API with Color Theme Switcher

![Design preview for the REST Countries API with color theme switcher coding challenge](./design/desktop-preview.jpg)

## 🌍 About The Project

This is a complete, responsive Single Page Application (SPA) built with React and TypeScript that integrates with the [REST Countries API](https://restcountries.com) to pull country data and display it like a modern directory. 

### 🚀 Key Features

* **Complete SPA Experience**: Seamless navigation between the catalog and individual country details without browser reloads.
* **Premium UX with Skeletons**: Integrated animated Skeleton Screens (`react-loading-skeleton`) that adapt to light and dark themes, eliminating jarring loading states.
* **Smart Search & Debouncing**: Custom `useDebounce` hook implemented to prevent unnecessary API calls and ensure a silky-smooth search experience.
* **Global Theme Switcher**: A robust Dark/Light mode toggle that applies CSS Variables across the entire app.
* **Global State Management**: React Context API (`CountryContext` and `ThemeContext`) used to avoid prop drilling and cache data globally, allowing instant rendering when returning to the home page.
* **Clean Architecture**: Network logic and `fetch` calls are isolated into a dedicated `services/api.ts` layer.
* **Responsive Design**: Mobile-first workflow ensuring the UI looks perfect on all screen sizes.
* **Custom 404 Page**: Catches invalid routes and guides users back to safety.

## 🧠 What I Learned & Practiced

This project was a massive leap from writing "just working code" to writing **Enterprise-level Architecture**:

1. **TypeScript Mastery**: Strictly typed everything from React Props (`Interface`) to Context types and API responses. No `any` types allowed!
2. **State & Context API**: Defeated "Prop Drilling". Learned how to cache data globally so that components re-render instantly without making redundant network requests.
3. **Advanced Hooks**: Created a custom `useDebounce` hook. Mastered the intricacies of `useEffect`, `setTimeout`, and cleanup functions to optimize performance.
4. **SCSS Modules**: Encapsulated styling using CSS modules, completely eliminating global class name collisions (CSS-spaghetti) and ensuring scalable design.
5. **Clean Architecture (DRY & SOLID)**: 
   - Moved the Header into a global `<Layout>` wrapper using React Router's `<Outlet>`.
   - Extracted all API logic (`fetch`, `try/catch`, error handling) into a dedicated service file.
6. **Programmatic UI Rendering**: Learned how to generate skeleton loaders using `Array.from()` before real data arrives.

## 🛠 Built With

* [React](https://reactjs.org/) (Vite)
* [TypeScript](https://www.typescriptlang.org/)
* [React Router](https://reactrouter.com/) (Routing & Layouts)
* [SCSS Modules](https://sass-lang.com/) (Styling)
* [React Loading Skeleton](https://www.npmjs.com/package/react-loading-skeleton) (UI states)

## 🔗 Live Demo
*(The link to the live deployment will be added here!)*
