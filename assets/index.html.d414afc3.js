import{r,o as s,c as l,a as e,b as t,w as a,F as d,d as o,e as c}from"./app.3a4f04d6.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const h={},p=e("h2",{id:"notes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),o(" Notes")],-1),_=o("If you are on iOS 15, you will need to follow "),f={href:"https://gist.github.com/nyuszika7h/aac55c97f7925cddcf5ec3167f85dfe8",target:"_blank",rel:"noopener noreferrer"},g=o("this"),b=o(" guide instead. Note that if you are on iOS 15 and are on an A12+ device, you will not be able to downgrade, as there is currently no jailbreak or exploits which can be used to set nonce on A12+ devices running iOS 15."),m=e("h2",{id:"requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),o(" Requirements")],-1),y=e("ul",null,[e("li",null,"Blobs saved for the version you want to restore to"),e("li",null,"A jailbroken device")],-1),w=e("h2",{id:"downloads",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),o(" Downloads")],-1),k=o("The latest release of "),v={href:"https://github.com/CoocooFroggy/FutureRestore-GUI/releases",target:"_blank",rel:"noopener noreferrer"},x=o("FutureRestore-GUI"),F=o("The iPSW file for your device from "),O={href:"https://ipsw.me",target:"_blank",rel:"noopener noreferrer"},S=o("ipsw.me"),C=e("ul",null,[e("li",null,"This should be the same iOS version as your blob")],-1),N=o("On Windows, make sure you have "),T={href:"https://www.apple.com/itunes/",target:"_blank",rel:"noopener noreferrer"},D=o("iTunes"),I=o(" installed "),R=e("ul",null,[e("li",null,"Scroll down and select the other Windows build as the Windows Store version will not work")],-1),W=e("h2",{id:"getting-started",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),o(" Getting Started")],-1),j=e("li",null,"Open your package manager on your jailbroken iDevice",-1),A=o("Add "),B={href:"https://repo.1conan.com",target:"_blank",rel:"noopener noreferrer"},G=o("repo.1conan.com"),P=o(" to your sources"),E=e("li",null,"Download and install dimentio",-1),U=e("li",null,"Download and install NewTerm2",-1),V=c('<h2 id="setting-nonce" tabindex="-1"><a class="header-anchor" href="#setting-nonce" aria-hidden="true">#</a> Setting nonce</h2><ol><li><p>Open your blob in a text editor and search for <code>generator</code><img src="https://user-images.githubusercontent.com/48022799/117004373-aa0b6700-acee-11eb-8a70-c488163e349b.jpeg" alt="GeneratorExample"></p></li><li><p>Note down the value inside the <code>&lt;string&gt;</code> field</p><ul><li>This should be a <code>0x</code> followed 16 characters which will be a combination of letters and numbers. This is your generator.</li></ul></li></ol><p><strong>NOTE:</strong> If there is no generator value, try to remember which jailbreak you were using at the time of saving blobs. If you were using unc0ver, your generator is most likely <code>0x1111111111111111</code>, and if you were using Chimera/Odyssey/Taurine, your generator is most likely <code>0xbd34a880be0b53f3</code></p><ol start="3"><li><p>Open NewTerm 2 on your iDevice and type the following command, where <code>[generator]</code> is the value you just grabbed: <code>su root -c &#39;dimentio [generator]&#39;</code></p></li><li><p>When asked for a password, enter your root password</p><ul><li>By default, this is set to <code>alpine</code>, not your phone&#39;s password.</li></ul></li><li><p>Once the command executes, a lot of text should appear</p></li><li><p>Near the end of the text, you should see the line <code>Set nonce to [generator]</code></p></li></ol><h3 id="on-computer" tabindex="-1"><a class="header-anchor" href="#on-computer" aria-hidden="true">#</a> On Computer</h3><ol><li><p>Connect your iDevice to your computer</p></li><li><p>Make sure that your computer is trusted by your device</p><ul><li>Optionally, you can create a full backup of your device through iTunes or Finder</li></ul></li><li><p>Open FutureRestoreGUI on your computer</p><ul><li>If prompted by Windows Defender or other anti-virus software, allow the program to run - it\u2019s safe</li></ul></li><li><p>When opening FutureRestoreGUI, you should be greeted by this menu: <img src="https://user-images.githubusercontent.com/48022799/147845013-73dbda5b-500d-4f5a-ae51-3751d9268fe6.png" alt="image"></p></li><li><p>Click the <code>Download FutureRestore</code> button to fetch the latest version of FutureRestore ** Note:** For A14 and WiFi only-iPad users, you will need to click the <code>Settings</code> button and press <code>Futurerestore beta</code>, then click the <code>Download FutureRestore</code> button.</p></li><li><p>Click the <code>Select Blob File...</code> button and select your blob .shsh2 file</p></li><li><p>Click the <code>Select Target iPSW File...</code> and select your .ipsw file</p></li><li><p>Then click the Next button to navigate to the Options menu, make sure <code>Extra Logs</code> is enabled</p></li><li><p>If you are not downgrading, then it is safe to enable <code>Preserve Data</code> in the options menu in order to keep data. However using it while downgrading may be dangerous</p></li><li><p>Do not enable <code>AP Nonce Collision</code> on any modern devices</p></li><li><p>Click Next to navigate to the controls menu</p></li><li><p>Click <code>Start Futurerestore</code></p></li></ol>',6),q=o("If you experience any issues during the Process, look in the "),L=o("FutureRestore help page"),z=o(", if you still can't find a solution, ask in the #futurerestore-help channel on the r/jailbreak "),H={href:"https://discord.gg/9apvC4C3CC",target:"_blank",rel:"noopener noreferrer"},M=o("Discord Server"),J=o(".");function K(Q,X){const n=r("OutboundLink"),i=r("router-link");return s(),l(d,null,[p,e("p",null,[_,e("a",f,[g,t(n)]),b]),m,y,w,e("ul",null,[e("li",null,[k,e("a",v,[x,t(n)])]),e("li",null,[F,e("a",O,[S,t(n)]),C]),e("li",null,[N,e("a",T,[D,t(n)]),I,R])]),W,e("ol",null,[j,e("li",null,[A,e("a",B,[G,t(n)]),P]),E,U]),V,e("p",null,[q,t(i,{to:"/futurerestore-help"},{default:a(()=>[L]),_:1}),z,e("a",H,[M,t(n)]),J])],64)}var $=u(h,[["render",K]]);export{$ as default};
