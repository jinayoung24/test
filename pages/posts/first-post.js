import Link from 'next/link';

export default function FirstPost() {
    return (
      <>
        <h1><div>My cat daram!</div>
        <img src="/profile.jpg" alt="Your Name" />
    
    </h1>
    <h2>
      <Link href="/">Back to home</Link>
    </h2>
    </>
    );
  }
 