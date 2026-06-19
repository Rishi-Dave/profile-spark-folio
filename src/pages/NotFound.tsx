const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="max-w-md">
        <p className="font-mono text-step-4 font-medium text-signal tnum">404</p>
        <p className="mt-2 font-serif text-step-2">This page isn&rsquo;t in the spec sheet.</p>
        <a
          href="/"
          className="mt-5 inline-block font-mono text-step--1 text-foreground/80 underline decoration-border underline-offset-4 transition-colors hover:text-signal hover:decoration-signal"
        >
          ← Return home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
