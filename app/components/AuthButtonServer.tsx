import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { AuthButtonClient } from './AuthButtonClient';

export const dynamic = 'force-dynamic';

export const AuthButtonServer = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return <AuthButtonClient session={session} />;
};
