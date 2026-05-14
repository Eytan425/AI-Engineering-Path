# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # TimerApp

  Simple split repo for the clock-in system.

  Current structure:
  - `frontend/` for the React app
  - `backend/` for the API and database layer
  - `.github/workflows/` for CI
  - `docker-compose*.yml` for local development

  The frontend and backend each stay flat at the top level of their own folder so the project is easier to navigate while you learn.
      tseslint.configs.strictTypeChecked,
