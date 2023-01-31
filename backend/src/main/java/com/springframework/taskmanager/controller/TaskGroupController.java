package com.springframework.taskmanager.controller;

import com.springframework.taskmanager.models.Task;
import com.springframework.taskmanager.models.TaskGroup;
import com.springframework.taskmanager.repositories.TaskGroupRepository;
import com.springframework.taskmanager.repositories.TaskRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping(value = "/taskGroups",produces = "application/json")
@CrossOrigin("*")
public class TaskGroupController {

    private final TaskGroupRepository taskGroupRepository;
    private final TaskRepository taskRepository;


    public TaskGroupController(TaskGroupRepository taskGroupRepository, TaskRepository taskRepository) {
        this.taskGroupRepository = taskGroupRepository;
        this.taskRepository = taskRepository;
    }

    @GetMapping
    public List<TaskGroup> getAllGroups(){
        return taskGroupRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<TaskGroup> taskGroup(@PathVariable Long id){
        return taskGroupRepository.findById(id);
    }


    @PostMapping
    public TaskGroup addTaskGroup(@RequestBody TaskGroup taskGroup){
        return taskGroupRepository.save(taskGroup);
    }

    /* Handle Tasks for TaskGroup*/
    @GetMapping("/{id}/tasks")
    public Set<Task> getTasks(@PathVariable Long id){
        return taskGroupRepository.findById(id).get().getTasks();
    }

    @PostMapping("/{id}/tasks")
    public TaskGroup addNewTask(@PathVariable Long id,@RequestBody Task task){
        TaskGroup taskGroup = taskGroupRepository.findById(id).get();
        task.setTaskgroup(taskGroup);
        taskGroup.getTasks().add(task);
        taskRepository.save(task);

        return taskGroupRepository.save(taskGroup);
    }
    @DeleteMapping("/{id}/tasks/{tId}")
    public void deleteTaskById(@PathVariable Long tId){
        taskRepository.deleteById(tId);
    }
/* End Of Handling Tasks for TaskGroup*/
    @DeleteMapping
    public void deleteAllTaskGroups(){
        this.taskGroupRepository.deleteAll();
    }

    @DeleteMapping("/{id}")
    public void deleteTAskGroupById(@PathVariable Long id){
        taskGroupRepository.deleteById(id);
    }
    @PutMapping("/{id}")
    public TaskGroup updateTaskGroup(@PathVariable Long id,@RequestBody TaskGroup taskGroup){
        taskGroup.setId(id);
        return taskGroupRepository.save(taskGroup);
    }

    
}
