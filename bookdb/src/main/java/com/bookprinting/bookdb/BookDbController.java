package com.bookprinting.bookdb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class BookDbController {

    @Autowired
    private BookDbRepository repo;

    @GetMapping("/books")
    public List<Book> getAllBooks(){
        List<Book> allBooks = repo.findAll();
        if(allBooks == null) {
            throw new RuntimeException("Unable to load all book data.");
        }
        return allBooks;
    }

    @GetMapping("/books/{isbn}")
    public Book getBookByIsbn(@PathVariable Long isbn){
        Book book = repo.getById(isbn);
        if(book == null) {
            throw new RuntimeException("Book with ISBN: " + isbn + " does not exist.");
        }
        return book;
    }
}
