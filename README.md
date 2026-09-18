# Chapman IEEE LinkedIn Challenge

Landing page for the LinkedIn Challenge run by Chapman University's IEEE Student Branch in April 2026: a multi-week push to get students posting about their projects and clubs on LinkedIn, with gift cards for the most consistent poster and for the highest-quality posts.

The page covers the rules, how to sign up and log weekly posts, the nine participating clubs (Chapman Robotics, Computer Science Club, Data Analytics Association, Girls Who Code, Math Club, Panther Devs, Physics Club, Society of Women Engineers, and the Chapman Entrepreneurship Organization), and a FAQ.

## Stack

React 19, Vite, Tailwind CSS 3, Framer Motion for the scroll and hover animations, Lucide icons. Single page, no backend.

## Run locally

```bash
cd frontend
npm install
npm run dev
```

`npm run build` writes a static site to `frontend/dist`.

## Deploy

The site is static, so any static host works. On Vercel, import the repo and set the **Root Directory** to `frontend`; the Vite preset handles the rest.

## Related

- [chapman-ieee](https://github.com/JoshuaDowdCS/chapman-ieee): the IEEE Student Branch's main website.
