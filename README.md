# React Native Intermediate – Plantly App

Welcome to the **React Native Intermediate** course project. This repo contains the **Plantly** app, a hands‑on learning project built with **Expo**, **React Native**, and **expo-router**. The goal of the course is to move beyond basics and build a real, polished app with state management, deep linking, asset handling, forms, and native builds.

## Course overview
This course focuses on intermediate mobile development skills, including:

- Modern Expo + React Native workflows
- File‑based routing with `expo-router`
- State management with Zustand + persisted storage
- Form handling and validation
- Image picking, local file persistence, and previews
- Reusable UI components (buttons, cards, images)
- Android native builds using `expo prebuild` and Gradle
- Deep linking with custom schemes
- Custom Development build

## he Plantly app
**Plantly** is a simple plant‑care tracker. It lets you add plants, set watering schedules, add images, and view plant details.

### What it does
- Add a plant with a name, watering frequency, and optional photo
- View a list of plants with summary details
- Open a plant details screen (with image, last watered date, etc.)
- Water or delete a plant
- Persistent storage so your plants are saved across app restarts
- Onboarding flow before you can access tabs

### Main screens
- **Onboarding** – first‑time entry point
- **Home** – list of plants
- **Plant Details** – view and manage a specific plant
- **New Plant** – add a new plant
- **Profile** – simple profile tab

## Tech stack
- **Expo SDK 54**
- **React Native**
- **expo-router** for navigation
- **Zustand** + AsyncStorage for persistence
- **expo-image-picker** for photos
- **expo-font** with Google Fonts (Caveat)

## Project structure
```
learn-mobile-app/
	app/
		(tabs)/
			(home)/
				plants/[plantId].tsx
			profile.tsx
		onboarding.tsx
		new.tsx
	components/
		PlantCard.tsx
		PlantlyButton.tsx
		PlantlyImage.tsx
	store/
		plantsStore.ts
		userStore.ts
	app.json
```

##  Running the app

### Start the dev server
```sh
npx expo start
```

### Run on Android (dev client)
```sh
npx expo run:android
```

If the Android build fails due to SDK or NDK issues, ensure:
- `JAVA_HOME` points to JDK 17
- `android/local.properties` contains your Android SDK path

## Deep linking
The app supports deep links with the `plantly` scheme:

```
plantly://plants/1
```

In a dev client, use the Expo scheme:

```
exp+learn-mobile-app://plants/1
```

## What has been built so far
- Fully working plant CRUD flow
- Image picking and display
- Persistent local storage
- Navigation with nested tabs and stacks
- Android native build setup
- Custom onboarding flow

## Next ideas to try
- Add notifications for watering reminders
- Add editing for plants
- Add filters (e.g., due today)
- Sync with cloud storage

---
