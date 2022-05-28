import { Layout } from '../components/Layout'
import { supabase } from '../utils/supabase'
import { NextPage } from 'next'
import { LogoutIcon } from '@heroicons/react/solid'

const Dashboard: NextPage = () => {
  const signOut = () => {
    supabase.auth.signOut()
  }
  return (
    <Layout title="Dachboard">
      <LogoutIcon
        className="mb-6 h-6 w-6 cursor-pointer text-blue-500"
        onClick={signOut}
      />
    </Layout>
  )
}

export default Dashboard
