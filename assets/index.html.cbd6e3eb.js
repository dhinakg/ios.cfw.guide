import{r as a,o as l,c as n,a as e,b as s,F as r,d as o,e as t}from"./app.3a4f04d6.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const d={},u=e("p",null,`This will take you through installing the iOS 15 "tvOS profile" to block updates on your device. It's easy to install and ensures you'll stay on the firmware you're currently on. This is useful if you're waiting for a jailbreak for a lower version and don't want to update in case it gets patched.`,-1),p=e("h2",{id:"installing-the-tvos-profile",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-the-tvos-profile","aria-hidden":"true"},"#"),o(" Installing the tvOS profile")],-1),h=o("Open "),f={href:"https://cydia.ichitaso.com/no-ota15.mobileconfig",target:"_blank",rel:"noopener noreferrer"},g=o("cydia.ichitaso.com/no-ota15.mobileconfig"),m=o(" in your device's browser"),_=t("<li>Select &quot;Allow&quot; if prompted</li><li>Open the Settings application</li><li>Navigate to <code>General</code> -&gt; <code>Profile</code><ul><li>This may also be called <code>Profile and Device Management</code></li></ul></li><li>Tap on the tvOS Beta Profile you just installed</li><li>Tap &quot;Install&quot;</li><li>Confirm by tapping &quot;Install&quot; again <ul><li>Enter your passcode if you have one</li></ul></li><li>Tap &quot;Install&quot; for a third time</li><li>Restart your device when prompted</li>",8),y=t('<p>Your device should no longer receive software updates. You can confirm this by going to <code>Settings &gt; General &gt; Software Update</code>, and if it shows that &quot;iOS is up to date&quot;, you are successfully blocking updates.</p><h2 id="uninstalling-the-tvos-profile" tabindex="-1"><a class="header-anchor" href="#uninstalling-the-tvos-profile" aria-hidden="true">#</a> Uninstalling the tvOS Profile</h2><p>If you want to update your system again, follow the following steps to remove update blocking.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>By removing update blocking, you may unintentionally update to a higher firmware, and be unable to jailbreak.</p></div><ol><li>Open the Settings application</li><li>Go to <code>General</code> -&gt; <code>Profile</code></li></ol><ul><li>This may also be called <code>Profile and Device Management</code></li></ul><ol start="3"><li>Tap on the tvOS Beta Profile</li><li>Tap &quot;Remove Downloaded Profile&quot;</li></ol><p>Your device should now be able to update again.</p>',8);function v(b,w){const i=a("OutboundLink");return l(),n(r,null,[u,p,e("ol",null,[e("li",null,[h,e("a",f,[g,s(i)]),m]),_]),y],64)}var q=c(d,[["render",v]]);export{q as default};
