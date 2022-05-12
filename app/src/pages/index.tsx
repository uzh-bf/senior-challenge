import { JOBS } from '../data'

// HINT: Story 1: the following might be helpful when working with API routes
// useSWR hooks: https://github.com/vercel/swr
// fetch: https://javascript.info/fetch

// HINT: Story 5: the following might be helpful when working with images
// next/image: https://nextjs.org/docs/basic-features/image-optimization

// HINT: Story 6: these example hooks might be useful as a foundation for the filtering mechanism
// const [maxPercent, setMaxPercent] = useState(100)
// const [filteredJobs, setFilteredJobs] = useState<Job[]>([])
// useEffect(() => {
//   const filteredData = data?.filter((job) => job.percent <= maxPercent)
//   if (filteredData) {
//     setFilteredJobs(filteredData)
//   }
// }, [data, maxPercent])

function Index() {
  return (
    // HINT: the following line showcases styling using TailwindCSS (see https://tailwindcss.com/)
    <div className="max-w-sm p-4 m-auto mt-4 font-bold border rounded shadow">
      {JOBS[1].title}
    </div>
  )
}

export default Index
