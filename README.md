This is a learning project created with the help of AI tools in Visual Studio Code. Some bugs are intentionally left in the source code so I can practice debugging and fixing issues.

**Learning Journal – Day 1**

Today I worked on a small React project called **Simple Notes App**. The app allows users to add notes, search notes, and delete notes.

While reading the code, I found a problem with the delete function. The application was deleting notes using the **title** of the note. This caused an issue when two notes had the same title, because deleting one note would remove both of them.

To fix this, I added a unique **id** to each note when it is created. Then I updated the delete function to remove a note using its **id** instead of the title. I also changed the React `key` from the title to the note id so React can track each note correctly.

After making these changes, the application can now delete the correct note even when multiple notes have the same title.

Today I learned how important unique identifiers are when working with lists in React, and how they help manage state and rendering more reliably.