# Homepage — what to add next

This checklist matches the current home layout (`Hero` → `AboutTeaser` → `FeaturedProjects`) and typical portfolio goals.

## High priority

1. **Skills / tech stack**  
   Short section: keywords recruiters scan (e.g. React, TypeScript, Node.js, PostgreSQL, Git, Docker).  
   Keep it scannable (chips, columns, or a simple list).

2. **Closing CTA**  
   One line after featured projects (e.g. “Want to work together?”) plus links to **Contact** and/or GitHub/LinkedIn.

3. **Wire hero “Contact Me”**  
   Use navigation to the real contact flow: `Link` to `/contact` (or `mailto:` as a temporary stand-in).  
   Add a **Contact** route + page when ready.

4. **Featured projects — real links**  
   Replace placeholder `href="#"` GitHub URLs with real repo/demo links.  
   Optional: “View all projects →” linking to `/projects`.

## Structure and quality

5. **`<main>` landmark**  
   Wrap home content in `<main>` inside `HomePage` (single main per page for accessibility).

6. **Global base styles** (if not done)  
   `body { margin: 0; }`, font stack, optional CSS variables — imported once from `main.tsx`.

## Optional / when ready

7. **Blog teaser**  
   If the nav includes Blog, add 1–3 recent post titles linking to `/blog` once the blog exists; otherwise consider hiding Blog in the nav until there is content.

8. **Resume**  
   Link to a PDF (header, footer, or CTA) for job applications.

9. **SEO**  
   Page title and meta description for `/` (e.g. React Helmet or `index.html` + per-route updates later).

## Already in good shape

- Hero (intro + primary actions)  
- About teaser + “Read more → About”  
- Featured projects grid  
- Header / footer (via `App.tsx`)
