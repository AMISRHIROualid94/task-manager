package com.springframework.taskmanager.repositories;

import com.springframework.taskmanager.models.TaskGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskGroupRepository extends JpaRepository<TaskGroup,Long> {
}
