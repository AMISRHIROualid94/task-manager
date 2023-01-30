package com.springframework.taskmanager.controller;

import com.springframework.taskmanager.models.Task;
import com.springframework.taskmanager.models.TaskGroup;
import com.springframework.taskmanager.repositories.TaskGroupRepository;
import com.springframework.taskmanager.repositories.TaskRepository;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;

@RestController
@RequestMapping("/taskGroups")
@CrossOrigin("*")
public class TaskGroupController {

    private final TaskGroupRepository taskGroupRepository;
    private  final TaskRepository taskRepository;

    public TaskGroupController(TaskGroupRepository taskGroupRepository, TaskRepository taskRepository) {
        this.taskGroupRepository = taskGroupRepository;
        this.taskRepository = taskRepository;
    }

    @GetMapping
    public List<TaskGroup> getAllGroups(){
        return taskGroupRepository.findAll();
    }

    @GetMapping("/{id}")
    public TaskGroup taskGroup(@PathVariable Long id){
        return taskGroupRepository.findById(id).get();
    }
    @PostMapping
    public TaskGroup addTaskGroup(@RequestBody TaskGroup taskGroup){
        return taskGroupRepository.save(taskGroup);
    }

    /* Handle Tasks for TaskGroup*/
    @GetMapping("{id}/tasks")
    public Set<Task> getTasks(@PathVariable Long id){
        return taskGroupRepository.findById(id).get().getTasks();
    }

    @PostMapping("/{id}/tasks")
    public TaskGroup addNewTask(@PathVariable Long id,@RequestBody Task task){
        TaskGroup taskGroup = taskGroupRepository.findById(id).get();
        taskRepository.save(task);
        taskGroup.getTasks().add(task);
        return taskGroupRepository.save(taskGroup);
    }

    @DeleteMapping("/deleteall")
    public void deleteTaskGroup(){
        this.taskGroupRepository.deleteAll();
    }

    @PutMapping("/{id}")
    public TaskGroup updateTaskGroup(@PathVariable Long id,@RequestBody TaskGroup taskGroup){
        taskGroup.setId(id);
        return taskGroupRepository.save(taskGroup);
    }

    
}
