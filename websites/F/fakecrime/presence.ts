const presence = new Presence({
		clientId: "1228958641965498378",
	}),
	strings = presence.getStrings({
		play: "presence.playback.playing",
		pause: "presence.playback.paused",
	}),
	browsingTimestamp = Math.floor(Date.now() / 1000);
	let title: HTMLElement, search: HTMLElement;

presence.on("UpdateData", async () => {
	const presenceData: PresenceData = {
		largeImageKey: "https://github.com/yuhkix/fakecrime-assets/blob/9e2860f6dd192fd469670cd23ab0e871e02ef1ad/fakecrime2.png?raw=true",
		startTimestamp: browsingTimestamp,
	};

	/*if (document.location.pathname.search("/^(?!.*(?:shop|terms-of-service|privacy-policy|support|profile|embeds|options|miscellaneous|badges|tags|links)).*fakecrime\.bio\/[A-Za-z0-9]+(?<!\/)$/")) {
		title = document.querySelector("body > main > div.block.relative.table.size-full > div > div > div.bg-style.space-y-8 > div:nth-child(1) > div > div.flex.items-center.justify-center.flex-col.gap-6 > div.flex.justify-center.items-center.flex-col.gap-1 > h1");
		presenceData.details = "Viewing a Profile:";
		presenceData.state = title.textContent;
		presenceData.smallImageKey = document.querySelector("body > main > div.block.relative.table.size-full > div > div > div.bg-style.space-y-8 > div:nth-child(1) > div > div.flex.items-center.justify-center.flex-col.gap-6 > div.relative.-m-2 > img").getAttribute("src");
		presenceData.smallImageText = document.querySelector("body > main > div.block.relative.table.size-full > div > div > div.bg-style.space-y-8 > div:nth-child(1) > div > div.flex.items-center.justify-center.flex-col.gap-6 > div.flex.justify-center.items-center.flex-col.gap-1 > h1");
	}*/
	
	switch (document.location.pathname) {
		case "/markdown":
			presenceData.details = "Viewing Markdown";
			presenceData.largeImageText = "Fakecrime.bio";
			break;
		case "/shop":
			presenceData.details = "Browsing Shop";
			presenceData.state = "Searching For Something";
			presenceData.largeImageText = "Fakecrime.bio";
			break;
		case "/shop/invite":
			presenceData.details = "Shopping Invite";
			presenceData.state = "Selected Invite (€3.99)";
			presenceData.largeImageText = "Fakecrime.bio";
			break;
		case "/shop/premium/yearly":
			presenceData.details = "Shopping Premium";
			presenceData.state = "Selected Yearly (€5.99)";
			presenceData.largeImageText = "Fakecrime.bio";
			break;
		case "/shop/premium/lifetime":
			presenceData.details = "Shopping Premium";
			presenceData.state = "Selected Lifetime (€15.99)";
			presenceData.largeImageText = "Fakecrime.bio";
		break;
		case "/shop/badges/custom":
			presenceData.details = "Shopping Custom Badge";
			presenceData.state = "Selected Custom Badge (€15.99)";
			presenceData.largeImageText = "Fakecrime.bio";
			break;
		case "/shop/badges/donator/silver-supporter":
				presenceData.details = "Shopping Donator Badge";
				presenceData.state = "Selected Silver Supporter (€15.99)";
				presenceData.largeImageText = "Fakecrime.bio";
			break;
		case "/shop/badges/donator/gold-contributor":
				presenceData.details = "Shopping Donator Badge";
				presenceData.state = "Selected Gold Contributor (€25.99)";
				presenceData.largeImageText = "Fakecrime.bio";
			break;
		case "/shop/badges/donator/platinum-patron":
				presenceData.details = "Shopping Donator Badge";
				presenceData.state = "Selected Platinum Patron (€50.99)";
				presenceData.largeImageText = "Fakecrime.bio";
			break;
		case "/shop/badges/rich":
			presenceData.details = "Shopping Rich Badge";
			presenceData.state = "Selected Rich Badge (€100.99)";
			presenceData.largeImageText = "Fakecrime.bio";
			break;
		case "/terms-of-service":
			presenceData.details = "Viewing Terms Of Service";
			presenceData.largeImageText = "Fakecrime.bio";
			break;
		case "/privacy-policy":
			presenceData.details = "Viewing Privacy Policy";
			presenceData.largeImageText = "Fakecrime.bio";
			break;
		case "/support":
			presenceData.details = "Viewing Support";
			presenceData.largeImageText = "Fakecrime.bio";
			break;
		case "/profile":
			presenceData.details = "Editing Profile";
				presenceData.state = document.querySelector("body > main > div.flex.items-center.justify-between > a");
				presenceData.largeImageText = "Fakecrime.bio";
				presenceData.smallImageKey = document.querySelector("body > header > div > div.hidden.lg\\:block > ul > li.hidden.w-full.lg\\:flex.lg\\:w-auto > div > button > img").getAttribute("src");
				presenceData.smallImageText = document.querySelector("body > header > div > div.hidden.lg\\:block > ul > li.hidden.w-full.lg\\:flex.lg\\:w-auto > div > div > a.block.p-4.duration-300.hover\\:bg-white\\/\\[2\\%\\] > p.font-bold.text-white");
			break;
		case "/embeds":
			presenceData.details = "Editing Embeds";
				presenceData.state = document.querySelector("body > main > div.flex.items-center.justify-between > a");
				presenceData.largeImageText = "Fakecrime.bio";
				presenceData.smallImageKey = document.querySelector("body > header > div > div.hidden.lg\\:block > ul > li.hidden.w-full.lg\\:flex.lg\\:w-auto > div > button > img").getAttribute("src");
				presenceData.smallImageText = document.querySelector("body > header > div > div.hidden.lg\\:block > ul > li.hidden.w-full.lg\\:flex.lg\\:w-auto > div > div > a.block.p-4.duration-300.hover\\:bg-white\\/\\[2\\%\\] > p.font-bold.text-white");
			break;
		case "/options":
			presenceData.details = "Editing Options";
				presenceData.state = document.querySelector("body > main > div.flex.items-center.justify-between > a");
				presenceData.largeImageText = "Fakecrime.bio";
				presenceData.smallImageKey = document.querySelector("body > header > div > div.hidden.lg\\:block > ul > li.hidden.w-full.lg\\:flex.lg\\:w-auto > div > button > img").getAttribute("src");
				presenceData.smallImageText = document.querySelector("body > header > div > div.hidden.lg\\:block > ul > li.hidden.w-full.lg\\:flex.lg\\:w-auto > div > div > a.block.p-4.duration-300.hover\\:bg-white\\/\\[2\\%\\] > p.font-bold.text-white");
			break;
		case "/miscellaneous":
			presenceData.details = "Editing Miscellaneous";
				presenceData.state = document.querySelector("body > main > div.flex.items-center.justify-between > a");
				presenceData.largeImageText = "Fakecrime.bio";
				presenceData.smallImageKey = document.querySelector("body > header > div > div.hidden.lg\\:block > ul > li.hidden.w-full.lg\\:flex.lg\\:w-auto > div > button > img").getAttribute("src");
				presenceData.smallImageText = document.querySelector("body > header > div > div.hidden.lg\\:block > ul > li.hidden.w-full.lg\\:flex.lg\\:w-auto > div > div > a.block.p-4.duration-300.hover\\:bg-white\\/\\[2\\%\\] > p.font-bold.text-white");
			break;
		case "/badges":
			presenceData.details = "Viewing Badge Requirements";
				presenceData.state = document.querySelector("body > main > div.flex.items-center.justify-between > a");
				presenceData.largeImageText = "Fakecrime.bio";
				presenceData.smallImageKey = document.querySelector("body > header > div > div.hidden.lg\\:block > ul > li.hidden.w-full.lg\\:flex.lg\\:w-auto > div > button > img").getAttribute("src");
				presenceData.smallImageText = document.querySelector("body > header > div > div.hidden.lg\\:block > ul > li.hidden.w-full.lg\\:flex.lg\\:w-auto > div > div > a.block.p-4.duration-300.hover\\:bg-white\\/\\[2\\%\\] > p.font-bold.text-white");
			break;
		case "/tags":
			presenceData.details = "Editing Tags";
				presenceData.state = document.querySelector("body > main > div.flex.items-center.justify-between > a");
				presenceData.largeImageText = "Fakecrime.bio";
				presenceData.smallImageKey = document.querySelector("body > header > div > div.hidden.lg\\:block > ul > li.hidden.w-full.lg\\:flex.lg\\:w-auto > div > button > img").getAttribute("src");
				presenceData.smallImageText = document.querySelector("body > header > div > div.hidden.lg\\:block > ul > li.hidden.w-full.lg\\:flex.lg\\:w-auto > div > div > a.block.p-4.duration-300.hover\\:bg-white\\/\\[2\\%\\] > p.font-bold.text-white");
			break;
		case "/links":
			presenceData.details = "Editing Links";
				presenceData.state = document.querySelector("body > main > div.flex.items-center.justify-between > a");
				presenceData.largeImageText = "Fakecrime.bio";
				presenceData.smallImageKey = document.querySelector("body > header > div > div.hidden.lg\\:block > ul > li.hidden.w-full.lg\\:flex.lg\\:w-auto > div > button > img").getAttribute("src");
				presenceData.smallImageText = document.querySelector("body > header > div > div.hidden.lg\\:block > ul > li.hidden.w-full.lg\\:flex.lg\\:w-auto > div > div > a.block.p-4.duration-300.hover\\:bg-white\\/\\[2\\%\\] > p.font-bold.text-white");
			break;
		default:
			presenceData.details = "Viewing Home";
			presenceData.largeImageText = "Fakecrime.bio";
			break;
	}

	presence.setActivity(presenceData);
});
