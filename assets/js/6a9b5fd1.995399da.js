"use strict";(self.webpackChunkmycelium=self.webpackChunkmycelium||[]).push([[2785],{1432:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>u});var s=r(4848),a=r(8453);const t={},i="Mettre en valeur un \xe9l\xe9ment durant un certain temps",o={id:"Cours/React/Mettre-en-valeur-element-durant-un-temps-donne",title:"Mettre en valeur un \xe9l\xe9ment durant un certain temps",description:"Ce composant permet de mettre en valeur une donn\xe9e durant un temps donn\xe9.",source:"@site/docs/Cours/React/Mettre-en-valeur-element-durant-un-temps-donne.md",sourceDirName:"Cours/React",slug:"/Cours/React/Mettre-en-valeur-element-durant-un-temps-donne",permalink:"/mycelium/docs/Cours/React/Mettre-en-valeur-element-durant-un-temps-donne",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cours/React/Mettre-en-valeur-element-durant-un-temps-donne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/mycelium/docs/category/react"},next:{title:"Projets",permalink:"/mycelium/docs/category/projets"}},l={},u=[{value:"Explications",id:"explications",level:2},{value:"Importations",id:"importations",level:3},{value:"D\xe9finition du composant",id:"d\xe9finition-du-composant",level:3},{value:"Condition pour l&#39;affichage",id:"condition-pour-laffichage",level:3},{value:"Affichage des nouveaux animaux",id:"affichage-des-nouveaux-animaux",level:3},{value:"Validation des PropTypes",id:"validation-des-proptypes",level:3},{value:"Exportation du composant",id:"exportation-du-composant",level:3}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"mettre-en-valeur-un-\xe9l\xe9ment-durant-un-certain-temps",children:"Mettre en valeur un \xe9l\xe9ment durant un certain temps"}),"\n",(0,s.jsx)(n.p,{children:"Ce composant permet de mettre en valeur une donn\xe9e durant un temps donn\xe9."}),"\n",(0,s.jsxs)(n.p,{children:["Il affiche une liste d'animaux ajout\xe9s au cours des 4 derniers jours. Si aucun animal n'a \xe9t\xe9 ajout\xe9 r\xe9cemment, un message informatif est affich\xe9 \xe0 la place. Les ",(0,s.jsx)(n.em,{children:"PropTypes"})," garantissent que les donn\xe9es re\xe7ues sont bien conformes aux attentes du composant."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import PropTypes from "prop-types";\r\nimport { Link } from "react-router-dom";\r\nimport "./NewAnimal.scss";\r\n\r\nconst NewAnimal = ({ animals }) => {\r\n  const newAnimals = animals.filter((animal) => {\r\n    const dateAjoutee = new Date(animal.date_ajout);\r\n    const dateActuelle = new Date();\r\n    const uneSemaine = 4 * 24 * 60 * 60 * 1000; // 4 jours en millisecondes\r\n\r\n    return dateActuelle - dateAjoutee <= uneSemaine;\r\n  });\r\n\r\n  if (newAnimals.length === 0) {\r\n    return (\r\n      <h5>\r\n        De nouveaux animaux seront bient\xf4t mis en ligne. Contacte-nous pour\r\n        proposer tes id\xe9es !\r\n      </h5>\r\n    );\r\n  }\r\n\r\n  return (\r\n    <section className="new-animal">\r\n      <h3 className="h3-title">Nouveaux animaux</h3>\r\n      <ul>\r\n        {newAnimals.map((animal) => (\r\n          <li key={animal.nom}>\r\n            <Link to={`/animal/${encodeURIComponent(animal.nom)}`}>\r\n              <img src={animal.image_url} alt={animal.nom} />\r\n              <h3>{animal.nom}</h3>\r\n            </Link>\r\n          </li>\r\n        ))}\r\n      </ul>\r\n    </section>\r\n  );\r\n};\r\n\r\nNewAnimal.propTypes = {\r\n  animals: PropTypes.arrayOf(\r\n    PropTypes.shape({\r\n      nom: PropTypes.string.isRequired,\r\n      image_url: PropTypes.string.isRequired,\r\n      dateAjout\xe9e: PropTypes.string.isRequired,\r\n    })\r\n  ).isRequired,\r\n};\r\n\r\nexport default NewAnimal;\n'})}),"\n",(0,s.jsx)(n.h2,{id:"explications",children:"Explications"}),"\n",(0,s.jsx)(n.h3,{id:"importations",children:"Importations"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import PropTypes from "prop-types";\r\nimport { Link } from "react-router-dom";\r\nimport "./NewAnimal.scss";\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PropTypes"})," est utilis\xe9 pour valider les types de propri\xe9t\xe9s du composant."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Link"})," est utilis\xe9 pour la navigation entre les pages, fourni par ",(0,s.jsx)(n.em,{children:"react-router-dom"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Le fichier SCSS ",(0,s.jsx)(n.strong,{children:"NewAnimal.scss"})," contient les styles pour ce composant."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"d\xe9finition-du-composant",children:"D\xe9finition du composant"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const NewAnimal = ({ animals }) => {\r\n  const newAnimals = animals.filter((animal) => {\r\n    const dateAjoutee = new Date(animal.date_ajout);\r\n    const dateActuelle = new Date();\r\n    const uneSemaine = 4 * 24 * 60 * 60 * 1000; // 4 jours en millisecondes\r\n\r\n    return dateActuelle - dateAjoutee <= uneSemaine;\r\n  });\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Le composant est une fonction qui accepte une prop ",(0,s.jsx)(n.strong,{children:"animals"}),", un tableau d'objets repr\xe9sentant des animaux."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"newAnimals"})," est un tableau filtr\xe9 qui ne contient que les animaux ajout\xe9s au cours des 4 derniers jours. Cette p\xe9riode est calcul\xe9e en millisecondes."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"condition-pour-laffichage",children:"Condition pour l'affichage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"if (newAnimals.length === 0) {\r\n  return (\r\n    <h5>\r\n      De nouveaux animaux seront bient\xf4t mis en ligne. Contacte-nous pour\r\n      proposer tes id\xe9es !\r\n    </h5>\r\n  );\r\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si aucun animal n'a \xe9t\xe9 ajout\xe9 au cours des 4 derniers jours, un message informatif est affich\xe9."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"affichage-des-nouveaux-animaux",children:"Affichage des nouveaux animaux"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'  return (\r\n    <section className="new-animal">\r\n      <h3 className="h3-title">Nouveaux animaux</h3>\r\n      <ul>\r\n        {newAnimals.map((animal) => (\r\n          <li key={animal.nom}>\r\n            <Link to={`/animal/${encodeURIComponent(animal.nom)}`}>\r\n              <img src={animal.image_url} alt={animal.nom} />\r\n              <h3>{animal.nom}</h3>\r\n            </Link>\r\n          </li>\r\n        ))}\r\n      </ul>\r\n    </section>\r\n  );\r\n};\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si des animaux ont \xe9t\xe9 ajout\xe9s r\xe9cemment, une section contenant la liste de ces animaux est affich\xe9e."}),"\n",(0,s.jsxs)(n.li,{children:["Chaque animal est affich\xe9 avec un lien (",(0,s.jsx)(n.strong,{children:"Link"}),") vers une page d\xe9di\xe9e \xe0 cet animal."]}),"\n",(0,s.jsxs)(n.li,{children:["L'URL est encod\xe9e avec ",(0,s.jsx)(n.strong,{children:"encodeURIComponent"})," pour g\xe9rer les noms contenant des caract\xe8res sp\xe9ciaux."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"validation-des-proptypes",children:"Validation des PropTypes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"NewAnimal.propTypes = {\r\n  animals: PropTypes.arrayOf(\r\n    PropTypes.shape({\r\n      nom: PropTypes.string.isRequired,\r\n      image_url: PropTypes.string.isRequired,\r\n      date_ajout: PropTypes.string.isRequired,\r\n    })\r\n  ).isRequired,\r\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["La prop ",(0,s.jsx)(n.strong,{children:"animals"})," doit \xeatre un tableau d'objets avec des propri\xe9t\xe9s sp\xe9cifiques : ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"nom"})})," (cha\xeene de caract\xe8res), ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"image_url"})})," (cha\xeene de caract\xe8res) et ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"date_ajout"})})," (cha\xeene de caract\xe8res). Toutes ces propri\xe9t\xe9s sont requises (",(0,s.jsx)(n.strong,{children:"isRequired"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"exportation-du-composant",children:"Exportation du composant"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"export default NewAnimal;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Le composant ",(0,s.jsx)(n.strong,{children:"NewAnimal"})," est export\xe9 pour \xeatre utilis\xe9 dans d'autres parties de l'application."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var s=r(6540);const a={},t=s.createContext(a);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);