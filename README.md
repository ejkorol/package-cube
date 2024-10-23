# Canvas with Package

Staged with [theatrejs](https://www.theatrejs.com/)

## Running locally

```bash
$ git clone <repo> && cd <repo>
$ npm i
$ npm run dev
```

## Stack

> Correct versions of dependencies must be installed for compatability

### react-three

```bash
$ npm i three @types/three @react-three/drei @react-three/fiber @react-three/postprocessing
```

### theatrejs

```bash
$ npm i @theatre/core@^0.5.1
$ npm i @theatre/r3f@^0.6.2
$ npm i @theatre/studio@^0.5.1
```

## Structure

- `src/vlt-canvas.tsx` Canvas containing the model
- `src/vlt-geometry.tsx` The model
- `src/app.tsx` Root layout with the hero section

- `public/models/vlt-packages.glb` The glb model
- `public/scene/demo.theatre-project-state.json` The theatrejs animation
