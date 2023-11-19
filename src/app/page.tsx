import Modal from "@/components/modal"
import { getCurrentUser } from "@/lib/session"
export default async function Home() {
  const user = await getCurrentUser()
  return (
    <div>
      <Modal/>
      <h1>{JSON.stringify(user)}</h1>
    </div>
  )
}
