package com.springframework.taskmanager.repositories;

import com.springframework.taskmanager.models.TaskGroup;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;


public interface TaskGroupRepository extends JpaRepository<TaskGroup,Long> {


}
