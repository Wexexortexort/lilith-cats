import { siteMeta } from "@/data/siteData";

export function FixedFollow() {
  return (
    <div className="hidden lg:block fixed left-[4.5%] top-0 z-10 pt-[4%] text-center w-8">
      <div className="follow">
        <ul className="m-0">
          <li className="block my-6 mx-0 w-auto">
            <a
              href={siteMeta.socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-auto fill-current"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" />
              </svg>
            </a>
          </li>
        </ul>
        <p className="font-libre tracking-[0.2em] [writing-mode:vertical-rl] mx-auto mt-6">
          FOLLOW ME
        </p>
      </div>
    </div>
  );
}
