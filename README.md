### Projektjournal

### Fcz Jersey Customizer

## Inofmieren

## Ziel

Unser Ziel ist es eine Webapplikation in NextJs zu machen, welche mit Hilfe von React Hooks unsere Daten speichert. Unsere Applikation soll die Möglichkeit bieten ein Fcz Trikot zu
personalisieren mit verschiedenen Auswahlmöglichkeiten.

Im Bbc habe ich schonmal mit React Hooks gearbeitet, darum war es nicht etwas ganz neues für mich aber wir mussten trotzdem uns noch über den Gebrauch von useState() etc. informieren.



## Planen

# ToDo

1. Willkommenseite machen
2. Weiterleitung zu Hauptseite
3. Auf Hauptseite Felder hinzufügen
4. Model erstellen um Werte zu speichern
5. Funktion um Werte zurückzugeben schreiben
6. Auf return Seite Werte ausgeben

## Aufteilung

Erson kümmert sich mehrheitlich um das Design das die Felder etc. schön aussehen und Yannick kümmert sich um die Funktionalitäten mit den React Hooks und der Return page.

## Entscheiden

Wir benutzen NextJs als unser WebFramework und werden ohne Datenbank, dafür mit React-Hooks arbeiten. Wir werden mit Github arbeiten, da wir somit die Arbeit perfekt aufteilen können ôhne uns in den Weg zu kommen.

## Realisieren

# Willkommensseite:

Auf der Willkommensseite gibt es eigentlich nicht viel zu sehen, ausser das wir ein bisschen mit designs herumprobierten und uns dann für ein Hintergrund von der Zürcher Südkurve entschieden haben. Dazu gibt es noch einen Titel und darunter einen Knopf auf dem 'Personalisieren' steht, der zu der personalize-Seite weiterleitet. 

# Hauptseite 

Auf der Hauptseite gibt es einen Titel und darunter die verschiedenen Inputfelder. Mit einem Model haben wir diesen Feldern Werte zugewiesen und eine onChange Funktion geschrieben,
welche die Eingabe der Inputfelder den Variabeln aus dem Model zuweist. Dafür haben wir die useState() Funktion verwendet. Durch diese kann man die Werte ganz einfach anzeigen lassen.
Da wir auch Inputfelder haben, welche eine Auswahl von Antworten bereitstellt, haben wir ein MUI Autocomplete component verwendet. 




First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
