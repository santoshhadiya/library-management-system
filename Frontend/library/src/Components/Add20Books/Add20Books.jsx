import React, { useEffect } from 'react'

const Add20Books = () => {

   useEffect(() => {
    const newBooks = [
      {
          b_id: 1201,
          b_name: "The Invisible Man",
          b_author: "H.G. Wells",
          b_price: 280,
          b_quantity: 15,
          b_img: "https://covers.openlibrary.org/b/id/1-L.jpg",
          b_desc: "A man discovers how to become invisible, leading to a descent into madness and crime."
      },
      {
          b_id: 1202,
          b_name: "Journey to the Center of the Earth",
          b_author: "Jules Verne",
          b_price: 350,
          b_quantity: 18,
          b_img: "https://covers.openlibrary.org/b/id/2-L.jpg",
          b_desc: "A scientific expedition travels to the Earth's core and discovers strange and unknown creatures."
      },
      {
          b_id: 1203,
          b_name: "The War of the Worlds",
          b_author: "H.G. Wells",
          b_price: 310,
          b_quantity: 20,
          b_img: "https://covers.openlibrary.org/b/id/3-L.jpg",
          b_desc: "Martians invade Earth, and humanity fights for survival against advanced alien technology."
      },
      {
          b_id: 1204,
          b_name: "The Time Machine",
          b_author: "H.G. Wells",
          b_price: 330,
          b_quantity: 10,
          b_img: "https://covers.openlibrary.org/b/id/4-L.jpg",
          b_desc: "A scientist invents a time machine and travels to the distant future, encountering strange civilizations."
      },
      {
          b_id: 1205,
          b_name: "Treasure Island",
          b_author: "Robert Louis Stevenson",
          b_price: 320,
          b_quantity: 25,
          b_img: "https://covers.openlibrary.org/b/id/5-L.jpg",
          b_desc: "A young boy embarks on an adventure to find treasure buried on a mysterious island."
      },
      {
          b_id: 1206,
          b_name: "Dr. Jekyll and Mr. Hyde",
          b_author: "Robert Louis Stevenson",
          b_price: 270,
          b_quantity: 22,
          b_img: "https://covers.openlibrary.org/b/id/6-L.jpg",
          b_desc: "A scientist's experiment goes wrong, and he transforms into a monstrous version of himself."
      },
      {
          b_id: 1207,
          b_name: "The Picture of Dorian Gray",
          b_author: "Oscar Wilde",
          b_price: 350,
          b_quantity: 18,
          b_img: "https://covers.openlibrary.org/b/id/7-L.jpg",
          b_desc: "A man remains youthful while his portrait ages, revealing the consequences of his hedonistic lifestyle."
      },
      {
          b_id: 1208,
          b_name: "The Call of the Wild",
          b_author: "Jack London",
          b_price: 300,
          b_quantity: 10,
          b_img: "https://covers.openlibrary.org/b/id/8-L.jpg",
          b_desc: "A dog returns to the wild and discovers the harsh realities of survival."
      },
      {
          b_id: 1209,
          b_name: "The Jungle Book",
          b_author: "Rudyard Kipling",
          b_price: 280,
          b_quantity: 12,
          b_img: "https://covers.openlibrary.org/b/id/9-L.jpg",
          b_desc: "A young boy named Mowgli is raised by wolves in the jungle and learns valuable lessons about life."
      },
      {
          b_id: 1210,
          b_name: "The Adventures of Tom Sawyer",
          b_author: "Mark Twain",
          b_price: 270,
          b_quantity: 15,
          b_img: "https://covers.openlibrary.org/b/id/10-L.jpg",
          b_desc: "The mischievous adventures of a young boy, Tom, growing up along the Mississippi River."
      },
      {
          b_id: 1211,
          b_name: "The Adventures of Huckleberry Finn",
          b_author: "Mark Twain",
          b_price: 330,
          b_quantity: 20,
          b_img: "https://covers.openlibrary.org/b/id/11-L.jpg",
          b_desc: "Huck Finn embarks on an adventure down the Mississippi River, discovering freedom and friendship."
      },
      {
          b_id: 1212,
          b_name: "The Scarlet Letter",
          b_author: "Nathaniel Hawthorne",
          b_price: 310,
          b_quantity: 18,
          b_img: "https://covers.openlibrary.org/b/id/12-L.jpg",
          b_desc: "A woman in Puritan New England must wear a scarlet letter to signify her sin of adultery."
      },
      {
          b_id: 1213,
          b_name: "Frankenstein",
          b_author: "Mary Shelley",
          b_price: 340,
          b_quantity: 22,
          b_img: "https://covers.openlibrary.org/b/id/13-L.jpg",
          b_desc: "A scientist creates a monster, and the consequences of playing God unfold."
      },
      {
          b_id: 1214,
          b_name: "Wuthering Heights",
          b_author: "Emily Brontë",
          b_price: 380,
          b_quantity: 15,
          b_img: "https://covers.openlibrary.org/b/id/14-L.jpg",
          b_desc: "A passionate tale of love, betrayal, and revenge set on the Yorkshire moors."
      },
      {
          b_id: 1215,
          b_name: "The Great Gatsby",
          b_author: "F. Scott Fitzgerald",
          b_price: 350,
          b_quantity: 20,
          b_img: "https://covers.openlibrary.org/b/id/15-L.jpg",
          b_desc: "The story of Jay Gatsby's tragic pursuit of wealth and love in the Roaring Twenties."
      },
      {
          b_id: 1216,
          b_name: "Pride and Prejudice",
          b_author: "Jane Austen",
          b_price: 280,
          b_quantity: 18,
          b_img: "https://covers.openlibrary.org/b/id/16-L.jpg",
          b_desc: "A classic romance about the relationship between Elizabeth Bennet and Mr. Darcy."
      },
      {
          b_id: 1217,
          b_name: "War and Peace",
          b_author: "Leo Tolstoy",
          b_price: 450,
          b_quantity: 12,
          b_img: "https://covers.openlibrary.org/b/id/17-L.jpg",
          b_desc: "A sweeping epic about Russian society during the Napoleonic Wars."
      },
      {
          b_id: 1218,
          b_name: "Crime and Punishment",
          b_author: "Fyodor Dostoevsky",
          b_price: 330,
          b_quantity: 14,
          b_img: "https://covers.openlibrary.org/b/id/18-L.jpg",
          b_desc: "A young man struggles with guilt and morality after committing a murder."
      },
      {
          b_id: 1219,
          b_name: "Don Quixote",
          b_author: "Miguel de Cervantes",
          b_price: 400,
          b_quantity: 15,
          b_img: "https://covers.openlibrary.org/b/id/19-L.jpg",
          b_desc: "The story of an old knight's delusional quest to revive chivalry."
      },
      {
          b_id: 1220,
          b_name: "Moby-Dick",
          b_author: "Herman Melville",
          b_price: 390,
          b_quantity: 12,
          b_img: "https://covers.openlibrary.org/b/id/20-L.jpg",
          b_desc: "A sailor embarks on a quest to track down the legendary white whale."
      },
      {
          b_id: 1221,
          b_name: "The Odyssey",
          b_author: "Homer",
          b_price: 320,
          b_quantity: 18,
          b_img: "https://covers.openlibrary.org/b/id/21-L.jpg",
          b_desc: "The epic tale of Odysseus' journey home from the Trojan War."
      },
      {
          b_id: 1222,
          b_name: "The Catcher in the Rye",
          b_author: "J.D. Salinger",
          b_price: 270,
          b_quantity: 20,
          b_img: "https://covers.openlibrary.org/b/id/22-L.jpg",
          b_desc: "A disillusioned teenager struggles with the pressures of adulthood."
      },
      {
          b_id: 1223,
          b_name: "The Brothers Karamazov",
          b_author: "Fyodor Dostoevsky",
          b_price: 450,
          b_quantity: 10,
          b_img: "https://covers.openlibrary.org/b/id/23-L.jpg",
          b_desc: "A philosophical novel about faith, doubt, and morality among three brothers."
      },
      {
          b_id: 1224,
          b_name: "Anna Karenina",
          b_author: "Leo Tolstoy",
          b_price: 380,
          b_quantity: 15,
          b_img: "https://covers.openlibrary.org/b/id/24-L.jpg",
          b_desc: "A tragic love story set in Russian high society."
      },
      {
          b_id: 1225,
          b_name: "The Brothers Grimm Fairy Tales",
          b_author: "Jacob and Wilhelm Grimm",
          b_price: 250,
          b_quantity: 25,
          b_img: "https://covers.openlibrary.org/b/id/25-L.jpg",
          b_desc: "A collection of classic fairy tales by the famous German brothers."
      },
      {
          b_id: 1226,
          b_name: "Les Misérables",
          b_author: "Victor Hugo",
          b_price: 400,
          b_quantity: 18,
          b_img: "https://covers.openlibrary.org/b/id/26-L.jpg",
          b_desc: "A story of redemption set during the French Revolution, focusing on Jean Valjean."
      },
      {
          b_id: 1227,
          b_name: "The Divine Comedy",
          b_author: "Dante Alighieri",
          b_price: 370,
          b_quantity: 12,
          b_img: "https://covers.openlibrary.org/b/id/27-L.jpg",
          b_desc: "A journey through Hell, Purgatory, and Heaven, exploring divine justice."
      },
      {
          b_id: 1228,
          b_name: "Ulysses",
          b_author: "James Joyce",
          b_price: 450,
          b_quantity: 10,
          b_img: "https://covers.openlibrary.org/b/id/28-L.jpg",
          b_desc: "A modernist novel that explores the inner thoughts of its characters in Dublin."
      },
      {
          b_id: 1229,
          b_name: "The Iliad",
          b_author: "Homer",
          b_price: 320,
          b_quantity: 18,
          b_img: "https://covers.openlibrary.org/b/id/29-L.jpg",
          b_desc: "An epic tale of the Trojan War and the wrath of Achilles."
      },
      {
          b_id: 120,
          b_name: "Satya Na Prayogo Athva Atmakatha",
          b_author: "Mohandas Karamchand Gandhi",
          b_price: 320,
          b_quantity: 8,
          b_img: "https://rukminim2.flixcart.com/image/832/832/kqpj4i80/regionalbooks/h/e/h/satya-na-prayogo-athva-atmakatha-original-imag4nvkwrbfhqpy.jpeg?q=70&crop=false",
          b_desc: "The book covers Gandhi's life from his early childhood to 1921, including his childhood, education, experiences in South Africa, and his work for political awakening."
      }
  ];
  
      let books = [];
      try {
        const storedBooks = localStorage.getItem("react_books");
        books = storedBooks ? JSON.parse(storedBooks) : [];
      } catch (error) {
        console.error("Invalid JSON in Local Storage:", error);
        books = [];
      }
  
      const updatedBooks = books.concat(newBooks);
  
      localStorage.setItem("react_books", JSON.stringify(updatedBooks));
      console.log(books);
    }, []);

  return (
    <div>Add20Books</div>
  )
}

export default Add20Books