# learning-nextjs-course

- Jamstack Architecture
- next/link
- dynamic Routes using `[param]`
- SSG, SSR, Static Page
    - Static site generation (SSG) suited for data that doesn't change
    - Server-side Rendering (SSR): server statically sends HTML files, browser downloads JS, browser executes react, hydrates (HTML content rendered)
        - used when data gets updated or when using static content 
        - getServerSideProps
    - Static Page: used for static content or has no user input 
        - getStaticProps