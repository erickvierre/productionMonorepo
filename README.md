# EBUDDY Production Monorepo

Fullstack monorepo project built using Next.js, Express.js, Firebase, TypeScript, and Turborepo.

---

# Technologies

## Frontend
- Next.js 14
- React
- Material UI (MUI)
- Redux Toolkit

## Backend
- Express.js
- Firebase Admin SDK
- Firestore

## Monorepo
- Turborepo

---

# Project Structure

```bash
ebuddy-production-monorepo/
├── apps/
│   ├── backend-repo/
│   └── frontend-repo/
│
├── packages/
│   └── shared-types/
│
├── package.json
├── turbo.json
└── README.md
```

---

# Features

- Fullstack monorepo architecture
- Express.js REST API
- Firebase Firestore integration
- Authentication middleware
- Shared TypeScript interfaces
- Material UI frontend
- Fetch user data API
- Production-ready folder structure

---

# Installation

## Clone Repository

```bash
git clone https://github.com/erickvierre/monorepoStarterProduction.git
```

Enter project folder:

```bash
cd ebuddy-production-monorepo
```

---

# Install Dependencies

## Backend

```bash
cd apps/backend-repo
npm install
```

## Frontend

```bash
cd ../frontend-repo
npm install
```

---

# Running Backend

Open terminal:

```bash
cd apps/backend-repo
npm run dev
```

Backend server:

```txt
http://localhost:5000
```

---

# Running Frontend

Open another terminal:

```bash
cd apps/frontend-repo
npm run dev
```

Frontend server:

```txt
http://localhost:3000
```

---

# API Endpoints

## Fetch User Data

```http
GET /fetch-user-data
```

Authorization header required:

```txt
Authorization: token
```

---

## Update User Data

```http
POST /update-user-data
```

Request body example:

```json
{
  "uid": "1",
  "name": "Erick",
  "age": 24
}
```

Authorization header required:

```txt
Authorization: token
```

---

# Firebase Setup

Create Firebase project:

https://console.firebase.google.com/

Enable:
- Firestore Database

Then configure Firebase Admin SDK credentials.

---

# Frontend Preview

```txt
EBUDDY FULLSTACK TEST

[ Fetch User Data ]
```

---

# Shared Types

Shared interfaces located in:

```bash
packages/shared-types
```

Example:

```ts
export interface User {
  uid: string
  name: string
  age: number
}
```

---

# Build Project

## Root Monorepo

```bash
npm install
npm run build
```

---

# Technical Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js |
| Backend | Express.js |
| Database | Firebase Firestore |
| UI | Material UI |
| Language | TypeScript |
| Monorepo | Turborepo |

---

# Notes

Project ini dikembangkan dari hasil submission sebelumnya ketika saya mengikuti EBUDDY Fullstack Technical Test.
