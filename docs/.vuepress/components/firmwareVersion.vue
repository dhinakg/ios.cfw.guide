<template>
  <h2 v-html="infoHeader"/>
  <p>
    <div v-html="verStr.format({ verNum: frontmatter.build.version })"/>
    <div v-html="buildStr.format({ buildId: frontmatter.build.build })"/>
    <div v-if="getReleasedDate != -1" v-html="releasedStr.format({releasedTime: getReleasedDate})"/>
  </p>

  <h2 v-if="jailbreakArr.length > 0" v-html="jailbreaksHeader"/>
  <ul>
    <li v-for="(jb, index) in jailbreakArr" :key="jb" :id="`liJb-${jb.name.replace(/ /g, '-')}`" style="list-style-type: none;" class="showOnHover">
      <input type="checkbox" :id="`toggleListJb-${jb.name.replace(/ /g, '-')}`">
      <i class="fas fa-chevron-right chevron chevronPoint clickToHide"/>
      <i class="fas fa-chevron-down chevron chevronPoint clickToShow displayNone"/>
      <a v-html="jb.name" :href="`${jailbreakPath}${jb.name}.html`"/>
      
      <template v-if="jbDevArr[index].length > 0">
        <div class="hoverElement" style="display: inline;">
          <i class="fas fa-circle ml-" style="font-size: 0.3rem; opacity: 0.5; vertical-align: middle; margin-left: 2em; margin-right: 2em;"/>
          <label :for="`toggleListJb-${jb.name.replace(/ /g, '-')}`"><a style="cursor: pointer;" :id="`toggleShowJb-${jb.name.replace(/ /g, '-')}`" v-html="showDevStr" v-on:click="toggleShowJb(jb.name.replace(/ /g, '-'))"/></label>
        </div>
        <div class="custom-container tip clickToShow">
          <p>
            <ul>
              <li class="showOnHover" style="list-style-type: disc" v-for="d in jbDevArr[index]" :key="d">
                <a :href="d.url" v-html="d.name"/>
              </li>
            </ul>
          </p>
        </div>
      </template>
    </li>
  </ul>

  <h2 v-if="devGroupArr.length > 0" v-html="devicesHeader"/>
  <ul :style="(devGroupArr.filter(x=>x.devices.length > 1).length > 0) ? 'list-style-type: none' : ''">
    <li v-for="g in devGroupArr" :key="g" :id="`liDev-${g.name.replace(/ /g, '-')}`" class="showOnHover">
      <template v-if="devGroupArr.filter(x=>x.devices.length > 1).length > 0">
        <input type="checkbox" :id="`toggleListDev-${g.name.replace(/ /g, '-')}`">
        <i class="clickToHide fas fa-chevron-right chevron chevronPoint"/>
        <i class="clickToShow fas fa-chevron-down chevron chevronPoint"/>
      </template>

      <a :href="g.url" v-html="g.name"/>

      <template v-if="g.devices.length > 1">
        <div class="hoverElement" style="display: inline;">
          <i class="fas fa-circle ml-" style="font-size: 0.3rem; opacity: 0.5; vertical-align: middle; margin-left: 2em; margin-right: 2em;"/>
          <label :for="`toggleListDev-${g.name.replace(/ /g, '-')}`"><a style="cursor: pointer;" :id="`toggleShowDev-${g.name.replace(/ /g, '-')}`" v-html="showMoreStr" v-on:click="toggleShowDev(g.name.replace(/ /g, '-'))"/></label>
        </div>
        <div class="custom-container tip clickToShow">
          <p>
            <ul>
              <li class="showOnHover" style="list-style-type: disc" v-for="d in g.devices" :key="d">
                <a :href="d.url" v-html="d.name"/>
                <a v-if="d.ipsw != 'none' && d.ipsw" class="hoverElement" :href="d.ipsw">
                  <i class="fas fa-download chevron" style="margin-left: 0.8em; margin-right: 0.5em;"/>
                  <span style="font-weight: 500;" v-html="downloadStr"/>
                </a>
              </li>
            </ul>
          </p>
        </div>
      </template>
      <template v-else>
        <span v-if="g.devices[0].ipsw != 'none' && g.devices[0].ipsw" class="hoverElement">
          <i class="fas fa-circle ml-" style="font-size: 0.3rem; opacity: 0.5; vertical-align: middle; margin-left: 2em; margin-right: 2em;"/>
          <a :href="g.devices[0].ipsw">
            <i class="fas fa-download" style="margin-right: 0.5em;"></i>
            <span style="font-weight: 500;">{{ downloadStr }}</span>
          </a>
        </span>
      </template>
    </li>
  </ul>
</template>

<script>
import { usePageFrontmatter } from '@vuepress/client'
import json from '@temp/main'

String.prototype.format = function(vars) {
  let temp = this;
  for (let item in vars)
    temp = temp.replace("${" + item + "}", vars[item]);
  return temp
}

