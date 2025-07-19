import GitHubCalendar from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface GitHubContributionsProps {
  username: string;
}

const GitHubContributions = ({ username }: GitHubContributionsProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full mt-8">
      <div className="p-1 bg-white dark:bg-[#101010] rounded-lg overflow-x-auto">
        <GitHubCalendar 
          username={username} 
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          colorScheme={resolvedTheme as 'light' | 'dark'}
        />
      </div>
    </div>
  );
};

export default GitHubContributions; 