This is a learning project created with the help of AI tools in Visual Studio Code. Some bugs are intentionally left in the source code so I can practice debugging and fixing issues.

**Learning Journal – Day 1**

Today I worked on a small React project called **Simple Notes App**. The app allows users to add notes, search notes, and delete notes.

While reading the code, I found a problem with the delete function. The application was deleting notes using the **title** of the note. This caused an issue when two notes had the same title, because deleting one note would remove both of them.

To fix this, I added a unique **id** to each note when it is created. Then I updated the delete function to remove a note using its **id** instead of the title. I also changed the React `key` from the title to the note id so React can track each note correctly.

After making these changes, the application can now delete the correct note even when multiple notes have the same title.

Today I learned how important unique identifiers are when working with lists in React, and how they help manage state and rendering more reliably.

---

### Learning Journal – Day 2

Today I continued working on my Simple Notes App and improved the code.

I learned that even when the app works correctly, the code can still be written better. I updated the way state is handled by using the previous state to avoid problems when React updates multiple times.

I also added input validation. If the user only enters spaces, the note will not be created. In addition, I disabled the “Add Note” button when the input is not valid.

I also updated the delete function to use the same state update approach, which makes the code more stable.

Today I understood that writing code is not just about making it work, but also making it clear, safe, and easy to use.