# 🎬 Studio Ghibli Array Methods Project

This project demonstrates the use of **JavaScript array methods** (`forEach`, `map`, `sort`, `filter`, and `reduce`) by fetching movie data from the **Studio Ghibli API** and manipulating it in different ways.

---

## 🚀 Features
- Fetches Studio Ghibli movies using the [Studio Ghibli API](https://ghibliapi.vercel.app/).
- Allows you to:
  - **Add Movie** → Fetch and display a random Ghibli movie with its Rotten Tomatoes score.  
  - **Double Score** → Doubles the score of all movies using `map`.  
  - **Show Only Masterpieces** → Filters movies with a score above 90 using `filter`.  
  - **Sort by Highest Score** → Sorts movies in descending order by score using `sort`.  
  - **Calculate Average Score** → Uses `reduce` to calculate and display the average Rotten Tomatoes score.  

---

## 🛠️ Array Methods Explained
This project uses the following JavaScript array methods:

### forEach
Executes a function for each array element.  
**Example:** Displaying each movie and its score in the DOM.  
```js
movies.forEach(movie => {
  const element = document.createElement('div');
  element.classList.add('movie');
  element.innerHTML = `<strong>${movie.title}</strong> ${movie.rt_score}`;
  main.appendChild(element);
});