export default {
  data() {
    return {
      devicePath: '/chart/device/',
      jailbreakPath: '/chart/jailbreak/',
      timeLocale: 'en-US',

      infoHeader: 'Info',
      verStr: 'Version: ${verNum}',
      buildStr: 'Build: ${buildId}',
      releasedStr: 'Released: ${releasedTime}',

      devicesHeader: 'Devices',
      showMoreStr: 'Show More',
      showLessStr: 'Show Less',
      downloadStr: 'Download IPSW',

      jailbreaksHeader: 'Jailbreaks',
      showDevStr: 'Show Devices',
      hideDevStr: 'Hide Devices',
      
      frontmatter: usePageFrontmatter(),
    }
  },
  methods: {
    toggleShowDev: function (id, event) {
      var liID = `liDev-${id}`
      var liClassList = document.getElementById(liID).classList
      if (liClassList.contains('showOnHover')) liClassList.remove('showOnHover')
      else liClassList.add('showOnHover')
      document.getElementById(liID).classList = liClassList

      var toggleID = `toggleShowDev-${id}`
      var toggleInner = document.getElementById(toggleID).innerHTML
      if (toggleInner == this.showMoreStr) toggleInner = this.showLessStr
      else toggleInner = this.showMoreStr
      document.getElementById(toggleID).innerHTML = toggleInner
    },
    toggleShowJb: function (id, event) {
      var liID = `liJb-${id}`
      var liClassList = document.getElementById(liID).classList
      if (liClassList.contains('showOnHover')) liClassList.remove('showOnHover')
      else liClassList.add('showOnHover')
      document.getElementById(liID).classList = liClassList

      var toggleID = `toggleShowJb-${id}`
      var toggleInner = document.getElementById(toggleID).innerHTML
      if (toggleInner == this.showDevStr) toggleInner = this.hideDevStr
      else toggleInner = this.showDevStr
      document.getElementById(toggleID).innerHTML = toggleInner
    },
  },
  computed: {
    currentBuild() {
      return this.frontmatter.build
    },
    getReleasedDate() {
      if (!this.currentBuild.hasOwnProperty('released')) return -1
      return new Intl.DateTimeFormat(this.timeLocale, { dateStyle: 'full'}).format(new Date(this.currentBuild.released))
    },
    devArr() {
      var devArr = []
      for (var i in this.currentBuild.devices) {
        devArr.push({
          name: json.device[i].name,
          group: json.groups.filter(g => g.devices.includes(i))[0],
          identifier: i,
          url: this.devicePath + i,
          ipsw: this.currentBuild.devices[i].ipsw
        })
      }
      return devArr
    },
    devGroupArr() {
      const deviceArr = this.devArr
      const path = this.devicePath
      const deviceList = json.device
      const ipswList = this.currentBuild.devices

      var groupArr = []
      for (const i in deviceArr) if (!groupArr.includes(deviceArr[i].group)) groupArr.push(deviceArr[i].group)
      
      groupArr = groupArr.map(function(g) {
        const devices = g.devices.map(function(d) {
          var ipsw
          try { ipsw = ipswList[d].ipsw } catch { ipsw = -1; }
          
          return {
            name: deviceList[d].name,
            url: `${path + d.replace(/ /g, '-')}`,
            ipsw: ipsw,
          }
        }).sort(function(a, b) { return (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : 0; });

        var type = g.type
        if (g.hasOwnProperty('subtype')) type += ' ' + g.subtype
        
        return {
          name: g.name,
          url: `${path + g.name.replace(/ /g, '-')}`,
          devices: devices,
          type: type,
        }
      })

      groupArr = groupArr.sort(function(a,b) {
        if (a.type.startsWith('iPhone') < b.type.startsWith('iPhone')) return 1;
        if (a.type < b.type)
          return -1;
        if (a.type > b.type)
          return 1;
        return 0;
      })

      return groupArr;
    },
    jailbreakArr() {
      const build = this.currentBuild.uniqueBuild
      return json.jailbreak.filter(function(jb) {
        for (var c in jb.compatibility) {
          if (jb.compatibility[c].firmwares.includes(build))
            return 1
        }
        return 0
      })
    },
    jbDevArr() {
      const jailbreakArr = this.jailbreakArr
      const devArr = this.devArr
      const build = this.currentBuild.uniqueBuild
      var retArr = []
      for (var jb in jailbreakArr) {
        var compat = jailbreakArr[jb].compatibility
        var retDevArr = []
        for (var c in compat) {
          if (!compat[c].firmwares.includes(build)) continue
          for (var d in compat[c].devices) {
            var device = compat[c].devices[d]
            if (devArr.includes(device)) continue
            if (!Object.keys(this.currentBuild.devices).includes(device)) continue
            device = devArr.filter(d => d.identifier == device)[0]
            retDevArr.push(device)
          }
        }
        retArr.push(retDevArr)
      }
      return retArr
    },
  }
}
</script>

<style>
.chevronPoint { 
  float: left;
  margin-left: -1.5em;
}

.chevron {
  padding-right: 0.23em;
  margin-top: 0.8em;
  font-size: 0.7em;
}

.showOnHover .hoverElement {
  opacity: 0;
  display: none !important;
}

.displayNone {
  display: none !important;
}

.showOnHover:hover .hoverElement {
  opacity: 0.3;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 100ms;
  display: inline !important;
}

.hoverElement:hover {
  opacity: 1 !important;
  display: inline !important;
}

input[type=checkbox]{
  position: absolute;
  left: -9999px;
  opacity: 0;
}

.clickToShow { display: none !important; }
.clickToHide { display: block !important; }
.clickToHideInline { display: inline !important; }
input:checked ~ .clickToHide { display: none !important; }
input:checked ~ .clickToShow { display: block !important; }
input:checked ~ .clickToShowInline { display: inline !important; }
</style>