import { getCurrentUser } from "@/lib/session"
export default async function Home() {
  const user = await getCurrentUser()
  return (
    <div>
      <h1>{JSON.stringify(user)}</h1>
    </div>
  )
}
