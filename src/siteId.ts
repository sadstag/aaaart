import { notFound } from "@tanstack/react-router";
import { type Brand, make } from "ts-brand";

export type SiteId = Brand<string, "SiteId">;
export const SiteId = make<SiteId>();

const siteId = findSiteId();

export function getSiteId(): SiteId | undefined {
	return siteId;
}

/**
 * To be used in a route that is only valid for subdomains, in the beforeLoad function
 */
export function ensureSiteIdForRoute() {
	if (typeof getSiteId() === "undefined") {
		throw notFound();
	}
}

/**
 * Get siteId in a context where it should be defined, throw an Error otherwise
 */
export function getDefinedSiteId(): SiteId {
	if (typeof siteId === "undefined") {
		// dev error
		throw Error(
			"SiteId is not defined, but the context suggested it should be defined",
		);
	}
	return siteId;
}

function findSiteId(): SiteId | undefined {
	const {
		location: { hostname },
	} = window;
	const domainName = import.meta.env.VITE_DOMAIN_NAME;
	if (hostname === "localhost") {
		console.log(
			"SiteId detection for localhost returns undefined\n" +
				"To test site specific client add entries to /etc/hosts:\n" +
				"127.0.0.1 (your domain name)\n" +
				"127.0.0.1 (siteId1).(your domain name)\n" +
				"127.0.0.1 (siteId2).(your domain name)",
		);
		return undefined;
	}
	if (!hostname.endsWith(domainName)) {
		console.log(
			"SiteId detection failed ! hostname '" +
				hostname +
				" 'does not ends with domain name from env '" +
				domainName +
				"'",
		);
		return undefined;
	}
	const subdomainWithTerminalDot = hostname.substring(
		0,
		hostname.length - domainName.length,
	);
	if (subdomainWithTerminalDot === "") {
		// no subdomain found
		return undefined;
	}
	return SiteId(
		subdomainWithTerminalDot.substring(0, subdomainWithTerminalDot.length - 1),
	);
}
