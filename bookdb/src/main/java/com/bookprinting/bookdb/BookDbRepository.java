package com.bookprinting.bookdb;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BookDbRepository extends JpaRepository<Book, Long> {

}
