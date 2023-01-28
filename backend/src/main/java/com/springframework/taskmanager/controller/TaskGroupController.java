package com.springframework.taskmanager.controller;

import com.springframework.taskmanager.models.TaskGroup;
import com.springframework.taskmanager.repositories.TaskGroupRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("taskGroups")
@CrossOrigin("*")
public class TaskGroupController {

    private final TaskGroupRepository taskGroupRepository;

    public TaskGroupController(TaskGroupRepository taskGroupRepository) {
        this.taskGroupRepository = taskGroupRepository;
    }

    @GetMapping
    public List<TaskGroup> getAllGroups(){
        return taskGroupRepository.findAll();
    }

    @PostMapping
    public TaskGroup addTaskGroup(@RequestBody TaskGroup taskGroup){
        return taskGroupRepository.save(taskGroup);
    }

    @DeleteMapping("/{id}")
    public void deleteTaskGroup(@PathVariable Long id){
        this.taskGroupRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public TaskGroup updateTaskGroup(@PathVariable Long id,@RequestBody TaskGroup taskGroup){
        taskGroup.setId(id);
        return taskGroupRepository.save(taskGroup);
    }
}
