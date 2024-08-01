import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AuthButtonClient } from '../components/AuthButtonClient';
import GithubButton from '../components/GithubButton';

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
