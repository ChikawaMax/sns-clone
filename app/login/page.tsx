import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import GithubButton from '../components/GithubButton';

export const dynamic = 'force-dynamic';

const Login = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect('/');
  }

  return (
    <div className="flex min-h-screen justify-center items-center">
      <GithubButton />
    </div>
  );
};

export default Login;
