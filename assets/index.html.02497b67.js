import{r as a,o as l,c as d,a as o,b as t,w as i,F as c,d as e,e as r}from"./app.3a4f04d6.js";import{_ as u}from"./sideloadly_win.6263388d.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const p={},_=e("unc0ver is a "),m=e("semi-untethered jailbreak"),f=e(", meaning it requires a app to re-apply the exploit after a reboot."),v=o("p",null,"The tool is capable of jailbreaking nearly every iOS device on firmware version 11.0 up to 14.8, however, for our purposes, it will be used to jailbreak devices in which no easier option is available.",-1),g=e("Due to how semi-untethered jailbreaks work, the app will need to be "),b=e("re-signed"),w=e(" once every 7 days."),y=o("p",null,"We will use Sideloadly to install the unc0ver jailbreak application to your iOS device for use in the next step.",-1),k={class:"custom-container tip"},T=o("p",{class:"custom-container-title"},"TIP",-1),I=e("If you are looking for the guide on how to use unc0ver on A12+ devices on firmware versions 14.4 to 14.5.1, continue to "),A=e("Installing unc0ver (Fugu14)"),S={class:"custom-container warning"},x=o("p",{class:"custom-container-title"},"WARNING",-1),j=e("If you are already jailbroken with another jailbreak, make sure to properly "),D=e("remove it"),O=e(" before proceeding."),q=r('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>unc0ver on firmware versions 14.6 to 14.8 only supports A12 and A13 iPhone&#39;s.</p></div><h2 id="downloads" tabindex="-1"><a class="header-anchor" href="#downloads" aria-hidden="true">#</a> Downloads</h2><div class="custom-container tip" id="ifJailbreaksAppSigned"><p> unc0ver is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer. </p></div>',3),N=e("The 5.3.1 version of "),P={href:"https://unc0ver.dev/downloads/5.3.1/72004596b31ba3eae886ac6cc781725879d3b7a4/unc0ver_5.3.1.ipa",target:"_blank",rel:"noopener noreferrer"},R=e("unc0ver"),W=e("Users on firmware versions 12.4.9 - 12.5.4, 13.5.1 - 14.3 should download the 6.1.1 version of "),G={href:"https://unc0ver.dev/downloads/6.1.1/decf7c36cc08118dc83ba455f8ca42e0e3cf354c/unc0ver_Release_6.1.1.ipa",target:"_blank",rel:"noopener noreferrer"},C=e("unc0ver"),F=e(" instead"),M=e("Users on firmware version 12.5.5 or using A12 or A13 iPhone's on 14.6 to 14.8 should download the latest version of "),V={href:"https://unc0ver.dev",target:"_blank",rel:"noopener noreferrer"},Y=e("unc0ver"),B=e(" instead"),E=e("The latest version of "),J={href:"https://sideloadly.io/",target:"_blank",rel:"noopener noreferrer"},U=e("Sideloadly"),L=e("The latest version of "),K={href:"https://www.apple.com/itunes/download/win32",target:"_blank",rel:"noopener noreferrer"},z=e("iTunes"),H=e(" if on Windows"),Q=r('<p><img src="'+u+'" alt="A screenshot of the Sideloadly application (Windows)"></p><h2 id="installing-the-application" tabindex="-1"><a class="header-anchor" href="#installing-the-application" aria-hidden="true">#</a> Installing the application</h2><ol><li>Open Sideloadly</li><li>Plug your iOS device into your computer <ul><li>Make sure your computer is trusted and allowed to view the contents of your device</li></ul></li><li>Drag and drop the unc0ver <code>.ipa</code> file into Sideloadly</li><li>Enter in your Apple ID</li><li>Enter in your password <ul><li>Sideloadly must make a request to it&#39;s servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.</li></ul></li></ol><p>The app will now install to your iOS device.</p><h2 id="trusting-the-application" tabindex="-1"><a class="header-anchor" href="#trusting-the-application" aria-hidden="true">#</a> Trusting the application</h2><ol><li>Go to <code>Settings</code> -&gt; <code>General</code> -&gt; <code>Device Management</code> -&gt; <code>&lt;Your Apple ID&gt;</code><ul><li>Depending on your usage, <code>Device Management</code> may be labeled <code>Profiles and Device Management</code></li></ul></li><li>Tap <code>Trust &quot;&lt;Your Apple ID&gt;&quot;</code></li></ol><p>The unc0ver application can now be opened from home screen.</p><h2 id="running-unc0ver" tabindex="-1"><a class="header-anchor" href="#running-unc0ver" aria-hidden="true">#</a> Running unc0ver</h2><ol><li>Reboot your phone <ul><li>This is not necessary but recommended</li></ul></li><li>Open the unc0ver application from your home screen immediately afterwards <ul><li>If unc0ver warns you that the app has been tampered with, reinstall unc0ver via Sideloadly</li></ul></li><li>Open the settings menu and disable the <code>Disable Auto Updates</code> toggle <ul><li>unc0ver disables Over-The-Air updates by default, however it&#39;s recommended to toggle this as it can cause issues when updating manually if not disabled</li></ul></li><li>Tap &quot;Done&quot;</li><li>Tap &quot;Jailbreak&quot;</li><li>Reboot your phone when prompted</li><li>Open the unc0ver application from your home screen immediately after rebooting</li><li>Tap &quot;Jailbreak&quot;</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the app or your device crashes/restarts unexpectedly and the jailbreak isn&#39;t installed, simply try rebooting and running the exploit again until it does work.</p></div>',10),X={class:"custom-container warning"},Z=o("p",{class:"custom-container-title"},"WARNING",-1),$=e("If you receive the error "),ee=o("code",null,"rootFS already mounted, delete the OTA update",-1),oe=e(", read the "),te=e("Troubleshooting"),ne=e(" page"),ie=e("You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install "),se=e("tweaks"),ae=e(", themes and more."),re={class:"custom-container tip"},le=o("p",{class:"custom-container-title"},"TIP",-1),de=e("If you wish to use a more modern package manager, continue to "),ce=e("Installing Sileo");function ue(he,pe){const n=a("router-link"),s=a("OutboundLink");return l(),d(c,null,[o("p",null,[_,t(n,{to:"/types-of-jailbreak/#semi-untethered-jailbreaks"},{default:i(()=>[m]),_:1}),f]),v,o("p",null,[g,t(n,{to:"/resigning-apps"},{default:i(()=>[b]),_:1}),w]),y,o("div",k,[T,o("p",null,[I,t(n,{to:"/installing-unc0ver-fugu14"},{default:i(()=>[A]),_:1})])]),o("div",S,[x,o("p",null,[j,t(n,{to:"/restoring-rootfs"},{default:i(()=>[D]),_:1}),O])]),q,o("ul",null,[o("li",null,[N,o("a",P,[R,t(s)]),o("ul",null,[o("li",null,[W,o("a",G,[C,t(s)]),F]),o("li",null,[M,o("a",V,[Y,t(s)]),B])])]),o("li",null,[E,o("a",J,[U,t(s)])]),o("li",null,[L,o("a",K,[z,t(s)]),H])]),Q,o("div",X,[Z,o("p",null,[$,ee,oe,t(n,{to:"/troubleshooting/#rootfs-already-mounted"},{default:i(()=>[te]),_:1}),ne])]),o("p",null,[ie,t(n,{to:"/faq/#what-are-tweaks"},{default:i(()=>[se]),_:1}),ae]),o("div",re,[le,o("p",null,[de,t(n,{to:"/installing-sileo"},{default:i(()=>[ce]),_:1})])])],64)}var ve=h(p,[["render",ue]]);export{ve as default};
