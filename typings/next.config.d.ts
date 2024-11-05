
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
declare interface configType {
	static images: {
	static remotePatterns: ({
		static protocol: string;
	} | any)[];
	};
}
