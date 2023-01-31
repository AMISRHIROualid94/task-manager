package com.springframework.taskmanager.controller;

import com.springframework.taskmanager.models.Task;
import com.springframework.taskmanager.models.TaskGroup;
import com.springframework.taskmanager.services.TaskGroupService;
import com.springframework.taskmanager.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.Set;

@RestController
@RequestMapping(value = "/taskGroups",produces = "application/json")
@CrossOrigin("*")
public class TaskGroupController {

    @Autowired
    private TaskGroupService taskGroupService;

    @Autowired
    private TaskService taskService;


    @GetMapping
    public Set<TaskGroup> getAllGroups(){
        return taskGroupService.findAll();
    }

    @GetMapping("/{id}")
    public TaskGroup taskGroup(@PathVariable Long id){
        return taskGroupService.findById(id);
    }


    @PostMapping
    public TaskGroup addTaskGroup(@RequestBody TaskGroup taskGroup){
        return taskGroupService.save(taskGroup);
    }

    /* Handle Tasks for TaskGroup*/
    @GetMapping("/{id}/tasks")
    public Set<Task> getTasks(@PathVariable Long id){
        return taskService.findAll();
    }

    @PostMapping("/{id}/tasks")
    public TaskGroup addNewTask(@PathVariable Long id,@RequestBody Task task){
        TaskGroup taskGroup = taskGroupService.findById(id);
        task.setTaskgroup(taskGroup);
        taskGroup.getTasks().add(task);
        taskService.save(task);
        return taskGroupService.save(taskGroup);
    }
    @DeleteMapping("/{id}/tasks/{tId}")
    public void deleteTaskById(@PathVariable Long tId){
        taskService.deleteById(tId);
    }
/* End Of Handling Tasks for TaskGroup*/
    @DeleteMapping
    public void deleteAllTaskGroups(){
        taskGroupService.deleteAll();
    }

    @DeleteMapping("/{id}")
    public void deleteTAskGroupById(@PathVariable Long id){
        taskGroupService.deleteById(id);
    }
    @PutMapping("/{id}")
    public TaskGroup updateTaskGroup(@PathVariable Long id,@RequestBody TaskGroup taskGroup){
        taskGroup.setId(id);
        return taskGroupService.save(taskGroup);
    }

    
}
