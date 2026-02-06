# CP-react-debugging
Bug 1 le filtre par note ne fonctionnait pas en regardant dans React Developer Tools j’ai vu que MovieList recevait une prop nommée searchRate alors qu il attendait SearchRate donc la valeur n’arrivait pas au composant j’ai corrigé le nom de la prop dans App et le filtre a fonctionné
Bug 2 au démarrage aucun film ne s’affichait et le filtre ne marchait pas dans React Developer Tools j’ai vu que SearchRate était undefined dans le state d App donc le state n’était pas initialisé j’ai mis une valeur par défaut avec useState(1) et tout est redevenu normal
React Developer Tools m’a aidé à voir les props et le state et à trouver des bugs invisibles et après correction l’application fonctionne correctement

