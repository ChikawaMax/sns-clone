'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';

const handleSignIn = async () => {
  const supabase = createClientComponentClient<Database>();
  await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: { redirectTo: `${location.origin}/auth/callback` },
  });
};

const GithubButton = () => {
  return (
    <button className="hover:bg-gray-700 p-8 rounded-md" onClick={handleSignIn}>
      <Image
        src={'/github-mark-white.png'}
        alt="github icon"
        width={100}
        height={100}
      />
    </button>
  );
};

export default GithubButton;
