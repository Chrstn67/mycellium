"use strict";(self.webpackChunkmycelium=self.webpackChunkmycelium||[]).push([[6353],{7395:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=r(4848),t=r(8453);const i={tags:["JavaScript","React","Frontend","Responsive","React-Leaflet"]},l="React-leaflet",a={id:"Cours/Tutoriels/React/React-leaflet",title:"React-leaflet",description:"Bienvenue dans ce tutoriel qui te guidera \xe0 travers l'utilisation de Leaflet, une biblioth\xe8que JavaScript pour cr\xe9er des cartes interactives, avec React, un framework JavaScript populaire.",source:"@site/docs/Cours/Tutoriels/React/React-leaflet.md",sourceDirName:"Cours/Tutoriels/React",slug:"/Cours/Tutoriels/React/React-leaflet",permalink:"/mycelium/docs/Cours/Tutoriels/React/React-leaflet",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cours/Tutoriels/React/React-leaflet.md",tags:[{inline:!0,label:"JavaScript",permalink:"/mycelium/docs/tags/java-script"},{inline:!0,label:"React",permalink:"/mycelium/docs/tags/react"},{inline:!0,label:"Frontend",permalink:"/mycelium/docs/tags/frontend"},{inline:!0,label:"Responsive",permalink:"/mycelium/docs/tags/responsive"},{inline:!0,label:"React-Leaflet",permalink:"/mycelium/docs/tags/react-leaflet"}],version:"current",frontMatter:{tags:["JavaScript","React","Frontend","Responsive","React-Leaflet"]},sidebar:"tutorialSidebar",previous:{title:"Menu-buger",permalink:"/mycelium/docs/Cours/Tutoriels/React/Menu-burger"},next:{title:"Scroll-to-top-button",permalink:"/mycelium/docs/Cours/Tutoriels/React/Scroll-to-top-button"}},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation des d\xe9pendances",id:"installation-des-d\xe9pendances",level:2},{value:"Comprendre le code",id:"comprendre-le-code",level:2},{value:"Imports",id:"imports",level:3},{value:"Fonction principale (Composant LeafletInfos, fichier LeafletInfos.jsx)",id:"fonction-principale-composant-leafletinfos-fichier-leafletinfosjsx",level:3},{value:"\xc9tat et fonctions",id:"\xe9tat-et-fonctions",level:3},{value:"<strong><em>TIPS</em></strong> :",id:"tips-",level:4},{value:"Filtrage des marqueurs",id:"filtrage-des-marqueurs",level:3},{value:"Gestion des changements de type",id:"gestion-des-changements-de-type",level:3},{value:"Cr\xe9ation de la carte Leaflet",id:"cr\xe9ation-de-la-carte-leaflet",level:2},{value:"Fond de carte",id:"fond-de-carte",level:3},{value:"Marqueurs sur la carte",id:"marqueurs-sur-la-carte",level:3},{value:"Regroupement de marqueurs",id:"regroupement-de-marqueurs",level:3},{value:"Boucle \xe0 travers les marqueurs filtr\xe9s",id:"boucle-\xe0-travers-les-marqueurs-filtr\xe9s",level:3},{value:"Exemple de rendu :",id:"exemple-de-rendu-",level:4}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"react-leaflet",children:"React-leaflet"}),"\n",(0,s.jsx)(n.p,{children:"Bienvenue dans ce tutoriel qui te guidera \xe0 travers l'utilisation de Leaflet, une biblioth\xe8que JavaScript pour cr\xe9er des cartes interactives, avec React, un framework JavaScript populaire."}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Leaflet est une biblioth\xe8que JavaScript l\xe9g\xe8re et flexible permettant de cr\xe9er des cartes interactives. React, d'autre part, est un framework JavaScript d\xe9velopp\xe9 par Facebook pour construire des interfaces utilisateur r\xe9actives."}),"\n",(0,s.jsx)(n.h2,{id:"pr\xe9requis",children:"Pr\xe9requis"}),"\n",(0,s.jsxs)(n.p,{children:["Avant de commencer, assure-toi d'avoir ",(0,s.jsx)(n.strong,{children:"Node.js"})," et ",(0,s.jsx)(n.strong,{children:"npm"})," install\xe9s sur ton PC. Tu peux les t\xe9l\xe9charger depuis ",(0,s.jsx)(n.a,{href:"https://nodejs.org/en",children:"https://nodejs.org/en"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"installation-des-d\xe9pendances",children:"Installation des d\xe9pendances"}),"\n",(0,s.jsx)(n.p,{children:"Une fois que tu as initialis\xe9 ton projet React, installe les d\xe9pendances n\xe9cessaires pour Leaflet et d'autres packages utilis\xe9s dans cet exemple :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install react-leaflet leaflet react-leaflet-cluster\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"comprendre-le-code",children:"Comprendre le code"}),"\n",(0,s.jsx)(n.p,{children:"Nous allons explorer le code de l'exemple fourni dans ce tutoriel."}),"\n",(0,s.jsx)(n.h3,{id:"imports",children:"Imports"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import React, { useState } from "react";\r\n\r\nimport { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";\r\n\r\nimport "leaflet/dist/leaflet.css";\r\n\r\nimport { Icon } from "leaflet";\r\n\r\nimport MarkerClusterGroup from "react-leaflet-cluster";\r\n\r\nimport { iconMappings, townMarker } from "./constantes";\r\n\r\nimport "./LeafletInfos.scss";\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"React"})})," : Importe le module principal de React pour la cr\xe9ation de composants."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"useState"})})," : Hook de React pour g\xe9rer l'\xe9tat dans les composants fonctionnels."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"MapContainer, TileLayer, Marker, Popup"})})," : Composants fournis par react-leaflet pour construire la carte."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Icon"})})," : Permet de d\xe9finir des ic\xf4nes personnalis\xe9es pour les marqueurs."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"MarkerClusterGroup"})})," : Composant pour regrouper les marqueurs dans des clusters."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"leaflet/dist/leaflet.css"})})," : Fournit les styles CSS pour Leaflet."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"iconMappings, townMarker"})})," : Importe des donn\xe9es et des constantes d\xe9finies ailleurs dans le projet."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"LeafletInfos.scss"})})," : Un fichier CSS pour les styles sp\xe9cifiques \xe0 cette composante (facultatif, selon les besoin de styles voulus)."]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"fonction-principale-composant-leafletinfos-fichier-leafletinfosjsx",children:"Fonction principale (Composant LeafletInfos, fichier LeafletInfos.jsx)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const LeafletInfo = () => {\r\n  // ... (voir la suite dans le code)\r\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"LeafletInfo"})})," : C'est la fonction principale qui constitue le composant Leaflet dans notre application React."]})}),"\n",(0,s.jsx)(n.h3,{id:"\xe9tat-et-fonctions",children:"\xc9tat et fonctions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const [mapCenter, setMapCenter] = useState([48.5613977, 7.5024652]);\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"mapCenter"})})," : Stocke les coordonn\xe9es du centre initial de la carte."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h4,{id:"tips-",children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"TIPS"})})," :"]}),"\n",(0,s.jsxs)(n.p,{children:["Pour trouver les coordonn\xe9es d'un lieu, tu peux te rendre sur le site\r\n",(0,s.jsx)(n.a,{href:"https://nominatim.openstreetmap.org/ui/search.html",children:"https://nominatim.openstreetmap.org/ui/search.html"})]}),"\n",(0,s.jsx)(n.p,{children:"Il te suffit d'entrer une adresse ou un lieu dans la barre de recherche."}),"\n",(0,s.jsxs)(n.p,{children:["Sur la gauche, tu cherches le lieu qui correspond \xe0 ta recherche. Clique sur 'Details'. Tu auras un tableau qui s'ouvre. Cherche '",(0,s.jsx)(n.em,{children:"Centre Point (lat,lon)"}),"' et copie/colle dans ton code la ribambelle de chiffres qui s'y trouve. Tu auras ainsi les coordonn\xe9es du lieu que tu veux indiquer sur ta carte Leaflet."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ATTENTION"})," :"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Il peut arriver que tu ne retrouves pas un lieu. Dans ce cas, une autre solution est de te rendre sur"}),"\r\n",(0,s.jsx)(n.a,{href:"https://www.google.fr/maps",children:"https://www.google.fr/maps"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Cherche le lieu qui t'int\xe9resse. Fait un clique-droit, puis clique-gauche sur les chiffres que tu vois en haut du tableau. Cela le copie automatiquement. Tu n'as plus qu'\xe0 le coller dans ton code."})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'const [selectedType, setSelectedType] = useState("Tous");\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"selectedType"})})," : Stocke le type de marqueurs \xe0 afficher sur la carte."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const getCustomIcon = (type) => {\r\n  return new Icon(iconMappings[type] || iconMappings.H\xf4tel);\r\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"getCustomIcon"})})," : Fonction qui renvoie une ic\xf4ne personnalis\xe9e en fonction du type de marqueur. Elle utilise les iconMappings d\xe9finis dans le fichier constantes."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"TIPS :"})})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Cr\xe9e dans ton composant, un fichier ",(0,s.jsx)(n.strong,{children:"constantes.jsx."})," Ce fichier comporte deux parties :"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'export const townMarker = [\r\n  {\r\n    name: "Avolsheim",\r\n    coordinates: [48.5613977, 7.5024652],\r\n    type: "H\xf4tel",\r\n    description: "Relais du Dompeter",\r\n  },\r\n\r\n  {\r\n    name: "A\xe9roport de Strasbourg",\r\n    coordinates: [48.538870900000006, 7.625446281168612],\r\n    type: "A\xe9roport",\r\n    description: "https://www.strasbourg.aeroport.fr/",\r\n  },\r\n\r\n  // etc\r\n];\n'})}),"\n",(0,s.jsx)(n.p,{children:"Tu y renseignes :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"le nom de la ville,"}),"\n",(0,s.jsx)(n.li,{children:"les coordonn\xe9es de l'adresse,"}),"\n",(0,s.jsx)(n.li,{children:"le type qui correspond \xe0 ce qui se trouvera dans un menu d\xe9roulant (voir plus bas),"}),"\n",(0,s.jsx)(n.li,{children:"une description (facultatif)."}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'export const iconMappings = {\r\n  H\xf4tel: {\r\n    iconUrl: "https://cdn-icons-png.flaticon.com/512/675/675942.png",\r\n    iconSize: [38, 38],\r\n  },\r\n\r\n  A\xe9roport: {\r\n    iconUrl: "https://cdn-icons-png.flaticon.com/512/2169/2169353.png",\r\n    iconSize: [38, 38],\r\n  },\r\n};\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Ici, tu renseignes tes ic\xf4nes qui apparaitront sur ta carte. Rends-toi sur\r\n",(0,s.jsx)(n.a,{href:"https://www.flaticon.com/",children:"https://www.flaticon.com/"})]}),"\n",(0,s.jsx)(n.p,{children:"pour rechercher tes ic\xf4nes pr\xe9f\xe9r\xe9es."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'const typeOptions = ["Tous", ...Object.keys(iconMappings).sort()];\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"typeOptions"})})," : Un tableau d'options pour le menu d\xe9roulant de filtrage. Il inclut tous les types de marqueurs disponibles tri\xe9s par ordre alphab\xe9tique."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"filtrage-des-marqueurs",children:"Filtrage des marqueurs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'const filteredMarkers = townMarker.filter(\r\n  (marker) =>\r\n    selectedType === "Tous" ||\r\n    marker.type === selectedType ||\r\n    marker.type === "H\xf4tel"\r\n);\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"filteredMarkers"})})," : Un tableau filtr\xe9 de marqueurs en fonction du type s\xe9lectionn\xe9."]})}),"\n",(0,s.jsx)(n.h3,{id:"gestion-des-changements-de-type",children:"Gestion des changements de type"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const handleTypeChange = (e) => {\r\n  setSelectedType(e.target.value);\r\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"handleTypeChange"})})," : Fonction qui met \xe0 jour le type s\xe9lectionn\xe9 lorsqu'il y a un changement dans le menu d\xe9roulant."]})}),"\n",(0,s.jsx)(n.p,{children:"Le reste du code concerne le rendu de l'interface utilisateur en utilisant JSX, la syntaxe de balisage utilis\xe9e par React."}),"\n",(0,s.jsx)(n.h2,{id:"cr\xe9ation-de-la-carte-leaflet",children:"Cr\xe9ation de la carte Leaflet"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<MapContainer\r\n  center={mapCenter}\r\n  zoom={13}\r\n  style={{ height: "500px", width: "100%" }}\r\n>\r\n  {/* ... (voir la suite dans le code) */}\r\n</MapContainer>\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"MapContainer"})})," : Le composant principal qui cr\xe9e le conteneur de la carte. Il prend en charge des propri\xe9t\xe9s telles que center et zoom."]})}),"\n",(0,s.jsx)(n.h3,{id:"fond-de-carte",children:"Fond de carte"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<TileLayer\r\n  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\r\n  attribution=\'&copy; \r\n<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors\'\r\n/>\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"TileLayer"})})," : D\xe9finit le fond de carte en utilisant une URL de fournisseur de tuiles OpenStreetMap."]})}),"\n",(0,s.jsx)(n.h3,{id:"marqueurs-sur-la-carte",children:"Marqueurs sur la carte"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<Marker position={mapCenter} icon={getCustomIcon("H\xf4tel")}>\r\n  <Popup>Relais du Dompeter</Popup>\r\n</Marker>\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Marker"})," : Place un marqueur \xe0 la position sp\xe9cifi\xe9e avec une ic\xf4ne personnalis\xe9e."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Popup"})})," : Affiche une bo\xeete de dialogue lorsque le marqueur est cliqu\xe9."]}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"regroupement-de-marqueurs",children:"Regroupement de marqueurs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<MarkerClusterGroup>\r\n{filteredMarkers.map((city, index) => (\r\n\r\n   // ... (voir la suite dans le code)\r\n\r\n  ))}\r\n</MarkerClusterGroup>\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"MarkerClusterGroup"})})," : Regroupe les marqueurs pour \xe9viter un encombrement visuel."]})}),"\n",(0,s.jsx)(n.h3,{id:"boucle-\xe0-travers-les-marqueurs-filtr\xe9s",children:"Boucle \xe0 travers les marqueurs filtr\xe9s"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'{\r\n  filteredMarkers.map((city, index) => (\r\n    <Marker\r\n      key={index}\r\n      position={city.coordinates}\r\n      icon={getCustomIcon(city.type)}\r\n    >\r\n      <Popup>\r\n        {city.name} <br />\r\n        {city.description.startsWith("http") ? (\r\n          <a href={city.description} target="_blank" rel="noopener noreferrer">\r\n            Visiter le site\r\n          </a>\r\n        ) : (\r\n          city.description\r\n        )}\r\n      </Popup>\r\n    </Marker>\r\n  ));\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Ce morceau de code :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Utilise une boucle pour cr\xe9er des marqueurs pour chaque ville dans le tableau ",(0,s.jsx)(n.em,{children:"filteredMarkers"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Affiche une bo\xeete de dialogue (",(0,s.jsx)(n.strong,{children:"Popup"}),") avec des informations suppl\xe9mentaires sur chaque ville."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Si tu as bien suivi et seulement si tu as r\xe9ussis, je te donne le code complet :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import React, { useState } from "react";\r\nimport { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";\r\nimport "leaflet/dist/leaflet.css";\r\nimport { Icon } from "leaflet";\r\nimport MarkerClusterGroup from "react-leaflet-cluster";\r\nimport { iconMappings, townMarker } from "./constantes";\r\nimport "./LeafletInfos.scss";\r\n\r\nconst LeafletInfo = () => {\r\n  const [mapCenter, setMapCenter] = useState([48.5613977, 7.5024652]);\r\n  const [selectedType, setSelectedType] = useState("Tous");\r\n\r\n  const getCustomIcon = (type) => {\r\n    return new Icon(iconMappings[type] || iconMappings.H\xf4tel);\r\n  };\r\n\r\n  const typeOptions = ["Tous", ...Object.keys(iconMappings).sort()];\r\n\r\n  const filteredMarkers = townMarker.filter(\r\n    (marker) =>\r\n      selectedType === "Tous" ||\r\n      marker.type === selectedType ||\r\n      marker.type === "H\xf4tel"\r\n  );\r\n\r\n  const handleTypeChange = (e) => {\r\n    setSelectedType(e.target.value);\r\n  };\r\n\r\n  return (\r\n      <section className="info-carte">\r\n        <div>\r\n          <label htmlFor="filter">Filtrer par: </label>\r\n          <select id="filter" onChange={handleTypeChange} value=   {selectedType}>\r\n            {typeOptions.map((type) => (\r\n              <option key={type} value={type}>\r\n                {type}\r\n              </option>\r\n            ))}\r\n          </select>\r\n        </div>\r\n        <MapContainer\r\n          center={mapCenter}\r\n          zoom={13}\r\n          style={{ height: "500px", width: "100%" }}\r\n        >\r\n          <TileLayer\r\n            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\r\n            attribution=\'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors\'\r\n          />\r\n          <Marker position={mapCenter} icon={getCustomIcon("H\xf4tel")}>\r\n            <Popup>Relais du Dompeter</Popup>\r\n          </Marker>\r\n          <MarkerClusterGroup>\r\n            {filteredMarkers.map((city, index) => (\r\n              <Marker\r\n                key={index}\r\n                position={city.coordinates}\r\n                icon={getCustomIcon(city.type)}\r\n              >\r\n                <Popup>\r\n                  {city.name} <br />\r\n                  {city.description.startsWith("http") ? (\r\n                    <a\r\n                      href={city.description}\r\n                      target="_blank"\r\n                      rel="noopener noreferrer"\r\n                    >\r\n                      Visiter le site\r\n                    </a>\r\n                  ) : (\r\n                    city.description\r\n                  )}\r\n                </Popup>\r\n              </Marker>\r\n            ))}\r\n          </MarkerClusterGroup>\r\n        </MapContainer>\r\n      </section>\r\n    </>\r\n  );\r\n};\r\n\r\nexport default LeafletInfo;\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-de-rendu-",children:"Exemple de rendu :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tu y vois les ic\xf4nes que tu auras int\xe9gr\xe9. Les pastilles vertes sont les 'cluster' regroupant plusieurs lieux. Quand tu cliques dessus, ta carte zoomera pour avoir plus de d\xe9tails."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Rendu",src:r(6268).A+"",width:"1695",height:"595"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Quand tu cliques sur une ic\xf4ne, tu y trouveras la Popup, que tu peux styliser comme tu le souhaites plus tard."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Rendu",src:r(1100).A+"",width:"1682",height:"585"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"J'esp\xe8re que j'ai pu t'aider !!"}),"\n",(0,s.jsx)(n.p,{children:"Amuse-toi bien et j'ai h\xe2te de te partager de nouvelles astuces pour pimenter tes sites web !!"})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6268:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/rendu-leaflet-cluster-83e5fcffbded05bf7f5ca2b3833d5a53.png"},1100:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/rendu-leaflet-popup-0fa2c3089bc61eeac86e26fcce914c30.png"},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var s=r(6540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);