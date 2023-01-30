package com.springframework.taskmanager.repositories;

import com.springframework.taskmanager.models.Task;
import com.springframework.taskmanager.models.TaskGroup;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;
import java.util.SortedSet;

public interface TaskGroupRepository extends JpaRepository<TaskGroup,Long> {

    Set<Task> findAllByid(Long id);
}
