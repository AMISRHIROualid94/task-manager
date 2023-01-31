package com.springframework.taskmanager.controller;

import com.springframework.taskmanager.models.Task;
import com.springframework.taskmanager.repositories.TaskGroupRepository;
import com.springframework.taskmanager.repositories.TaskRepository;
import com.springframework.taskmanager.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/tasks")
@CrossOrigin("*")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public Set<Task> getTasks(){
        return taskService.findAll();
    }

    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable Long id){
        return taskService.findById(id);
    }
    @DeleteMapping("/{id}")
    public void deleteTaskById(@PathVariable Long id){
        taskService.deleteById(id);
    }
    @PatchMapping("/{id}")
    public Task UpdateTask(@PathVariable Long id, @RequestBody Task patch){
        Task task = taskService.findById(id);
        if(patch.getDescription() !=null){
            task.setDescription(patch.getDescription());
        }
        return taskService.save(task);
    }
}
