package com.springframework.taskmanager.controller;

import com.springframework.taskmanager.models.Task;
import com.springframework.taskmanager.repositories.TaskGroupRepository;
import com.springframework.taskmanager.repositories.TaskRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tasks")
@CrossOrigin("*")
public class TaskController {

    private final TaskRepository taskRepository;

    public TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @DeleteMapping("/{id}")
    public void deleteTaskById(@PathVariable Long id){
        taskRepository.deleteById(id);
    }
    @PutMapping("/{id}")
    public Task UpdateTask(@PathVariable Long id, @RequestBody Task task){
        task.setId(id);
        task.setTaskgroup(taskRepository.findById(id).get().getTaskgroup());
        return taskRepository.save(task);
    }
}
