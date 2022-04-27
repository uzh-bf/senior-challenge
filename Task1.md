# Challenge Part 1: Web Development

## Requirements

- [Git](https://git-scm.com/)
- [Node.js 16+](https://nodejs.org/en/)
- Any IDE capable of working with TypeScript (e.g., [Visual Studio Code](https://code.visualstudio.com/))
- In VSCode: `TailwindCSS IntelliSense` for a highly improved developer experience

## Preparations

After installing the above requirements, change into the project directory (`app/`) in a terminal window (e.g., within `Visual Studio Code`). From within this terminal, you can run the following key commands:

- To install dependencies, run `npm install` to install all dependencies, or `npm install XYZ` to install package `XYZ`.
- To run your application in development mode with automatic refresh, run `npm run dev`. Then open your browser on `http://localhost:3000` and start coding.
- To check your code for potential issues, run `npm run lint`.
- To build your application, run `npm run build`. Do this regularly, as any issues in the build will prevent you from fulfilling user story \#4 (deployment).

## Potential Useful Resources

- https://reactjs.org/
- https://nextjs.org/docs/getting-started
- https://tailwindcss.com/
- https://swr.vercel.app/
- https://react-query.tanstack.com/

## Requirements, Constraints, and Ideas

Your application must satisfy the following basic constraints:

- :exclamation: It must be based on the Next.js/React framework we provide and use TailwindCSS for styling.
- :exclamation: It must get all of the data from the network endpoints using an appropriate data fetching approach.
- :exclamation: It must satisfy the acceptance criteria of required user stories, plus the criteria of one of the bonus stories. Any further work beside these criteria is optional.
- :bulb: Regarding styling of the application, you are free to do whatever you want or think is most appropriate. Thinking about responsiveness or user experience from the beginning is a welcome addition.
- :bulb: You may use any additional libraries of your choosing (e.g., for interactivity).

## User Stories

The application you develop should be based on the requirements defined in this file. It must implement all required user stories as well as two of the additional stories.

- [ ] \#0 **Preparations (required)**

  1. Install all of the requirements as described above
  2. Clone the repository to your own machine
  3. Run `npm install` and start development mode with `npm run dev`

- [ ] \#1 **Job Overview (required)**

  - **Description**
    - As a visitor, I would like to see an overview of jobs that is populated with the latest available postings, and I would like to have each job's key information visible at a glance.
  - **Acceptance Criteria**
    - The index page provides an overview of all jobs available in the job database (`data.ts`).
    - The list of jobs is fetched directly from the corresponding provided API endpoint `/api/jobs` (e.g., using a library like `useSWR` or `React Query`).
    - For each job, at least the `title` and `company` are shown.
    - Loading and error states are handled appropriately to ensure a nice user experience.

- [ ] \#2 **Job Details (required)**

  - **Description**
    - As a visitor, I would like to have a page dedicated to each job, so that I can view the details of a job in isolation.
  - **Acceptance Criteria**
    - The job details page at `/jobs/[id]` showcases the details (including `description`) of each job posting.
    - The job details are fetched directly from the corresponding provided API endpoint `/api/jobs/[id]` (e.g., using a library like `useSWR` or `React Query`).
    - Loading and error states are handled appropriately to ensure a nice user experience.
    - Hint: The corresponding API endpoint (e.g., `/api/jobs/[id]`) always returns the first job in the database. Ensure that it returns the one that was requested with the `[id]` parameter.

- [ ] \#3 **Routing (required)**

  - **Description**
    - As a visitor, I would like to have a means of switching between the job overview and the corresponding details (and back).
  - **Acceptance Criteria**
    - Jobs from the job overview link directly to their corresponding details page.
    - The job details page offers a means of returning to the job overview.

- [ ] \#4 **Deployment (required)**

  - **Description**
    - As a developer, I would like to have the possibility of viewing and sharing the current development state of the platform at any time.
  - **Acceptance Criteria**
    - The application is deployed to `vercel.com`.
    - Hint: You can use `npx vercel` to upload your application to the platform, or set-up the Github integration if you have a public repository.

- [ ] \#5 **Company Logos (bonus)**

  - **Description**
    - As a company posting jobs, I would like to place my logo beside my company name, so that I am more recognizable to interested parties.
  - **Acceptance Criteria**
    - The data structure for jobs (e.g., `data.ts`) is extended with a `logoURL` including examples for existing jobs.
    - The job overview and job details pages fetch and display the newly available logo as an image.
    - The images are embedded using `next/image` to ensure proper performance.

- [ ] \#6 **Filtering (bonus)**

  - **Description**
    - As a visitor, I would like to be able to filter jobs with respect to a maximum employment percentage, so that I only see what is relevant to me.
  - **Acceptance Criteria**
    - The job overview page includes a means of filtering jobs by their maximum employment percentage (e.g., a Dropdown or number input).
    - The filtering is performed on the client so that the jobs are immediately updated on changing the filtering parameter.
    - When the filter is set to 100% (or another initial state), all of the jobs are shown.
    - Hint: Check out the example hooks in `index.tsx`, as they might be helpful when incorporating the filtering interaction.
