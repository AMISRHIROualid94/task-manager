package com.springframework.taskmanager.repositories;

import com.springframework.taskmanager.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface TaskRepository extends JpaRepository<Task,Long> {

}
