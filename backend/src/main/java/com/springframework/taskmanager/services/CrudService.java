package com.springframework.taskmanager.services;

import java.util.List;

public interface CrudService <T,ID> {

    List<T> findAll();
    T findById(ID id);
    T save(T object);
    void deleteAll();
    void deleteById(ID id);
}
