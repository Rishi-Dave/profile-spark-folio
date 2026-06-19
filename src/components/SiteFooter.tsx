import { profile } from "@/content/profile";
import { ProfileLinks } from "./ProfileLinks";

export function SiteFooter() {
  const { identity } = profile;
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-content px-6 py-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label-mono mb-2">Get in contact</p>
            <a
              href={`mailto:${identity.contact.email}`}
              className="font-mono text-step-1 text-foreground transition-colors hover:text-signal"
            >
              {identity.contact.email}
            </a>
            <p className="mt-1 font-mono text-step--1 text-muted-foreground tnum">
              {identity.contact.phone}
            </p>
          </div>
          <ProfileLinks links={identity.profiles} />
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-step--1 text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono">{identity.name} · {identity.citizenship}</span>
          <span className="font-mono">UC Riverside · graduating {identity.gradDate}</span>
        </div>
      </div>
    </footer>
  );
}
